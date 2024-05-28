import jsYaml from 'js-yaml'
import { ItemPlandoWorld } from './types/enums';

interface thing {
    [key: string]: any
}

export function downloadYaml(playerOptions: thing) {
    // console.log(playerOptions)
    const yamlData = jsYaml.dump(playerOptions);
    let formattedData: thing = {
        name: getNameObject(playerOptions),
        description: playerOptions.description,
        game: getGameObject(playerOptions),
    }
    for (let game of Object.keys(playerOptions).filter(it => it !== "name" && it !== "description" && it !== "game")) {
        formattedData[game] = getFormattedGameOptions(playerOptions[game]);
    }
    console.log(jsYaml.dump(formattedData))
    // console.log(jsYaml.dump(yamlData))
}

function getFormattedGameOptions(gameOptions: thing) {
    let formattedGameOptions: thing = {};
    processItemSortObject(formattedGameOptions, gameOptions.itemSortObject)
    processLocationSortObject(formattedGameOptions, gameOptions.locationSortObject)
    for (let [optionName, optionSettings] of Object.entries(gameOptions)) {
        if (optionName.startsWith("sidneys_")) {
            continue;
        }
        if (typeof optionSettings === "object") {
            if ("sidneys_secret_range_start" in optionSettings) {
                let formattedRangeObj: thing = {}
                let min = optionSettings.sidneys_secret_range_start
                let max = optionSettings.sidneys_secret_range_end
                for (let rangeObj of optionSettings.sidneys_super_secret_ranges) {
                    if (rangeObj.range.length === 2) {
                        if (rangeObj.range[0] === min && rangeObj.range[1] === max) {
                            formattedRangeObj[rangeObj.selectedAlias] = rangeObj.weight[0]
                        } else {
                            let namedRange = (rangeObj.selectedAlias === "random" ? "random-range" :
                                rangeObj.selectedAlias.replace("-", "-range-"))
                                + "-" + rangeObj.range[0] + "-" + rangeObj.range[1]

                            formattedRangeObj[namedRange] = rangeObj.weight[0]
                        }
                    } else if (rangeObj.range.length === 0) {
                        console.warn("somehow nothing selected for range? ", optionName, rangeObj)
                    } else if (rangeObj.selectedAlias !== '') {
                        formattedRangeObj[rangeObj.selectedAlias] = rangeObj.weight[0]
                    } else {
                        formattedRangeObj[String(rangeObj.range[0])] = rangeObj.weight[0]
                    }
                }
                // console.log(optionName, formattedRangeObj)
                formattedGameOptions[optionName] = formattedRangeObj;
            } else if ("sidneys_super_secret_options" in optionSettings) {
                let formattedSelectOptions: thing | string = {}
                if (optionSettings.sidneys_super_secret_selected_options &&
                    optionSettings.sidneys_super_secret_selected_options.length > 0) {
                    if (optionSettings.sidneys_super_secret_selected_options.length === 1) {
                        formattedSelectOptions = optionSettings.sidneys_super_secret_selected_options[0].name
                    } else {
                        for (let selectedOption of optionSettings.sidneys_super_secret_selected_options) {
                            formattedSelectOptions[selectedOption.name] = selectedOption.weight[0];
                        }
                    }
                } else {
                    console.warn(optionName, "no option selected");
                }
                formattedGameOptions[optionName] = formattedSelectOptions;
            } else if ("sidneys_secret_yaml_string" in optionSettings) {
                formattedGameOptions[optionName] = jsYaml.load(optionSettings.sidneys_secret_yaml_string)
            } else if (![
                'start_inventory_from_pool',
                'start_inventory',
                'local_items',
                'non_local_items',
                'start_hints',
                'priority_locations',
                'exclude_locations',
                'start_location_hints',
                'itemList',
                'locationList',
                'itemSortObject',
                'locationSortObject'
            ].includes(optionName)) {
                console.log(optionName, optionSettings)
            }
        }
    }
    formattedGameOptions.plando_items = processItemPlando(gameOptions.plandoItems)
    formattedGameOptions.start_inventory = processStartInventory(gameOptions.startInventory)
    formattedGameOptions.start_inventory_from_pool = processItemPlando(gameOptions.startInventoryFromPool)
    return formattedGameOptions;
}

function processStartInventory(startInventory: thing[]) {
    let formattedStartInventory:thing = {}
    for (let item of startInventory) {
        if (item.value && typeof item.value === "number" && item.value > 0) {
            formattedStartInventory[item.name] = item.value
        }
    }
    return formattedStartInventory;
}

function processItemPlando(itemPlando: thing[]) {
    let formattedItemPlando = []

    for (let itemPlandoData of itemPlando) {
        let plandoGroup: thing = {};
        let plandoGroupItems: thing = {};
        for (let item of itemPlandoData.items) {
            if (item.isAll) {
                plandoGroupItems[item.name] = "true";
            } else if (item.quantity > 0) {
                plandoGroupItems[item.name] = item.quantity;
            }
        }
        plandoGroup.items = plandoGroupItems;
        plandoGroup.locations = Object.entries(itemPlandoData.locations).filter(locationData => locationData[1]).map(locationData => locationData[0])
        plandoGroup.force = itemPlandoData.force;
        plandoGroup.percentage = itemPlandoData.percentage[0]
        plandoGroup.from_pool = itemPlandoData.from_pool
        switch (itemPlandoData.count) {
            case "min-max":
                plandoGroup.count = { min: itemPlandoData.countVals.min, max: itemPlandoData.countVals.max }
                break;
            case "count":
                plandoGroup.count = itemPlandoData.countVals.count
                break;
            default:
                plandoGroup.count = "false"
                break;
        }
        switch (itemPlandoData.world) {
            case "names":
                let names = (itemPlandoData.worldVals.playerNames as string).split(",");
                plandoGroup.world = names.length === 1 ? names[0].trim() : names.map(name => name.trim())
                break;
            case "number":
                plandoGroup.world = itemPlandoData.worldVals.playerNums
                break;
            case ItemPlandoWorld.Local:
                plandoGroup.world = "false"
                break;
            case ItemPlandoWorld.NonLocal:
                plandoGroup.world = "true"
                break;
            case ItemPlandoWorld.AnyWorld:
                plandoGroup.world = "null"
                break;
        }


        // if (itemPlandoData.percentage[0] < 100) {
        //     plandoGroup.percentage = itemPlandoData.percentage[0]
        // }
        formattedItemPlando.push(plandoGroup)
    }
    return formattedItemPlando;
}

function getNameObject(playerOptions: thing) {
    if (playerOptions.name.length === 1) {
        return playerOptions.name[0].name;
    } else if (playerOptions.name.length === 0) {
        console.warn("No name given")
        return "player{Number}";
    } else {
        let nameObj: thing = {}
        for (let weightedNameObj of playerOptions.name) {
            nameObj[weightedNameObj.name as string] = weightedNameObj.weight[0]
        }
        return nameObj
    }
}

function getGameObject(playerOptions: thing) {
    if (playerOptions.game.length === 1) {
        return playerOptions.game[0].name;
    } else if (playerOptions.game.length === 0) {
        console.warn("No game selected");
        return ""; //error
    } else {
        let gameObj: thing = {}
        for (let weightedGameObj of playerOptions.game) {
            gameObj[weightedGameObj.name as string] = weightedGameObj.weight[0]
        }
        return gameObj
    }
}

function processItemSortObject(formattedData: thing, itemDataList: thing[]) {
    let startHints = [];
    let localItems = [];
    let nonLocalItems = [];
    for (let itemData of itemDataList) {
        if (itemData.checkbox.start_hints) {
            startHints.push(itemData.name)
        }
        if (itemData.radio === "local_items") {
            localItems.push(itemData.name)
        } else if (itemData.radio === "non_local_items") {
            nonLocalItems.push(itemData.name)
        }
    }
    formattedData.local_items = localItems;
    formattedData.non_local_items = nonLocalItems;
    formattedData.start_hints = startHints;
}

function processLocationSortObject(formattedData: thing, locationDataList: thing[]) {
    let startLocationHints = [];
    let priorityLocations = [];
    let excludedLocations = [];
    for (let locationData of locationDataList) {
        if (locationData.checkbox.start_location_hints) {
            startLocationHints.push(locationData.name)
        }
        if (locationData.radio === "priority_locations") {
            priorityLocations.push(locationData.name)
        } else if (locationData.radio === "excluded_locations") {
            excludedLocations.push(locationData.name)
        }
    }
    formattedData.priority_locations = priorityLocations;
    formattedData.excluded_locations = excludedLocations;
    formattedData.start_location_hints = startLocationHints;
}