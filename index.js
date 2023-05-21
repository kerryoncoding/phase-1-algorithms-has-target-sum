function hasTargetSum(array, target) {
  // Write your algorithm here
  // filter array for elements less than target
  //const filteredArr = array.filter(e => e<target ) ---> this didn't work with a negative number
  let findNumber = 0
  for (let i=0; i<array.length; i++){
    findNumber = target - array[i]
    for (let j=i+1; j<array.length; j++){
      if (findNumber === array[j]) {
        return true
      }
    }
  } return false

  // walk through filtered array... 
  // loop through array
  // let findnumber = element - target
  // search for number in array



}

/* 
  Write the Big O time complexity of your function here
  filter array 1
  stepthroug n

*/

/* 
  Add your pseudocode here
  filter array for elements less than target
  walk through filtered array... 
  loop through array
  let findnumber = element - target
  search for number in array

*/

/*
  Add written explanation of your solution here

  if 2 integers in array sum to be the target, return true 
  else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
