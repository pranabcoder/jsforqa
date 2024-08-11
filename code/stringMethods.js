// check the length of string
console.log("JavaScript".length); // 10
// tell me the character at index 4
console.log("JavaScript".charAt(4)); // S
// tell me the character at index 4
console.log("JavaScript"[4]); // S
// return the ascii value of character at index 4
console.log("JavaScript".charCodeAt(4)); // 83
// convert entire string to lowercase
console.log("JavaScript".toLowerCase()); // javascript
// convert entire string to uppercase
console.log("JavaScript".toUpperCase()); // JAVASCRIPT
// give me value of index 3 to -5
console.log("JavaScript".slice(3, -5)); // aS
// give me the value of index 2 to 6
console.log("JavaScript".substring(2, 6)); // vaSc
// give me the value of index -2 to 2
console.log("JavaScript".substring(-2, 2)); // Ja, Here --ve index is converted to 0
// concat two strings
console.log("Java".concat("Script")); // JavaScript
// split method
console.log("JavaScript".split("")); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
// includes method
console.log("JavaScript".includes("Script")); // true
// replace method
console.log("JavaScript".replace("Java", "Type")); // TypeScript
// replaceAll method
console.log("JavaScript".replaceAll("a", "A")); // JAvAScript
console.log("01-01-1990".replaceAll("-", "/")); // 01/01/1990
// trim method
console.log(" JavaScript ".trim()); // JavaScript
// trimStart method
console.log(" JavaScript ".trimStart()); // JavaScript
// trimEnd method
console.log(" JavaScript ".trimEnd()); // JavaScript
// padding in start
console.log("JavaScript".padStart(20, "*")); // ***********JavaScript
// padding in the end
console.log("JavaScript".padEnd(20, "*")); // JavaScript***********
// startsWith method
console.log("JavaScript".startsWith("Java")); // true
// endsWith method
console.log("JavaScript".endsWith("Script")); // true
// repeat method
console.log("JavaScript".repeat(3)); // JavaScriptJavaScriptJavaScript
// indexOf method
console.log("JavaScript".indexOf("a")); // 1
// lastIndexOf method
console.log("JavaScript".lastIndexOf("a")); // 3.
// if something is not found, then it will return -1
// search method
console.log("JavaScript".search("a")); // 1

