import type { ItemLink, ItemLinks, ItemPlando, ItemPlandoItemGroup, OptionData, StringNumberMap } from "./types";

function deselectOtherOptionsHelper(weightedOptions: OptionData[], selectedOption: OptionData) {
    for (let option of weightedOptions) {
        if (option.name === selectedOption.name) {
            option.weight[0] = 50;
        } else {
            option.weight[0] = 0;
        }
    }
}

function deselectOtherNumberOptionsHelper(weightedOptions: OptionData[], selectedOption: OptionData) {
    for (let option of weightedOptions) {
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

function removeItemLinksGroupHelper(itemLinks: ItemLinks, itemLink: ItemLink) {
    let itemLinksGroupIndex = itemLinks.indexOf(itemLink);
    itemLinks.splice(itemLinksGroupIndex, 1);
}

export { deselectOtherOptionsHelper, deselectOtherNumberOptionsHelper, removeOptionHelper, removeStringNumberMapHelper, removeItemPlandoGroupHelper, removeItemLinksGroupHelper };