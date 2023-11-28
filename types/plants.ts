export type PlantLite = {
    Categories: string,
    'Common name (fr.)': string,
    Img: string,
    Family: string,
    'Latin name': string,
    Description: string | null,
    Origin: string[],
    Zone: Number[],
    'Common name': string,
    'Other names': string,
    id: string,
    Climat: string
}

export type Plant = {
    Categories: string,
    Disease: string,
    Img: string,
    Use: string[],
    'Latin name': string
    Insects: string[],
    Avaibility: string,
    Style: string,
    Bearing: string,
    'Light tolered': string,
    'Height at purchase': Measurement,
    'Light ideal': string,
    'Width at purchase': { M: 0.15, CM: 15 },
    id: string,
    Appeal: string,
    Perfume: string,
    Growth: string,
    'Width potential': Measurement,
    'Common name (fr.)': string,
    Pruning: string,
    Family: string,
    'Height potential': Measurement,
    Origin: string[],
    Description: string,
    'Temperature max': { F: Number, C: Number }[],
    'Blooming season': string,
    Url: string,
    'Color of leaf': string[],
    Watering: string,
    'Color of blooms': string,
    Zone: string[],
    'Common name': string[],
    'Available sizes (Pot)': string,
    'Other names': string[] | null,
    'Temperature min': Measurement,
    'Pot diameter (cm)': Measurement,
    Climat: string
}

export type Measurement = {
    M: Number,
    CM: Number

}