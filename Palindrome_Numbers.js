/**
Determine whether an integer is a palindrome.
An integer is a palindrome when it reads the same backward as forward.

 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (num) => {
     let str = num.toString();
     let reverseStr = '';

     for (let i = str.length - 1; i >= 0; i--){
       reverseStr += str[i];
     }

     if (str === reverseStr){
       return true;
     } else {
       return false;
     }
 };

let num = 1221;
console.log(isPalindrome(num));
