interface NumberRange {
    min: number,
    max: number
}

interface OptionData {
    name: string,
    weight: number[],
    hide: boolean
};

export type {NumberRange, OptionData}