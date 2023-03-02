//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing
function palindrome(str) {
    str = str.toLowerCase().replace(/(\W)|(\_)/g,"").split("");
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 -i]) {
            return false;
        }
    }
    return true;
}