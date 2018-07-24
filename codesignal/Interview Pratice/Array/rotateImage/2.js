function rotateImage(a) {
  let tamanhoDaImage = a[0].length;
  let result = new Array();

  for (let i = 0; i < tamanhoDaImage; i++) {
    let tmp = [];
    for (let j = 0; j < tamanhoDaImage; j++) {
      tmp.push(a[j][i]);
    }
    result.push(tmp.reverse());
  }

  return result;
}
