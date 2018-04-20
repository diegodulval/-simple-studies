console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));

function sortByHeight(a) {
  const sem1 = a.filter(x => x !== -1);
  sem1.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = sem1[j];
      j++;
    }
  }

  return a;
}
