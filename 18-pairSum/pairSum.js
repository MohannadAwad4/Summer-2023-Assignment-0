function pairSum(nums, target) {
  // Insert code here;
  // 2 3 4 6 9  target=11
 let map = {};


  if(nums.length <= 1){
    throw new Error("Error");
  }
 for(let i=0;i<nums.length;i++){
   
 if(target-nums[i]in map){
  return true;
  }
  map[nums[i]] = i;
 }





 return false;
}

// Do not edit this line;
module.exports = pairSum;