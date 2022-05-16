import './style.css'

import { progress } from './gameData'


let text = document.querySelector<HTMLDivElement>('#text')!
let leftbutton = document.getElementById("leftbutton") as HTMLElement
let rightbutton = document.getElementById("rightbutton") as HTMLElement

let img = document.querySelector<HTMLImageElement>(".santaHidden")!
let img2 = document.querySelector<HTMLImageElement>(".mrssantaHidden")!
let img3 = document.querySelector<HTMLImageElement>(".shotgun")!



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
      //console.log(found)
      renderStep()
    }
    
  }  
  
  function renderStep() {
    let picture = img
    let imgMrsSanta = img2
    let shotgun = img3

    text!.innerText = currentGamestep.question
    leftbutton!.innerText = currentGamestep.choises.leftbutton!.answer
    rightbutton!.innerText = currentGamestep.choises.rightbutton!.answer
    
    if ( picture && currentGamestep.img ) {
     // picture.src = currentGamestep.img?.url
    // picture.classList.remove('hiddenSanta') 
     picture.classList.add(currentGamestep.img.class)
     picture.style.visibility = "visible"
      picture.append(currentGamestep.img.url)
      //console.log('hej')
      if (currentGamestep.id == 6 || currentGamestep.id == 7) {
        imgMrsSanta.classList.add(currentGamestep.img2!.class)
        imgMrsSanta!.style.visibility = "visible"
        imgMrsSanta!.append(currentGamestep.img2!.url)
        
        shotgun.classList.add(currentGamestep.img3!.class)
        shotgun!.style.visibility = "visible"
        shotgun!.append(currentGamestep.img3!.url)
      }
    }
 
    //img.src = currentGamestep.img?.url
   
  }


leftbutton!.addEventListener("click", gameprogress)  

rightbutton!.addEventListener("click", gameprogress) 


onLoad()
