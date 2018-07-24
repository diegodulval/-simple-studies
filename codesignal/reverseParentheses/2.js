function reverseParentheses(s) {
  let initial = s.lastIndexOf("(");

  if (initial !== -1) {
    let sFirst = s.slice(0, initial);
    let sub = s.slice(initial, s.length);
    let subIndex = sub.indexOf(")");

    let reverted = sub
      .slice(1, subIndex)
      .split("")
      .reverse()
      .join("");

    let sReverted = reverted + sub.slice(subIndex + 1, sub.length);

    return reverseParentheses(sFirst + sReverted);
  }
  return s;
}
