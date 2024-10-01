const isStringValid = (s) => {
  if (s === undefined || s === null || s.length === 0) {
    return false;
  }

  let stack = [];

  for (const character of s) {
    if (character === "{" || character === "(" || character === "[") {
      stack.push(character);
    } else if (character === "}" || character === ")" || character === "]") {
      if (stack.length === 0) {
        return false;
      }

      let temp = stack.pop();
      switch (temp) {
        case "{":
          if (character !== "}") {
            return false;
          }
          break;
        case "[":
          if (character !== "]") {
            return false;
          }
          break;
        case "(":
          if (character !== ")") {
            return false;
          }
          break;
      }
    }
  }
  //   return stack.length > 0 ? false : true;
  return !!!stack.length;
};

//to test with jest
module.exports = { isStringValid };