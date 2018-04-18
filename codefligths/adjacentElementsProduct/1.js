console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]));

function adjacentElementsProduct(a) {
  let big;
  a.forEach((element, index) => {
    let product = element * a[index + 1];
    if ((big === undefined) || (product > big)) {
      big = product;
    }
  });
  return big;
}
