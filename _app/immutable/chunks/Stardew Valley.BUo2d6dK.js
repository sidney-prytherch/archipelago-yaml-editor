const e={name:"Player{number}",description:"Default Stardew Valley Template",game:"Stardew Valley",requires:{version:"0.4.6"},"Stardew Valley":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.
A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.
Locations: ensure everything can be reached and acquired.
Items: ensure all logically relevant items can be acquired.
Minimal: ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the !hint command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the !hint command",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[],"sidneys_secret_documentation-goal":`Goal for this playthrough
Community Center: Complete the Community Center
Grandpa's Evaluation: 4 lit candles in Grandpa's evaluation
Bottom of the Mines: Reach level 120 in the mines
Cryptic Note: Complete the quest "Cryptic Note" (Skull Cavern Floor 100)
Master Angler: Catch every fish. Adapts to Fishsanity
Complete Collection: Complete the museum collection
Full House: Get married and have 2 children
Greatest Walnut Hunter: Find 130 Golden Walnuts
Protector of the Valley: Complete the monster slayer goals. Adapts to Monstersanity
Full Shipment: Ship every item. Adapts to Shipsanity
Gourmet Chef: Cook every recipe. Adapts to Cooksanity
Craft Master: Craft every item
Legend: Earn 10 000 000g
Mystery of the Stardrops: Find every stardrop
Allsanity: Complete every check in your slot
Perfection: Attain Perfection`,goal:{community_center:50,grandpa_evaluation:0,bottom_of_the_mines:0,cryptic_note:0,master_angler:0,complete_collection:0,full_house:0,greatest_walnut_hunter:0,protector_of_the_valley:0,full_shipment:0,gourmet_chef:0,craft_master:0,legend:0,mystery_of_the_stardrops:0,allsanity:0,perfection:0},"sidneys_secret_documentation-farm_type":"What farm to play on?",farm_type:{standard:0,riverland:0,forest:0,hill_top:0,wilderness:0,four_corners:0,beach:0,random:50},"sidneys_secret_documentation-starting_money":`Amount of gold when arriving at the farm.
Set to -1 or unlimited for infinite money`,starting_money:{sidneys_secret_range_start:0,sidneys_secret_range_end:5e4,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-unlimited":"equivalent to -1",unlimited:0,"sidneys_secret_notes-vanilla":"equivalent to 500",vanilla:0,"sidneys_secret_notes-extra":"equivalent to 2000",extra:0,"sidneys_secret_notes-rich":"equivalent to 5000",rich:50,"sidneys_secret_notes-very rich":"equivalent to 20000","very rich":0,"sidneys_secret_notes-filthy rich":"equivalent to 50000","filthy rich":0},"sidneys_secret_documentation-profit_margin":"Multiplier over all gold earned in-game by the player.",profit_margin:{sidneys_secret_range_start:25,sidneys_secret_range_end:400,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-quarter":"equivalent to 25",quarter:0,"sidneys_secret_notes-half":"equivalent to 50",half:0,"sidneys_secret_notes-normal":"equivalent to 100",normal:50,"sidneys_secret_notes-double":"equivalent to 200",double:0,"sidneys_secret_notes-triple":"equivalent to 300",triple:0,"sidneys_secret_notes-quadruple":"equivalent to 400",quadruple:0},"sidneys_secret_documentation-bundle_randomization":`What items are needed for the community center bundles?
Vanilla: Standard bundles from the vanilla game
Thematic: Every bundle will require random items compatible with their original theme
Remixed: Picks bundles at random from thematic, vanilla remixed and new custom ones
Shuffled: Every bundle will require random items and follow no particular structure`,bundle_randomization:{vanilla:0,thematic:0,remixed:50,shuffled:0},"sidneys_secret_documentation-bundle_price":`How many items are needed for the community center bundles?
Minimum: Every bundle will require only one item
Very Cheap: Every bundle will require 2 items fewer than usual
Cheap: Every bundle will require 1 item fewer than usual
Normal: Every bundle will require the vanilla number of items
Expensive: Every bundle will require 1 extra item
Very Expensive: Every bundle will require 2 extra items
Maximum: Every bundle will require many extra items`,bundle_price:{minimum:0,very_cheap:0,cheap:0,normal:50,expensive:0,very_expensive:0,maximum:0},"sidneys_secret_documentation-entrance_randomization":`Should area entrances be randomized?
Disabled: No entrance randomization is done
Pelican Town: Only doors in the main town area are randomized with each other
Non Progression: Only entrances that are always available are randomized with each other
Buildings: All entrances that allow you to enter a building are randomized with each other
Chaos: Same as "Buildings", but the entrances get reshuffled every single day!`,entrance_randomization:{disabled:50,pelican_town:0,non_progression:0,buildings:0,chaos:0},"sidneys_secret_documentation-season_randomization":`Should seasons be randomized?
Disabled: Start in Spring with all seasons unlocked.
Randomized: Start in a random season and the other 3 must be unlocked randomly.
Randomized Not Winter: Same as randomized, but the start season is guaranteed not to be winter.
Progressive: Start in Spring and unlock the seasons in their original order.`,season_randomization:{disabled:0,randomized:50,randomized_not_winter:0,progressive:0},"sidneys_secret_documentation-cropsanity":`Formerly named "Seed Shuffle"
Pierre now sells a random amount of seasonal seeds and Joja sells them without season requirements, but only in huge packs.
Disabled: All the seeds are unlocked from the start, there are no location checks for growing and harvesting crops
Enabled: Seeds are unlocked as archipelago items, for each seed there is a location check for growing and harvesting that crop`,cropsanity:{disabled:0,enabled:50},"sidneys_secret_documentation-backpack_progression":`Shuffle the backpack?
Vanilla: You can buy backpacks at Pierre's General Store.
Progressive: You will randomly find Progressive Backpack upgrades.
Early Progressive: Same as progressive, but one backpack will be placed early in the multiworld.`,backpack_progression:{vanilla:0,progressive:0,early_progressive:50},"sidneys_secret_documentation-tool_progression":`Shuffle the tool upgrades?
Vanilla: Clint will upgrade your tools with metal bars.
Progressive: You will randomly find Progressive Tool upgrades.
Cheap: Tool Upgrades will cost 2/5th as much
Very Cheap: Tool Upgrades will cost 1/5th as much`,tool_progression:{vanilla:0,progressive:50,vanilla_cheap:0,vanilla_very_cheap:0,progressive_cheap:0,progressive_very_cheap:0},"sidneys_secret_documentation-skill_progression":`Shuffle skill levels?
Vanilla: Leveling up skills is normal
Progressive: Skill levels are unlocked randomly, and earning xp sends checks`,skill_progression:{vanilla:0,progressive:50},"sidneys_secret_documentation-building_progression":`Shuffle Carpenter Buildings?
Vanilla: You can buy each building normally.
Progressive: You will receive the buildings and will be able to build the first one of each type for free,
 once it is received. If you want more of the same building, it will cost the vanilla price.
Cheap: Buildings will cost half as much
Very Cheap: Buildings will cost 1/5th as much`,building_progression:{vanilla:0,vanilla_cheap:0,vanilla_very_cheap:0,progressive:0,progressive_cheap:50,progressive_very_cheap:0},"sidneys_secret_documentation-festival_locations":`Shuffle Festival Activities?
Disabled: You do not need to attend festivals
Easy: Every festival has checks, but they are easy and usually only require attendance
Hard: Festivals have more checks, and many require performing well, not just attending`,festival_locations:{disabled:0,easy:50,hard:0},"sidneys_secret_documentation-elevator_progression":`Shuffle the elevator?
Vanilla: Reaching a mineshaft floor unlocks the elevator for it
Progressive: You will randomly find Progressive Mine Elevators to go deeper.
Progressive from previous floor: Same as progressive, but you cannot use the elevator to check elevator locations.
 You must reach elevator floors on your own.`,elevator_progression:{vanilla:0,progressive:0,progressive_from_previous_floor:50},"sidneys_secret_documentation-arcade_machine_locations":`Shuffle the arcade machines?
Disabled: The arcade machines are not included.
Victories: Each Arcade Machine will contain one check on victory
Victories Easy: Same as Victories, but both games are made considerably easier.
Full Shuffling: The arcade machines will contain multiple checks each, and different buffs that make the game
 easier are in the item pool. Junimo Kart has one check at the end of each level.
 Journey of the Prairie King has one check after each boss, plus one check for each vendor equipment.`,arcade_machine_locations:{disabled:0,victories:0,victories_easy:0,full_shuffling:50},"sidneys_secret_documentation-special_order_locations":`Shuffle Special Orders?
Disabled: The special orders are not included in the Archipelago shuffling.
Board Only: The Special Orders on the board in town are location checks
Board and Qi: The Special Orders from Mr Qi's walnut room are checks, in addition to the board in town`,special_order_locations:{disabled:0,board_only:50,board_qi:0},"sidneys_secret_documentation-quest_locations":`Include location checks for quests
None: No quests are checks
Story: Only story quests are checks
Number: Story quests and help wanted quests are checks up to the specified amount. Multiple of 7 recommended
Out of every 7 help wanted quests, 4 will be item deliveries, and then 1 of each for: Fishing, Gathering and Slaying Monsters.
Extra Help wanted quests might be added if current settings don't have enough locations`,quest_locations:{sidneys_secret_range_start:0,sidneys_secret_range_end:56,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-none":"equivalent to -1",none:0,"sidneys_secret_notes-story":"equivalent to 0",story:0,"sidneys_secret_notes-minimum":"equivalent to 7",minimum:50,"sidneys_secret_notes-normal":"equivalent to 14",normal:0,"sidneys_secret_notes-lots":"equivalent to 28",lots:0,"sidneys_secret_notes-maximum":"equivalent to 56",maximum:0},"sidneys_secret_documentation-fishsanity":`Locations for catching a fish the first time?
None: There are no locations for catching fish
Legendaries: Each of the 5 legendary fish are checks, plus the extended family if qi board is turned on
Special: A curated selection of strong fish are checks
Randomized: A random selection of fish are checks
All: Every single fish in the game is a location that contains an item. Pairs well with the Master Angler Goal
Exclude Legendaries: Every fish except legendaries
Exclude Hard Fish: Every fish under difficulty 80
Only Easy Fish: Every fish under difficulty 50`,fishsanity:{none:50,legendaries:0,special:0,randomized:0,all:0,exclude_legendaries:0,exclude_hard_fish:0,only_easy_fish:0},"sidneys_secret_documentation-museumsanity":`Locations for museum donations?
None: There are no locations for donating artifacts and minerals to the museum
Milestones: The donation milestones from the vanilla game are checks
Randomized: A random selection of minerals and artifacts are checks
All: Every single donation is a check`,museumsanity:{none:0,milestones:50,randomized:0,all:0},"sidneys_secret_documentation-monstersanity":`Locations for slaying monsters?
None: There are no checks for slaying monsters
One per category: Every category visible at the adventure guild gives one check
One per Monster: Every unique monster gives one check
Monster Eradication Goals: The Monster Eradication Goals each contain one check
Short Monster Eradication Goals: The Monster Eradication Goals each contain one check, but are reduced by 60%
Very Short Monster Eradication Goals: The Monster Eradication Goals each contain one check, but are reduced by 90%
Progressive Eradication Goals: The Monster Eradication Goals each contain 5 checks, each 20% of the way
Split Eradication Goals: The Monster Eradication Goals are split by monsters, each monster has one check`,monstersanity:{none:0,one_per_category:50,one_per_monster:0,goals:0,short_goals:0,very_short_goals:0,progressive_goals:0,split_goals:0},"sidneys_secret_documentation-shipsanity":`Locations for shipping items?
None: There are no checks for shipping items
Crops: Every crop and forageable being shipped is a check
Fish: Every fish being shipped is a check except legendaries
Full Shipment: Every item in the Collections page is a check
Full Shipment With Fish: Every item in the Collections page and every fish is a check
Everything: Every item in the game that can be shipped is a check`,shipsanity:{none:50,crops:0,fish:0,full_shipment:0,full_shipment_with_fish:0,everything:0},"sidneys_secret_documentation-cooksanity":`Locations for cooking food?
None: There are no checks for cooking
Queen of Sauce: Every Queen of Sauce Recipe can be cooked for a check
All: Every cooking recipe can be cooked for a check`,cooksanity:{none:50,queen_of_sauce:0,all:0},"sidneys_secret_documentation-chefsanity":`Locations for learning cooking recipes?
Vanilla: All cooking recipes are learned normally
Queen of Sauce: Every Queen of sauce episode is a check, all queen of sauce recipes are items
Purchases: Every purchasable recipe is a check
Friendship: Recipes obtained from friendship are checks
Skills: Recipes obtained from skills are checks
All: Learning every cooking recipe is a check`,chefsanity:{sidneys_secret_range_start:0,sidneys_secret_range_end:15,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-none":"equivalent to 0",none:50,"sidneys_secret_notes-queen_of_sauce":"equivalent to 1",queen_of_sauce:0,"sidneys_secret_notes-purchases":"equivalent to 2",purchases:0,"sidneys_secret_notes-qos_and_purchases":"equivalent to 3",qos_and_purchases:0,"sidneys_secret_notes-skills":"equivalent to 4",skills:0,"sidneys_secret_notes-friendship":"equivalent to 8",friendship:0,"sidneys_secret_notes-all":"equivalent to 15",all:0},"sidneys_secret_documentation-craftsanity":`Checks for crafting items?
If enabled, all recipes purchased in shops will be checks as well.
Recipes obtained from other sources will depend on related archipelago settings`,craftsanity:{none:50,all:0},"sidneys_secret_documentation-friendsanity":`Shuffle Friendships?
None: Friendship hearts are earned normally
Bachelors: Hearts with bachelors are shuffled
Starting NPCs: Hearts for NPCs available immediately are checks
All: Hearts for all npcs are checks, including Leo, Kent, Sandy, etc
All With Marriage: Hearts for all npcs are checks, including romance hearts up to 14 when applicable`,friendsanity:{none:50,bachelors:0,starting_npcs:0,all:0,all_with_marriage:0},"sidneys_secret_documentation-friendsanity_heart_size":`If using friendsanity, how many hearts are received per heart item, and how many hearts must be earned to send a check
A higher value will lead to fewer heart items in the item pool, reducing bloat`,friendsanity_heart_size:{4:50,sidneys_secret_range_start:1,sidneys_secret_range_end:8,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-movement_buff_number":`Number of movement speed buffs to the player that exist as items in the pool.
Each movement speed buff is a +25% multiplier that stacks additively`,movement_buff_number:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:12,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-luck_buff_number":`Number of luck buffs to the player that exist as items in the pool.
Each luck buff is a bonus to daily luck of 0.025`,luck_buff_number:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:12,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-exclude_ginger_island":`Exclude Ginger Island?
This option will forcefully exclude everything related to Ginger Island from the slot.
If you pick a goal that requires Ginger Island, you cannot exclude it and it will get included anyway`,exclude_ginger_island:{false:50,true:0},"sidneys_secret_documentation-trap_items":`When rolling filler items, including resource packs, the game can also roll trap items.
Trap items are negative items that cause problems or annoyances for the player
This setting is for choosing if traps will be in the item pool, and if so, how punishing they will be.`,trap_items:{no_traps:0,easy:0,medium:50,hard:0,hell:0,nightmare:0},"sidneys_secret_documentation-multiple_day_sleep_enabled":"Enable the ability to sleep automatically for multiple days straight?",multiple_day_sleep_enabled:{false:0,true:50},"sidneys_secret_documentation-multiple_day_sleep_cost":"How much gold it will cost to use MultiSleep. You will have to pay that amount for each day skipped.",multiple_day_sleep_cost:{sidneys_secret_range_start:0,sidneys_secret_range_end:200,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-free":"equivalent to 0",free:50,"sidneys_secret_notes-cheap":"equivalent to 10",cheap:0,"sidneys_secret_notes-medium":"equivalent to 25",medium:0,"sidneys_secret_notes-expensive":"equivalent to 50",expensive:0,"sidneys_secret_notes-very expensive":"equivalent to 100","very expensive":0},"sidneys_secret_documentation-experience_multiplier":`How fast you want to earn skill experience.
A lower setting mean less experience.
A higher setting means more experience.`,experience_multiplier:{sidneys_secret_range_start:25,sidneys_secret_range_end:800,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-half":"equivalent to 50",half:0,"sidneys_secret_notes-vanilla":"equivalent to 100",vanilla:0,"sidneys_secret_notes-double":"equivalent to 200",double:50,"sidneys_secret_notes-triple":"equivalent to 300",triple:0,"sidneys_secret_notes-quadruple":"equivalent to 400",quadruple:0},"sidneys_secret_documentation-friendship_multiplier":`How fast you want to earn friendship points with villagers.
A lower setting mean less friendship per action.
A higher setting means more friendship per action.`,friendship_multiplier:{sidneys_secret_range_start:25,sidneys_secret_range_end:800,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-half":"equivalent to 50",half:0,"sidneys_secret_notes-vanilla":"equivalent to 100",vanilla:0,"sidneys_secret_notes-double":"equivalent to 200",double:50,"sidneys_secret_notes-triple":"equivalent to 300",triple:0,"sidneys_secret_notes-quadruple":"equivalent to 400",quadruple:0},"sidneys_secret_documentation-debris_multiplier":`How much debris will spawn on the player's farm?
Vanilla: debris spawns normally
Half: debris will spawn at half the normal rate
Quarter: debris will spawn at one quarter of the normal rate
None: No debris will spawn on the farm, ever
Start Clear: debris will spawn at the normal rate, but the farm will be completely clear when starting the game`,debris_multiplier:{vanilla:0,half:50,quarter:0,none:0,start_clear:0},"sidneys_secret_documentation-quick_start":`Do you want the quick start package? You will get a few items to help early game automation,
so you can use the multiple day sleep at its maximum.`,quick_start:{false:0,true:50},"sidneys_secret_documentation-gifting":`Do you want to enable gifting items to and from other Archipelago slots?
Items can only be sent to games that also support gifting`,gifting:{false:0,true:50},"sidneys_secret_documentation-mods":"List of mods that will be included in the shuffling.",mods:[],"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0}}};export{e as default};
