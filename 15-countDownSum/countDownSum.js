class MySolution {
   countDownSum(num) {
    // Insert code here;
    if(num===0){
      return num;
    }
      return num + countDownSum(num-1);
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;