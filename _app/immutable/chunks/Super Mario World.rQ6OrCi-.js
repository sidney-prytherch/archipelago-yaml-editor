const e={name:"Player{number}",description:"Default Super Mario World Template",game:"Super Mario World",requires:{version:"0.5.0"},"Super Mario World":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0},"sidneys_secret_documentation-early_climb":`Force Climb to appear early in the seed as a local item.

This is particularly useful to prevent BK when Level Shuffle is disabled`,early_climb:{false:50,true:0},"sidneys_secret_documentation-goal":`Determines the goal of the seed

Bowser: Defeat Koopalings, reach Bowser's Castle and defeat Bowser

Yoshi Egg Hunt: Find a certain number of Yoshi Eggs`,goal:{bowser:50,yoshi_egg_hunt:0},"sidneys_secret_documentation-bosses_required":"How many Bosses (Koopalings or Reznor) must be defeated in order to defeat Bowser",bosses_required:{7:50,sidneys_secret_range_start:0,sidneys_secret_range_end:11,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-max_yoshi_egg_cap":`Maximum possible number of Yoshi Eggs that will be in the item pool

If fewer available locations exist in the pool than this number, the number of available locations will be used instead.

Required Percentage of Yoshi Eggs will be calculated based off of that number.`,max_yoshi_egg_cap:{50:50,sidneys_secret_range_start:1,sidneys_secret_range_end:255,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-percentage_of_yoshi_eggs":"What Percentage of Yoshi Eggs are required to finish Yoshi Egg Hunt",percentage_of_yoshi_eggs:{100:50,sidneys_secret_range_start:1,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-dragon_coin_checks":"Whether collecting 5 Dragon Coins in each level will grant a check",dragon_coin_checks:{false:50,true:0},"sidneys_secret_documentation-moon_checks":"Whether collecting a 3-Up Moon in a level will grant a check",moon_checks:{false:50,true:0},"sidneys_secret_documentation-hidden_1up_checks":`Whether collecting a hidden 1-Up mushroom in a level will grant a check

These checks are considered cryptic as there's no actual indicator that they're in their respective places

Enable this option at your own risk`,hidden_1up_checks:{false:50,true:0},"sidneys_secret_documentation-bonus_block_checks":"Whether collecting a 1-Up mushroom from a Bonus Block in a level will grant a check",bonus_block_checks:{false:50,true:0},"sidneys_secret_documentation-blocksanity":`Whether hitting a block with an item or coin inside will grant a check

Note that some blocks are excluded due to how the option and the game works!

Exclusion list:
  * Blocks in Top Secret Area & Front Door/Bowser Castle
  * Blocks that are unreachable unless you glitch your way in`,blocksanity:{false:50,true:0},"sidneys_secret_documentation-bowser_castle_doors":`How the doors of Bowser's Castle behave

Vanilla: Front and Back Doors behave as vanilla

Fast: Both doors behave as the Back Door

Slow: Both doors behave as the Front Door

"Front Door" rooms depend on the \`bowser_castle_rooms\` option

"Back Door" only requires going through the dark hallway to Bowser`,bowser_castle_doors:{vanilla:50,fast:0,slow:0},"sidneys_secret_documentation-bowser_castle_rooms":`How the rooms of Bowser's Castle Front Door behave

Vanilla: You can choose which rooms to enter, as in vanilla

Random Two Room: Two random rooms are chosen

Random Five Room: Five random rooms are chosen

Gauntlet: All eight rooms must be cleared

Labyrinth: Which room leads to Bowser?`,bowser_castle_rooms:{vanilla:0,random_two_room:50,random_five_room:0,gauntlet:0,labyrinth:0},"sidneys_secret_documentation-level_shuffle":"Whether levels are shuffled",level_shuffle:{false:50,true:0},"sidneys_secret_documentation-exclude_special_zone":`If active, this option will prevent any progression items from being placed in Special Zone levels.

Additionally, if Level Shuffle is active, Special Zone levels will not be shuffled away from their vanilla tiles.`,exclude_special_zone:{false:50,true:0},"sidneys_secret_documentation-boss_shuffle":`How bosses are shuffled

None: Bosses are not shuffled

Simple: Four Reznors and the seven Koopalings are shuffled around

Full: Each boss location gets a fully random boss

Singularity: One or two bosses are chosen and placed at every boss location`,boss_shuffle:{none:50,simple:0,full:0,singularity:0},"sidneys_secret_documentation-swap_donut_gh_exits":`If enabled, this option will swap which overworld direction the two exits of the level at the Donut Ghost House overworld tile go:

False: Normal Exit goes up, Secret Exit goes right.

True: Normal Exit goes right, Secret Exit goes up.`,swap_donut_gh_exits:{false:50,true:0},"sidneys_secret_documentation-junk_fill_percentage":"Replace a percentage of non-required Yoshi Eggs in the item pool with random junk items (only applicable on Yoshi Egg Hunt goal)",junk_fill_percentage:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-trap_fill_percentage":"Replace a percentage of junk items in the item pool with random traps",trap_fill_percentage:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-ice_trap_weight":"Likelihood of a receiving a trap which causes the level to become slippery",ice_trap_weight:{none:0,low:0,medium:50,high:0},"sidneys_secret_documentation-stun_trap_weight":"Likelihood of a receiving a trap which briefly stuns Mario",stun_trap_weight:{none:0,low:0,medium:50,high:0},"sidneys_secret_documentation-literature_trap_weight":"Likelihood of a receiving a trap which causes the player to read literature",literature_trap_weight:{none:0,low:0,medium:50,high:0},"sidneys_secret_documentation-timer_trap_weight":"Likelihood of a receiving a trap which causes the timer to run low",timer_trap_weight:{none:0,low:0,medium:50,high:0},"sidneys_secret_documentation-reverse_trap_weight":"Likelihood of a receiving a trap which causes the controls to be reversed in the current level",reverse_trap_weight:{none:0,low:0,medium:50,high:0},"sidneys_secret_documentation-thwimp_trap_weight":"Likelihood of a receiving a trap which causes a Thwimp to spawn above the player",thwimp_trap_weight:{none:0,low:0,medium:50,high:0},"sidneys_secret_documentation-display_received_item_popups":"What messages to display in-game for items received",display_received_item_popups:{none:0,all:0,progression:0,progression_minus_yoshi_eggs:50},"sidneys_secret_documentation-autosave":"Whether a save prompt will appear after every level",autosave:{false:0,true:50},"sidneys_secret_documentation-overworld_speed":"How fast Mario moves on the overworld",overworld_speed:{slow:0,vanilla:50,fast:0},"sidneys_secret_documentation-music_shuffle":`Music shuffle type

None: No Music is shuffled

Consistent: Each music track is consistently shuffled throughout the game

Full: Each individual level has a random music track

Singularity: The entire game uses one song for overworld and one song for levels`,music_shuffle:{none:50,consistent:0,full:0,singularity:0},"sidneys_secret_documentation-sfx_shuffle":`Shuffles almost every instance of sound effect playback

Archipelago elements that play sound effects aren't randomized

None: No SFX are shuffled

Full: Each individual SFX call has a random SFX

Singularity: The entire game uses one SFX for every SFX call`,sfx_shuffle:{none:50,full:0,singularity:0},"sidneys_secret_documentation-mario_palette":"Mario palette color",mario_palette:{mario:50,luigi:0,wario:0,waluigi:0,geno:0,princess:0,dark:0,sponge:0},"sidneys_secret_documentation-level_palette_shuffle":`Whether to shuffle level palettes

Off: Do not shuffle palettes

On Legacy: Uses only the palette sets from the original game

On Curated: Uses custom, hand-crafted palette sets`,level_palette_shuffle:{off:50,on_legacy:0,on_curated:0},"sidneys_secret_documentation-overworld_palette_shuffle":`Whether to shuffle overworld palettes

Off: Do not shuffle palettes

On Legacy: Uses only the palette sets from the original game

On Curated: Uses custom, hand-crafted palette sets`,overworld_palette_shuffle:{off:50,on_legacy:0,on_curated:0},"sidneys_secret_documentation-starting_life_count":"How many extra lives to start the game with",starting_life_count:{5:50,sidneys_secret_range_start:1,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};