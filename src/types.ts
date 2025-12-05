export interface Image {
    id: string,
    description: string,
    filename: string,
    category: string
}

export interface Experience {
    period: string,
    position: string,
    companyName: string,
    location: string,
    description: string,
    displayOrder: number
}

export interface Education {
    period: string,
    institution: string,
    award: string,
    description: string,
    displayOrder: number
}

export interface Skill {
    skill: string,
    items: string[],
    displayOrder: number
}