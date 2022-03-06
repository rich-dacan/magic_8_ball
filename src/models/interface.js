import { Answers } from "./answers.js";

export class Interface {

  static elementsGenerator(e) { 
    e.preventDefault()
    
    const message = Answers.ancientWisdom();

    const main = document.querySelector('#container-ball');

    const div2 = document.createElement('div');


    div2.innerText = message;
    div2.classList.add('answer')

    main.appendChild(div2);

    setTimeout(()=>{

      div2.classList.remove("answer");
      div2.classList.add('hidden');

    }, 3000);

  }
}
