import "./style.css";

import { progress } from "./gameData";

// Hämtar in element från index.html
let text = document.querySelector<HTMLDivElement>("#text")!;
let leftbutton = document.getElementById("leftbutton") as HTMLElement;
let rightbutton = document.getElementById("rightbutton") as HTMLElement;

let hint = document.getElementById("hintText") as HTMLElement;
let img = document.querySelector<HTMLImageElement>(".santaHidden")!;
let img2 = document.querySelector<HTMLImageElement>(".mrssantaHidden")!;
let img3 = document.querySelector<HTMLImageElement>(".shotgun")!;
let img4 = document.querySelector<HTMLImageElement>(".stairHidden")!;

let inputField = document.querySelector<HTMLInputElement>(".input")!;
let backgroundSound = new Audio(
  "./src/assets/jingle-bells-james-lord-pierpont-christmas-piano-music-12341.mp3"
);

function onLoad(): void {
  renderStep();
}

// Funktioner för bakgrundsljud
function playSound() {
  backgroundSound.play();
  backgroundSound.volume = 0.2;
}

function stopSound() {
  backgroundSound.pause();
}

// Här styrs spelet och dess olika vägar, två val = höger och vänster knapp
let currentGamestep = progress[0];

function gameprogress(this: HTMLElement, event: MouseEvent): void {
  let nextStep: number = 0;

  if (this.id == "leftbutton") {
    nextStep = currentGamestep.choises.leftbutton!.nextQuestion;
  } else if (this.id == "rightbutton") {
    nextStep = currentGamestep.choises.rightbutton!.nextQuestion;
  } else console.log("Fail");

  // Loop och uthämtning av Progress från Gamedata.ts
  const found = progress.find(function (gameStep) {
    return gameStep.id == nextStep;
  });

  if (found) {
    currentGamestep = found;
    renderStep();
  }
}

// Här renderas det aktuella steget i spelet ut från gamedata.ts
function renderStep() {
  let picture = img;
  let imgMrsSanta = img2;
  let shotgun = img3;
  let soundeffect = new Audio(
    "./src/assets/Beefy-12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3"
  );
  let ladder = img4;

  // Visa knapparna
  if (currentGamestep.choises.leftbutton) {
    leftbutton!.innerText = currentGamestep.choises.leftbutton!.answer;
    leftbutton.classList.remove("input");
  } else {
    leftbutton.classList.add("input");
  }

  if (currentGamestep.choises.rightbutton) {
    rightbutton!.innerText = currentGamestep.choises.rightbutton!.answer;
  }

  // Visa frågan och förlängning av frågan i Progress
  if (currentGamestep.hint) {
    hint.innerText = currentGamestep.hint;
  }

  if (!currentGamestep.hint) {
    hint.innerText = "";
  }

  if (currentGamestep.question) {
    text!.innerText = currentGamestep.question;
  }

  // Visa upp inputfält istället för knapp och spara och använda värdet
  let input = inputField.value;

  if (
    currentGamestep.answerInput?.answer &&
    !currentGamestep.emptybox &&
    !currentGamestep.choises.leftbutton
  ) {
    if (inputField) {
      inputField.innerText = currentGamestep.answerInput.answer;
      inputField.classList.add("showInput");
    }
  } else if (inputField && currentGamestep.choises.leftbutton) {
    inputField.classList.remove("showInput");
    leftbutton.classList.remove("input");
  }

  if (input && currentGamestep.emptybox) {
    inputField.value = "";
    input = "";
  }

  if (input && !currentGamestep.numberInput && currentGamestep.printAnswer) {
    text.innerText =
      currentGamestep.printAnswer.correctAnswer +
      " " +
      input +
      "\n\n" +
      currentGamestep.question;
  } else if (
    input == currentGamestep.answerInput?.key &&
    currentGamestep.printAnswer &&
    currentGamestep.numberInput
  ) {
    text.innerText =
      currentGamestep.printAnswer.correctAnswer +
      "\n\n" +
      currentGamestep.question;
  } else if (
    input != currentGamestep.answerInput?.key &&
    currentGamestep.printAnswer &&
    currentGamestep.numberInput
  ) {
    text.innerText =
      currentGamestep.printAnswer.wrongAnswer +
      "\n\n" +
      currentGamestep.question;
  }

  // Spela upp bakgrundljud
  if (currentGamestep.playSound) {
    playSound();
  }

  // Visa bilder kopplade till Progress
  if (picture && currentGamestep.img) {
    picture.classList.add(currentGamestep.img.class);
    picture.append(currentGamestep.img.url);
  }

  if (currentGamestep.img2) {
    imgMrsSanta.classList.add(currentGamestep.img2!.class);
  }

  if (currentGamestep.img3) {
    shotgun.classList.add(currentGamestep.img3!.class);
    shotgun!.style.visibility = "visible";
    shotgun!.append(currentGamestep.img3!.url);
  }

  if (ladder && currentGamestep.img4) {
    ladder!.classList.remove("stairHidden");
    ladder!.classList.add(currentGamestep.img4.class);
    ladder!.append(currentGamestep.img4?.url);
  }

  // Spela ljudeffekter
  if (currentGamestep.soundeffect) {
    soundeffect.play();
    soundeffect.volume = 1.0;
  }

  // Starta om spelet
  if (currentGamestep.lastQuestion) {
    stopSound();
    location.reload();
  }
}

// Knapparnas onClick funktioner
leftbutton!.addEventListener("click", gameprogress);

rightbutton!.addEventListener("click", gameprogress);

onLoad();
