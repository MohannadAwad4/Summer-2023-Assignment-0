function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let count = 1;
  for(let i = 0; i < args.length; i++){
    count *= args[i];
  }
  return count;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;