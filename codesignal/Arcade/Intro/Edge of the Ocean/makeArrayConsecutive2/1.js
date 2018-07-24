console.log("resultado: " + makeArrayConsecutive2([6, 2, 3, 8]));

function makeArrayConsecutive2(statues) {
  statues.sort((a, b) => a - b);
  let total = 0;

  for (var i = 0; i < statues.length - 1; i++) {
    let dif = statues[i + 1] - statues[i];
    if (dif > 1) total += dif - 1;
  }

  return total;
}
