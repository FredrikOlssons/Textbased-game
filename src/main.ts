import './style.css'

import { progress } from './gameData'


let text = document.querySelector<HTMLDivElement>('#text')!
let leftbutton = document.getElementById("leftbutton") as HTMLElement
let rightbutton = document.getElementById("rightbutton") as HTMLElement



function onLoad(): void {
  //firstStep()
  renderStep()
}

let currentGamestep = progress[0]



/* function firstStep() : void {
  text!.innerText = state[0].question
  leftbutton!.innerText = state[0].choises.leftbutton!.answer
  rightbutton!.innerText = state[0].choises.rightbutton!.answer
} */
/* function checkId(step) {
  return step;
}

function myFunction() {
  document.getElementById("text")!.innerText = progress.find(id);
}
*/
function gameprogress(this: HTMLElement, event: MouseEvent): void {
  let nextStep: number = 0  
  
  if (this.id == "leftbutton") {
    nextStep = currentGamestep.choises.leftbutton!.nextQuestion
    //console.log(currentGamestep.choises.leftbutton!.nextQuestion)
  } else if(this.id == "rightbutton") {
    nextStep = currentGamestep.choises.rightbutton!.nextQuestion
    //console.log(currentGamestep.choises.rightbutton!.nextQuestion)
  } else(
    console.log("Fail")
    )
    
    const found = progress.find(function(gameStep) {
      return gameStep.id == nextStep
    });
    if ( found ) {
      currentGamestep = found
      console.log(found)
      renderStep()
    }
    
  }  
  
  function renderStep() {
    text!.innerText = currentGamestep.question
    leftbutton!.innerText = currentGamestep.choises.leftbutton!.answer
    rightbutton!.innerText = currentGamestep.choises.rightbutton!.answer
  }
   
   //gameprogress(event)
   
    
    
    /* for (let i = 0; i < currentGamestep.length; i++)  {
      const gameState = currentGamestep; */
      
      /*    if (choises == this.id  ) {
      text!.innerText = currentGamestep.question
      leftbutton!.innerText = currentGamestep.choises.leftbutton!.answer
      rightbutton!.innerText = currentGamestep.choises.rightbutton!.answer
  } 
 // text?.innerText = gameState.question
 
 console.log(gameState)
 console.log('hej')*/


leftbutton!.addEventListener("click", gameprogress)  

rightbutton!.addEventListener("click", gameprogress) 


onLoad()







/* console.log('hej')
const textBox = document.querySelector<HTMLDivElement>('text');
  
 */

/* const optionbuttons = document.getElementById('answer_buttons')
if( optionbuttons ) {
  window.addEventListener("click", () => {showAnswer()
  }
  )
  } */

  
  //console.log(questions)
  
  /* 
  let progress = {}
  
  function startTheGame() {
  progress = {}
}


function showText(questionIndex: number) {
  const question: number = questions.find(question => question.id == questionIndex)
  textBox.innerText = questions.text
}

function optionSelect(option: number) {
  
}
*/




/* function showAnswer() {
  let textboxAnswer: string = options.answerText
  console.log(textboxAnswer)
}
 */




//startTheGame()




/* 
let myString: string = "Hello";
let myBoolean: boolean | string | undefined = true;

interface User {
  name: string, 
  age: number
}

interface Fordon {
brand: string
}

interface Bil extends Fordon {
doors: string[]
}

interface Motorcykel {
footpegs: string[]
}

let car : Bil

let myObject: { name: string, age: number } = {
  name: "Fredrik",
  age: 35
}

//myObject.name = 54;
myObject.age = 54;

let users: {name: string, age: number }[] = [{
    name: "Fredrik",
  age: 35
  },
  {
    name: "Amina",
    age: 21
},
{
    name: "Victor",
    age: 78
}
]

  users.forEach((user) =>{

  }) 

const addUser: (name: string, age: number) => void = (name, age) => {
  //users.push({name: name, age})
  const newUsersList = [...users, {name, age}]
  users = newUsersList
}

console.log(users)
addUser("Kalle", 18)
console.log(users)

const calculateNumbers: (numOne: number, numTwo: number) => boolean = (x, y) => {
  return (x + y as unknown as boolean)
}

console.log (calculateNumbers(10, 20))

const logUsers: (users: {name: string, age: number}) => void = (users) => {
  users.forEach((user) => {
    let {name, age} = users
    console.log(name, age)
  });
}

 */