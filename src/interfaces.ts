export interface Progress {
    id: number,
    question: string
    img?: ImageData
    img2?: ImageData
    img3?: ImageData
    soundeffect?: Soundeffect
    hint?: string
    
    answerInput?: InputData
    choises: {
        leftbutton?: ButtonClick
        rightbutton?: ButtonClick
    }
}

export interface InputData {
    answer: string
    key: string
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