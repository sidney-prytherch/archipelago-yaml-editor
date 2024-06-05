import jsYaml from "js-yaml";
import type { AnyObject, OptionData } from "../types/types";
import { getWeight } from "./GenericYamlFunctions";


function logErrorifError(errorIfTrue: boolean, warningIfTrue: boolean, existingKey: string, optionName: string) {
    if (errorIfTrue) {
        if (warningIfTrue) {
            console.warn(
                `key "${existingKey}" with its respective weight is within "${optionName}" multiple times. Duplicates will be ignored.`
            );
        } else {
            console.error(
                `key "${existingKey}" is within "${optionName}" multiple times with different weights.`
            );
        }
    }
}

export class WeightedStringListYamlFunctions {
    optionKeys: string[];
    optionName: string;
    allowCustomKeys: boolean
    weightedOptions: OptionData[];

    constructor(optionKeys: string[],
        optionName: string,
        allowCustomKeys: boolean,
        weightedOptions: OptionData[]) {
        this.optionKeys = optionKeys;
        this.allowCustomKeys = allowCustomKeys;
        this.optionName = optionName;
        this.weightedOptions = weightedOptions;
    }

    fromYaml(yaml: string | undefined | null): {
        results: OptionData[];
        errors: string[];
        warnings: string[];
    } {
        if (!yaml) {
            return {
                results: [],
                warnings: [],
                errors: []
            };
        }
        let formattedOptionObj: AnyObject = jsYaml.load(yaml) as AnyObject;

        let warnings: string[] = [];
        let errors: string[] = [];
        let selectedOptions: OptionData[] = [];

        let returnObj = {
            results: selectedOptions,
            warnings: warnings,
            errors: errors
        };

        for (let objectKey of Object.keys(formattedOptionObj)) {
            let weightedObject: OptionData = {
                hide: false,
                name: '',
                weight: [0]
            };

            selectedOptions.push(weightedObject);

            let weight = formattedOptionObj[objectKey];
            let weightObject = getWeight(weight, objectKey, this.optionName);
            errors.push(...weightObject.errors);
            warnings.push(...weightObject.warnings)
            if (weightObject.weight !== null) {
                weightedObject.weight = [weightObject.weight]
            }

            if ((this.optionKeys && this.optionKeys.includes(objectKey)) || this.allowCustomKeys) {
                weightedObject.name = objectKey;
                continue;
            } else {
                errors.push(
                    `Option '${objectKey}' not found for options '${this.optionName}'.`
                );
            }
        }
        for (let errorString of errors) {
            console.error(errorString);
        }
        return returnObj;
    }

    toYaml(objectToInterpretAsYaml: AnyObject | null) {
        if (!objectToInterpretAsYaml) {
            objectToInterpretAsYaml = this.weightedOptions;
        }
        let formattedRangeObj: AnyObject = {};
        for (let listObject of objectToInterpretAsYaml as OptionData[]) {
            if (!listObject.name || listObject.name === "") {
                console.warn(`key empty/null for one of the options '${this.optionName}' with weight ${listObject.weight[0]}`)
            } else if ((this.optionKeys && this.optionKeys.includes(listObject.name)) || this.allowCustomKeys) {
                logErrorifError(
                    !!formattedRangeObj[listObject.name],
                    formattedRangeObj[listObject.name] === listObject.weight[0],
                    listObject.name,
                    this.optionName
                );
                formattedRangeObj[listObject.name] = listObject.weight[0];
            } else {
                console.warn(`key '${listObject.name}' not found in list for option '${this.optionName}'`)
            }
        }
        let yaml = jsYaml.dump(formattedRangeObj);
        return yaml;
    }

}