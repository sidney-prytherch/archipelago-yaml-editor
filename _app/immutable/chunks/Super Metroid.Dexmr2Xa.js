const e={name:"Player{number}",description:"Default Super Metroid Template",game:"Super Metroid",requires:{version:"0.5.0"},"Super Metroid":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-start_inventory_removes_from_pool":"Remove items in starting inventory from pool.",start_inventory_removes_from_pool:{false:50,true:0},"sidneys_secret_documentation-preset":`Choose one of the presets or specify "varia_custom" to use varia_custom_preset option or specify "custom" to use
custom_preset option.`,preset:{newbie:0,casual:0,regular:50,veteran:0,expert:0,master:0,samus:0,season_races:0,smrat2021:0,solution:0,custom:0,varia_custom:0},"sidneys_secret_documentation-start_location":"Choose where you want to start the game.",start_location:{ceres:0,landing_site:50,gauntlet_top:0,green_brinstar_elevator:0,big_pink:0,etecoons_supers:0,wrecked_ship_main:0,firefleas_top:0,business_center:0,bubble_mountain:0,mama_turtle:0,watering_hole:0,aqueduct:0,red_brinstar_elevator:0,golden_four:0},"sidneys_secret_documentation-remote_items":"Indicates you get items sent from your own world. This allows coop play of a world.",remote_items:{false:50,true:0},"sidneys_secret_documentation-death_link":"When DeathLink is enabled and someone dies, you will die. With survive reserve tanks can save you.",death_link:{disable:50,enable:0,enable_survive:0},"sidneys_secret_documentation-max_difficulty":`Depending on the perceived difficulties of the techniques, bosses, hell runs etc. from the preset, it will
prevent the Randomizer from placing an item in a location too difficult to reach with the current items.`,max_difficulty:{easy:0,medium:0,hard:0,harder:0,hardcore:50,mania:0,infinity:0},"sidneys_secret_documentation-morph_placement":"Influences where the Morphing Ball with be placed.",morph_placement:{early:50,normal:0},"sidneys_secret_documentation-hide_items":`Hides half of the visible items.
Items always visible:
- Energy Tank, Gauntlet
- Energy Tank, Terminator
- Morphing Ball
- Missile (Crateria moat)
- Missile (green Brinstar below super missile)
- Missile (above Crocomire)
- Power Bomb (lower Norfair above fire flea room)
- Missile (Gravity Suit)
- Missile (green Maridia shinespark)`,hide_items:{false:50,true:0},"sidneys_secret_documentation-strict_minors":`Instead of using the Minors proportions as probabilities, enforce a strict distribution to match the proportions
as closely as possible.`,strict_minors:{false:50,true:0},"sidneys_secret_documentation-missile_qty":"The higher the number the higher the probability of choosing missles when placing a minor.",missile_qty:{30:50,sidneys_secret_range_start:10,sidneys_secret_range_end:90,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-super_qty":"The higher the number the higher the probability of choosing super missles when placing a minor.",super_qty:{20:50,sidneys_secret_range_start:10,sidneys_secret_range_end:90,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-power_bomb_qty":"The higher the number the higher the probability of choosing power bombs when placing a minor.",power_bomb_qty:{10:50,sidneys_secret_range_start:10,sidneys_secret_range_end:90,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-minor_qty":"From 7%, minimum number of minors required to finish the game, to 100%.",minor_qty:{100:50,sidneys_secret_range_start:7,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-energy_qty":`Choose how many Energy/Reserve Tanks will be available, from 0-1 in ultra sparse, 4-6 in sparse, 8-12 in medium
and 18 in vanilla.`,energy_qty:{ultra_sparse:0,sparse:0,medium:0,vanilla:50},"sidneys_secret_documentation-area_randomization":"Randomize areas together using bidirectional access portals.",area_randomization:{off:50,light:0,full:0},"sidneys_secret_documentation-area_layout":"Some layout tweaks to make your life easier in areas randomizer.",area_layout:{false:50,true:0},"sidneys_secret_documentation-doors_colors_rando":`Randomize the color of Red/Green/Yellow doors. Add four new type of doors which require Ice/Wave/Spazer/Plasma
beams to open them.`,doors_colors_rando:{false:50,true:0},"sidneys_secret_documentation-allow_grey_doors":`When randomizing the color of Red/Green/Yellow doors, some doors can be randomized to Grey. Grey doors will never
open, you will have to go around them.`,allow_grey_doors:{false:50,true:0},"sidneys_secret_documentation-boss_randomization":"Randomize Golden 4 bosses access doors using bidirectional access portals.",boss_randomization:{false:50,true:0},"sidneys_secret_documentation-escape_rando":`When leaving Tourian, get teleported to the exit of a random Map station (between Brinstar/Maridia/Norfair/Wrecked Ship).
You then have to find your way to the ship in the remaining time. Allotted time depends on area layout, but not on skill settings and is pretty generous.

During the escape sequence:
- All doors are opened
- Maridia tube is opened
- The Hyper Beam can destroy Bomb , Power Bomb  and Super Missile  blocks and open blue/green gates from both sides
- All mini bosses are defeated
- All minor enemies are removed to allow you to move faster and remove lag

During regular game only Crateria Map station door can be opened and activating the station will act as if all map stations were activated at once.

Animals Challenges:
You can use the extra available time to:
- find the animals that are hidden behind a (now blue) map station door
- go to the vanilla animals door to cycle through the 4 available escapes, and complete as many escapes as you can

Pick your challenge, or try to do both, but watch your timer!`,escape_rando:{false:50,true:0},"sidneys_secret_documentation-remove_escape_enemies":"Remove enemies during escape sequence, disable it to blast through enemies with your Hyper Beam and cause lag.",remove_escape_enemies:{false:50,true:0},"sidneys_secret_documentation-fun_combat":`Forces removal of Plasma Beam and Screw Attack if the preset and settings allow it. In addition, can randomly
remove Spazer and Wave Beam from the Combat set. If used, might force 'minimal' accessibility.`,fun_combat:{false:50,true:0},"sidneys_secret_documentation-fun_movement":`Forces removal of Space Jump if the preset allows it. In addition, can randomly remove High Jump, Grappling Beam,
Spring Ball, Speed Booster, and Bombs from the Movement set. If used, might force 'minimal' accessibility.`,fun_movement:{false:50,true:0},"sidneys_secret_documentation-fun_suits":`If the preset and seed layout allow it, will force removal of at least one of Varia Suit and/or Gravity Suit. If
used, might force 'minimal' accessibility.`,fun_suits:{false:50,true:0},"sidneys_secret_documentation-layout_patches":"Include the anti-softlock layout patches. Disable at your own softlocking risk!",layout_patches:{false:0,true:50},"sidneys_secret_documentation-varia_tweaks":"Include minor tweaks for the game to behave 'as it should' in a randomizer context",varia_tweaks:{false:50,true:0},"sidneys_secret_documentation-nerfed_charge":`Samus begins with a starter Charge Beam that does one third of charged shot damage that can damage bosses. Pseudo
Screws also do one third damage. Special Beam Attacks do normal damage but cost 3 Power Bombs instead of 1. Once the
Charge Beam item has been collected, it does full damage and special attacks are back to normal.`,nerfed_charge:{false:50,true:0},"sidneys_secret_documentation-gravity_behaviour":"Modify the heat damage and enemy damage reduction qualities of the Gravity and Varia Suits.",gravity_behaviour:{vanilla:0,balanced:50,progressive:0},"sidneys_secret_documentation-elevators_speed":"Accelerate elevators transitions.",elevators_speed:{false:0,true:50},"sidneys_secret_documentation-fast_doors":"Accelerate doors transitions.",fast_doors:{false:0,true:50},"sidneys_secret_documentation-spin_jump_restart":"Allows Samus to start spinning in mid air after jumping or falling.",spin_jump_restart:{false:50,true:0},"sidneys_secret_documentation-rando_speed":"Let Samus keeps her momentum when landing from a fall or from jumping.",rando_speed:{false:50,true:0},"sidneys_secret_documentation-infinite_space_jump":"Space jumps can be done quicker and at any time in air, water or lava, even after falling long distances.",infinite_space_jump:{false:50,true:0},"sidneys_secret_documentation-refill_before_save":"Refill energy and ammo when saving.",refill_before_save:{false:50,true:0},"sidneys_secret_documentation-hud":`Displays the current area name and the number of remaining items of selected item split in the HUD for the
current area.`,hud:{false:50,true:0},"sidneys_secret_documentation-animals":`Replace saving the animals in the escape sequence by a random surprise.
Note: This setting is not available when Escape Randomization is enabled, as it is replaced by Animals Challenges
(see Escape Randomization help for more information).`,animals:{false:50,true:0},"sidneys_secret_documentation-no_music":"Disable the background music.",no_music:{false:50,true:0},"sidneys_secret_documentation-random_music":"Randomize the background music.",random_music:{false:50,true:0},"sidneys_secret_documentation-custom_preset":`see https://randommetroidsolver.pythonanywhere.com/presets for detailed info on each preset settings
knows: each skill (know) has a pair [can use, perceived difficulty using one of 1, 5, 10, 25, 50 or 100 each one
    matching a max_difficulty]
settings: hard rooms, hellruns and bosses settings
controller: predefined controller mapping and moon walk setting`,custom_preset:{controller:{},knows:{},settings:{}},"sidneys_secret_documentation-varia_custom_preset":"use an entry from the preset list on https://randommetroidsolver.pythonanywhere.com/presets",varia_custom_preset:{},"sidneys_secret_documentation-tourian":`Choose endgame Tourian behaviour:
Vanilla: regular vanilla Tourian
Fast: speed up Tourian to skip Metroids, Zebetites, and all cutscenes (including Mother Brain 3 fight). Golden Four statues are replaced by an invincible Gadora until all objectives are completed.
Disabled: skip Tourian entirely, ie. escape sequence is triggered as soon as all objectives are completed.`,tourian:{vanilla:50,fast:0,disabled:0},"sidneys_secret_documentation-custom_objective":`Use randomized custom objectives. You can choose which objectives are available for the randomizer to choose from. If enabled, the randomizer 
will choose "Custom objective count" objectives from "Custom objective list". Otherwise, only objective is used. Default is disabled.`,custom_objective:{false:50,true:0},"sidneys_secret_documentation-custom_objective_list":`If ""Custom objectives"" is enabled, "Custom Objective count" will be used to pick an amount of objective from the list.
This setting is ignored if ""Custom objectives"" is set to false.
Note: If you leave the list empty no objective is required to access Tourian, ie. it's open.
Note: See the Tourian parameter to enable fast Tourian or trigger the escape when all objectives are completed.
Note: Current percentage of collected items is displayed in the inventory pause menu.
Note: Collect 100% items is excluded by default as it requires you to complete all the objectives.
Note: In AP, Items% and areas objectives are counted toward location checks, not items collected or received, except for "collect all upgrades"

Format as a comma-separated list of objective names: ["kill three G4", "collect 75% items"] or ["random"] to specify the whole list except
"collect 100% items" and "nothing". The default is ["random"]. A full list of supported objectives can be found at:
https://github.com/ArchipelagoMW/Archipelago/blob/main/worlds/sm/variaRandomizer/utils/objectives.py`,custom_objective_list:["random"],"sidneys_secret_documentation-custom_objective_count":`By default you need to complete 4 objectives from the list to access Tourian. You can choose between 1 and 5. This setting is ignored if
""Custom objectives"" is set to false.`,custom_objective_count:{4:50,sidneys_secret_range_start:1,sidneys_secret_range_end:5,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-objective":`If ""Custom objectives"" is disabled, choose which objectives are required to sink the Golden Four statue and to open access to Tourian.
You can choose from 0 to 5 objectives. Up to the first 5 objectives from the list will be selected.
Note: If you leave the list empty no objective is required to access Tourian, ie. it's open.
Note: See the Tourian parameter to enable fast Tourian or trigger the escape when all objectives are completed.
Note: Current percentage of collected items is displayed in the inventory pause menu.
Note: In AP, Items% and areas objectives are counted toward location checks, not items collected or received, except for "collect all upgrades"

Format as a comma-separated list of objective names: ["kill three G4", "collect 75% items"]. The default is ["kill all G4"].
A full list of supported objectives can be found at:
https://github.com/ArchipelagoMW/Archipelago/blob/main/worlds/sm/variaRandomizer/utils/objectives.py`,objective:["kill all G4"],"sidneys_secret_documentation-relaxed_round_robin_cf":`Changes Crystal Flashes behavior and requirements as follows:

You can perform a Crystal Flash with any amount of ammo, but you need at least one Power Bomb to begin the process.
After consuming 1 ammo, Samus gains 50 energy, and it will try a different ammo type next,  
cycling through Missiles, Supers, and Power Bombs as available. The cycling is to keep the consumption even between ammo types.
If one of your ammo types is at 0, it will be skipped.
The Crystal Flash ends when Samus is out of ammo or a total of 30 ammo has been consumed.`,relaxed_round_robin_cf:{false:50,true:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
