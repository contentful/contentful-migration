export default function promisedWait (ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms || 3000)
  })
}
