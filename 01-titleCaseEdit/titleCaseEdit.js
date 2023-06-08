function titleCaseEdit(title) {
  // Insert code here;
  // I went to the park


  words = title.split(" ");
  console.log(words);

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  
  return words.join(" ");



  //   arr = title.split(" ");
  //   console.log(a)
  //   for(let i=0;i<arr.lenght;i++){
  //     arr[i]=arr[i][0].toUpperCase()+arr[i].substr(1);
  //   }
  
  // return arr.join(" ");
  
}

// Do not edit this line;
module.exports = titleCaseEdit;