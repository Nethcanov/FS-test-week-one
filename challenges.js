/*------------------
1)
DONE - fixed!
Write a function that determines
if a number is a palindrome. A number is a
palindrome if it reads the same forwards and
backwards. 

Note:
- All negative numbers should return false.
- Single numbers should return true.
Comments -
// first if num is less than 0, it's negative, return false (removes second test case) 
// need to use toString()  - makes it like an object? or won't be able to do reverse the number and/or compare
// if reversed string is same as forward string, return true - no need to test for single number 
------------------*/

// function isPalindrome(num) {
//     let reversedNum = num.toString().split("").reverse().join("");
//// return reversedNum === num.toString();//shorter
//    if(reversedNum === num.toString()){
//        return true;
//    } else {
//         return false;
//    }    
// }
////Jim's shorter way
// function isPalindrome(num) {
//     let numStr = `${num}` //also turns it into a string
//     return numStr === numStr.split("").reverse().join("");
// }

// console.log(isPalindrome(12321)); // true
// console.log(isPalindrome(-12321)); // false
// console.log(isPalindrome(1)); // true
// console.log(isPalindrome(84146)); // false
// console.log(isPalindrome(12)); // false


/*------------------
2)
Create a function that takes a grid
as an argument and adds all the numbers
in that grid together.
// create a variable to add sum to
// loop through the array 3 times and add the elements from each array together
// return the sum outside of the for loops


------------------*/

// function addGridItems(grid) {
//   let sum = 0;  
//     for(let i = 0; i < grid.length; i++){
//         for(let j = 0; j < grid[i].length; j++){
//             for(let k = 0; k < grid[i][j].length; k++){
//               sum += grid[i][j][k];
//             }
//         }
//     }
//     return sum;
// }

// const y = [[[1], [2]]];
// console.log(addGridItems(y)); // 3

// const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
// console.log(addGridItems(x)); // 50


////or - 
/*
but why does it add the result of the first console.log() to the second - because of where I declared the variable sum 
I get 53 if I declare the sum variable outside the function.
*/

// function addGridItems(grid) {
//     let first = [];
//     let second = [];
//     let third = [];
//     let sum = 0;
//     first = grid.flat();
//     second = first.flat();
//     for (let x = 0; x < second.length; x++){
//         sum += second[x];
//     }
//     return sum;
// }
// const y = [[[1], [2]]];
// console.log(addGridItems(y)); // 3

// const x = [[[1, 0, -3], [2, 4], [3]], [[4, 4, 3], [5, -3, -1], [6, 10]], [[7, -5, -5], [8, 0], [9, 1]]];
// console.log(addGridItems(x)); // 50

/*------------------
3)
DONE
Create a function that turns a string into a
file name: all letters are lowercase, spaces are
swapped for underscores, and it includes a
file extension. 

This function should take two parameters: the string, 
and the type of file it is (so you know what file
extension to add). You only need to cover
the extensions below:
- PDF: .pdf
- image: .png
- JSON: .json
// create a variable to accept modified version of original string
// convert all to lowercase and replace all spaces with _ and add to new variable
// if end of string contains "photo" or "api", return string + .png, .api or .pdf 
------------------*/
////mine
// function createFileName(string, type) {
//     let fileName = "";
//     let ans = ""
//     fileName = string.toLowerCase().replaceAll(" ", "_");
//     if(fileName.endsWith("photo")){
//         ans = `${fileName}.png`
//     }
//     else if(fileName.endsWith("api")){
//         ans = `${fileName}.json`
//     }
//     else {
//         ans = `${fileName}.pdf`
//     }
//     return ans
// }
////Jim's
// function createFileName(string, type) {
//     let fileName = string.toLowerCase().replaceAll(" ", "_");
//     if (type === "PDF") {
//         fileName += ".pdf";
//     } else if (type === "image") {
//         fileName += ".png";
//     } else {
//         fileName += ".json";
//     }
//     return fileName;
// }

////or

// function createFileName(string, type) {
//     let fileName = string.toLowerCase().replaceAll(" ", "_");
//     switch(type){
//         case "PDF":
//             fileName += ".pdf";
//             break;
//         case "image":
//             fileName += ".png";
//             break;
//         case "JSON":
//             fileName += ".json";
//             break;
//         default:
//             return "Enter a valid filename"
//             break;
//     }
//     return fileName;
// }

// console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
// console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

/*------------------
2:45pm - 3:15pm
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
// create an array of numbers
// loop backwards through the array
// pop an element off the array with every loop
//console.log within the loop to show result of every loop
------------------*/
// let numbers = [99, 96, 93, 90, 88];
// let i = numbers.length-1;
// while(i >= 0){
//   i--;
//   console.log(numbers);
//   numbers.pop();
// }


/*
want to do this with a string not an array to make it loop like the example, doesn't work
*/
////doesn't work
// let numbers = "99, 96, 93, 90, 88";

// let i = numbers.length-1;
// while(i >= 0){
//   numbers.slice(0, -1);
//   i--;
// }
////took console.log out

////Jim's code
// let nums = [99, 96, 93, 90, 88];
// for (let i = nums.length; i > 0; i--){
//     console.log(nums.slice(0, i).join(" "));
// }
////OR
// let numbers = [99, 96, 93, 90, 88];
// while(numbers.length){
//   console.log(numbers.join(" "));
//   numbers.pop();
// }


