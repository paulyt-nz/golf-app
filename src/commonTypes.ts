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

export type ButtonState = boolean[][]

export type NumHoles = 9 | 18



