(function(){
let textBox = document.querySelector('.lists');

textBox.onkeyup=function(e)
{
    if(e.keyCode===13){
        if(textBox.value)//if textBox has some text then call functionn
        {addItem();} 
    }
}

function addItem(){    
    let li = document.createElement('li');
    let ul = document.querySelector('.itemBox');
    li.classList.add('item');
    let textNode = document.createTextNode(textBox.value);
    li.appendChild(textNode);
    ul.appendChild(li);
    textBox.value="";
    li.onclick = function(e){
        e.target.remove();
    }
                    }

})();

    //let text = document.querySelector('#lists').value;

//let child=ul.children.length;
    
    // if(child===0){
        
    //     box.innerText=text;
    //     ul.insertAdjacentElement('afterbegin',box);

    //              }
    // else{
        
    //     box.innerText=text;
    //     ul.insertAdjacentElement('beforend',box);
        
    //     }

// textBox.addEventListener(onkeyup,addElement)
