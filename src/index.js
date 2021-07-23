
exports.min = function min (array) {
  let minNumber = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

exports.max = function max (array) {
  let maxNumber = 0;
  for(let i = 0; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

exports.avg = function avg (array) {
  return 0;
}
