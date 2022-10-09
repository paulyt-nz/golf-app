export interface Course {
    name: string,
    location: string,
    numHoles: number,
    holes: any,
}

export const courses : Course[] = [
    {
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
    },
    {
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
    },
    {
        name: "Miramar Golf Course",
        location: "Miramar, Wellington",
        numHoles: 18,
        holes: [
            { name: 'Hole 1',  par: 4, strokeIndex: 1,  tee: 366},
            { name: 'Hole 2',  par: 5, strokeIndex: 9,  tee: 526},
            { name: 'Hole 3',  par: 4, strokeIndex: 10, tee: 365},
            { name: 'Hole 4',  par: 4, strokeIndex: 6,  tee: 398},
            { name: 'Hole 5',  par: 5, strokeIndex: 17, tee: 507},
            { name: 'Hole 6',  par: 3, strokeIndex: 16, tee: 179},
            { name: 'Hole 7',  par: 4, strokeIndex: 5,  tee: 366},
            { name: 'Hole 8',  par: 3, strokeIndex: 4,  tee: 206},
            { name: 'Hole 9',  par: 4, strokeIndex: 14, tee: 329},
            { name: 'Hole 10', par: 4, strokeIndex: 11, tee: 369},
            { name: 'Hole 11', par: 3, strokeIndex: 12, tee: 182},
            { name: 'Hole 12', par: 4, strokeIndex: 15, tee: 321},
            { name: 'Hole 13', par: 3, strokeIndex: 18, tee: 111},
            { name: 'Hole 14', par: 4, strokeIndex: 3,  tee: 299},
            { name: 'Hole 15', par: 5, strokeIndex: 8,  tee: 464},
            { name: 'Hole 16', par: 3, strokeIndex: 13, tee: 169},
            { name: 'Hole 17', par: 4, strokeIndex: 7,  tee: 401},
            { name: 'Hole 18', par: 4, strokeIndex: 2,  tee: 435}
        ]
    },
    {
        name: "Kapiti Golf Course",
        location: "Paraparaumu, Kapiti Coast",
        numHoles: 9,
        holes: [
            { name: 'Hole 1',  par: 4, strokeIndex: 5, tee: 314},
            { name: 'Hole 2',  par: 3, strokeIndex: 4, tee: 179},
            { name: 'Hole 3',  par: 4, strokeIndex: 6, tee: 207},
            { name: 'Hole 4',  par: 3, strokeIndex: 8, tee: 174},
            { name: 'Hole 5',  par: 4, strokeIndex: 1, tee: 343},
            { name: 'Hole 6',  par: 4, strokeIndex: 9, tee: 243},
            { name: 'Hole 7',  par: 4, strokeIndex: 7, tee: 248},
            { name: 'Hole 8',  par: 4, strokeIndex: 3, tee: 333},
            { name: 'Hole 9',  par: 4, strokeIndex: 2, tee: 374}
        ]
    }
]