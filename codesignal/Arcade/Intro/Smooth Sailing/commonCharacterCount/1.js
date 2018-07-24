console.log(commonCharacterCount("abca", "xyzbac")); //3 
console.log(commonCharacterCount("aabcc", "adcaa")); //3
console.log(commonCharacterCount("zzzz", "zzzzzzz")); //4
console.log(commonCharacterCount("a", "b")); //0
console.log(commonCharacterCount("a", "aaa")); //1 */

function commonCharacterCount(s1, s2) {
  let count = 0;
  let a = [...s1];
  let b = [...s2];

  for (let i = 0; i < a.length; i++) {
    const bool = b.indexOf(a[i]);
    if (bool !== -1) {
      b[bool] = 0;
      count++;
    }
  }

  return count;
}

/* function commonCharacterCount(s1, s2) {
  let count = 0;

  const map1 = getNumberLetter([...s1]);
  const map2 = getNumberLetter([...s2]);
  const map3 = new Map(function*() { yield* map1; yield* map2; }());
  const map4 = new Map()

  console.log(map1);
  console.log(map2);

  console.log(map3);
  
  map3.forEach(x => {
    console.log(x)
    if( map1.has(x) )  map4.add(x) 
  })

  [...s2].forEach(x => {
    count += [...s1].indexOf(x) !== -1 ? 1 : 0;
  });

  if (count > [...s1].length) {
    return [...s1].length;
  } else {
    return count;
  }
}

function getNumberLetter(a) {
  const map = new Map();
  const set = new Set(a);

  set.forEach(x => {
    map.set(x, 0);
  });

  a.forEach(x => {
    if (set.has(x)) map.set(x, map.get(x) + 1);
  });

  return map;
} */

/* function commonCharacterCount(s1, s2) {
  const set1 = new Set([...s1]);
  let count = 0;
  [...s1].forEach(x => {
    const sorted = [...s2].sort();
    if (sorted.indexOf(x) !== sorted.lastIndexOf) count++;
  });

  console.log(count);
  const retorno = 1;

  return count > set1.size ? set1.size : count;
} */
