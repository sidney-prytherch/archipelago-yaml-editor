interface NumberRange {
    min: number,
    max: number,
    default?: number
}

interface OptionData {
    name?: string,
    range?: number[],
    weight: number[],
    hide: boolean
};

export type {NumberRange, OptionData}