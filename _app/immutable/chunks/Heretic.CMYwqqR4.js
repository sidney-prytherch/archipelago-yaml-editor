const e={name:"Player{number}",description:"Default Heretic Template",game:"Heretic",requires:{version:"0.4.6"},Heretic:{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.
A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.
Locations: ensure everything can be reached and acquired.
Items: ensure all logically relevant items can be acquired.
Minimal: ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the !hint command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the !hint command",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[],"sidneys_secret_documentation-start_inventory_from_pool":`Start with these items and don't place them in the world.
The game decides what the replacement items will be.`,start_inventory_from_pool:{},"sidneys_secret_documentation-goal":`Choose the main goal.
complete_all_levels: All levels of the selected episodes
complete_boss_levels: Boss levels (E#M8) of selected episodes`,goal:{complete_all_levels:50,complete_boss_levels:0},"sidneys_secret_documentation-difficulty":`Choose the difficulty option. Those match DOOM's difficulty options.
baby (I'm too young to die.) double ammos, half damage, less monsters or strength.
easy (Hey, not too rough.) less monsters or strength.
medium (Hurt me plenty.) Default.
hard (Ultra-Violence.) More monsters or strength.
nightmare (Nightmare!) Monsters attack more rapidly and respawn.

wet nurse (hou needeth a wet-nurse) - Fewer monsters and more items than medium. Damage taken is halved, and ammo pickups carry twice as much ammo. Any Quartz Flasks and Mystic Urns are automatically used when the player nears death.
easy (Yellowbellies-r-us) - Fewer monsters and more items than medium.
medium (Bringest them oneth) - Completely balanced, this is the standard difficulty level.
hard (Thou art a smite-meister) - More monsters and fewer items than medium.
black plague (Black plague possesses thee) - Same as hard, but monsters and their projectiles move much faster. Cheating is also disabled.`,difficulty:{wet_nurse:0,easy:0,medium:50,hard:0,black_plague:0},"sidneys_secret_documentation-random_monsters":`Choose how monsters are randomized.
vanilla: No randomization
shuffle: Monsters are shuffled within the level
random_balanced: Monsters are completely randomized, but balanced based on existing ratio in the level. (Small monsters vs medium vs big)
random_chaotic: Monsters are completely randomized, but balanced based on existing ratio in the entire game.`,random_monsters:{vanilla:0,shuffle:50,random_balanced:0,random_chaotic:0},"sidneys_secret_documentation-random_pickups":`Choose how pickups are randomized.
vanilla: No randomization
shuffle: Pickups are shuffled within the level
random_balanced: Pickups are completely randomized, but balanced based on existing ratio in the level. (Small pickups vs Big)`,random_pickups:{vanilla:0,shuffle:50,random_balanced:0},"sidneys_secret_documentation-random_music":`Level musics will be randomized.
vanilla: No randomization
shuffle_selected: Selected episodes' levels will be shuffled
shuffle_game: All the music will be shuffled`,random_music:{vanilla:50,shuffle_selected:0,shuffle_game:0},"sidneys_secret_documentation-allow_death_logic":`Some locations require a timed puzzle that can only be tried once.
After which, if the player failed to get it, the location cannot be checked anymore.
By default, no progression items are placed here. There is a way, hovewer, to still get them:
Get killed in the current map. The map will reset, you can now attempt the puzzle again.`,allow_death_logic:{false:50,true:0},"sidneys_secret_documentation-pro":`Include difficult tricks into rules. Mostly employed by speed runners.
i.e.: Leaps across to a locked area, trigger a switch behind a window at the right angle, etc.`,pro:{false:50,true:0},"sidneys_secret_documentation-check_sanity":`Include redundant checks. This increase total check count for the game.
i.e.: In a room, there might be 3 checks close to each other. By default, two of them will be remove.
This was done to lower the total count check for Heretic, as it is quite high compared to other games.
Check Sanity restores original checks.`,check_sanity:{false:50,true:0},"sidneys_secret_documentation-start_with_map_scrolls":"Give the player all Map Scroll items from the start.",start_with_map_scrolls:{false:50,true:0},"sidneys_secret_documentation-reset_level_on_death":`When dying, levels are reset and monsters respawned. But inventory and checks are kept.
Turning this setting off is considered easy mode. Good for new players that don't know the levels well.`,reset_level_on_death:{false:0,true:50},"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0},"sidneys_secret_documentation-episode1":`City of the Damned.
If none of the episodes are chosen, Episode 1 will be chosen by default.`,episode1:{false:0,true:50},"sidneys_secret_documentation-episode2":`Hell's Maw.
If none of the episodes are chosen, Episode 1 will be chosen by default.`,episode2:{false:0,true:50},"sidneys_secret_documentation-episode3":`The Dome of D'Sparil.
If none of the episodes are chosen, Episode 1 will be chosen by default.`,episode3:{false:0,true:50},"sidneys_secret_documentation-episode4":`The Ossuary.
If none of the episodes are chosen, Episode 1 will be chosen by default.`,episode4:{false:50,true:0},"sidneys_secret_documentation-episode5":`The Stagnant Demesne.
If none of the episodes are chosen, Episode 1 will be chosen by default.`,episode5:{false:50,true:0}}};export{e as default};
