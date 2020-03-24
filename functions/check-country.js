const geoip = require('geoip-lite');

exports.handler = (event, ctx, callback) => {
  const ip = event.headers['client-ip'];
  const geo = geoip.lookup(ip);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      country: (geo && geo.country) || null,
    }),
  });
};
