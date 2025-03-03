const fs=require('fs');
const {
  addition,
  substraction,
  multiplication,
  division,
}=require('./helper');

// // Asynchronous read
// fs.readFile('data.txt', (err, data) => {
//   if (err) {
//     return
//     console.error(err);
//   } 
//     console.log(`Asynchronous read:  ${data}`);
  
// });
// // Synchronous read
// const data = fs.readFileSync('data.txt');
// console.log(`Synchronous read:  ${data}`);


// Asynchronous write
// fs.writeFile("data.txt", "Hello, World!", (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Asynchronous write:  File written successfully");
// });
// //Synchronous write
// fs.writeFileSync("data.txt", "Hello, World!");
// console.log("Synchronous write completed");

// //Asynchronous append
// let data = "\nLearning Node.js";
// let data2 = "\nLearning MERN";
// let data3 = "\nLearning Backend";

// fs.appendFile("data.txt", data2, (err) => {
//   if (err) {
//     return console.error(err);
//   }
//   console.log("Asynchronous append:  File appended successfully");
// });
// //Synchronous append
// fs.appendFileSync("data.txt", data3);
// console.log("Synchronous append:  File appended successfully");
//Delete file
fs.unlink("data.txt", (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("File deleted successfully");
});


