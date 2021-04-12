/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let temp = str[0];
  let count = 1;
  if (str.length === 0) return str;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === temp) {
      count++;
    } else {
      if (count === 1) {
        newStr = newStr.concat(`${temp}`);
        temp = str[i];
        count = 1;
      }
      else {
        newStr = newStr.concat(`${count}${temp}`);
      }
      temp = str[i];
      count = 1;
    }
  }
  if (count === 1) {
    newStr = newStr.concat(str[str.length - 1]);
      }
    else {
      newStr = newStr.concat(`${count}${str[str.length - 1]}`);
    }
  return newStr;
}

module.exports = encodeLine;
