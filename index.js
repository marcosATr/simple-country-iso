const codes = require("./alpha-2-code");
module.exports = function getName(twoLetterCode) {
  for (key in codes) {
    if (codes[key] === twoLetterCode.toUpperCase()) {
      return key;
    }
  }
};
