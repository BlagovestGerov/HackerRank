// Have the function Calculator(str) take the str parameter 
// being passed and evaluate the mathematical expression within in. 
// For example, if str were "2+(3-1)*3" the output should be 8. Another example: 
// if str were "(2-0)(6/2)" the output should be 6. 
// There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic. 
// The string will contain the operators: +, -, /, *, (, and ). If you have a string like this: #/#*# or #+#(#)/#, 
// then evaluate from left to right. 
// So divide then multiply, and for the second one multiply, divide, then add. 
// The evaluations will be such that there will not be any decimal operations, 
// so you do not need to account for rounding and whatnot.


function Calculator(str) { 
  str = str.split('');
  let bracketResults = [];
  let resultArr = [];

   function calc(arr){
     let result = [];
     for (let i =0; i< arr.length; i++){
       if(arr[i] === '*'){
         let value = result.pop();
         result.push(value * arr[i+1]);
         i++;
       } else if (arr[i] === '/') {
         let value = result.pop();
         result.push(value / arr[i+1]);
         i++;
       }else {
         result.push(arr[i]);
       }
     }

     let calculation = parseInt(result[0]);
     for (let i = 1; i < result.length; i = i + 2 ) {
       if(result[i] === '+'){
         calculation += parseInt(result[i+1]);
       }else {
         calculation -= parseInt(result[i+1]);          
       }
     }

     return calculation;
   }

	for (let i = 0; i < str.length; i++){
  if(str[i]==='('){
        let counter = i+1;
       
        while(str[counter] !==')'){
          bracketResults.push(str[counter])
          counter++;
        }
        
         i = counter;
      }
      if(str[i] === ')'){
      resultArr.push(calc(bracketResults).toString());
      bracketResults = [];
      }else{
      resultArr.push(str[i]);
      }
  }

      
console.log(calc(resultArr));
    str = [...calc(resultArr)];
  // code goes here  
  return str;

}
   
// keep this function call here 
console.log(Calculator('6*(7-3)+3*(2+4)'));