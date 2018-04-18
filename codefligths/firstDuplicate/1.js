function firstDuplicate(a) {
  for (let i of a) {
    if (a[Math.abs(i) - 1] < 0) return Math.abs(i);
    a[Math.abs(i) - 1] *= -1;
  }

  return -1;
}
