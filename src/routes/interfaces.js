/**
 * Represents an item with dynamic properties.
 * @typedef {Object.<string, (boolean|number)>} Item
 */

/**
 * Represents an item link.
 * @typedef {Object} ItemLink
 * @property {string} name - The name of the item link.
 * @property {(string|string[])} item_pool - The item pool associated with the item link.
 * @property {string|null|undefined} [replacement_item] - The replacement item for the item link, if any.
 * @property {boolean|undefined} [link_replacement] - Indicates whether it's a link replacement.
 * @property {(string|string[])} local_items - The local items associated with the item link.
 * @property {(string|string[])} non_local_items - The non-local items associated with the item link.
 */

/**
 * Represents a Plando item.
 * @typedef {Object} PlandoItem
 * @property {(string|string[]|Item|undefined)} [items] - The items associated with the Plando item.
 * @property {(string|string[]|Item|undefined)} [item] - An alternative way to specify items.
 * @property {(string|string[]|undefined)} [locations] - The locations associated with the Plando item.
 * @property {(string|string[]|undefined)} [location] - An alternative way to specify locations.
 * @property {(boolean|number|string|string[]|null|undefined)} [world] - Indicates if the Plando item applies globally.
 * @property {(string|boolean|undefined)} [force] - Indicates whether the Plando item forces certain actions.
 * @property {boolean|undefined} [from_pool] - Indicates if the Plando item comes from a pool.
 * @property {number|undefined} [percentage] - The percentage associated with the Plando item.
 * @property {number|boolean|{min: number, max: number}} count - The count associated with the Plando item.
 */

/**
 * Represents a game.
 * @typedef {Object} Game
 * @property {*} progression_balancing - The progression balancing of the game.
 * @property {("items"|"locations"|"minimal"|undefined)} [accessibility] - The accessibility mode of the game.
 * @property {ItemLink[]} item_links - The item links associated with the game.
 * @property {PlandoItem[]} plando_items - The Plando items associated with the game.
 * @property {(string|string[])} non_local_items - The non-local items associated with the game.
 * @property {(string|string[])} local_items - The local items associated with the game.
 * @property {(string|string[])} start_hints - The start hints associated with the game.
 * @property {(string|string[])} start_locations_hints - The start locations hints associated with the game.
 * @property {Item} start_inventory - The start inventory of the game.
 * @property {Item} start_inventory_from_pool - The start inventory from pool of the game.
 * @property {(string|string[])} priority_locations - The priority locations associated with the game.
 * @property {(string|string[])} exclude_locations - The exclude locations associated with the game.
 * @property {*} [key] - Any additional properties.
 */

/**
 * Represents a trigger.
 * @typedef {Object} Trigger
 * @property {string} option_category - The option category of the trigger.
 * @property {string} option_name - The option name of the trigger.
 * @property {*} option_result - The option result of the trigger.
 * @property {Object} options - The options associated with the trigger.
 */

/**
 * Represents Plando data.
 * @typedef {Object} PlandoData
 * @property {{plando: string}} requires - The plando requirement.
 * @property {string} description - The description of the Plando data.
 * @property {(string|{[key: string]: number})} game - The game associated with the Plando data.
 * @property {string} name - The name of the Plando data.
 * @property {Trigger[]} triggers - The triggers associated with the Plando data.
 */