const e={name:"Player{number}",description:"Default Overcooked! 2 Template",game:"Overcooked! 2",requires:{version:"0.5.0"},"Overcooked! 2":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-location_balancing":`Location balancing affects the density of progression items found in your world relative to other worlds. This setting changes nothing for solo games.

- Disabled: Location density in your world can fluctuate greatly depending on the settings of other players. In extreme cases, your world may be entirely populated with filler items

- Compromise: Locations are balanced to a midpoint between "fair" and "natural"

- Full: Locations are balanced in an attempt to make the number of progression items sent out and received equal over the entire game`,location_balancing:{disabled:0,compromise:50,full:0},"sidneys_secret_documentation-ramp_tricks":"If enabled, generated games may require sequence breaks on the overworld map. This includes crossing small gaps and escaping out of bounds.",ramp_tricks:{false:50,true:0},"sidneys_secret_documentation-deathlink":`DeathLink is an opt-in feature for Multiworlds where individual death events are propagated to all games with DeathLink enabled.

- Disabled: Death will behave as it does in the original game.

- Death Only: A DeathLink broadcast will be sent every time a chef falls into a stage hazard. All local chefs will be killed when any one perishes.

- Death and Overcook: Same as above, but an additional broadcast will be sent whenever the kitchen catches on fire from burnt food.`,deathlink:{disabled:50,death_only:0,death_and_overcook:0},"sidneys_secret_documentation-shuffle_level_order":"Shuffles the order of kitchens on the overworld map. Also draws from DLC maps.",shuffle_level_order:{false:0,true:50},"sidneys_secret_documentation-include_dlcs":"Which DLCs should be included when 'Shuffle Level Order' is enabled?'",include_dlcs:["Story","Seasonal"],"sidneys_secret_documentation-include_horde_levels":`Includes "Horde Defense" levels in the pool of possible kitchens when Shuffle Level Order is enabled. Also adds
two horde-specific items into the item pool.`,include_horde_levels:{false:0,true:50},"sidneys_secret_documentation-prep_levels":`Choose How "Prep Levels" are handled (levels where the timer does not start until the first order is served):

- Original: Prep Levels may appear

- Excluded: Prep Levels are excluded from the pool during level shuffling

- All You Can Eat: Prep Levels may appear, but the timer automatically starts. The star score requirements are also
adjusted to use the All You Can Eat World Record (if it exists)`,prep_levels:{original:0,excluded:50,all_you_can_eat:0},"sidneys_secret_documentation-kevin_levels":"Includes the 8 Kevin level locations on the map as unlockables. Turn off to make games shorter.",kevin_levels:{false:0,true:50},"sidneys_secret_documentation-fix_bugs":`Fixes Bugs Present in the base game:
- Double Serving Exploit
- Sink Bug
- Control Stick Cancel/Throw Bug
- Can't Throw Near Empty Burner Bug`,fix_bugs:{false:0,true:50},"sidneys_secret_documentation-shorter_level_duration":`Modifies level duration to be about 1/3rd shorter than in the original game, thus bringing the item discovery
pace in line with other popular Archipelago games.

Points required to earn stars are scaled accordingly. ("Boss Levels" which change scenery mid-game are not
affected.)`,shorter_level_duration:{false:0,true:50},"sidneys_secret_documentation-short_horde_levels":`Modifies horde levels to contain roughly 1/3rd fewer waves than in the original game.

The kitchen's health is scaled appropriately to preserve the same approximate difficulty.`,short_horde_levels:{false:0,true:50},"sidneys_secret_documentation-always_preserve_cooking_progress":`Modifies the game to behave more like AYCE, where adding an item to an in-progress container doesn't reset the
entire progress bar.`,always_preserve_cooking_progress:{false:0,true:50},"sidneys_secret_documentation-always_serve_oldest_order":`Modifies the game so that serving an expired order doesn't target the ticket with the highest tip. This helps
players dig out of a broken tip combo faster.`,always_serve_oldest_order:{false:0,true:50},"sidneys_secret_documentation-display_leaderboard_scores":`Modifies the Overworld map to fetch and display the current world records for each level. Press number keys 1-4
to view leaderboard scores for that number of players.`,display_leaderboard_scores:{false:50,true:0},"sidneys_secret_documentation-stars_to_win":`Number of stars required to unlock 6-6.

Level purchase requirements between 1-1 and 6-6 will be spread between these two numbers. Using too high of a number
may result in more frequent generation failures, especially when horde levels are enabled.`,stars_to_win:{60:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-star_threshold_scale":`How difficult should the third star for each level be on a scale of 1-100%, where 100% is the current world
record score and 45% is the average vanilla 4-star score.`,star_threshold_scale:{35:50,sidneys_secret_range_start:1,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
