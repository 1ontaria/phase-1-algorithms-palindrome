function isPalindrome(word) {
  if (word.split("").reverse().join("") === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  write a fucntion that receives one argument, a string
     return true if string is palindrome
    else, return false if not a plaindrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
