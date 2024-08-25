const e={name:"Player{number}",description:"Default Slay the Spire Template",game:"Slay the Spire",requires:{version:"0.5.0"},"Slay the Spire":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-character":`Enter the internal ID of the character to use.

  if you don't know the exact ID to enter with the mod installed go to
 \`Mods -> Archipelago Multi-world -> config\` to view a list of installed modded character IDs.

 the downfall characters will only work if you have downfall installed.

 Spire Take the Wheel will have your client pick a random character from the list of all your installed characters
 including custom ones.

 if the chosen character mod is not installed it will default back to 'The Ironclad'`,character:{the_ironclad:50,the_silent:0,the_defect:0,the_watcher:0,the_hermit:0,the_slime_boss:0,the_guardian:0,the_hexaghost:0,the_champ:0,the_gremlins:0,the_automaton:0,the_snecko:0,spire_take_the_wheel:0},"sidneys_secret_documentation-ascension":"What Ascension do you wish to play with.",ascension:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:20,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-final_act":"Whether you will need to collect the 3 keys and beat the final act to complete the game.",final_act:{false:50,true:0},"sidneys_secret_documentation-downfall":"When Downfall is Installed this will switch the played mode to Downfall",downfall:{false:50,true:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
