module.exports = function getZerosCount(number) {
  let count = 0, index = 5;
  while (number > index){
    count += parseInt(number/index);
    index *= 5;
  }
  return count;
}
