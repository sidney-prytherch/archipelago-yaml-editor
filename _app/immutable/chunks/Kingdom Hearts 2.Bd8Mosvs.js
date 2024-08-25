const e={name:"Player{number}",description:"Default Kingdom Hearts 2 Template",game:"Kingdom Hearts 2",requires:{version:"0.5.0"},"Kingdom Hearts 2":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-LevelDepth":`Determines How many locations you want on levels

Level 50: 23 checks spread through 50 levels.
Level 99: 23 checks spread through 99 levels.

Level 50 sanity: 49 checks spread through 50 levels.
Level 99 sanity: 98 checks spread through 99 levels.

Level 1: no checks on levels(checks are replaced with stats)`,LevelDepth:{level_50:50,level_99:0,level_50_sanity:0,level_99_sanity:0,level_1:0},"sidneys_secret_documentation-Sora_Level_EXP":"Sora Level Exp Multiplier",Sora_Level_EXP:{5:50,sidneys_secret_range_start:1,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Valor_Form_EXP":"Valor Form Exp Multiplier",Valor_Form_EXP:{3:50,sidneys_secret_range_start:1,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Wisdom_Form_EXP":"Wisdom Form Exp Multiplier",Wisdom_Form_EXP:{3:50,sidneys_secret_range_start:1,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Limit_Form_EXP":"Limit Form Exp Multiplier",Limit_Form_EXP:{3:50,sidneys_secret_range_start:1,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Master_Form_EXP":"Master Form Exp Multiplier",Master_Form_EXP:{3:50,sidneys_secret_range_start:1,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Final_Form_EXP":"Final Form Exp Multiplier",Final_Form_EXP:{3:50,sidneys_secret_range_start:1,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Summon_EXP":"Summon Exp Multiplier",Summon_EXP:{5:50,sidneys_secret_range_start:1,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Schmovement":"Level of Progressive Movement Abilities You Start With",Schmovement:{level_0:0,level_1:50,level_2:0,level_3:0,level_4:0},"sidneys_secret_documentation-RandomGrowth":"Amount of Random Progressive Movement Abilities You Start With",RandomGrowth:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:20,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-AntiForm":"Add Anti Form to the pool",AntiForm:{false:50,true:0},"sidneys_secret_documentation-Promise_Charm":"Add Promise Charm to the pool",Promise_Charm:{false:50,true:0},"sidneys_secret_documentation-Goal":`Win Condition
Three Proofs: Find the 3 Proofs to unlock the final door.

Lucky Emblem Hunt: Find required amount of Lucky Emblems.

Hitlist (Bounty Hunt): Find required amount of Bounties.

Lucky Emblem and Hitlist: Find the required amount of Lucky Emblems and Bounties.`,Goal:{three_proofs:0,lucky_emblem_hunt:50,hitlist:0,hitlist_and_lucky_emblem:0},"sidneys_secret_documentation-FinalXemnas":`Kill Final Xemnas to Beat the Game.

This is in addition to your Goal.

I.E. get three proofs+kill final Xemnas`,FinalXemnas:{false:0,true:50},"sidneys_secret_documentation-LuckyEmblemsAmount":`Number of Lucky Emblems that are in the pool.

If Goal is not Lucky Emblem Hunt or Lucky Emblem and Hitlist this does nothing.`,LuckyEmblemsAmount:{40:50,sidneys_secret_range_start:1,sidneys_secret_range_end:60,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-LuckyEmblemsRequired":`Number of Lucky Emblems to collect to Win/Unlock Final Xemnas' Door.

If Goal is not Lucky Emblem Hunt or Lucky Emblem and Hitlist this does nothing.`,LuckyEmblemsRequired:{35:50,sidneys_secret_range_start:1,sidneys_secret_range_end:60,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-BountyAmount":`Number of Bounties that are in the pool.

If Goal is not Hitlist or Lucky Emblem and Hitlist this does nothing.`,BountyAmount:{10:50,sidneys_secret_range_start:1,sidneys_secret_range_end:26,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-BountyRequired":`Number of Bounties to collect to Win/Unlock Final Xemnas Door.

If Goal is not Hitlist or Lucky Emblem and Hitlist this does nothing.`,BountyRequired:{7:50,sidneys_secret_range_start:1,sidneys_secret_range_end:26,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-BountyStartingHintToggle":"Start with Bounties Hinted",BountyStartingHintToggle:{false:50,true:0},"sidneys_secret_documentation-Keyblade_Minimum":"Minimum Stats for Keyblades",Keyblade_Minimum:{3:50,sidneys_secret_range_start:0,sidneys_secret_range_end:20,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-Keyblade_Maximum":"Maximum Stats for Keyblades",Keyblade_Maximum:{7:50,sidneys_secret_range_start:0,sidneys_secret_range_end:20,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-WeaponSlotStartHint":"Start with Weapon Slots' Hinted",WeaponSlotStartHint:{false:50,true:0},"sidneys_secret_documentation-FightLogic":`The level of logic to use when determining what fights in each KH2 world are beatable.

Easy: For Players not very comfortable doing things without a lot of tools.

Normal: For Players somewhat comfortable doing fights with some of the tools.

Hard: For Players comfortable doing fights with almost no tools.`,FightLogic:{easy:0,normal:50,hard:0},"sidneys_secret_documentation-FinalFormLogic":`Determines forcing final form logic

No Light and Darkness: Light and Darkness is not in logic.
Light And Darkness: Final Forcing with light and darkness is in logic.
Just a Form: All that requires final forcing is another form.`,FinalFormLogic:{no_light_and_darkness:0,light_and_darkness:50,just_a_form:0},"sidneys_secret_documentation-AutoFormLogic":"Have Auto Forms levels in logic.",AutoFormLogic:{false:50,true:0},"sidneys_secret_documentation-DonaldGoofyStatsanity":"Toggles if on Donald and Goofy's Get Bonus locations can be any item",DonaldGoofyStatsanity:{false:0,true:50},"sidneys_secret_documentation-FillerItemsLocal":"Make all dynamic filler classified items local. Recommended when playing with games with fewer locations than kh2",FillerItemsLocal:{false:0,true:50},"sidneys_secret_documentation-Visitlocking":`Determines the level of visit locking

No Visit Locking: Start with all 25 visit locking items.


Second Visit Locking: Start with 13 visit locking items for every first visit.


First and Second Visit Locking: One item for First Visit Two For Second Visit`,Visitlocking:{no_visit_locking:0,second_visit_locking:0,first_and_second_visit_locking:50},"sidneys_secret_documentation-RandomVisitLockingItem":"Start with random amount of visit locking items.",RandomVisitLockingItem:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:25,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-SuperBosses":"Terra Sephiroth and Data Fights Toggle.",SuperBosses:{false:0,true:50},"sidneys_secret_documentation-Cups":`Olympus Cups Toggles
 No Cups: All Cups are placed into Excluded Locations.
 Cups: Hades Paradox Cup is placed into Excluded Locations
 Cups and Hades Paradox: Has Every Cup On.`,Cups:{no_cups:50,cups:0,cups_and_hades_paradox:0},"sidneys_secret_documentation-SummonLevelLocationToggle":"Toggle Summon levels to have locations.",SummonLevelLocationToggle:{false:50,true:0},"sidneys_secret_documentation-AtlanticaToggle":"Atlantica Toggle",AtlanticaToggle:{false:50,true:0},"sidneys_secret_documentation-CorSkipToggle":`Toggle for Cor skip.

Tools depend on which difficulty was chosen on Fight Difficulty.

Toggle does not negate fight logic but is an alternative.

Full Cor Skip is also affected by this Toggle.`,CorSkipToggle:{false:50,true:0},"sidneys_secret_documentation-CustomItemPoolQuantity":"Add more of an item into the itempool. Note: You cannot take out items from the pool.",CustomItemPoolQuantity:{"Aerial Dodge":4,"Anti Form":1,"Battlefields of War":2,"Beast's Claw":2,"Blizzard Element":3,"Bone Fist":2,"Chicken Little":1,"Cure Element":3,"Disney Castle Key":2,"Dodge Roll":4,"Final Form":1,"Fire Element":3,Genie:1,Glide:4,"High Jump":4,"Ice Cream":3,"Identity Disk":2,"Limit Form":1,"Magnet Element":3,"Master Form":1,"Membership Card":2,"Namine Sketches":1,"Peter Pan":1,"Promise Charm":1,"Proof of Connection":1,"Proof of Nonexistence":1,"Proof of Peace":1,"Proud Fang":2,"Quick Run":4,"Reflect Element":3,Scimitar:2,"Skill and Crossbones":2,Stitch:1,"Sword of the Ancestor":2,"Thunder Element":3,"Torn Page":5,"Valor Form":1,"Way to the Dawn":2,"Wisdom Form":1},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":`Start with these items and don't place them in the world.

The game decides what the replacement items will be.`,start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
