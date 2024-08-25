import datapackag from './resources/datapackage.json';

// export const prerender = false;

export const prerender = true

async function getYamls(params:Record<string, () => Promise<unknown>>) {
    let yamls: { [key: string]: any } = {};
    for (const modulePath in params) {
        let from = modulePath.lastIndexOf('/') + 1;
        let to = modulePath.lastIndexOf('.yaml');
        let gameName = modulePath.substring(from, to)
        let yamlData: any = await params[modulePath]();

        // params[modulePath]().then((thing: any) => {
        yamls[gameName] = yamlData.default
        // console.log(yamlData.default.game)
        // });
    }
    // console.log("done!")
    return yamls
}

export const load = async () => {
    const yamlFiles = import.meta.glob("./resources/yamls/*.yaml");
    
    let datapackage: { [key: string]: any } = datapackag;

    return {
        datapackage: datapackage,
        yamls: await getYamls(yamlFiles)
    };
}
