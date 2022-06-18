// function hasTargetSum(array, target) {
//    // iterate through each value in the array
//   for(let i = 0; i < array.length; i++){
//     // n steps
//     // identify a number which we later compare by subtracting the target from each value
//     let compliment = target - array[i]
//     for(let j = i + 1; j < array.length; j++){
//       // n steps
//       // iterating through rest of the array to check if any number is a compliment number
//       if(array[j] === compliment) return true
//     }
//   }
//   return false
// }

function hasTargetSum(array, target) {
  const seenNumbers= {};
  // set an empty object that we can then add values to 
  for(let i = 0; i < array.length; i++){
    // again we will iterate over each value in the array and calculate its compliment value
    const compliment = target - array[i]
    if(seenNumbers[compliment]){
      // here we are looking to see if a COMPLIMENT value exists in our object, if it does then return true
      return true
    } else {
      // if the compliment value is NOT in the object, THEN we will assign the key value pair into the object
      seenNumbers[array[i]] = true
    }
    console.log(seenNumbers)
  }
 return false
}


/* 
 Runtime complexity: O(n^2)
 Space complexity: O(n)
*/

/*  TO IMPROVE RUNTIME  

we can create an object for each value we have already seen. 

*/



/* 
can test if target - array value exists as a value in the array, if this
value is in the array then we can return a true

need to iterate through each number in the array and minus that value
from the target value which gives us a compliment value... I.e. comp = target - array value
  then iterate through the array to check and see if the comp value is present

*/

/*
make a function that checks if two values in an array add up to a target
value. should return if two values do add up to target value, should return 
false if they do not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 4, 12, 8, 2, 7], 20));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


// function hasTargetSum(array, target) {
//   for(let i=0;i<array.length-2;i++){

//       for(let j=i+1;j<array.length;j++){

//         if(array[i]+array[j] === target) return true
//       }
//    }
// }
