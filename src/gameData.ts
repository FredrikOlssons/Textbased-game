import { Progress } from "./interfaces"


// Skapar spelets innehåll och vart alternativen ska leda spelaren
export let progress: Progress[] = [
    {
        id: 0,
        img: {url: "./src/assets/santa-left.png", class: "hiddenSanta"},
        question: 'Hello you! Play and perform this game and affect every child in the world, become the hero or break everyones heart! ',
        hint: 'Hint: If you just restarted the game because you are an idiot..... DO BETTER THIS TIME!',
        emptybox: true,
        choises: {
            leftbutton: { answer: "Yes please! Play the game", nextQuestion: 12}, 
            rightbutton: { answer: "No I can't take the pressure, but okay for the children then", nextQuestion: 12}
        }
    }, {
        id: 12,
        img: {url: "./src/assets/santa-left.png", class: "santa1"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Please enter your name. \n\nIf your name is more than 12 characters, get yourself a nickname...',
        hint: '\nI mean in general! The game works anyway, but you just have a really long name! Thats all I am saying...',
        playSound: true,
        answerInput: {answer: 'Write your answer here'},
        choises: {             
            rightbutton: { answer: "Confirm", nextQuestion: 1}
        }
    },
    {
        id: 1,
        img: {url: "./src/assets/santa-left.png", class: "santa1"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Santa is in the mood for some sweets, do you want him to try and steal Mrs. Santas hidden chocolatebar?',
        printAnswer: {correctAnswer: 'Welcome ', wrongAnswer: ''},
        firstQuestion: true,
        choises: {
            leftbutton: { answer: "Nooooo, she will kill him", nextQuestion: 8}, 
            rightbutton: { answer: "Hell yeah, it is gonna go bad just laying there anyway", nextQuestion: 2}
        }
    }, 
    {
        id: 8,
        img: {url: "./src/assets/santa-left.png", class: "santa1"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Are you really that chicken? Come on! Santa really need his fix!',
        emptybox: true,
        choises: {
            leftbutton: { answer: "No, I want my mommy", nextQuestion: 0}, 
            rightbutton: { answer: "Alright, lets kick som candy ass", nextQuestion: 2}
        }
    }, 
    {
        id: 2,
        img: {url: "./src/assets/santa-left.png", class: "santa"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Santa is exhausted when he reaches the first step of the ladder, what should he do now?',
        emptybox: true,
        choises: {
            leftbutton: { answer: "Have him drink a Red Bull and fly up to the next step", nextQuestion: 9}, 
            rightbutton: { answer: "Have him find the will by imagine the taste of that sweet candy", nextQuestion: 3}
        }
    },
    {
        id: 9,
        img: {url: "./src/assets/santa-left.png", class: "santa2"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: "That Red Bull sure did the thing, filled with caffiene and vitamins an shit.", 
        hint: "\nDisclaimer: The developer of this game is not getting paid by Red Bull... yet)",
        emptybox: true,
        choises: {
            leftbutton: { answer: "That's really to bad, he is really worth it. Well then, climb on!", nextQuestion: 3}, 
            rightbutton: { answer: "One more of those and even Rudolf will be jealous. On with the climbing", nextQuestion: 3}
        }
    },
    {
        id: 3,
        img: {url: "./src/assets/santa-left.png", class: "santa2"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'If Santa eats this chocolatebar he will eat over 1000 kcal, is it worth it?',
        emptybox: true,
        hint: 'Hint: Santa is very sensitive about his weight',
        choises: {
            leftbutton: { answer: 'Yes, come on he is already as fat as he can be', nextQuestion: 4}, 
            rightbutton: { answer: 'Say no, hurt his feelings and never get presents again', nextQuestion: 2}
        }
    },
    {
        id: 4,
        img: {url: "./src/assets/santa-left.png", class: "santa3"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Santa slips on the step, what do you say to help him!',
        emptybox: true,
        hint: 'Hint: If you are to loud Mrs. Santa will hear you',
        choises: {
            leftbutton: { answer: 'Call for help', nextQuestion: 7}, 
            rightbutton: { answer: 'whisper... Come on chubby! Almost there!', nextQuestion: 10}
        }
    },
    {
        id: 10,
        img: {url: "./src/assets/santa-left.png", class: "santa3"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Haha did you really think that only some sweet-talk will get you to the line...... Solve this tricky one to advance! \n\nWhat is 28 476 / 678!',
        hint: '\nHint: "The Answer to the Ultimate Question of Life, the Universe, and Everything"',
        
        answerInput: {answer: 'Write your answer here'}, 
        choises: {
            rightbutton: { answer: 'Confirm', nextQuestion: 13}
        }
    },
    {
        id: 5,
        img: {url: "./src/assets/santa-left.png", class: "santa5"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Close enough! Santa can now reach the chocolatebar, should he grab it?',
        emptybox: true,
        choises: {
            leftbutton: { answer: 'No, I have changed my mind', nextQuestion: 3}, 
            rightbutton: { answer: 'YES! Gimme the f-ing candy', nextQuestion: 6}
        }
    },
    {
        id: 13,
        img: {url: "./src/assets/santa-left.png", class: "santa4"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Then what will this print out...',        
        hint: '<h1>Hello World</h1>',
        answerInput: {answer: 'Write your answer here', key: 42}, 
        numberInput: true,
        printAnswer: {correctAnswer: 'Thats right! Here is your towel', wrongAnswer: 'No no no! You really need to get your hitchhikers references straight'},
        choises: {
            leftbutton: { answer: 'Oh oh wait a minute I got this... eeehhh green!', nextQuestion: 5}, 
            rightbutton: { answer: 'What do I look like, a programmer or something.....', nextQuestion: 5}
        }
    },
    {
        id: 6,
        img: {url: "./src/assets/santa-left.png", class: "santa5"},
        img2: {url: "./src/assets/471-4717969_mrs-claus-santa-claus.png", class: "mrssanta"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        question: 'Mrs. Santa enters the room, sees Santa on the stairs and gets a mysterious frown on her face.... Climb down? ?',
        emptybox: true,
        choises: {
            leftbutton: { answer: 'No, to hell with that bitch', nextQuestion: 7}, 
            rightbutton: { answer: 'Yes please, she looks angry', nextQuestion: 14}
        }
    },
    {
        id: 7,
        img: {url: "./src/assets/santa-left.png", class: "santa6"},
        img2: {url: "./src/assets/471-4717969_mrs-claus-santa-claus.png", class: "mrssanta"},
        img3: {url: "./src/assets/Fortnite-Pump-Transparent.png", class: "shotgun"},
        img4: {url: "./src/assets/580b585b2edbce24c47b2bbe.png.crdownload", class: "stair"},
        soundeffect: {url: "./src/assets/Beefy-12-Gauge-Pump-Action-Shotgun-Close-Gunshot-A-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3"},
        question: 'Are you happy with yourself! You bastard, think about the children and restart the game?',
        emptybox: true,
        choises: {
            leftbutton: { answer: 'Yes', nextQuestion: 11}, 
            rightbutton: { answer: 'Yes, I am addicted to this game now', nextQuestion: 11}
        }
    },
    {
        id: 14,
        img: {url: "./src/assets/santa-left.png", class: "santa7"},
        img2: {url: "./src/assets/471-4717969_mrs-claus-santa-claus.png", class: "mrssanta"},        
        question: 'Santa gets real regretfull for trying to steal the candy so he appologizes to his wife, gets a hug and then they hop into the bedroom',
        emptybox: true,
        choises: {
            leftbutton: { answer: 'Eeeww! I dont like this ending, take me back to the start for a different ending', nextQuestion: 11}, 
            rightbutton: { answer: 'I am a sucker for "happy endings", please restart the game', nextQuestion: 11}
        }
    },
    {
        id: 11,
        img: {url: "./src/assets/santa-left.png", class: "santa6"},
        question: 'You suck at this',
        emptybox: true,
        lastQuestion: true,
        choises: {
            leftbutton: { answer: '', nextQuestion: 0}, 
            rightbutton: { answer: '', nextQuestion: 0}
        }
    },

]
