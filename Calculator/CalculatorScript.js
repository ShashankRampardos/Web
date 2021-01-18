(function(){
const screen = document.querySelector('.screen');
let buffer='0';
let total=0;
let prevOp;//previous operator=

document
.querySelector('.calc-buttons')
.addEventListener('click',e=>buttonClickFn(e.target.innerText));//arrow ƒ(X) is like inverse on ƒ(x)
//function(e){buttonclickfn(e.target.innetrText)}

function buttonClickFn(value){
    isNaN(parseInt(value))?handleSymbol(value) : handleNumber(value);//to check if it is a number
    render();
}
function handleNumber(value){
    return buffer ==='0' ? (buffer = value) : (buffer+=value);//value is a string += operator will concatinate two digits lilk '1'+'2' is '12'
}
function handleSymbol(value){
    switch(value){
        case 'C':
            buffer = '0';
            total = 0;
            break;
        case '=':
            if(prevOp===null){return;
                break;}
            
            else
            calculate(parseInt(buffer));//this is like else part
            prevOp = null;
            buffer = ''+total;
            total = 0;
            break; 
        case '←':
            if(buffer.length === 1){//buffer will at lesat have one digit value.
            buffer = '0';}
            else{
                buffer = buffer.slice(0,buffer.length-1)//slice(?start,?end);
            }
            break;
        default:
            handleMath(value);    
    }
function handleMath(value){
    const intBuffer = parseInt(buffer);
    if(total===0){
        total = intBuffer;
    }else{
        calculate(intBuffer)
    }
    prevOp=value;
    buffer='0';
}    
}
function render(value){
    screen.innerText=buffer;
}
function calculate(intBuffer){
     if(prevOp === '+'){
         total+=intBuffer;
     }else if(prevOp === '-'){
        total-=intBuffer;
     }else if(prevOp === 'x'){
        total*=intBuffer;
     }else {
        total/=intBuffer;
    }
   

     
}
})();