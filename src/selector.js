function selector(obj, path) {
  let currentObj = obj;
  path.forEach((item) => {
    if(currentObj[item]){
      currentObj = currentObj[item];
    } else {
      currentObj = '';
    }
  });
  return currentObj;
}

module.exports = selector;
