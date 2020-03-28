const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_KEY);
const PAGE_SIZE = 10;

exports.handler = async (event, ctx) => {
  const { queryStringParameters } = event;
  const pageNo = parseInt(queryStringParameters.pageNo, 10) || 0;

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY.replace(
      new RegExp('\\\\n', 'g'),
      '\n'
    ),
  });
  await doc.loadInfo();

  const feeds = [];
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

  //   calculate page offset, note that I'm counting from the end
  const rowCount = sheet.rowCount - 1;
  let limit = PAGE_SIZE;
  const totalPages = Math.ceil(rowCount / PAGE_SIZE);
  let offset = rowCount - (pageNo + 1) * PAGE_SIZE;
  const remainder = rowCount % PAGE_SIZE;

  if (offset < 0 && remainder > 0) {
    offset = 0;
    limit = remainder;
  } else if (offset < 0) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        title: doc.title,
        totalPages,
        feeds: [],
      }),
    };
  }

  const rows = await sheet.getRows({ offset, limit });

  for (const row of rows) {
    const _row = {};
    for (const k in row) {
      // only get primitives
      if (row[k] !== Object(row[k])) {
        _row[k] = row[k];
      }
    }
    feeds.unshift(_row);
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      totalPages,
      feeds,
      isLastPage: pageNo >= totalPages,
    }),
  };
};
