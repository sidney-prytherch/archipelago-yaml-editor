import datapackag from './resources/datapackage.json';
import yamlContent from './resources/alinktothepast.yaml';

export const prerender = false;

export function load() {

    let yaml: { [key: string]: any } = yamlContent
    let datapackage: { [key: string]: any } = datapackag;

    return {
        datapackage: datapackage,
        yaml: yaml
    };
}
