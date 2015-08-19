var Promise = require('es6-promise');

module.exports = function (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms);
  });
}
