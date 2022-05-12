import { Progress } from "./interfaces"

export let progress: Progress[] = [
    {
        id: 0,
        question: 'Hello! If this is the first time playing, welcome! If you failed and had to restart, DO BETTER THIS TIME!',
        choises: {
            leftbutton: { answer: "Play the game :)", nextQuestion: 1}, 
            rightbutton: { answer: "I don not the time, okay a quickie then", nextQuestion: 1}
        }
    }, 
    {
        id: 1,
        question: 'Santa is in the mood for some sweets, do you want him to try and steal Mrs. Santas hidden chocolatebar?',
        choises: {
            leftbutton: { answer: "No, she will kill him", nextQuestion: 0}, 
            rightbutton: { answer: "Hell yeah, it is just laying there anyway", nextQuestion: 2}
        }
    }, 
    {
        id: 2,
        question: 'He reaches the second step of the ladder and is exhausted, what should he do now?',
        choises: {
            leftbutton: { answer: "Drink a Nocco and keep climbing, you can almost taste the sweetness", nextQuestion: 3}, 
            rightbutton: { answer: "Rest for a bit, then give it your all clear the next step", nextQuestion: 3}
        }
    },
    {
        id: 3,
        question: 'If Santa eats this chocolatebar he will eat over 1000 kcal, is it worth it?',
        choises: {
            leftbutton: { answer: 'Yes, come on he is already as fat as he can be', nextQuestion: 4}, 
            rightbutton: { answer: 'Say no and you will hurt Santas feelings', nextQuestion: 0}
        }
    },
    {
        id: 4,
        question: 'Santa slips on the top step, do will you do to help him!',
        choises: {
            leftbutton: { answer: 'Call for help', nextQuestion: 4}, 
            rightbutton: { answer: '42, the answer to everything', nextQuestion: 5}
        }
    },
    {
        id: 5,
        question: 'Santa can now reach the chocolatebar, should he grab it?',
        choises: {
            leftbutton: { answer: 'No, I have changed my mind', nextQuestion: 3}, 
            rightbutton: { answer: 'YES! Gimme the f-ing candy', nextQuestion: 6}
        }
    },
    {
        id: 6,
        question: 'Mrs. Santa enters the room, sees Santa on the stairs and shoots him with a shotgun.... Are you happy with yourself?',
        choises: {
            leftbutton: { answer: 'Yes', nextQuestion: 7}, 
            rightbutton: { answer: 'No restart the game', nextQuestion: 0}
        }
    },
    {
        id: 7,
        question: 'You bastard, think about the children and restart the game?',
        choises: {
            leftbutton: { answer: 'Yes', nextQuestion: 0}, 
            rightbutton: { answer: 'Yes', nextQuestion: 0}
        }
    },

]
