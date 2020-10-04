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
    adiv.appendChild(para);
    
    document.body.appendChild(adiv);

}
function  getImg()
{
    // let div=document.createElement('div');
    // div.classList.add('div');
    let im=document.createElement('img');
    im.classList.add('im');
    im.src='C:/Users/puneet vashistha/Pictures/images/Groudon.jpg';
    
    im.title='Dynamicimage';
    // im.href="C:\Users\puneet vashistha\Pictures\images";
    // div.appendChild(im);
    var div= document.getElementById('FLEX');
    div.appendChild(im);
    
}