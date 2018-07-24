function firstNotRepeatingCharacter(s) {
  for (let l of [...s]) {
    if (s.indexOf(l) === s.lastIndexOf(l)) return l;
  }

  return "_";
}
