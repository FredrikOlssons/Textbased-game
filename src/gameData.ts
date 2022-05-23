import { Progress } from "./interfaces"

export let progress: Progress[] = [
    {
        id: 0,
        img: {url: "./src/assets/santa-left.png", class: "hiddenSanta"},
        question: 'Hello! And welcome to the game!',
        hint: 'Hint: If you just restarted the game because you are an idiot..... DO BETTER THIS TIME!',
        choises: {
            leftbutton: { answer: "Play the game", nextQuestion: 12}, 
            rightbutton: { answer: "Don't have the time, but okay there is always time for a quickie ;)", nextQuestion: 12}
        }
    }, {
        id: 12,
        img: {url: "./src/assets/santa-left.png", class: "santa1"},
        question: 'Please enter your name. \n\nIf your name is more than 12 characters, get yourself a nickname...',
        hint: '\nI mean in general! The game works anyway, but you just have a really long name... \nThats all I am saying!',
        playSound: true,
        answerInput: {answer: 'Write your answer here', key: ''},
        choises: {             
            rightbutton: { answer: "Confirm", nextQuestion: 1}
        }
    },
    {
        id: 1,
        img: {url: "./src/assets/santa-left.png", class: "santa1"},
        question: 'Santa is in the mood for some sweets, do you want him to try and steal Mrs. Santas hidden chocolatebar?',
        firstQuestion: true,
        choises: {
            leftbutton: { answer: "No, she will kill him", nextQuestion: 8}, 
            rightbutton: { answer: "Hell yeah, it is just laying there anyway", nextQuestion: 2}
        }
    }, 
    {
        id: 8,
        img: {url: "./src/assets/santa-left.png", class: "santa1"},
        question: 'Are you really that chicken? Come on live a little!',
        choises: {
            leftbutton: { answer: "No, I want my mommy", nextQuestion: 0}, 
            rightbutton: { answer: "Alright, lets kick som candy ass", nextQuestion: 2}
        }
    }, 
    {
        id: 2,
        img: {url: "./src/assets/santa-left.png", class: "santa"},
        question: 'Santa reaches the second step of the ladder and is exhausted, what should he do now?',
        choises: {
            leftbutton: { answer: "Drink a Nocco and fly up to the next step", nextQuestion: 9}, 
            rightbutton: { answer: "Rest for a bit, then give it your all to clear the next step", nextQuestion: 3}
        }
    },
    {
        id: 9,
        img: {url: "./src/assets/santa-left.png", class: "santa2"},
        question: 'That Nocco sure did the thing, filled with caffiene and vitamins an shit. Give him another one?',
        choises: {
            leftbutton: { answer: "I dont want to give him a heartattack... On with the climbing", nextQuestion: 3}, 
            rightbutton: { answer: "No, one more and even Rudolf will be jealous", nextQuestion: 3}
        }
    },
    {
        id: 3,
        img: {url: "./src/assets/santa-left.png", class: "santa2"},
        question: 'If Santa eats this chocolatebar he will eat over 1000 kcal, is it worth it?',
        hint: 'Hint: Santa is very sensitive about his weight',
        choises: {
            leftbutton: { answer: 'Yes, come on he is already as fat as he can be', nextQuestion: 4}, 
            rightbutton: { answer: 'Say no, hurt his feelings and never get presents again', nextQuestion: 1}
        }
    },
    {
        id: 4,
        img: {url: "./src/assets/santa-left.png", class: "santa3"},
        question: 'Santa slips on the step, what do you say to help him!',
        hint: 'Hint: If you are to loud Mrs. Santa will hear you',
        choises: {
            leftbutton: { answer: 'Call for help', nextQuestion: 7}, 
            rightbutton: { answer: 'Come on you Heffalump! Almost there!', nextQuestion: 10}
        }
    },
    {
        id: 10,
        img: {url: "./src/assets/santa-left.png", class: "santa3"},
        question: 'Okay a mathquestion then...... Solve this tricky one to advance! \n\nWhat is 28 476 / 678!',
        hint: '\nHint: "The Answer to the Ultimate Question of Life, the Universe, and Everything"',
        answerInput: {answer: 'Write your answer here', key: '42'}, 
        choises: {
            //leftbutton: { answer: 'Wait a minute, I ve got this... eeehh green!', nextQuestion: 5}, 
            rightbutton: { answer: 'Confirm', nextQuestion: 13}
        }
    },
    {
        id: 5,
        img: {url: "./src/assets/santa-left.png", class: "santa5"},
        question: 'Close enough! Santa can now reach the chocolatebar, should he grab it?',
        choises: {
            leftbutton: { answer: 'No, I have changed my mind', nextQuestion: 3}, 
            rightbutton: { answer: 'YES! Gimme the f-ing candy', nextQuestion: 6}
        }
    },
    {
        id: 13,
        img: {url: "./src/assets/santa-left.png", class: "santa4"},
        question: 'Thats right! Then what will this print out...',
        hint: '<h1>Hello World</h1>',
        choises: {
            leftbutton: { answer: 'Oh oh wait a minute I got this... eeehhh green!', nextQuestion: 5}, 
            rightbutton: { answer: 'What do I look like, a programmer or something.....', nextQuestion: 5}
        }
    },
    {
        id: 6,
        img: {url: "./src/assets/santa-left.png", class: "santa5"},
        img2: {url: "./src/assets/471-4717969_mrs-claus-santa-claus.png", class: "mrssanta"},
        question: 'Mrs. Santa enters the room, sees Santa on the stairs and takes out her shotgun.... Do you want to restart the game?',
        choises: {
            leftbutton: { answer: 'No, to hell with that bitch', nextQuestion: 7}, 
            rightbutton: { answer: 'Yes please, she looks angry', nextQuestion: 0}
        }
    },
    {
        id: 7,
        img: {url: "./src/assets/santa-left.png", class: "santa6"},
        img2: {url: "./src/assets/471-4717969_mrs-claus-santa-claus.png", class: "mrssanta"},
        img3: {url: "./src/assets/Fortnite-Pump-Transparent.png", class: "shotgun"},
        soundeffect: {url: "./src/assets/Beefy-12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3"},
        question: 'Are you happy with yourself! You bastard, think about the children and restart the game?',
        choises: {
            leftbutton: { answer: 'Yes', nextQuestion: 11}, 
            rightbutton: { answer: 'Yes, I am addicted to this game now', nextQuestion: 11}
        }
    },
    {
        id: 11,
        img: {url: "./src/assets/santa-left.png", class: "santa6"},
        question: 'You suck at this',
        lastQuestion: true,
        choises: {
            leftbutton: { answer: '', nextQuestion: 0}, 
            rightbutton: { answer: '', nextQuestion: 0}
        }
    },

]
