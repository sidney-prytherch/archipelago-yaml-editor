const e={name:"Player{number}",description:"Default MegaMan Battle Network 3 Template",game:"MegaMan Battle Network 3",requires:{version:"0.5.0"},"MegaMan Battle Network 3":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-extra_ranks":`How many extra Undernet Ranks to add to the pool in place of filler items.
The more ranks there are, the faster the game will go.
Depending on your other options, you might not have enough filler items to replace.
If generation errors occur, consider reducing this value.`,extra_ranks:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:16,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-include_jobs":"Whether Jobs can be included in logic.",include_jobs:{false:0,true:50},"sidneys_secret_documentation-trade_quest_hinting":`Whether NPCs offering Chip Trades should show what item they provide.
None - NPCs will not provide any information on what item they will give
Partial - NPCs will state if an item is progression or not, but not the specific item
Full - NPCs will state what item they will give, providing an Archipelago Hint when doing so`,trade_quest_hinting:{none:0,partial:0,full:50},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};