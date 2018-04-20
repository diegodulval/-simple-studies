console.log(maxMultiple(7, 10)); //9

function maxMultiple(divisor, bound) {
  console.log(bound % divisor); 
  
  while (bound > 0) {
    if (bound % divisor === 0) return bound;
    bound--;
  }

}
