let button1 = document.querySelector('#button-1');
let button2 = document.querySelector('#button-2');
let input1 = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');
let ul1 = document.querySelector('#ul-1');
let ul2 = document.querySelector('#ul-2');

let online1 = document.querySelector('#online-1');
let typing1 = document.querySelector('#typing-1');
let online2 = document.querySelector('#online-2');
let typing2 = document.querySelector('#typing-2');

let gelen = document.querySelector('#gelen');
let geden = document.querySelector('#geden');

let back1 = document.querySelector('.back-1');
let back2 = document.querySelector('.back-2');

input1.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button1.click();
  }
});

input2.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    button2.click();
  }
});



//1.Online sozunun typing sozune kechmesi uchun lazim olan funksiyalar


input1.addEventListener('keydown',orxaninKlaviaturasi);
function orxaninKlaviaturasi(){
  online2.classList.remove('active');
   typing2.removeAttribute('style');
   typing2.classList.add('active');
   online2.classList.add('deactive');
}

input1.addEventListener('keyup',orxaninKlaviaturasiYuxari);
function orxaninKlaviaturasiYuxari(){
  online2.classList.remove('deactive');
  typing2.setAttribute('style','display:none');
  online2.classList.add('active');
} 




input2.addEventListener('keydown',zakirinKlaviaturasi);
function zakirinKlaviaturasi(){
  online1.classList.remove('active');
   typing1.removeAttribute('style');
   typing1.classList.add('active');
   online1.classList.add('deactive');
}

input2.addEventListener('keyup',zakirinKlaviaturasiYuxari);
function zakirinKlaviaturasiYuxari(){
  online1.classList.remove('deactive');
  typing1.setAttribute('style','display:none');
  online1.classList.add('active');
} 




  

//2.Yazilan metnin gorulmesi uchun lazim olan funksiyalar

button1.addEventListener('click', orxandanGonderilen);
function orxandanGonderilen() {
  

  if(input1.value.length==0){
    return;
  }
   
  else{
  geden.play();
  let li1 = document.createElement('li');
  let div1 = document.createElement('div');
  div1.innerHTML = (`${input1.value}`);
  li1.classList.add('li-1');
  div1.classList.add('div-1');
  ul1.appendChild(li1);
  li1.appendChild(div1);

  let li22 = document.createElement('li');
  let div22 = document.createElement('div');
  div22.innerHTML = (`${input1.value}`);

  input1.value = "";

  setTimeout(() => {
    gelen.play();
    li22.classList.add('li-22');
    div22.classList.add('div-22');
    ul2.appendChild(li22);
    li22.appendChild(div22);
  }, 1000);
}
}


button2.addEventListener('click', zakirdenGonderilen);
function zakirdenGonderilen() {
 
  if(input2.value.length==0){
    return;
  }

  else{
  geden.play();
  let li2 = document.createElement('li');
  let div2 = document.createElement('div');
  div2.innerHTML = (`${input2.value}`);
  li2.classList.add('li-2');
  div2.classList.add('div-2');
  ul2.appendChild(li2);
  li2.appendChild(div2);

  let li11 = document.createElement('li');
  let div11 = document.createElement('div');
  div11.innerHTML = (`${input2.value}`);

  input2.value = "";

  setTimeout(() => {
    gelen.play();
    li11.classList.add('li-11');
    div11.classList.add('div-11');
    ul1.appendChild(li11);
    li11.appendChild(div11);
  }, 1000);
}
}
