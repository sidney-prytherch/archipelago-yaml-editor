import type { OptionData } from "./types";

function deselectOtherOptionsHelper(weightedOptions: OptionData[], selectedOption: OptionData) {
    console.log(selectedOption);
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
    console.log(option);
    let optionIndex = weightedOptions.indexOf(option);
    weightedOptions.splice(optionIndex, 1);
}

export {deselectOtherOptionsHelper, removeOptionHelper};