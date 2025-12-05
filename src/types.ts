export interface Image {
    description: string,
    url: string,
    category: string
}

export interface Experience {
    period: string,
    position: string,
    companyName: string,
    location: string,
    description: string
}

export interface Education {
    period: string,
    institution: string,
    award: string,
    description: string
}

export interface Skill {
    skill: string,
    items: string[]
}