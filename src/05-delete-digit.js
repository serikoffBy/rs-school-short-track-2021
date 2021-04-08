/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = n.toString().split('');
  const newArr = [];
  for (let i = 0; i < a.length; i++) {
    const tempArr = a.slice(0);
    tempArr[i] = '';
    newArr[i] = +tempArr.join('');
  }
  return Math.max(...newArr);
}

module.exports = deleteDigit;
