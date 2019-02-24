module.exports = function check(str, bracketsConfig) {
  let indexArray = [];
  for (let charIndex in str) {
    const char = str[charIndex];
    if (indexArray.length > 0 && char === bracketsConfig[indexArray[indexArray.length - 1]][1]) {
      indexArray.pop();
      continue;
    }
    const index = checkIsOpenBracket(char, bracketsConfig);
    if (index >= 0) {
      indexArray.push(index);
    } else {
      return false;
    }
  }
  return indexArray.length === 0;
}

function checkIsOpenBracket(char, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (char === bracketsConfig[i][0]){
      return i;
    } 
  }
  return -1;
}