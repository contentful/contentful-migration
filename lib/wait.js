module.exports = function (ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms || 3000)
  })
}
