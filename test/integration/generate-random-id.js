export default function generateRandomId (prefix = 'randomid') {
  return prefix + Math.ceil(Math.random() * 1e8)
}
