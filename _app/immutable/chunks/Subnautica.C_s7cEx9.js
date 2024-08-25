const e={name:"Player{number}",description:"Default Subnautica Template",game:"Subnautica",requires:{version:"0.5.0"},Subnautica:{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-swim_rule":`What logic considers ok swimming distances.
Easy: +200 depth from any max vehicle depth.
Normal: +400 depth from any max vehicle depth.
Warning: Normal can expect you to death run to a location (No viable return trip).
Hard: +600 depth from any max vehicle depth.
Warning: Hard may require bases, deaths, glitches, multi-tank inventory or other depth extending means.
Items: Expected depth is extended by items like seaglide, ultra glide fins and capacity tanks.`,swim_rule:{easy:50,normal:0,hard:0,items_easy:0,items_normal:0,items_hard:0},"sidneys_secret_documentation-early_seaglide":"Make sure 2 of the Seaglide Fragments are available in or near the Safe Shallows (Sphere 1 Locations).",early_seaglide:{false:0,true:50},"sidneys_secret_documentation-free_samples":`Get free items with your blueprints.
Items that can go into your inventory are awarded when you unlock their blueprint through Archipelago.`,free_samples:{false:50,true:0},"sidneys_secret_documentation-goal":`Goal to complete.
Launch: Leave the planet.
Free: Disable quarantine.
Infected: Reach maximum infection level.
Drive: Repair the Aurora's Drive Core`,goal:{launch:50,free:0,infected:0,drive:0},"sidneys_secret_documentation-creature_scans":`Place items on specific, randomly chosen, creature scans.
Warning: Includes aggressive Leviathans.`,creature_scans:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:50,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-creature_scan_logic":`By default (Stasis), aggressive Creature Scans are logically expected only with a Stasis Rifle.
Containment: Removes Stasis Rifle as expected solution and expects Alien Containment instead.
Either: Creatures may be expected to be scanned via Stasis Rifle or Containment, whichever is found first.
None: Aggressive Creatures are assumed to not need any tools to scan.
Removed: No Creatures needing Stasis or Containment will be in the pool at all.

Note: Containment, Either and None adds Cuddlefish as an option for scans.
Note: Stasis, Either and None adds unhatchable aggressive species, such as Warper.
Note: This is purely a logic expectation, and does not affect gameplay, only placement.`,creature_scan_logic:{stasis:50,containment:0,either:0,none:0,removed:0},"sidneys_secret_documentation-death_link":`When you die, everyone dies. Of course the reverse is true too.
Note: can be toggled via in-game console command "deathlink".`,death_link:{false:50,true:0},"sidneys_secret_documentation-filler_items_distribution":`Random chance weights of various filler resources that can be obtained.
Available items: "Copper Ore", "Crystalline Sulfur", "Diamond", "Gold", "Kyanite", "Lead", "Lithium", "Magnetite", "Nickel Ore", "Reactor Rod", "Ruby", "Salt Deposit", "Silver Ore", "Titanium"`,filler_items_distribution:{"Copper Ore":1,"Crystalline Sulfur":1,Diamond:1,Gold:1,Kyanite:1,Lead:1,Lithium:1,Magnetite:1,"Nickel Ore":1,"Reactor Rod":1,Ruby:1,"Salt Deposit":1,"Silver Ore":1,Titanium:1},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[],"sidneys_secret_documentation-start_inventory_from_pool":`Start with these items and don't place them in the world.

The game decides what the replacement items will be.`,start_inventory_from_pool:{}}};export{e as default};
