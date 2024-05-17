import type { ItemPlando, ItemPlandoItemGroup, OptionData, StringNumberMap } from "./types";

function deselectOtherOptionsHelper(weightedOptions: OptionData[], selectedOption: OptionData) {
    let optionsList = Object.values(weightedOptions);
    for (let option of optionsList) {
        if (option === selectedOption) {
            option.weight[0] = 50;
        } else {
            option.weight[0] = 0;
        }
    }
}

function removeOptionHelper(weightedOptions: OptionData[], option: OptionData) {
    let optionIndex = weightedOptions.indexOf(option);
    weightedOptions.splice(optionIndex, 1);
}

function removeStringNumberMapHelper(weightedOptions: StringNumberMap[], option: StringNumberMap) {
    let optionIndex = weightedOptions.indexOf(option);
    weightedOptions.splice(optionIndex, 1);
}

function removeItemPlandoGroupHelper(itemPlando: ItemPlando, itemGroup: ItemPlandoItemGroup) {
    let itemGroupIndex = itemPlando.indexOf(itemGroup);
    itemPlando.splice(itemGroupIndex, 1);
}

export { deselectOtherOptionsHelper, removeOptionHelper, removeStringNumberMapHelper, removeItemPlandoGroupHelper };