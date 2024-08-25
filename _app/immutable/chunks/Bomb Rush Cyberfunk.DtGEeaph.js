const e={name:"Player{number}",description:"Default Bomb Rush Cyberfunk Template",game:"Bomb Rush Cyberfunk",requires:{version:"0.5.0"},"Bomb Rush Cyberfunk":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-logic":"Choose the logic used by the randomizer.",logic:{glitchless:50,glitched:0},"sidneys_secret_documentation-skip_intro":`Skips escaping the police station.

Graffiti spots tagged during the intro will not unlock items.`,skip_intro:{false:0,true:50},"sidneys_secret_documentation-skip_dreams":`Skips the dream sequences at the end of each chapter.

This can be changed later in the options menu inside the Archipelago phone app.`,skip_dreams:{false:50,true:0},"sidneys_secret_documentation-skip_statue_hands":"Skips spraying the lion statue hands after the dream in Chapter 5.",skip_statue_hands:{false:50,true:0},"sidneys_secret_documentation-total_rep":`Change the total amount of REP in your world.

At least 960 REP is needed to finish the game.

Will be rounded to the nearest number divisible by 8.`,total_rep:{1400:50,sidneys_secret_range_start:1e3,sidneys_secret_range_end:2e3,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-extra_rep_required":"Changes the final boss to require 1000 REP instead of 960 REP to start.",extra_rep_required:{false:50,true:0},"sidneys_secret_documentation-starting_movestyle":"Choose which movestyle to start with.",starting_movestyle:{skateboard:50,inline_skates:0,bmx:0},"sidneys_secret_documentation-limited_graffiti":`Each graffiti design can only be used a limited number of times before being removed from your inventory.

In some cases, such as completing a dream, using graffiti to defeat enemies, or spraying over your own graffiti, uses will not be counted.

If enabled, doing graffiti is disabled during crew battles, to prevent softlocking.`,limited_graffiti:{false:50,true:0},"sidneys_secret_documentation-small_graffiti_uses":`Choose if small graffiti should be separate, meaning that you will need to switch characters every time you run out, or combined, meaning that unlocking new characters will add 5 uses that any character can use.

Has no effect if Limited Graffiti is disabled.`,small_graffiti_uses:{separate:50,combined:0},"sidneys_secret_documentation-skip_polo_photos":"Skip taking pictures of Polo for items.",skip_polo_photos:{false:50,true:0},"sidneys_secret_documentation-dont_save_photos":`Photos taken with the Camera app will not be saved.

This can be changed later in the options menu inside the Archipelago phone app.`,dont_save_photos:{false:50,true:0},"sidneys_secret_documentation-score_difficulty":`Alters the score required to win score challenges and crew battles.

This can be changed later in the options menu inside the Archipelago phone app.`,score_difficulty:{normal:50,medium:0,hard:0,very_hard:0,extreme:0},"sidneys_secret_documentation-damage_multiplier":`Multiplies all damage received.

At 3x, most damage will OHKO the player, including falling into pits.
At 6x, all damage will OHKO the player.

This can be changed later in the options menu inside the Archipelago phone app.`,damage_multiplier:{1:50,sidneys_secret_range_start:1,sidneys_secret_range_end:6,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-death_link":`When you die, everyone dies. The reverse is also true.

This can be changed later in the options menu inside the Archipelago phone app.`,death_link:{false:50,true:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
