const fs = require("fs");
const { addition, substraction, multiplication, division } = require("./helper");

//WRITE FILE
//sync operations

// fs.writeFileSync("data.txt", `Addition: ${addition(10, 5)}\n`);
// console.log(`Addition Result: ${addition(10, 5)}`);


// fs.appendFileSync("data.txt", `Substraction: ${substraction(10, 5)}\n`);
// console.log(`Substraction Result: ${substraction(10, 5)}`);


// fs.appendFileSync("data.txt", `Multiplication: ${multiplication(10, 5)}\n`);
// console.log(`Multiplication Result: ${multiplication(10, 5)}`);


// fs.appendFileSync("data.txt", `Division: ${division(10, 5)}`);
// console.log(`Division Result: ${division(10, 5)}`);





// Asynchronous Operations
// fs.writeFile("data.txt", `Addition: ${addition(10, 5)}\n`, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(`Addition Result: ${addition(10, 5)}`);
// });

//    fs.appendFile("data.txt", `Substraction: ${substraction(10, 5)}\n`, (err) => {
//      if (err) {
//  return console.error(err);
// }
//    console.log(`substraction Result: ${substraction(10, 5)}`);
//    });

//    fs.appendFile("data.txt", `multiplication: ${multiplication(10, 5)}\n`, (err) => {
//     if (err) {
// return console.error(err);
// }
//   console.log(`multiplication Result: ${multiplication(10, 5)}`);
//   });


//    fs.appendFile("data.txt", `Division: ${division(10, 5)}`, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(`Division Result: ${division(10, 5)}`);
// });

// const fs = require("fs");
// const { addition, subtraction, multiplication, division } = require("./helper");

// Sync operationslet addResult = addition(5, 8);
// let subResult = subtraction(5, 8);
// let mulResult = multiplication(5, 8);
// let divResult = division(5, 8);


// let finalResult = `The addition result is: ${addResult}\nThe subtraction result is: ${subResult}\nThe multiplication result is: ${mulResult}\nThe division result is: ${divResult}`;

// fs.writeFileSync("data.txt", JSON.stringify(finalResult));
// console.log("Synchronous write: File written successfully");





// Async operations
// let addResult = addition(5, 8);
// let subResult = subtraction(5, 8);
// let mulResult = multiplication(5, 8);
// let divResult = division(5, 8);

// let finalResult = `The addition result is: ${addResult}\nThe subtraction result is: ${subResult}\nThe multiplication result is: ${mulResult}\nThe division result is: ${divResult}`;

// fs.writeFile("data.txt", JSON.stringify(finalResult), (err) => {
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("Asynchronous write: File written successfully");
//     }
// });

 //READ FILE


 let a = 10, b = 2;

 let addResult = addition(a, b);
 let subResult = subtraction(a, b);
 let mulResult = multiplication(a, b);
 let divResult = division(a, b);
 
 let finalResult = `The addition result is: ${addResult}\nThe substraction result is: ${subResult}\nThe multiplication result is: ${mulResult}\nThe division result is: ${divResult}`;
 
// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//       console.error("Error reading file:", err);
//   } else {
//       console.log("File content:\n", JSON.parse(data));
//   }
// });
let data = fs.readFileSync("data.txt", "utf8");
console.log("File content:\n", JSON.parse(data));