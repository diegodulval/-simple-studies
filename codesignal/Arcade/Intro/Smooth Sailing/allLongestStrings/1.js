console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

function allLongestStrings(inputArray) {
  let bigLength = 0;
  inputArray.forEach(z => {
    bigLength = z.length > bigLength ? z.length : bigLength;
  });
  return inputArray.filter(x => x.length === bigLength);
}
