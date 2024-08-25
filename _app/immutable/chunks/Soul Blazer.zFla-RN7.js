const e={name:"Player{number}",description:"Default Soul Blazer Template",game:"Soul Blazer",requires:{version:"0.5.0"},"Soul Blazer":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-text_speed":`Text Speed.
Instant: Text renders an entire window at a time.
Fast: Text renders a character at a time at the same speed as the JP version.`,text_speed:{fast:0,instant:50},"sidneys_secret_documentation-goal":`How you beat the game.
Deathtoll: Defeat Deathtoll.
Emblem Hunt: Collect all 8 master's emblems and turn them in at the Gem Fairy in Greenwood.`,goal:{deathtoll:50,emblem_hunt:0},"sidneys_secret_documentation-act_progression":`Act/World progression.
Vanilla: Talk to town leaders to open the next Act/World.
Open: All worlds are open from the start of the game.`,act_progression:{vanilla:50,open:0},"sidneys_secret_documentation-stones_placement":`Determines the placement of the 6 stones needed to enter the World of Evil.
Vanilla: Stones are given by the town leader of each act.
Bosses: Stones are rewarded from the boss lair of each act.
Totally Random: Stones are randomized with everything else.`,stones_placement:{vanilla:50,bosses:0,totally_random:0},"sidneys_secret_documentation-stones_count":"Number of Stones needed to open the World of Evil.",stones_count:{6:50,sidneys_secret_range_start:0,sidneys_secret_range_end:6,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-open_deathtoll":"Determines if Deathtoll's Palace in the World of Evil is already open.",open_deathtoll:{false:50,true:0},"sidneys_secret_documentation-starting_sword":`Determines the sword you will get in the first chest.
Vanilla: You will get the Sword of Life.
<Sword Name>: You will get that sword.
Randomized: You will get a random sword.`,starting_sword:{vanilla:50,psycho_sword:0,critical_sword:0,lucky_blade:0,zantetsu_sword:0,spirit_sword:0,recovery_sword:0,soul_blade:0,randomized:0},"sidneys_secret_documentation-equipment_stats":`Determines equipment power & defense.
Vanilla: No change to the way Weapons/Armor work.
Semi-progressive: Equipment strength/defense scales with the number of swords/armors obtained.
Shuffle: Shuffles the stats of all swords and armor.`,equipment_stats:{vanilla:0,semi_progressive:50,shuffle:0},"sidneys_secret_documentation-equipment_scaling":`Determines the stat progression for swords/armor.
Vanilla: Swords/Armor follow the vanilla 1/2/3/4/6/8/10/12 strength/defense progression.
Improved: Swords/Armor follow an improved 1/3/5/7/9/12/12/12 strength/defense progression.
Strong: Swords/Armor follow a strong 2/4/6/9/12/12/12/12 strength/defense progression.`,equipment_scaling:{vanilla:50,improved:0,strong:0},"sidneys_secret_documentation-magician_item":`Determines the item the Magician gives you at the start of the game.
Vanilla: The vanilla reward (Flame Ball).
Random Spell: A random castable magic spell.
Totally Random: Any reward in the item pool.`,magician_item:{vanilla:0,random_spell:50,totally_random:0},"sidneys_secret_documentation-magician_soul":`Determines what reward you will get in place of the Magician's Soul at the start of the game.
Vanilla: You get the Soul of Magician.
Random Soul: Any progression soul. (Soul of Magician, Soul of Light, Soul of Detection)
Totally Random: Any reward in the item pool.`,magician_soul:{vanilla:50,random_soul:0,totally_random:0},"sidneys_secret_documentation-gem_exp_pool":`Modifies the Gem/Exp rewards in the item pool.
Vanilla: The same Gem/Exp values as the vanilla game.
Improved: Gem rewards in the item pool are multiplied by 2, and Exp rewards by 10.
Random Range: Gem rewards in the pool are randomized in the range of 1-999, and Exp rewards in the range of 1-9999.`,gem_exp_pool:{vanilla:0,improved:0,random_range:50},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
