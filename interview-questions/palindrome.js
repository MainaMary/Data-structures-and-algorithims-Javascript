//Palindrome: An integer or word is a palindrome when it reads the same backward and forward

//Check for a palindrome using built in functions
const isPalindrome = (value) => {
  const result = value.split("").reverse().join("");
  let val = "";
  if (value === result) {
    val = "It is a palindrome";
    console.log("It is a palindrome");
  } else {
    val = "It is not a palindrome";
    console.log("It is not a palindrome");
  }
  return val;
};
isPalindrome("madam");
