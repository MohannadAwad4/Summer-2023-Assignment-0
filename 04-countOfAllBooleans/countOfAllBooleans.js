function countOfAllBooleans(arr) {
  var total = 0;
  for(var i=0;i<=arr.length;i++){
    if (typeof arr[i] === "boolean")
      total++;
  }
  return total; 
}

// Do not edit this line;
module.exports = countOfAllBooleans;