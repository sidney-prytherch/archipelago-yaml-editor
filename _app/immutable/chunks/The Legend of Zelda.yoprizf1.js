const e={name:"Player{number}",description:"Default The Legend of Zelda Template",game:"The Legend of Zelda",requires:{version:"0.5.0"},"The Legend of Zelda":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-ExpandedPool":"Puts room clear drops and take any caves into the pool of items and locations.",ExpandedPool:{false:0,true:50},"sidneys_secret_documentation-TriforceLocations":`Where Triforce fragments can be located. Note that Triforce pieces
obtained in a dungeon will heal and warp you out, while overworld Triforce pieces obtained will appear to have
no immediate effect. This is normal.`,TriforceLocations:{vanilla:50,dungeons:0,anywhere:0},"sidneys_secret_documentation-StartingPosition":`How easy is the start of the game.
Safe means a weapon is guaranteed in Starting Sword Cave.
Unsafe means that a weapon is guaranteed between Starting Sword Cave, Letter Cave, and Armos Knight.
Dangerous adds these level locations to the unsafe pool (if they exist):
#    Level 1 Compass, Level 2 Bomb Drop (Keese), Level 3 Key Drop (Zols Entrance), Level 3 Compass
Very Dangerous is the same as dangerous except it doesn't guarantee a weapon. It will only mean progression
will be there in single player seeds. In multi worlds, however, this means all bets are off and after checking
the dangerous spots, you could be stuck until someone sends you a weapon`,StartingPosition:{safe:50,unsafe:0,dangerous:0,very_dangerous:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};