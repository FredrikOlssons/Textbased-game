import './style.css'

import { progress } from './gameData'


let text = document.querySelector<HTMLDivElement>('#text')!
let leftbutton = document.getElementById("leftbutton") as HTMLElement
let rightbutton = document.getElementById("rightbutton") as HTMLElement

let img = document.querySelector<HTMLImageElement>(".santaHidden")!
let img2 = document.querySelector<HTMLImageElement>(".mrssantaHidden")!
let img3 = document.querySelector<HTMLImageElement>(".shotgun")!

/* let soundIcon = document.querySelector<HTMLImageElement>(".soundOff")!

function muteSound() {

} */

function playSound() {
  let backgroundSound = new Audio("./src/assets/jingle-bells-james-lord-pierpont-christmas-piano-music-12341.mp3")
 // let startMusic = backgroundSound 
  backgroundSound.play();
  backgroundSound.volume = 0.2;
}


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
    let soundeffect = new Audio("./src/assets/Beefy-12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3")
  

    text!.innerText = currentGamestep.question
    leftbutton!.innerText = currentGamestep.choises.leftbutton!.answer
    rightbutton!.innerText = currentGamestep.choises.rightbutton!.answer
    
    if ( picture && currentGamestep.img ) {
     // picture.src = currentGamestep.img?.url
    // picture.classList.remove('hiddenSanta') 
     picture.classList.add(currentGamestep.img.class)
     picture.style.visibility = "visible"
      picture.append(currentGamestep.img.url)
     // playSound()
      
     // console.log(soundeffect)
      if (currentGamestep.id == 6 || currentGamestep.id == 7) {
        imgMrsSanta.classList.add(currentGamestep.img2!.class)
        imgMrsSanta!.style.visibility = "visible"
        //imgMrsSanta!.append(currentGamestep.img2!.url)
      }
    }

    if (currentGamestep.id == 7 && currentGamestep.soundeffect!.url) {
      shotgun.classList.add(currentGamestep.img3!.class)
      shotgun!.style.visibility = "visible"
      shotgun!.append(currentGamestep.img3!.url)
      soundeffect.play();
      soundeffect.volume = 1.0;
    }
    
    if (currentGamestep.id == 11) {
      location.reload()
    }
 
    //img.src = currentGamestep.img?.url
   
  }


leftbutton!.addEventListener("click", gameprogress)  

rightbutton!.addEventListener("click", gameprogress) 


onLoad()


/* 

//Anropet till ReactDOM görs en gång i början av koden och "kopplar" react applikationen till DOM:en
ReactDOM.render(
  element, 
  document.getElementById('root')
);

// Ärva från React.Component, Livscykel = render(), returnerar ett element
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// rendera en komponent & Props
function Welcome(props) {
  return <h1>Hello, {this.props.name}</h1>;
}

const element = <Welcome name='Sara'/>;

//State and lifcycles
(Constructor)
Render
ComponentDidMount
ComponentDidUpdate
ComponentWillUnmount
//Render anropas alltid före ComponentDidMount och ComponentDidUpdate 

class Clock extends ReadableStreamDefaultController.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {


  }

  componentWillUnmount() {


  }

    render() {
    return (
    <div>
    <h1>Hello World!</h1>
    <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
    </div>
    );
  }
}  */