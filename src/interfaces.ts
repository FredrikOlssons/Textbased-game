export interface Progress {
    id: number,
    question: string
    img?: ImageData
    img2?: ImageData
    img3?: ImageData
    img4?: ImageData
    soundeffect?: Soundeffect
    hint?: string
    lastQuestion?: boolean
    playSound?: boolean
    firstQuestion?: boolean
    emptybox?: boolean
    numberInput?: boolean    
    answerInput?: InputData
    printAnswer?: AnswerData

    choises: {
        leftbutton?: ButtonClick
        rightbutton?: ButtonClick
    }
}

export interface InputData {
    answer?: string
    key?: string | number
}

export interface ButtonClick {
    answer: string
    nextQuestion: number
}

export interface ImageData {
    url: string, 
    class: string,
}

export interface Soundeffect {
  url: string
}

export interface AnswerData {
  correctAnswer: string,
  wrongAnswer: string
}