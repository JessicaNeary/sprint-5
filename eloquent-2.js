Exercises
  Looping a Triangle
    for(var i=1; i<8; i++){
      var string = "";
      for(var j=1; j<=i; j++){
        string += "#";
      }
      console.log(string);
    }

  FizzBuzz
    for(var i=1; i<101; i++){
      var output = "";
      if(i%3 === 0){
         output += "Fizz";
      }
    	if(i%5 === 0){
         output += "Buzz";
      }
    	if(output == ""){
         output = i;
      }
      console.log(output);
    }

  Chess board
    var string = "";
    var size = 8;
    for(var i=1; i<=size; i++){
      if(i%2 !== 0){
        string += " ";
      }
      for(var j=1; j<=size; j++){
         if(j%2 === 0){
            string += "#";
         }
         else{
            string += " ";
         }
      }
      string += "\n";
    }
    console.log(string);
