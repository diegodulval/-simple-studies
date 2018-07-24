//console.log(reverseParentheses("a(bc)de"));
console.log(reverseParentheses("co(de(fight)s)")); //cosfighted
//console.log(reverseParentheses("abc(cba)ab(bac)c"));
//console.log(
//reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)")
//);

function reverseParentheses(s) {
  if (s.includes("(")) {
    return reverseParentheses(reverseOnce(s));
  }
  return s;
}

function reverseOnce(s) {
  var regexp = /\(([^()]*)\)/i;
  var subStr = regexp.exec(s)[1];
  subStr = subStr
    .split("")
    .reverse()
    .join("");

  return s.replace(regexp, subStr);
}
