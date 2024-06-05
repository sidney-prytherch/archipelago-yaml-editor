import jsYaml from "js-yaml";
import type { AnyObject, NumberRange, OptionData } from "../types/types";
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

export class WeightedNumberListYamlFunctions {
    numberAliases: { [key: string]: number[] };
    optionRange: NumberRange;
    optionName: string;
    weightedOptions: OptionData[];

    constructor(numberAliases: { [key: string]: number[] },
        optionRange: NumberRange,
        optionName: string,
        weightedOptions: OptionData[]) {
        this.numberAliases = numberAliases;
        this.optionRange = optionRange;
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
        let formattedRangeObj: AnyObject = jsYaml.load(yaml) as AnyObject;
        // console.log(formattedRangeObj);

        let warnings: string[] = [];
        let errors: string[] = [];
        let rangeObjects: OptionData[] = [];

        let returnObj = {
            results: rangeObjects,
            warnings: warnings,
            errors: errors
        };

        for (let rangeObjKey of Object.keys(formattedRangeObj)) {
            let weightedObject: OptionData = {
                hide: false,
                range: [],
                selectedAlias: '',
                weight: [0]
            };

            rangeObjects.push(weightedObject);

            let weight = formattedRangeObj[rangeObjKey];
            let weightObject = getWeight(weight, rangeObjKey, this.optionName);
            errors.push(...weightObject.errors);
            warnings.push(...weightObject.warnings)
            if (weightObject.weight !== null) {
                weightedObject.weight = [weightObject.weight]
            }

            if (rangeObjKey in this.numberAliases) {
                weightedObject.selectedAlias = rangeObjKey;
                weightedObject.range = structuredClone(this.numberAliases[rangeObjKey]);
                continue;
            }

            let keyAsNumber = Number.parseInt(rangeObjKey);
            if (keyAsNumber >= this.optionRange.min && keyAsNumber <= this.optionRange.max) {
                weightedObject.range = [keyAsNumber];
                continue;
            }

            let matchingAliasOrNull =
                (!isNaN(keyAsNumber)
                    ? Object.entries(this.numberAliases)
                        .filter((it) => it[1].length === 1 && it[1][0] === keyAsNumber)
                        .map((it) => it[0])
                    : [])[0] ?? null;
            if (matchingAliasOrNull) {
                weightedObject.selectedAlias = matchingAliasOrNull;
                weightedObject.range = structuredClone(this.numberAliases[matchingAliasOrNull]);
                continue;
            }

            let rangeMin: number | undefined;
            let rangeMax: number | undefined;
            let stringParts = rangeObjKey.split('-');

            if (rangeObjKey === 'random') {
                rangeMin = this.optionRange.min;
                rangeMax = this.optionRange.max;
                weightedObject.selectedAlias = 'random';
            } else if (rangeObjKey === 'random-high') {
                rangeMin = this.optionRange.min;
                rangeMax = this.optionRange.max;
                weightedObject.selectedAlias = 'random-high';
            } else if (rangeObjKey === 'random-middle') {
                rangeMin = this.optionRange.min;
                rangeMax = this.optionRange.max;
                weightedObject.selectedAlias = 'random-middle';
            } else if (rangeObjKey === 'random-low') {
                rangeMin = this.optionRange.min;
                rangeMax = this.optionRange.max;
                weightedObject.selectedAlias = 'random-low';
            } else if (rangeObjKey.startsWith('random-range-middle-') && stringParts.length === 5) {
                rangeMin = Number.parseInt(stringParts[3]) ?? rangeMin;
                rangeMax = Number.parseInt(stringParts[4]) ?? rangeMax;
                weightedObject.selectedAlias = 'random-middle';
            } else if (rangeObjKey.startsWith('random-range-low-')) {
                rangeMin = Number.parseInt(stringParts[3]) ?? rangeMin;
                rangeMax = Number.parseInt(stringParts[4]) ?? rangeMax;
                weightedObject.selectedAlias = 'random-low';
            } else if (rangeObjKey.startsWith('random-range-high-')) {
                rangeMin = Number.parseInt(stringParts[3]) ?? rangeMin;
                rangeMax = Number.parseInt(stringParts[4]) ?? rangeMax;
                weightedObject.selectedAlias = 'random-high';
            } else if (rangeObjKey.startsWith('random-range-')) {
                rangeMin = Number.parseInt(stringParts[2]) ?? rangeMin;
                rangeMax = Number.parseInt(stringParts[3]) ?? rangeMax;
                weightedObject.selectedAlias = 'random';
            }
            //  else {
            // 	errors.push(`couldn't understand key '${rangeObjKey}' for '${optionName}'`);
            // }

            if (typeof rangeMin === 'undefined' || typeof rangeMax === 'undefined') {
                errors.push(
                    `couldn't understand the key '${rangeObjKey}' for options '${this.optionName}'. Is the key formatted incorrectly?`
                );
            } else {
                if (rangeMin < this.optionRange.min || rangeMax > this.optionRange.max) {
                    warnings.push(
                        `range ${rangeMin}-${rangeMax} of '${rangeObjKey}' is out of range of [${this.optionRange.min}, ${this.optionRange.max}]. Range will be altered from these values.`
                    );
                }

                weightedObject.range = [
                    Math.max(this.optionRange.min, rangeMin),
                    Math.min(this.optionRange.max, rangeMax)
                ];
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
        let min = this.optionRange.min;
        let max = this.optionRange.max;
        for (let rangeObj of objectToInterpretAsYaml as OptionData[]) {
            if (rangeObj.range) {
                if (rangeObj.range.length === 2) {
                    if (!rangeObj.selectedAlias) {
                        console.error('no selected alias for a range! problematic!');
                    } else {
                        if (rangeObj.range[0] === min && rangeObj.range[1] === max) {
                            logErrorifError(
                                !!formattedRangeObj[rangeObj.selectedAlias],
                                formattedRangeObj[rangeObj.selectedAlias] === rangeObj.weight[0],
                                rangeObj.selectedAlias,
                                this.optionName
                            );
                            formattedRangeObj[rangeObj.selectedAlias] = rangeObj.weight[0];
                        } else {
                            let namedRange =
                                (rangeObj.selectedAlias === 'random'
                                    ? 'random-range'
                                    : rangeObj.selectedAlias.replace('-', '-range-')) +
                                '-' +
                                rangeObj.range[0] +
                                '-' +
                                rangeObj.range[1];
                            logErrorifError(
                                !!formattedRangeObj[namedRange],
                                formattedRangeObj[namedRange] === rangeObj.weight[0],
                                namedRange,
                                this.optionName
                            );
                            formattedRangeObj[namedRange] = rangeObj.weight[0];
                        }
                    }
                } else if (rangeObj.range.length === 0) {
                    console.error('somehow nothing selected for range? ', this.optionName, rangeObj);
                } else if (rangeObj.selectedAlias) {
                    logErrorifError(
                        !!formattedRangeObj[rangeObj.selectedAlias],
                        formattedRangeObj[rangeObj.selectedAlias] === rangeObj.weight[0],
                        rangeObj.selectedAlias,
                        this.optionName
                    );
                    formattedRangeObj[rangeObj.selectedAlias] = rangeObj.weight[0];
                } else {
                    let key = String(rangeObj.range[0]);
                    // console.log(`is ${key}, so it's a number`, rangeObj);
                    logErrorifError(
                        !!formattedRangeObj[key],
                        formattedRangeObj[key] === rangeObj.weight[0],
                        key,
                        this.optionName
                    );
                    formattedRangeObj[key] = rangeObj.weight[0];
                }
            }
        }
        let yaml = jsYaml.dump(formattedRangeObj);
        return yaml;
    }

}