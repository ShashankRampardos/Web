// document.getElementById('id');
// document.getElementsByTagName("Tag name");
// document.getElementsByClassName('class name');
// let para= document.getElementById(`para1`);
// setTimeout(function(){
//     para.innerText="YOLO world";
// },2000);
// let elem=document.querySelectorAll();
let ele=document.querySelector('div p');
setTimeout(function (){
    ele.innerText="Yolo word";
},1500);

//CREATE ELEMENTS

function getd(){
    let adiv=document.createElement('div');
    let para=document.createElement('p');
    para.classList.add('para');
    para.textContent='Dynamic Content';
    // para.style.color='brown';
    // para.style=' background-color: rgb(34, 175, 133)';
    // para.style='font-size: 28px';
    adiv.appendChild(para);
    
    document.body.appendChild(adiv);

}
function  getImg()
{
    // let div=document.createElement('div');
    // div.classList.add('div');
    let im=document.createElement('img');
    im.classList.add('im');
    im.src='Groudon.jpg';
    
    im.title='Dynamicimage';
    // im.href="C:\Users\puneet vashistha\Pictures\images";
    // div.appendChild(im);
    var div= document.querySelector('#FLEX');

    div.insertAdjacentElement('afterbegin',im);
    
}
let abc=document.querySelector('#para1');
