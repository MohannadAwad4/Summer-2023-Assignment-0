function fizzBuzz(start, end) {
  // Insert code here;
  var num=[];
  for(let i = start; i <= end; i++){
    if(i%3 ==0 && i%5 == 0){
      num.push("FizzBuzz");
    }
    else if(i%3 == 0 && i%5 != 0){
      num.push("Fizz");

    }
    else if(i%5==0 && i%3 !=0){
      num.push("Buzz");

    }
    else{
      num.push(i);
    }
  }
  return num;
}

// Do not edit this line;
module.exports = fizzBuzz;