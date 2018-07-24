console.log(isLucky(1230)); //true
console.log(isLucky(10)); //false

function isLucky(n) {
  const size = n.toString().length;
  let s1 = 0;
  let s2 = 0;
  const a = [...n.toString()];
  for (let index = 0; index < size; index++) {
    if (index < size / 2) s1 += parseInt(a[index]);
    else s2 += parseInt(a[index])
  }

  return s1 === s2;
}
