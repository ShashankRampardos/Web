// let c1=document.querySelector('.c1');
// let c2=document.querySelector('.c2');
// let c3=document.querySelector('.c3');
// let c4=document.querySelector('.c4');
// let c5=document.querySelector('.c5');

// let dots=document.querySelector('.dots');
// function brush(col)
// {
//     dots.style.background=col;
// }
// function coloring(color){
//     dots.addEventListener('click',brush(color));
// }

// c1.addEventListener('click',brush(`red`));
// c2.addEventListener('click',brush(`yello`));
// c3.addEventListener('click',brush(`green`));
// c4.addEventListener('click',brush(`blue`));
// c5.addEventListener('click',brush(`pink`));
console.log('hi');
let selectedColor="#fff";
init();
colorSelector();
function init()
{
    let dots = document.querySelector('#dotBox');
    for(let i=0; i < dots.children.length; i++)
    {
        const dot = dots.children[i];
        dot.addEventListener('click',changeColor);
    }
}

function changeColor(e){
    console.log(e);
    e.target.style.backgroundColor = selectedColor;
} 
function  colorSelector()
{
 let palette = document.querySelector('#colorPicker');
 let colors=['red','orange','pink','limegreen','blue'];
 for (let i=0;i<palette.children.length;i++){
  const colorBox = palette.children[i];
      colorBox.style.backgroundColor = colors[i%colors.length];
      colorBox.addEventListener('click',function(e) {
          selectedColor = e.target.style.backgroundColor;
      })
                                             } 

}