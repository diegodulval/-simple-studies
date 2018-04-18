console.log(adjacentElementsProduct("aabaa"));
console.log(adjacentElementsProduct("a"));

function adjacentElementsProduct(inputString) {
    return [...inputString].reverse().join().toString();
}
