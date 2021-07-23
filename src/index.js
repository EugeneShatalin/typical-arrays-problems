
exports.min = function min (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let minNumber = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

exports.max = function max (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let maxNumber = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

exports.avg = function avg (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let avgNumber = 0;
  for(let i = 0; i < array.length; i++) {
    avgNumber += array[i];
  }
  return (avgNumber / array.length);
}
