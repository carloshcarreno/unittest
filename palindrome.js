
function isPalindrome(text){
    return text.toLowerCase().split('').reverse().join('');
}

function isAnagram(text1, text2){

    t1 = text1.toLowerCase().split('').sort().join('').trim();
    t2 = text2.toLowerCase().split('').sort().join('').trim();

    return t1 === t2;
}

module.exports = { isPalindrome, isAnagram};