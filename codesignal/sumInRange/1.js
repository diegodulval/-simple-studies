console.log(sumInRange([3, 0, -2, 6, -3, 2], [[0, 2], [2, 5], [0, 5]])); //10
//console.log(sumInRange([3, 0, -2, 6, -3, 2], [[0, 2], [2, 5], [0, 5]])); //10

function sumInRange(a, b) {
  let result = [];
  let soma = 0;

  for (let ele of a) {
    soma += ele;
    result.push(soma);
  }
  soma = 0;
  for (let q of b) {
    const [start, stop] = q;
    let dif = result[start - 1] || 0;
    soma += result[stop] - dif;
  }

  const num = Math.pow(10, 9) + 7;
  return (soma % num + num) % num;
}
