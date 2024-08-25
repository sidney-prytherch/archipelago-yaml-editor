const e={name:"Player{number}",description:"Default Starcraft 2 Template",game:"Starcraft 2",requires:{version:"0.5.0"},"Starcraft 2":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-game_difficulty":`The difficulty of the campaign, affects enemy AI, starting units, and game speed.

For those unfamiliar with the Archipelago randomizer, the recommended settings are one difficulty level
lower than the vanilla game`,game_difficulty:{casual:0,normal:50,hard:0,brutal:0},"sidneys_secret_documentation-game_speed":"Optional setting to override difficulty-based game speed.",game_speed:{default:50,slower:0,slow:0,normal:0,fast:0,faster:0},"sidneys_secret_documentation-disable_forced_camera":"Prevents the game from moving or locking the camera without the player's consent.",disable_forced_camera:{false:50,true:0},"sidneys_secret_documentation-skip_cutscenes":"Skips all cutscenes and prevents dialog from blocking progress.",skip_cutscenes:{false:50,true:0},"sidneys_secret_documentation-all_in_map":"Determines what version of All-In (WoL final map) that will be generated for the campaign.",all_in_map:{ground:50,air:0},"sidneys_secret_documentation-mission_order":`Determines the order the missions are played in.  The last three mission orders end in a random mission.
Vanilla (83 total if all campaigns enabled): Keeps the standard mission order and branching from the vanilla Campaigns.
Vanilla Shuffled (83 total if all campaigns enabled): Keeps same branching paths from the vanilla Campaigns but randomizes the order of missions within.
Mini Campaign (47 total if all campaigns enabled): Shorter version of the campaign with randomized missions and optional branches.
Medium Grid (16):  A 4x4 grid of random missions.  Start at the top-left and forge a path towards bottom-right mission to win.
Mini Grid (9):  A 3x3 version of Grid.  Complete the bottom-right mission to win.
Blitz (12):  12 random missions that open up very quickly.  Complete the bottom-right mission to win.
Gauntlet (7): Linear series of 7 random missions to complete the campaign.
Mini Gauntlet (4): Linear series of 4 random missions to complete the campaign.
Tiny Grid (4): A 2x2 version of Grid.  Complete the bottom-right mission to win.
Grid (variable): A grid that will resize to use all non-excluded missions.  Corners may be omitted to make the grid more square.  Complete the bottom-right mission to win.`,mission_order:{vanilla:50,vanilla_shuffled:0,mini_campaign:0,medium_grid:0,mini_grid:0,blitz:0,gauntlet:0,mini_gauntlet:0,tiny_grid:0,grid:0},"sidneys_secret_documentation-maximum_campaign_size":`Sets an upper bound on how many missions to include when a variable-size mission order is selected.
If a set-size mission order is selected, does nothing.`,maximum_campaign_size:{83:50,sidneys_secret_range_start:1,sidneys_secret_range_end:83,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-grid_two_start_positions":`If turned on and 'grid' mission order is selected, removes a mission from the starting
corner sets the adjacent two missions as the starter missions.`,grid_two_start_positions:{false:50,true:0},"sidneys_secret_documentation-player_color_terran_raynor":"Determines in-game team color for playable Raynor's Raiders (Terran) factions.",player_color_terran_raynor:{white:0,red:0,blue:0,teal:0,purple:0,yellow:0,orange:0,green:0,light_pink:0,violet:0,light_grey:0,dark_green:0,brown:0,light_green:0,dark_grey:0,pink:0,rainbow:0,default:50},"sidneys_secret_documentation-player_color_protoss":"Determines in-game team color for playable Protoss factions.",player_color_protoss:{white:0,red:0,blue:0,teal:0,purple:0,yellow:0,orange:0,green:0,light_pink:0,violet:0,light_grey:0,dark_green:0,brown:0,light_green:0,dark_grey:0,pink:0,rainbow:0,default:50},"sidneys_secret_documentation-player_color_zerg":"Determines in-game team color for playable Zerg factions before Kerrigan becomes Primal Kerrigan.",player_color_zerg:{white:0,red:0,blue:0,teal:0,purple:0,yellow:0,orange:0,green:0,light_pink:0,violet:0,light_grey:0,dark_green:0,brown:0,light_green:0,dark_grey:0,pink:0,rainbow:0,default:50},"sidneys_secret_documentation-player_color_zerg_primal":"Determines in-game team color for playable Zerg factions after Kerrigan becomes Primal Kerrigan.",player_color_zerg_primal:{white:0,red:0,blue:0,teal:0,purple:0,yellow:0,orange:0,green:0,light_pink:0,violet:0,light_grey:0,dark_green:0,brown:0,light_green:0,dark_grey:0,pink:0,rainbow:0,default:50},"sidneys_secret_documentation-enable_wol_missions":"Enables missions from main Wings of Liberty campaign.",enable_wol_missions:{false:0,true:50},"sidneys_secret_documentation-enable_prophecy_missions":"Enables missions from Prophecy mini-campaign.",enable_prophecy_missions:{false:0,true:50},"sidneys_secret_documentation-enable_hots_missions":"Enables missions from Heart of the Swarm campaign.",enable_hots_missions:{false:0,true:50},"sidneys_secret_documentation-enable_lotv_prologue_missions":"Enables missions from Prologue campaign.",enable_lotv_prologue_missions:{false:0,true:50},"sidneys_secret_documentation-enable_lotv_missions":"Enables missions from Legacy of the Void campaign.",enable_lotv_missions:{false:0,true:50},"sidneys_secret_documentation-enable_epilogue_missions":`Enables missions from Epilogue campaign.
These missions are considered very hard.

Enabling Wings of Liberty, Heart of the Swarm and Legacy of the Void is strongly recommended in order to play Epilogue.
Not recommended for short mission orders.
See also: Exclude Very Hard Missions`,enable_epilogue_missions:{false:0,true:50},"sidneys_secret_documentation-enable_nco_missions":`Enables missions from Nova Covert Ops campaign.

Note: For best gameplay experience it's recommended to also enable Wings of Liberty campaign.`,enable_nco_missions:{false:0,true:50},"sidneys_secret_documentation-shuffle_campaigns":`Shuffles the missions between campaigns if enabled.
Only available for Vanilla Shuffled and Mini Campaign mission order`,shuffle_campaigns:{false:0,true:50},"sidneys_secret_documentation-shuffle_no_build":`Determines if the no-build missions are included in the shuffle.
If turned off, the no-build missions will not appear. Has no effect for Vanilla mission order.`,shuffle_no_build:{false:0,true:50},"sidneys_secret_documentation-starter_unit":`Unlocks a random unit at the start of the game.

Off: No units are provided, the first unit must be obtained from the randomizer
Balanced: A unit that doesn't give the player too much power early on is given
Any Starter Unit: Any starter unit can be given`,starter_unit:{off:50,balanced:0,any_starter_unit:0},"sidneys_secret_documentation-required_tactics":`Determines the maximum tactical difficulty of the world (separate from mission difficulty).  Higher settings
increase randomness.

Standard:  All missions can be completed with good micro and macro.
Advanced:  Completing missions may require relying on starting units and micro-heavy units.
No Logic:  Units and upgrades may be placed anywhere.  LIKELY TO RENDER THE RUN IMPOSSIBLE ON HARDER DIFFICULTIES!
     Locks Grant Story Tech option to true.`,required_tactics:{standard:50,advanced:0,no_logic:0},"sidneys_secret_documentation-ensure_generic_items":`Specifies a minimum percentage of the generic item pool that will be present for the slot.
The generic item pool is the pool of all generically useful items after all exclusions.
Generically-useful items include: Worker upgrades, Building upgrades, economy upgrades,
Mercenaries, Kerrigan levels and abilities, and Spear of Adun abilities
Increasing this percentage will make units less common.`,ensure_generic_items:{25:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-min_number_of_upgrades":`Set a minimum to the number of upgrades a unit/structure can have.
Note that most units have 4 or 6 upgrades.
If a unit has fewer upgrades than the minimum, it will have all of its upgrades.

Doesn't affect shared unit upgrades.`,min_number_of_upgrades:{2:50,sidneys_secret_range_start:0,sidneys_secret_range_end:12,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-max_number_of_upgrades":`Set a maximum to the number of upgrades a unit/structure can have. -1 is used to define unlimited.
Note that most unit have 4 to 6 upgrades.

Doesn't affect shared unit upgrades.`,max_number_of_upgrades:{sidneys_secret_range_start:-1,sidneys_secret_range_end:12,"-1":50,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-generic_upgrade_missions":`Determines the percentage of missions in the mission order that must be completed before
level 1 of all weapon and armor upgrades is unlocked.  Level 2 upgrades require double the amount of missions,
and level 3 requires triple the amount.  The required amounts are always rounded down.
If set to 0, upgrades are instead added to the item pool and must be found to be used.`,generic_upgrade_missions:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-generic_upgrade_research":`Determines how weapon and armor upgrades affect missions once unlocked.

Vanilla:  Upgrades must be researched as normal.
Auto In No-Build:  In No-Build missions, upgrades are automatically researched.
In all other missions, upgrades must be researched as normal.
Auto In Build:  In No-Build missions, upgrades are unavailable as normal.
In all other missions, upgrades are automatically researched.
Always Auto:  Upgrades are automatically researched in all missions.`,generic_upgrade_research:{vanilla:50,auto_in_no_build:0,auto_in_build:0,always_auto:0},"sidneys_secret_documentation-generic_upgrade_items":`Determines how weapon and armor upgrades are split into items.  All options produce 3 levels of each item.
Does nothing if upgrades are unlocked by completed mission counts.

Individual Items:  All weapon and armor upgrades are each an item,
resulting in 18 total upgrade items for Terran and 15 total items for Zerg and Protoss each.
Bundle Weapon And Armor:  All types of weapon upgrades are one item per race,
and all types of armor upgrades are one item per race,
resulting in 18 total items.
Bundle Unit Class:  Weapon and armor upgrades are merged,
but upgrades are bundled separately for each race:
Infantry, Vehicle, and Starship upgrades for Terran (9 items),
Ground and Flyer upgrades for Zerg (6 items),
Ground and Air upgrades for Protoss (6 items),
resulting in 21 total items.
Bundle All:  All weapon and armor upgrades are one item per race,
resulting in 9 total items.`,generic_upgrade_items:{individual_items:50,bundle_weapon_and_armor:0,bundle_unit_class:0,bundle_all:0},"sidneys_secret_documentation-kerrigan_presence":`Determines whether Kerrigan is playable outside of missions that require her.

Vanilla: Kerrigan is playable as normal, appears in the same missions as in vanilla game.
Not Present:  Kerrigan is not playable, unless the mission requires her to be present.  Other hero units stay playable,
 and locations normally requiring Kerrigan can be checked by any unit.
 Kerrigan level items, active abilities and passive abilities affecting her will not appear.
 In missions where the Kerrigan unit is required, story abilities are given in same way as Grant Story Tech is set to true
Not Present And No Passives:  In addition to the above, Kerrigan's passive abilities affecting other units (such as Twin Drones) will not appear.

Note: Always set to "Not Present" if Heart of the Swarm campaign is disabled.`,kerrigan_presence:{vanilla:50,not_present:0,not_present_and_no_passives:0},"sidneys_secret_documentation-kerrigan_levels_per_mission_completed":`Determines how many levels Kerrigan gains when a mission is beaten.

NOTE: Setting this too low can result in generation failures if The Infinite Cycle or Supreme are in the mission pool.`,kerrigan_levels_per_mission_completed:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:20,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-kerrigan_levels_per_mission_completed_cap":`Limits how many total levels Kerrigan can gain from beating missions.  This does not affect levels gained from items.  
Set to -1 to disable this limit.

NOTE: The following missions have these level requirements:
Supreme: 35
The Infinite Cycle: 70
See Grant Story Levels for more details.`,kerrigan_levels_per_mission_completed_cap:{sidneys_secret_range_start:-1,sidneys_secret_range_end:140,"-1":50,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-kerrigan_level_item_sum":`Determines the sum of the level items in the world.  This does not affect levels gained from beating missions.

NOTE: The following missions have these level requirements:
Supreme: 35
The Infinite Cycle: 70
See Grant Story Levels for more details.`,kerrigan_level_item_sum:{70:50,sidneys_secret_range_start:0,sidneys_secret_range_end:140,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-kerrigan_level_item_distribution":`Determines the amount and size of Kerrigan level items.

Vanilla:  Uses the distribution in the vanilla campaign.
This entails 32 individual levels and 6 packs of varying sizes.
This distribution always adds up to 70, ignoring the Level Item Sum setting.
Smooth:  Uses a custom, condensed distribution of 10 items between sizes 4 and 10,
intended to fit more levels into settings with little room for filler while keeping some variance in level gains.
This distribution always adds up to 70, ignoring the Level Item Sum setting.
Size 70:  Uses items worth 70 levels each.
Size 35:  Uses items worth 35 levels each.
Size 14:  Uses items worth 14 levels each.
Size 10:  Uses items worth 10 levels each.
Size 7:  Uses items worth 7 levels each.
Size 5:  Uses items worth 5 levels each.
Size 2:  Uses items worth 2 level eachs.
Size 1:  Uses individual levels.  As there are not enough locations in the game for this distribution,
this will result in a greatly reduced total level, and is likely to remove many other items.`,kerrigan_level_item_distribution:{vanilla:0,smooth:50,size_70:0,size_35:0,size_14:0,size_10:0,size_7:0,size_5:0,size_2:0,size_1:0},"sidneys_secret_documentation-kerrigan_total_level_cap":`Limits how many total levels Kerrigan can gain from any source.  Depending on your other settings,
there may be more levels available in the world, but they will not affect Kerrigan.  
Set to -1 to disable this limit.

NOTE: The following missions have these level requirements:
Supreme: 35
The Infinite Cycle: 70
See Grant Story Levels for more details.`,kerrigan_total_level_cap:{sidneys_secret_range_start:-1,sidneys_secret_range_end:140,"-1":50,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-start_primary_abilities":`Number of Primary Abilities (Kerrigan Tier 1, 2, and 4) to start the game with.
If set to 4, a Tier 7 ability is also included.`,start_primary_abilities:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:4,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-kerrigan_primal_status":`Determines when Kerrigan appears in her Primal Zerg form.
This greatly increases her energy regeneration.

Vanilla:  Kerrigan is human in missions that canonically appear before The Crucible,
and zerg thereafter.
Always Zerg:  Kerrigan is always zerg.
Always Human:  Kerrigan is always human.
Level 35:  Kerrigan is human until reaching level 35, and zerg thereafter.
Half Completion:  Kerrigan is human until half of the missions in the world are completed,
and zerg thereafter.
Item:  Kerrigan's Primal Form is an item. She is human until it is found, and zerg thereafter.`,kerrigan_primal_status:{vanilla:50,always_zerg:0,always_human:0,level_35:0,half_completion:0,item:0},"sidneys_secret_documentation-spear_of_adun_presence":`Determines in which missions Spear of Adun calldowns will be available.
Affects only abilities used from Spear of Adun top menu.

Not Present: Spear of Adun calldowns are unavailable.
LotV Protoss: Spear of Adun calldowns are only available in LotV main campaign
Protoss: Spear od Adun calldowns are available in any Protoss mission
Everywhere: Spear od Adun calldowns are available in any mission of any race`,spear_of_adun_presence:{not_present:0,lotv_protoss:50,protoss:0,everywhere:0},"sidneys_secret_documentation-spear_of_adun_present_in_no_build":`Determines if Spear of Adun calldowns are available in no-build missions.

If turned on, Spear of Adun calldown powers are available in missions specified under "Spear of Adun Presence".
If turned off, Spear of Adun calldown powers are unavailable in all no-build missions`,spear_of_adun_present_in_no_build:{false:50,true:0},"sidneys_secret_documentation-spear_of_adun_autonomously_cast_ability_presence":`Determines availability of Spear of Adun powers, that are autonomously cast.
Affects abilities like Reconstruction Beam or Overwatch

Not Presents: Autocasts are not available.
LotV Protoss: Spear of Adun autocasts are only available in LotV main campaign
Protoss: Spear od Adun autocasts are available in any Protoss mission
Everywhere: Spear od Adun autocasts are available in any mission of any race`,spear_of_adun_autonomously_cast_ability_presence:{not_present:0,lotv_protoss:50,protoss:0,everywhere:0},"sidneys_secret_documentation-spear_of_adun_autonomously_cast_present_in_no_build":`Determines if Spear of Adun autocasts are available in no-build missions.

If turned on, Spear of Adun autocasts are available in missions specified under "Spear of Adun Autonomously Cast Powers Presence".
If turned off, Spear of Adun autocasts are unavailable in all no-build missions`,spear_of_adun_autonomously_cast_present_in_no_build:{false:50,true:0},"sidneys_secret_documentation-grant_story_tech":`If set true, grants special tech required for story mission completion for duration of the mission.
Otherwise, you need to find these tech by a normal means as items.
Affects story missions like Back in the Saddle and Supreme

Locked to true if Required Tactics is set to no logic.`,grant_story_tech:{false:50,true:0},"sidneys_secret_documentation-grant_story_levels":`If enabled, grants Kerrigan the required minimum levels for the following missions:
Supreme: 35
The Infinite Cycle: 70
The bonus levels only apply during the listed missions, and can exceed the Total Level Cap.

If disabled, either of these missions is included, and there are not enough levels in the world, generation may fail.  
To prevent this, either increase the amount of levels in the world, or enable this option.

If disabled and Required Tactics is set to no logic, this option is forced to Minimum.

Disabled: Kerrigan does not get bonus levels for these missions,
    instead the levels must be gained from items or beating missions.
Additive: Kerrigan gains bonus levels equal to the mission's required level.
Minimum: Kerrigan is either at her real level, or at the mission's required level,
   depending on which is higher.`,grant_story_levels:{disabled:0,additive:0,minimum:50},"sidneys_secret_documentation-take_over_ai_allies":"On maps supporting this feature allows you to take control over an AI Ally.",take_over_ai_allies:{false:50,true:0},"sidneys_secret_documentation-locked_items":"Guarantees that these items will be unlockable",locked_items:[],"sidneys_secret_documentation-excluded_items":"Guarantees that these items will not be unlockable",excluded_items:[],"sidneys_secret_documentation-excluded_missions":`Guarantees that these missions will not appear in the campaign
Doesn't apply to vanilla mission order.
It may be impossible to build a valid campaign if too many missions are excluded.`,excluded_missions:[],"sidneys_secret_documentation-exclude_very_hard_missions":`Excludes Very Hard missions outside of Epilogue campaign (All-In, Salvation, and all Epilogue missions are considered Very Hard).
Doesn't apply to "Vanilla" mission order.

Default: Not excluded for mission orders "Vanilla Shuffled" or "Grid" with Maximum Campaign Size >= 20,
   excluded for any other order
Yes: Non-Epilogue Very Hard missions are excluded and won't be generated
No: Non-Epilogue Very Hard missions can appear normally. Not recommended for too short mission orders.

See also: Excluded Missions, Enable Epilogue Missions, Maximum Campaign Size`,exclude_very_hard_missions:{default:50,true:0,false:0},"sidneys_secret_documentation-nco_items":`If turned on, the equipment upgrades from Nova Covert Ops may be present in the world.

If Nova Covert Ops campaign is enabled, this option is locked to be turned on.`,nco_items:{false:0,true:50},"sidneys_secret_documentation-bw_items":"If turned on, returning items from StarCraft: Brood War may appear in the world.",bw_items:{false:0,true:50},"sidneys_secret_documentation-ext_items":"If turned on, original items that did not appear in Campaign mode may appear in the world.",ext_items:{false:0,true:50},"sidneys_secret_documentation-vanilla_locations":`Enables or disables item rewards for completing vanilla objectives.
Vanilla objectives are bonus objectives from the vanilla game,
along with some additional objectives to balance the missions.
Enable these locations for a balanced experience.

Enabled: All locations fitting into this do their normal rewards
Resources: Forces these locations to contain Starting Resources
Disabled: Removes item rewards from these locations.

Note: Individual locations subject to plando are always enabled, so the plando can be placed properly.
See also: Excluded Locations, Item Plando (https://archipelago.gg/tutorial/Archipelago/plando/en#item-plando)`,vanilla_locations:{enabled:50,resources:0,disabled:0},"sidneys_secret_documentation-extra_locations":`Enables or disables item rewards for mission progress and minor objectives.
This includes mandatory mission objectives,
collecting reinforcements and resource pickups,
destroying structures, and overcoming minor challenges.
Enables these locations to add more checks and items to your world.

Enabled: All locations fitting into this do their normal rewards
Resources: Forces these locations to contain Starting Resources
Disabled: Removes item rewards from these locations.

Note: Individual locations subject to plando are always enabled, so the plando can be placed properly.
See also: Excluded Locations, Item Plando (https://archipelago.gg/tutorial/Archipelago/plando/en#item-plando)`,extra_locations:{enabled:50,resources:0,disabled:0},"sidneys_secret_documentation-challenge_locations":`Enables or disables item rewards for completing challenge tasks.
Challenges are tasks that are more difficult than completing the mission, and are often based on achievements.
You might be required to visit the same mission later after getting stronger in order to finish these tasks.
Enable these locations to increase the difficulty of completing the multiworld.

Enabled: All locations fitting into this do their normal rewards
Resources: Forces these locations to contain Starting Resources
Disabled: Removes item rewards from these locations.

Note: Individual locations subject to plando are always enabled, so the plando can be placed properly.
See also: Excluded Locations, Item Plando (https://archipelago.gg/tutorial/Archipelago/plando/en#item-plando)`,challenge_locations:{enabled:50,resources:0,disabled:0},"sidneys_secret_documentation-mastery_locations":`Enables or disables item rewards for overcoming especially difficult challenges.
These challenges are often based on Mastery achievements and Feats of Strength.
Enable these locations to add the most difficult checks to the world.

Enabled: All locations fitting into this do their normal rewards
Resources: Forces these locations to contain Starting Resources
Disabled: Removes item rewards from these locations.

Note: Individual locations subject to plando are always enabled, so the plando can be placed properly.
See also: Excluded Locations, Item Plando (https://archipelago.gg/tutorial/Archipelago/plando/en#item-plando)`,mastery_locations:{enabled:50,resources:0,disabled:0},"sidneys_secret_documentation-minerals_per_item":"Configures how many minerals are given per resource item.",minerals_per_item:{25:50,sidneys_secret_range_start:0,sidneys_secret_range_end:500,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-vespene_per_item":"Configures how much vespene gas is given per resource item.",vespene_per_item:{25:50,sidneys_secret_range_start:0,sidneys_secret_range_end:500,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-starting_supply_per_item":"Configures how much starting supply per is given per item.",starting_supply_per_item:{5:50,sidneys_secret_range_start:0,sidneys_secret_range_end:200,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
