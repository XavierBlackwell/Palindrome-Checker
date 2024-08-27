### Palindrome Checker

A palindrome is a word or phrase that reads the same backward as forward, ignoring punctuation, spaces, and letter case. This project builds a simple web application to check if a given text is a palindrome.

**Objective**

Build a web application that checks for palindromes.

**User Stories**

Input Field: An input element with an id of text-input is provided for users to enter text.
Check Button: A button element with an id of check-btn triggers the palindrome check.
Result Display: A div, span, or p element with an id of result displays whether the input text is a palindrome or not.

**Functionality**

Empty Input: When the #check-btn is clicked without a value in #text-input, an alert with "Please input a value" should appear.
Single Character: If #text-input contains the letter A, the #result should show "A is a palindrome".
Simple Palindrome: For input "eye", the result should be "eye is a palindrome".
Text with Underscore: For input "_eye", the result should be "_eye is a palindrome".
Phrase Palindrome: For input "race car", the result should be "race car is a palindrome".
Not a Palindrome: For "not a palindrome", the result should be "not a palindrome is not a palindrome".
Complex Palindrome: For "A man, a plan, a canal. Panama", the result should be "A man, a plan, a canal. Panama is a palindrome".
Even Palindrome: For "never odd or even", the result should be "never odd or even is a palindrome".
Not a Palindrome Example: For "nope", the result should be "nope is not a palindrome".
Another Example: For "almostomla", the result should be "almostomla is not a palindrome".
Mixed Characters: For "My age is 0, 0 si ega ym.", the result should be "My age is 0, 0 si ega ym. is a palindrome".
Additional Test: For "1 eye for of 1 eye.", the result should be "1 eye for of 1 eye. is not a palindrome".
Special Characters: For "0_0 (: /-\ :) 0-0", the result should be "0_0 (: /-\ :) 0-0 is a palindrome".
Non-Palindrome with Symbols: For "five|_/|four", the result should be "five|_/|four is not a palindrome".

**Usage**

Enter text into the input field.
Click the "Check" button to see if the text is a palindrome.
The result will be displayed below the input field.

**Acknowledgments**

Inspiration from freeCodeCamp.
