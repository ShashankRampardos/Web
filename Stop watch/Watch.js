const start=document.querySelector('.start');
const stop=document.querySelector('.stop');
const reset=document.querySelector('.reset');

let min=document.querySelector('.minute');
let sec=document.querySelector('.second');

let intervalID;
let timerTime=0;
stop.style.display = 'none';
function startT()
{
  intervalID=setInterval(incrementT,1000);//incrementT is a function name
  stop.style.display = 'inline-block';
  start.style.display = 'none';
}
function stopT()
{
    clearInterval(intervalID);
    start.style.display = 'inline-block';
    stop.style.display = 'none';
}
function resetT()
{
    stopT();
    timerTime=0;
    sec.innerText='00';
    min.innerText='00';
}
function incrementT(){
    timerTime++;
    const minsNumber= Math.floor(timerTime/60);//math is an object, floor is ////an instance
    const secNumber=timerTime%60;
    sec.innerText=zeroPadding(secNumber);
    min.innerText=zeroPadding(minsNumber);
    
    console.log('incrementTimer',timerTime);
}
function zeroPadding(number){
    return number<10?`0${number}`:number;
}

//we could use onclick or other attribute in html tag, but addEventListner is ///a better option for dunamic method
start.addEventListener('click',startT);//startT is a function name
stop.addEventListener('click',stopT);
reset.addEventListener('click',resetT);