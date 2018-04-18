
console.log(shapeArea(1));
console.log(shapeArea(2));
console.log(shapeArea(3));
console.log(shapeArea(4));

function shapeArea(n) {
  if (n == 1) {
    return 1;
  }
  let soma = 0;
  for (let i = 0; i < n; i++) {
    soma = i * n;
  }
  return soma - (n - 1) + n * n;
}
