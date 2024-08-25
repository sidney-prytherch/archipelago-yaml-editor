const e={name:"Player{number}",description:"Default Risk of Rain 2 Template",game:"Risk of Rain 2",requires:{version:"0.5.0"},"Risk of Rain 2":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-goal":`Classic Mode: Every Item pickup increases fills a progress bar which gives location checks.

Explore Mode: Each environment will have location checks within each environment.
environments will be locked in the item pool until received.`,goal:{classic:0,explore:50},"sidneys_secret_documentation-victory":`Mithrix: Defeat Mithrix in Commencement
Voidling: Defeat the Voidling in The Planetarium (DLC required! Will select any if not enabled.)
Limbo: Defeat the Scavenger in Hidden Realm: A Moment, Whole
Any: Any victory in the game will count. See Final Stage Death for additional ways.`,victory:{any:50,mithrix:0,voidling:0,limbo:0},"sidneys_secret_documentation-total_revivals":"Total Percentage of `Dio's Best Friend` item put in the item pool.",total_revivals:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-start_with_revive":"Start the game with a `Dio's Best Friend` item.",start_with_revive:{false:0,true:50},"sidneys_secret_documentation-final_stage_death":`The following will count as a win if set to "true", and victory is set to "any":
Dying in Commencement.
Dying in The Planetarium.
Obliterating yourself
If not use the following to tell if final stage death will count:
Victory: mithrix - only dying in Commencement will count.
Victory: voidling - only dying in The Planetarium will count.
Victory: limbo - Obliterating yourself will count.`,final_stage_death:{false:50,true:0},"sidneys_secret_documentation-dlc_sotv":`Enable if you are using SOTV DLC.
 Affects environment availability for Explore Mode.
 Adds Void Items into the item pool`,dlc_sotv:{false:50,true:0},"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0},"sidneys_secret_documentation-item_pickup_step":`Number of items to pick up before an AP Check is completed.
Setting to 1 means every other pickup.
Setting to 2 means every third pickup. So on...`,item_pickup_step:{1:50,sidneys_secret_range_start:0,sidneys_secret_range_end:5,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-shrine_use_step":`Explore Mode:
Number of shrines to use up before an AP Check is completed.
Setting to 1 means every other pickup.
Setting to 2 means every third pickup. So on...`,shrine_use_step:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:3,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-enable_trap":"Allows Trap items in the item pool.",enable_trap:{false:50,true:0},"sidneys_secret_documentation-enable_lunar":"Allows Lunar items in the item pool.",enable_lunar:{false:0,true:50},"sidneys_secret_documentation-chests_per_stage":"Explore Mode: The number of chest locations per environment.",chests_per_stage:{10:50,sidneys_secret_range_start:2,sidneys_secret_range_end:20,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-shrines_per_stage":"Explore Mode: The number of shrine locations per environment.",shrines_per_stage:{5:50,sidneys_secret_range_start:2,sidneys_secret_range_end:20,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-scavengers_per_stage":"Explore Mode: The number of scavenger locations per environment.",scavengers_per_stage:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:1,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-scanner_per_stage":"Explore Mode: The number of scanners locations per environment.",scanner_per_stage:{1:50,sidneys_secret_range_start:0,sidneys_secret_range_end:1,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-altars_per_stage":"Explore Mode: The number of altars locations per environment.",altars_per_stage:{1:50,sidneys_secret_range_start:0,sidneys_secret_range_end:2,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-require_stages":"Add Stage items to the pool to block access to the next set of environments.",require_stages:{false:0,true:50},"sidneys_secret_documentation-progressive_stages":`This will convert Stage items to be a progressive item. For example instead of "Stage 2" it would be
 "Progressive Stage"`,progressive_stages:{false:0,true:50},"sidneys_secret_documentation-total_locations":"Classic Mode: Number of location checks which are added to the Risk of Rain playthrough.",total_locations:{40:50,sidneys_secret_range_start:40,sidneys_secret_range_end:250,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-item_weights":`Set Use Item Weight Presets to yes if you want to use one of these presets.
Preset choices for determining the weights of the item pool.
- New is a test for a potential adjustment to the default weights.
- Uncommon puts a large number of uncommon items in the pool.
- Legendary puts a large number of legendary items in the pool.
- Chaos generates the pool completely at random with rarer items having a slight cap to prevent this option being
too easy.
- No Scraps removes all scrap items from the item pool.
- Even generates the item pool with every item having an even weight.
- Scraps Only will be only scrap items in the item pool.
- Lunartic makes everything a lunar item.
- Void makes everything a void item.`,item_weights:{default:50,new:0,uncommon:0,legendary:0,chaos:0,no_scraps:0,even:0,scraps_only:0,lunartic:0,void:0},"sidneys_secret_documentation-item_pool_presets":"Will use the item weight presets when set to true, otherwise will use the custom set item pool weights.",item_pool_presets:{false:50,true:0},"sidneys_secret_documentation-white_scrap":`Weight of white scraps in the item pool.

(Ignored unless Item Weight Presets is 'No')`,white_scrap:{32:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-green_scrap":`Weight of Green Scraps in the item pool.

(Ignored unless Item Weight Presets is 'No')`,green_scrap:{16:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-yellow_scrap":`Weight of yellow scraps in the item pool.

(Ignored unless Item Weight Presets is 'No')`,yellow_scrap:{1:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-red_scrap":`Weight of Red Scraps in the item pool.

(Ignored unless Item Weight Presets is 'No')`,red_scrap:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-common_item":`Weight of common items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,common_item:{64:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-uncommon_item":`Weight of uncommon items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,uncommon_item:{32:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-legendary_item":`Weight of legendary items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,legendary_item:{8:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-boss_item":`Weight of boss items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,boss_item:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-lunar_item":`Weight of lunar items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,lunar_item:{16:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-void_item":`Weight of void items in the item pool.

(Ignored unless Item Weight Presets is 'No')

(Ignored if Enable DLC - SOTV is 'No')`,void_item:{16:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-equipment":`Weight of equipment items in the item pool.

 (Ignored unless Item Weight Presets is 'No')`,equipment:{32:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-money":`Weight of money items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,money:{64:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-lunar_coin":`Weight of lunar coin items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,lunar_coin:{20:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-experience":`Weight of 1000 exp items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,experience:{40:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-mountain_trap":`Weight of mountain trap items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,mountain_trap:{5:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-time_warp_trap":`Weight of time warp trap items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,time_warp_trap:{20:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-combat_trap":`Weight of combat trap items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,combat_trap:{20:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-teleport_trap":`Weight of teleport trap items in the item pool.

(Ignored unless Item Weight Presets is 'No')`,teleport_trap:{20:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
