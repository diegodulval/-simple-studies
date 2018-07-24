console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42)); //true
console.log(sumOfTwo([17, 72, 18, 72, 73, 15, 83, 90, 8, 18], [100, 27, 33, 51, 2, 71, 76, 19, 16, 43], 37)); //true

function sumOfTwo(a, b, v) {
  let result = new Set();

  for (let x of a) {
    result.add(v - x);
  }
  for (let y of b) {
    if (result.has(y)) return true;
  }

  return false;
}
