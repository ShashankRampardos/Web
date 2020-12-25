// "https://source.unsplash.com/640x480/?laptop"
let text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consectetur esse, ipsum molestiae cum dolor maxime. Voluptatum odio excepturi eligendi ea similique, aliquid a odit maxime distinctio molestias non earum.";


createArticle('Laptop',"https://source.unsplash.com/640x480/?laptop",'Laptop',text);
createArticle('Jet',"https://source.unsplash.com/640x480/?jet",'Jet',text);
createArticle('Super Cars',"https://source.unsplash.com/640x480/?super cars",'Super Cars',text);
createArticle('Pokemon',"https://source.unsplash.com/640x480/?pokemon",'Pokemon',text);
createArticle('Sword & Shield',"https://source.unsplash.com/640x480/?sword and hield",'Sword & Shield',text);
createArticle('Disk Jockey',"https://source.unsplash.com/640x480/?DJ",'DJ',text);
createArticle('Radio Jockey',"https://source.unsplash.com/640x480/?radio jockey",'RJ',text);

function createArticle(head,imgsrc,altText,articleText)
{
let parent = document.querySelector('.row');
let article = document.createElement('div');
article.classList.add('article');
let a1h1 = document.createElement('h1');
a1h1.classList.add('title');
a1h1.textContent=head;
let laptop = document.createElement('img');
laptop.classList.add('laptop');
laptop.src = imgsrc;
laptop.alt = altText;
let a1p1=document.createElement('p');
a1p1.classList.add('text');
a1p1.textContent=articleText;


let a1p2=document.createElement('p');
let p2spn=document.createElement('span');
p2spn.classList.add('learn');
p2spn.textContent="Learn More";
a1p2.appendChild(p2spn);



article.insertAdjacentElement('afterbegin',a1h1);
article.insertAdjacentElement('beforeend',laptop);
article.insertAdjacentElement('beforeend',a1p1);
article.insertAdjacentElement('beforeend',a1p2);

parent.insertAdjacentElement('beforebegin',article);

console.log(article);
}

// let container=document.createElement('div');
// container.classList.add('container');
// let row=document.createElement('div');
// row.classList.add('row');
// let article1=document.createElement('div');
// article1.classList.add('article1');
// let a1h1=document.createElement('h1');
// a1h1.classList.add('a1h1');
// let a1p1=document.createElement('p');
// a1p1.classList.add('a1p1');

// a1p1.innerText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ex omnis eos, odit et tempora sint? Modi, assumenda odit provident harum sit expedita vero ipsam! Ipsam ratione nam libero eveniet.";
// a1p1.color='white';
// let a1img=document.createElement('img');
// a1img=classList.add('a1img');
// a1img.src="https://source.unsplash.com/640x480/?laptop"; 
// a1img.alt="laptop"; 
// a1img.title="laptop";
// let a1p2=document.createElement("p");
// a1p2.classList.add("a1p2");
// let a1spn=document.createElement('span');
// a1spn.classList.add("spn");


// let html=document.querySelector("#dom");
// html.insertAdjacentElement("afterbegin",container);

// container.insertAdjacentElement("afterbegin",row);
// row.insertAdjacentElement("afterbegin",article1);
// article.insertAdjacentElement("afterbegin",a1h1);
// a1h1.insertAdjacentElement("afterend",a1p1);
// a1p1.insertAdjacentElement("afterend",a1img);
// a1img.insertAdjacentElement("afterend",a1p2);
// a1p2.insertAdjacentElement("afterbegin",a1spn);
