module.exports = function flatten(array,shallow){
    if (shallow)
        flattened = [].concat(...array)
    else 
        flattened = toFlatten(array)
    return flattened 
}

function toFlatten(arrays) {
  let flattened = [];
  
  for(array of arrays) {
    if(Array.isArray(array)){
       console.log('array :'+array ) 
      flattened = flattened.concat(toFlatten(array));
      console.log('concat :'+flattened)
    } else {
      console.log('element :'+array)
      flattened.push(array);
    }
  }
  
  return flattened;
}



// [1,[2],[3,[4]]]