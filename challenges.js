/*------------------
1)
DONE
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
//     if(num < 0){
//        return false
//    }
//    if(reversedNum === num.toString()){
//        return true
//    }
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
// let sum = 0;
// function addGridItems(grid) {
    
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
// let fileName = "";
// let ans = ""
// function createFileName(string, type) {
//     fileName = string.toLowerCase().replaceAll(" ", "_");
//     if(fileName.endsWith("photo")){
//         ans = `${fileName}.png`
//     }
//     if(fileName.endsWith("api")){
//         ans = `${fileName}.api`
//     }
//     else {
//         ans = `${fileName}.pdf`
//     }
//     return ans
// }

// console.log(createFileName("Sofia Engineering Resume", "PDF")); // "sofia_engineering_resume.pdf"
// console.log(createFileName("Sofia Profile Photo", "image")); // "sofia_profile_photo.png"
// console.log(createFileName("Data from Pokemon API", "JSON")); // "data_from_pokemon_api.json"

/*------------------
4) Print the following pattern
99 96 93 90 88
99 96 93 90
99 96 93
99 96
99

Hints:
- Use a loop within a loop.
// create an array of numbers
------------------*/
let numbers = [99, 96, 93, 90, 80];


