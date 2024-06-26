import type { ItemPlandoCount, ItemPlandoForce, ItemPlandoWorld } from "./enums";

interface SortObject {
    name: string,
    radio: string, //selected value
    checkbox: {
        [key: string]: boolean
    }
}

interface AnyObject {
    [key: string]: any
}

interface NumberRange {
    min: number,
    max: number,
    default?: number
}

interface OptionData {
    name?: string,
    range?: number[],
    selectedAlias?: string,
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
    worldVals: { playerNames: string, playerNums: number },
    force: ItemPlandoForce,
    percentage: number[],
    count: ItemPlandoCount,
    countVals: { min: number, max: number, count: number },
    expanded: boolean
}

interface ItemLink {
    itemLinkName: string,
    items: SortObject[],
    replacementItem: string | null,
    linkReplacement: string,
    expanded: boolean
}

type ItemLinks = ItemLink[];

type ItemPlandoItemList = { name: string, quantity: number, isAll: boolean };

type ItemPlando = ItemPlandoItemGroup[];

type YamlWeightObject = { errors: string[], warnings: string[], weight: number | null };


export type { YamlWeightObject, SortObject, NumberRange, OptionData, RadioList, StringBooleanMap, StringNumberMap, ItemPlandoItemGroup, ItemPlando, ItemPlandoItemList, AnyObject, ItemLink, ItemLinks }