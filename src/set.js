const set = (obj, key, value) => {
  if (!obj.hasOwnProperty(key)) {
  obj[key] = value
  }
}

export default set
