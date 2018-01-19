export default (obj, ...functions) => {
  functions.forEach((fn) => { obj[fn] = obj[fn].bind(obj) })
}
