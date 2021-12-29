function selector(obj, path) {
  let currentObj = obj;
  path.forEach((key) => {
    if(currentObj[key]){
      currentObj = currentObj[key];
    }
  });
  return currentObj;
}

module.exports = selector;
