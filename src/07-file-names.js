/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArr = [];
  for(let i = 0, j = 1; i < names.length; i++) {
    let element = names[i];
    if(newArr.includes(names[i])) {
      if(newArr.includes(`${names[i]}(${j})`)) {
        newArr[i] = `${names[i]}(${j+1})`;
      }
      else newArr[i] = `${names[i]}(${j})`;
    }
    else newArr[i] = names[i];
  }
  return newArr;
}

module.exports = renameFiles;
