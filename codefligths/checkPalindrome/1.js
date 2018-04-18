console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("a"));

function checkPalindrome(inputString) {
    return inputString === [...inputString].reverse().join("");
}
