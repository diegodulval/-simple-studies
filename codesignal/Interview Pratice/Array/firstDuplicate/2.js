function firstDuplicate(a) {
  let contain = {};
  for (let i of a) {
    if (contain[i]) return i;
    contain[i] = i;
  }

  return -1;
}
