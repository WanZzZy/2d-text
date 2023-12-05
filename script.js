//1 задание
let textElement = document.querySelector('.main_content_p');
let textB = document.querySelector('.italicButton')

function increaseFont() {
  var fontSize = parseInt(textElement.style.fontSize) || 16;
  fontSize = 30;
  textElement.style.fontSize = fontSize + "px";

}

function decreaseFont() {
  var fontSize = parseInt(textElement.style.fontSize) || 16;
  fontSize = 15;
  textElement.style.fontSize = fontSize + "px";
}

function textButton(){
  let text = document.querySelector('.main_content_p');
  text.style.fontStyle = "italic";
}
textB.addEventListener("click", textButton);

//2 задание 
let button1 = document.querySelector('.main_content_1');
let button2 = document.querySelector('.main_content_2');
let button3 = document.querySelector('.main_content_3');
let button4 = document.querySelector('.main_content_4');
let button5 = document.querySelector('.main_content_5');
let span = document.querySelector('.main_content_span');

function b1() {
  document.body.style.backgroundColor = "#ADE620";
  document.body.style.color = "black";
  span.innerHTML = "";
  span.insertAdjacentHTML('beforeend', `
  <span class="main_content_span">#ADE620</span>
  `);
}
button1.addEventListener("click", b1);

function b2(){
  document.body.style.backgroundColor = "#D720E6";
  document.body.style.color = "black";
  span.innerHTML = "";
  span.insertAdjacentHTML('beforeend', `
  <span class="main_content_span">#D720E6</span>
  `);
}
button2.addEventListener("click", b2);

function b3(){
  document.body.style.backgroundColor = "#20B6E6";
  document.body.style.color = "black";
  span.innerHTML = "";
  span.insertAdjacentHTML('beforeend', `
  <span class="main_content_span">#20B6E6</span>
  `);
}
button3.addEventListener("click", b3);

function b4(){
  document.body.style.backgroundColor = "#20E692";
  document.body.style.color = "black";
  span.innerHTML = "";
  span.insertAdjacentHTML('beforeend', `
  <span class="main_content_span">#20E692</span>
  `);
}
button4.addEventListener("click", b4);

function b5(){
  document.body.style.backgroundColor = "#E620D8";
  document.body.style.color = "black";
  span.innerHTML = "";
  span.insertAdjacentHTML('beforeend', `
  <span class="main_content_span">#E620D8</span>
  `);
}
button5.addEventListener("click", b5);


//3 задание
let on = document.querySelector('.main_content_on');
let off = document.querySelector('.main_content_off');
let white = document.querySelector('.main_content_white');
let black = document.querySelector('.main_content_black');
let lamp = document.querySelector('.lamp')

function offButton(){
    lamp.setAttribute("src", "./img/on.png"); 
}
on.addEventListener("click", offButton);

function onButton(){
  lamp.setAttribute("src", "./img/off.png"); 
}
off.addEventListener("click", onButton);

function whiteButton(){
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}
white.addEventListener("click", whiteButton);

function blackButton(){
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
black.addEventListener("click", blackButton);


//4 задание
let dob = document.querySelector('.main_content_dob');

function dobButton() {
  dob.insertAdjacentHTML('beforeend', `
  <button class="main_content_dob">Новая кнопка</button>
  `);
}
dob.addEventListener("click", dobButton);