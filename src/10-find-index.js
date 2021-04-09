/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let firstValue = 0;
  let lastValue = array.length;
  let averageValue = Math.floor((firstValue + lastValue) / 2);
  for (let i = 0; i < array.length; i++) {
    if (array[averageValue] === value) {
      return averageValue;
    }
    if (array[averageValue] > value) {
      lastValue = averageValue;
      averageValue = Math.floor((firstValue + lastValue) / 2);
    } else {
      firstValue = averageValue;
      averageValue = Math.floor((firstValue + lastValue) / 2);
    }
  }
  return -1;
}

module.exports = findIndex;
