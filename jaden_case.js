function capatalize(word){
    return word[0].toUpperCase() + word.slice(1); //Converts  index  0 of the string to upparcase and joins remaining string
    

}

function toJadenCase(str){        //Takes a sentence as input
    str.toLowerCase();            //this converts all the sentence to lowercase
    let words = str.split(" ");   //  splits the string by  space
    let result = [];              // empty array for string the result after captilization
    for(word of words){           // Extracts every word and sends to capatalize function 
      result.push(capatalize(word));  //pushes every capatalized word in result
    }
    return  result.join(" ");     // joins the array by a space to look like a sentence
    
  }
  
  console.log(toJadenCase("hello there how are you heHe")); //input
  