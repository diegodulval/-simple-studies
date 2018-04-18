function firstDuplicate(a) {
  let valid = {};

  for (let i of a) {
    if (valid[i] !== undefined) return Math.abs(i);
    valid[i] = i;
  }

  return -1;
}
