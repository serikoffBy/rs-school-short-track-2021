/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(arr) {
  if (arr.length === 0) return {};
  const newArr = arr.map((elem) => elem.split('.').reverse());
  const newArray = [];
  for (let i = 0; i < newArr.length; i++) {
    let dns = '';
    for (let j = 0; j < newArr[i].length; j++) {
      dns = dns.concat(`.${newArr[i][j]}`);
      newArray.push(dns);
    }
  }
  const objDns = {};
  for (let i = 0; i < newArray.length; i++) {
    objDns[newArray[i]] = (objDns[newArray[i]] || 0) + 1;
  }
  return objDns;
}

module.exports = getDNSStats;
