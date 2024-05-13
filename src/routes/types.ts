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

interface RadioList {
    [key: string]: string;
}
interface CheckboxList {
    [key: string]: boolean;
}

export type {NumberRange, OptionData, RadioList, CheckboxList}