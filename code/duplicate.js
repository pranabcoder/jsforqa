const numbers = [1, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7, 8, 9, 10];
const names = ['Alice', 'Bob', 'Charlie', 'Charlie', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Grace', 'Grace', 'Grace', 'Grace'];

// unique numbers
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

// unique names
const uniqueNames = [...new Set(names)];
console.log(uniqueNames);