console.log(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function rotateImage(a) {
  let tamanhoDaImage = a[0].length;
  let resul = [];

  for (let index = tamanhoDaImage; index > 0; index--) {
    const test = a.map(x => {
      return x[tamanhoDaImage - index];
    });
    resul.push(test.reverse());
  }

  return resul;
}