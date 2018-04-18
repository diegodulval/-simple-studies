console.log("resultado: " + makeArrayConsecutive2([6, 2, 3, 8]));

function makeArrayConsecutive2(statues) {
  statues.sort();
  return (statues[statues.length-1] - statues[0]) - statues.length + 1;
}
