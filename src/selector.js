function selector(obj, path) {
  let currentObj = object;
  path.forEach((item) => {
    if(currentObj[item]){
      currentObj = currentObj[item];
    }
  });
  return currentObj;
}

module.exports = selector;
