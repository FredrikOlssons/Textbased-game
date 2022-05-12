export interface Progress {
    id: number,
    question: string
    choises: {
        leftbutton: buttonClick | null 
        rightbutton: buttonClick | null 
    }
}

interface buttonClick {
    answer: string
    nextQuestion: number
}





/* 
interface question { id: number, text: string, options: options[] | null }

 interface options {answer: number | string, answerText: string, nextAnswer: number} 

export const questions: question[] = [
  
    {
      id: 1,
      text: 'Let us start of easy, can you name the sum of 14 + 27. Do your best and help Santa',
      options: [
        {
          answer: 39,
          answerText: 'Go back to school you moron',
          nextAnswer: 1
        },
        {
          answer: 41,
          answerText: 'Good job',
          nextAnswer: 2
        },
        {
          answer: 43,
          answerText: 'Are you really that stupid',
          nextAnswer: 1
        }
      ]
    },
    {
      id: 2,
      text: 'This time a little bit harder, the product of 12 * 9. Come on Santa really need the sweets',
      options: [
        {
          answer: 111,
          answerText: 'That is right',
          nextAnswer: 3
        },
        {
          answer: 122,
          answerText: 'No',
          nextAnswer: 1
        },
        {
          answer: 102,
          answerText: 'Go back to school you moron',
          nextAnswer: 1
        }
      ]
    },
    {
      id: 3,
      text: 'Ok this time the answer to the following equation: x = ? if 3 + 2x + 10 = 21. Come on, he can nearly taste it',
      options: [
        {
          answer: 4,
          answerText: 'Brilliant',
          nextAnswer: 4
        },
        {
          answer: 8,
          answerText: 'Do not just guess, count you idiot',
          nextAnswer: 2
        },
        {
          answer: 12,
          answerText: 'Really? Go back and think again',
          nextAnswer: 2
        }
      ]
    },
    {
      id: 4,
      text: 'If Santa eats this chocolatebar he will eat over 1000 kcal, is it worth it?',
      options: [
        {
          answer: 'Yes',
          answerText: 'Yeah you are right, he is already as fat as he can be',
          nextAnswer: 5
        },
        {
          answer: 'No',
          answerText: 'You just hurt Santas feelings, good work',
          nextAnswer: 3
        },
      ]
    },
    {
      id: 5,
      text: 'Santa slips on the top step, help him!',
      options: [
        {
          answer: 'Catch him falling',
          answerText: 'Santa lands on top of you and you get squished like a bug',
          nextAnswer: 1
        },
        {
          answer: 'Run up to the ladder and calmly steady it up',
          answerText: 'You accidently trip and hit the ladder and Santa falls, children wont get any presents this year',
          nextAnswer: 1
        },
        {
          answer: 42,
          answerText: 'That is right, the answer to everything',
          nextAnswer: 6
        },
        {
          answer: 'Call for help',
          answerText: 'Mrs. Santa enters the room, sees Santa on the stairs and shoots him with a shotgun.... Fail',
          nextAnswer: 1
        }
      ]
    }
  ]
   */
  
  