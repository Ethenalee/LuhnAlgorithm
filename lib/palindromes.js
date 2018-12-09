function isPalindrome(s) {
  var stringReverse = s.replace(/ /gi, "").split("").reverse().join("");
  return s.replace(/ /gi, "") == stringReverse;
}

module.exports = isPalindrome;
