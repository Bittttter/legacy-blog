const h = require('hastscript');
const isHeading = require('hast-util-heading');
const _ = require('lodash');

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

function parseDepth(str) {
  return parseInt(str[1], 10);
}

function wDepth(div) {
  if (
    !div.properties ||
    !(div.properties && div.properties.className)
  ) {
    return 0;
  }
  const divClassNames = div.properties.className;
  const divDepth = parseDepth(divClassNames[0]);
  return divDepth;
}

function w(depth, children) {
  const value = _.get(children, '0.children.0.value', '');
  return h(`section#${slugify(value)}.h${depth}-wrapper`, children);
}

function transformer(tree, _) {
  const rootChildren = tree.children;

  const rootWrapper = { ...tree, children: [] };
  let wrapperStack = [];
  wrapperStack.push(rootWrapper);

  function currentWrapper() {
    return wrapperStack[wrapperStack.length - 1];
  }

  function currentWrapperDepth() {
    return wDepth(currentWrapper());
  }
  rootChildren.forEach(elem => {
    if (isHeading(elem)) {
      const elemDepth = parseDepth(elem.tagName);
      // Child heading
      if (elemDepth > currentWrapperDepth()) {
        const childWrapper = w(elemDepth, [elem]);
        currentWrapper().children.push(childWrapper);
        wrapperStack.push(childWrapper);
      }
      // Delimiting heading
      else if (elemDepth <= currentWrapperDepth()) {
        while (elemDepth <= currentWrapperDepth()) {
          wrapperStack.pop();
        }
        const siblingWrapper = w(elemDepth, [elem]);
        currentWrapper().children.push(siblingWrapper);
        wrapperStack.push(siblingWrapper);
      }
    } else if (elem.type !== 'export') {
      currentWrapper().children.push(elem);
    } else {
      rootWrapper.children.push(elem);
    }
  });

  return rootWrapper;
}

function attacher() {
  return transformer;
}

module.exports = attacher;
