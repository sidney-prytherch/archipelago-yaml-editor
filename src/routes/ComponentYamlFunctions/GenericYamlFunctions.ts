import type { YamlWeightObject } from "../types/types";

function getWeight(weight: any, objectKey: string, optionName: string): YamlWeightObject {
    let returnObject: YamlWeightObject = {
        errors: [],
        warnings: [],
        weight: null,
    }
    let weightNum: number | undefined;
    if (typeof weight === 'string') {
        weightNum = Number.parseInt(weight);
    }
    if (typeof weight === 'number') {
        weightNum = weight;
    }
    if (typeof weightNum === 'number') {
        if (isNaN(weight)) {
            returnObject.warnings.push(
                `Could not interpret weight '${weight}' for key '${objectKey}'. Will assign weight of 0 to '${objectKey}'`
            );
            weight = 0;
        } else if (weight < 0 || weight > 50) {
            returnObject.warnings.push(`input weight of '${objectKey}' (${weight}) was out of range of [0, 50]. Will Assume closest weight in range`)
        }
        returnObject.weight = Math.max(0, Math.min(50, weight));
    } else {
        returnObject.errors.push(
            `can't interpret yaml - attempting to interpret key '${objectKey}' with weight of '${weight}' for option '${optionName}'`
        );
    }
    return returnObject;
}

export {getWeight}