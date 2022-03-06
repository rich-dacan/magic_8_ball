import { Answers } from "./src/models/answers.js";
// console.log(Answers)
import { Interface } from "./src/models/interface.js";

const ball8 = document.querySelector('#ball8');
ball8.addEventListener('click', zoas)

const btnMandae = document.querySelector('button')
btnMandae.addEventListener('click', Interface.elementsGenerator)

// const message = Answers.ancientWisdom();

// Interface.elementsGenerator(message)


function zoas() {

  const main = document.querySelector('main');
  const div = document.createElement('div');
 

  div.innerText = "Don't touch-me, human !!!";
  div.classList.add('zoas');


  main.appendChild(div);

  setTimeout(()=>{
    div.classList.remove("zoas");
    div.classList.add('hidden');

  }, 3000);


}

// function test(e) {
//   e.preventDefault()

//   const main = document.querySelector('#container-ball');

//   const div2 = document.createElement('div');

//   console.log(message)

//   div2.innerText = message;
//   div2.classList.add('answer')


//   console.log(div2)

//   main.appendChild(div2);

//   setTimeout(()=>{

//     div2.classList.remove("answer");
//     div2.classList.add('hidden');

//   }, 3000);

// }