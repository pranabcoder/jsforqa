function checkAge(age) {
    if (age >= 18) {
        return "You are an adult";
    } else {
        return "You are a minor";
    }
}

console.log(checkAge(20)); // "You are an adult."
console.log(checkAge(16)); // "You are a minor."

function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

console.log(checkNumber(10)); // "Positive"
console.log(checkNumber(-10)); // "Negative"
console.log(checkNumber(0)); // "Zero"
console.log(checkNumber(0.5)); // "Positive"

function checkGrade(grade) {
    if (grade >= 90) {
        return "A";
    } else if (grade >= 80) {
        return "B";
    } else if (grade >= 70) {
        return "C";
    } else if (grade >= 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(checkGrade(95)); // "A"
console.log(checkGrade(85)); // "B"
console.log(checkGrade(75)); // "C"
console.log(checkGrade(65)); // "D"
console.log(checkGrade(55)); // "F"

// if - else problem
let browser = "Chrome";
if (browser === "Edge") {
    console.log("You've got the Edge!");
} else if (browser === "Firefox") {
    console.log("You've got the Firefox!");
} else if (browser === "Safari") {
    console.log("You've got the Safari!");
} else if (browser === "Chrome") {
    console.log("You've got the Chrome!");
} else {
    console.log("Not in the list");
}
// For one condition, it will check all the conditions. It is better to use switch case for this kind of problem.