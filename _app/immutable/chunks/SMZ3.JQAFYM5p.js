const e={name:"Player{number}",description:"Default SMZ3 Template",game:"SMZ3",requires:{version:"0.5.0"},SMZ3:{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-sm_logic":`This option selects what kind of logic to use for item placement inside
Super Metroid.

Normal - Normal logic includes only what Super Metroid teaches players
itself. Anything that's not demonstrated in-game or by the intro cutscenes
will not be required here.

Hard - Hard logic is based upon the "no major glitches" ruleset and
includes most tricks that are considered minor glitches, with some 
restrictions. You'll want to be somewhat of a Super Metroid veteran for
this logic.

See https://samus.link/information for required moves.`,sm_logic:{normal:50,hard:0},"sidneys_secret_documentation-sword_location":`This option decides where the first sword will be placed.
Randomized - The sword can be placed anywhere.
Early - The sword will be placed in a location accessible from the start of
the game.
Uncle - The sword will always be placed on Link's Uncle.`,sword_location:{randomized:50,early:0,uncle:0},"sidneys_secret_documentation-morph_location":`This option decides where the morph ball will be placed.
Randomized - The morph ball can be placed anywhere.
Early - The morph ball will be placed in a location accessible from the 
start of the game.
Original location - The morph ball will always be placed at its original 
location.`,morph_location:{randomized:50,early:0,original:0},"sidneys_secret_documentation-goal":`This option decides what goal is required to finish the randomizer.
Defeat Ganon and Mother Brain - Find the required crystals and boss tokens to kill both bosses.
Fast Ganon and Defeat Mother Brain - The hole to ganon is open without having to defeat Agahnim in 
          Ganon's Tower and Ganon can be defeat as soon you have the required 
          crystals to make Ganon vulnerable. For keysanity, this mode also removes 
          the Crateria Boss Key requirement from Tourian to allow faster access.
All Dungeons and Defeat Mother Brain -  Similar to "Defeat Ganon and Mother Brain", but also requires all dungeons 
          to be beaten including Castle Tower and Agahnim.`,goal:{defeatboth:50,fastganondefeatmotherbrain:0,alldungeonsdefeatmotherbrain:0},"sidneys_secret_documentation-key_shuffle":`This option decides how dungeon items such as keys are shuffled.
None - A Link to the Past dungeon items can only be placed inside the 
dungeon they belong to, and there are no changes to Super Metroid.
Keysanity - See https://samus.link/information`,key_shuffle:{none:50,keysanity:0},"sidneys_secret_documentation-open_tower":`The amount of crystals required to be able to enter Ganon's Tower. 
If this is set to Random, the amount can be found in-game on a sign next to Ganon's Tower.`,open_tower:{7:50,sidneys_secret_range_start:0,sidneys_secret_range_end:7,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-ganon_vulnerable":`The amount of crystals required to be able to harm Ganon. The amount can be found 
in-game on a sign near the top of the Pyramid.`,ganon_vulnerable:{7:50,sidneys_secret_range_start:0,sidneys_secret_range_end:7,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-open_tourian":`The amount of boss tokens required to enter Tourian. The amount can be found in-game 
on a sign above the door leading to the Tourian entrance.`,open_tourian:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:4,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-spin_jumps_animation":"Enable separate space/screw jump animations",spin_jumps_animation:{false:50,true:0},"sidneys_secret_documentation-heart_beep_speed":"Sets the speed of the heart beep sound in A Link to the Past.",heart_beep_speed:{off:0,quarter:0,half:0,normal:50,double:0},"sidneys_secret_documentation-heart_color":"Changes the color of the hearts in the HUD for A Link to the Past.",heart_color:{red:50,green:0,blue:0,yellow:0},"sidneys_secret_documentation-quick_swap":"When enabled, lets you switch items in ALTTP with L/R",quick_swap:{false:50,true:0},"sidneys_secret_documentation-energy_beep":"Toggles the low health energy beep in Super Metroid.",energy_beep:{false:0,true:50},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};