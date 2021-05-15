import kebabCase from "lodash/kebabCase.js";

export {
  upperCase,
  kebabCase, // reuse one from lodash
};

// we make our own
function upperCase(text) {
  return text.toUpperCase();
}
