export type Player = string;

export type Scorecard = number[][];

export interface HoleInfo { 
    name: string, 
    par: number, 
    strokeIndex: number, 
    tee: number 
}

export interface Course {
    name: string,
    location: string,
    numHoles: number,
    holes: [HoleInfo],
}

export type RoundType = '9-once' | '18-twice' | '9-front' | '9-back' | '18-fullround'

export type ButtonState = boolean[][]

export type NumHoles = number // 9 | 18



