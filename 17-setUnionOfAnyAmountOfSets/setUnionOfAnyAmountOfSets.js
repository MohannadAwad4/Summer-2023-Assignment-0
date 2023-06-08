function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  
  

  let s = new Set();
  
  
  args.forEach((row) => {
    row.forEach((element) => {
      s.add(element);
    });
  });
  return s;
}


// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;