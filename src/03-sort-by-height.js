/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newSortArr = [];
  let minusArr = [];
  const newArr = [];
  minusArr = arr.map((elem) => {
    if (elem === -1) {
      return elem;
    } else return;
  });
  newSortArr = arr.filter((elem) => elem !== -1);
  newSortArr.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < minusArr.length; i++) {
    if (minusArr[i] === undefined) {
      newArr[i] = newSortArr[j];
      j++;
    } else {
      newArr[i] = minusArr[i];
    }
  }
  return newArr;
}

module.exports = sortByHeight;
