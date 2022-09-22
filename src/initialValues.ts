export interface Course {
    name: string,
    location: string,
    numHoles: number,
    holes: any,
}

export const initialCourse: Course | null = null  // not sure what I am up to here

export const pauatahanui: Course = {
    name: 'Pauatahanui Golf Course',
    location: 'Pauatahanui, Porirua',
    numHoles: 9,
    holes: [
        { name: 'Hole 1', par: 4, strokeIndex: 7, tee: 258 },
        { name: 'Hole 2', par: 4, strokeIndex: 1, tee: 359 },
        { name: 'Hole 3', par: 3, strokeIndex: 4, tee: 182 },
        { name: 'Hole 4', par: 4, strokeIndex: 9, tee: 276 },
        { name: 'Hole 5', par: 4, strokeIndex: 2, tee: 388 },
        { name: 'Hole 6', par: 3, strokeIndex: 8, tee: 147 },
        { name: 'Hole 7', par: 5, strokeIndex: 6, tee: 446 },
        { name: 'Hole 8', par: 5, strokeIndex: 3, tee: 384 },
        { name: 'Hole 9', par: 4, strokeIndex: 5, tee: 199,}
    ]
}

export const redwood: Course = {
    name: "Redwood Golf Course",
    location: "Swanson, Auckland",
    numHoles: 18,
    holes: [
        { name: 'Hole 1',  par: 4, strokeIndex: 12, tee: 294 },
        { name: 'Hole 2',  par: 3, strokeIndex: 4,  tee: 218 },
        { name: 'Hole 3',  par: 5, strokeIndex: 10, tee: 488 },
        { name: 'Hole 4',  par: 4, strokeIndex: 6,  tee: 359 },
        { name: 'Hole 5',  par: 3, strokeIndex: 18, tee: 153 },
        { name: 'Hole 6',  par: 5, strokeIndex: 2,  tee: 573 },
        { name: 'Hole 7',  par: 4, strokeIndex: 8,  tee: 312 },
        { name: 'Hole 8',  par: 5, strokeIndex: 14, tee: 162 },
        { name: 'Hole 9',  par: 3, strokeIndex: 16, tee: 415 },
        { name: 'Hole 10', par: 3, strokeIndex: 15, tee: 130 },
        { name: 'Hole 11', par: 4, strokeIndex: 1,  tee: 369 },
        { name: 'Hole 12', par: 4, strokeIndex: 3,  tee: 345 },
        { name: 'Hole 13', par: 3, strokeIndex: 13, tee: 178 },
        { name: 'Hole 14', par: 4, strokeIndex: 9,  tee: 333 },
        { name: 'Hole 15', par: 4, strokeIndex: 17, tee: 266 },
        { name: 'Hole 16', par: 3, strokeIndex: 11, tee: 164 },
        { name: 'Hole 17', par: 4, strokeIndex: 7,  tee: 357 },
        { name: 'Hole 18', par: 4, strokeIndex: 5,  tee: 324 }
    ]
}


export const initialPlayers: [] | string[] = []





// need to make this dynamic based on number of players and the number of holes being played
export const initialScorecard = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
]

export const blankScorecard = initialScorecard

export const initialButtonState = [
    [false,false,false,false,false,false], 
    [false,false,false,false,false,false], 
    [false,false,false,false,false,false], 
    [false,false,false,false,false,false], 
]
