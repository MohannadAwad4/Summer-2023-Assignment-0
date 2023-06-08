function frequencyCounter(word) {
  // Insert code here;
  let map = {};
  for(let i=0;i<word.length;i++){
    if(map[word[i]]){
      //add value count by 1
      map[word[i]] +=1;
    }
    else{
    map[word[i]]=1;
  }
}
  return map;
}

// Do not edit this line;
module.exports = frequencyCounter;