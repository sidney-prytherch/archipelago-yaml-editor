import type { ItemPlandoCount, ItemPlandoForce, ItemPlandoWorld } from "./enums";

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

interface StringNumberMap {
    name?: string,
    value: number
};

interface RadioList {
    [key: string]: string;
}

interface StringBooleanMap {
    [key: string]: boolean;
}

interface ItemPlandoItemGroup {
    items: ItemPlandoItemList[],
    locations: StringBooleanMap,
    from_pool: boolean,
    world: ItemPlandoWorld,
    worldVals: {playerNames: string, playerNums: number},
    force: ItemPlandoForce,
    percentage: number[],
    count: ItemPlandoCount,
    countVals: {min: number, max: number, count: number},
    expanded: boolean
}

type ItemPlandoItemList = {name: string, quantity: number, isAll: boolean};

type ItemPlando = ItemPlandoItemGroup[];


export type { NumberRange, OptionData, RadioList, StringBooleanMap, StringNumberMap, ItemPlandoItemGroup, ItemPlando, ItemPlandoItemList }