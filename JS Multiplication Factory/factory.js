function multiplicationfactory(firstNumber){
   return function(secondNumber)
   { return firstNumber*secondNumber;}
}
let mult=multiplicationfactory(17)
mult(5);