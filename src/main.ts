import './style.css'

import { progress } from './gameData'


let text = document.querySelector<HTMLDivElement>('#text')!
let leftbutton = document.getElementById("leftbutton") as HTMLElement
let rightbutton = document.getElementById("rightbutton") as HTMLElement

let hint = document.getElementById("hintText") as HTMLElement
let img = document.querySelector<HTMLImageElement>(".santaHidden")!
let img2 = document.querySelector<HTMLImageElement>(".mrssantaHidden")!
let img3 = document.querySelector<HTMLImageElement>(".shotgun")!
let img4 = document.querySelector<HTMLImageElement>(".stair")!

let inputField = document.querySelector<HTMLInputElement>(".input")!    
let backgroundSound = new Audio("./src/assets/jingle-bells-james-lord-pierpont-christmas-piano-music-12341.mp3")

/* let soundIcon = document.querySelector<HTMLImageElement>(".soundOff")!

function muteSound() {
  
} */


let input = inputField.value;
console.log(input)
function getInputFromTextBox() {
  alert("Welcome " + input);
}

//inputField!.value = ""

function playSound() {
  backgroundSound.play();
  backgroundSound.volume = 0.9;
}

function stopSound() {
  backgroundSound.pause();
}


function onLoad(): void {
  renderStep()
}

let currentGamestep = progress[0]


function gameprogress(this: HTMLElement, event: MouseEvent): void {
  let nextStep: number = 0  
  
  if (this.id == "leftbutton") {
    nextStep = currentGamestep.choises.leftbutton!.nextQuestion
    
  } else if(this.id == "rightbutton") {
    nextStep = currentGamestep.choises.rightbutton!.nextQuestion
    
  } else(
    console.log("Fail")
    )
    
    const found = progress.find(function(gameStep) {
      return gameStep.id == nextStep
    });
    if ( found ) {
      currentGamestep = found
      renderStep()
    }
    
  }  
  
  function renderStep() {
    let picture = img
    let imgMrsSanta = img2
    let shotgun = img3
    let soundeffect = new Audio("./src/assets/Beefy-12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3")
    let ladder = img4
    
    if(currentGamestep.choises.leftbutton) {
      leftbutton!.innerText = currentGamestep.choises.leftbutton!.answer
      
    } else {
      
      leftbutton.classList.add('input')
    }
    
    if(currentGamestep.choises.rightbutton) {
      rightbutton!.innerText = currentGamestep.choises.rightbutton!.answer
    }
    
    if(currentGamestep.hint) {
      hint.innerText = currentGamestep.hint
    }
    if(!currentGamestep.hint) {
      hint.innerText = ''
    }
    
    if (currentGamestep.question) {
      text!.innerText = currentGamestep.question      
    }

    
    
    if(currentGamestep.answerInput){      
      
      if (inputField) {
        inputField.innerText = currentGamestep.answerInput.answer
        inputField.classList.add('showInput')   
        if (input == currentGamestep.answerInput.key) {
          alert('Good Job')
        }    
      } 
            
    } else if (!currentGamestep.answerInput && inputField) {
      inputField.classList.remove('showInput')
      leftbutton.classList.remove('input')
    }

    if(currentGamestep.id == 1) {
      getInputFromTextBox()
    }

    if(currentGamestep.playSound) {
      playSound()
    }
    
    if ( picture && currentGamestep.img ) {
      picture.classList.add(currentGamestep.img.class)
      picture.append(currentGamestep.img.url)
      if (currentGamestep.soundeffect) {
      }
    }
    
    if(currentGamestep.img2) {
      imgMrsSanta.classList.add(currentGamestep.img2!.class)      
    }    
    
    if (currentGamestep.img3) {
      shotgun.classList.add(currentGamestep.img3!.class)
      shotgun!.style.visibility = "visible"
      shotgun!.append(currentGamestep.img3!.url)
    }
    
    if (currentGamestep.soundeffect) {
      soundeffect.play();
      soundeffect.volume = 1.0;
    }

    if (!currentGamestep.choises.leftbutton && currentGamestep.answerInput) {
      
      //confirmBtn.classList.add('btn')
      //confirmBtn.innerText = currentGamestep.choises.confirmbutton.answer
      //buttonGrid.append(confirmBtn)
    }
    
    if(currentGamestep.lastQuestion) {
      stopSound()
      location.reload()
    }
    
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