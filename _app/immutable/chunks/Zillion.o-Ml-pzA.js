const e={name:"Player{number}",description:"Default Zillion Template",game:"Zillion",requires:{version:"0.5.0"},Zillion:{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-continues":`number of continues before game over

game over teleports you to your ship, keeping items and open doors`,continues:{sidneys_secret_range_start:0,sidneys_secret_range_end:21,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-vanilla":"equivalent to 3",vanilla:50,"sidneys_secret_notes-infinity":"equivalent to 21",infinity:0},"sidneys_secret_documentation-floppy_req":"how many floppy disks are required",floppy_req:{5:50,sidneys_secret_range_start:0,sidneys_secret_range_end:8,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-gun_levels":`Zillion gun power for the number of Zillion power ups you pick up

For "restrictive", Champ is the only one that can get Zillion gun power level 3.`,gun_levels:{vanilla:0,balanced:50,low:0,restrictive:0},"sidneys_secret_documentation-jump_levels":`jump levels for each character level

For "restrictive", Apple is the only one that can get jump level 3.`,jump_levels:{vanilla:0,balanced:50,low:0,restrictive:0},"sidneys_secret_documentation-randomize_alarms":"whether to randomize the locations of alarm sensors",randomize_alarms:{false:0,true:50},"sidneys_secret_documentation-max_level":"the highest level you can get",max_level:{8:50,sidneys_secret_range_start:3,sidneys_secret_range_end:8,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-start_char":"which character you start with",start_char:{jj:0,apple:0,champ:0,random:50},"sidneys_secret_documentation-opas_per_level":`how many Opa-Opas are required to level up

Lower makes you level up faster.`,opas_per_level:{2:50,sidneys_secret_range_start:1,sidneys_secret_range_end:5,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-early_scope":"make sure Scope is available early",early_scope:{false:50,true:0},"sidneys_secret_documentation-skill":`the difficulty level of the game

higher skill:
- can require more precise platforming movement
- lowers your defense
- gives you less time to escape at the end`,skill:{2:50,sidneys_secret_range_start:0,sidneys_secret_range_end:5,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-starting_cards":`how many ID Cards to start the game with

Refilling at the ship also ensures you have at least this many cards.
0 gives vanilla behavior.`,starting_cards:{2:50,sidneys_secret_range_start:0,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-vanilla":"equivalent to 0",vanilla:0},"sidneys_secret_documentation-room_gen":"whether to generate rooms with random terrain",room_gen:{false:50,true:0},"sidneys_secret_documentation-id_card_count":`how many ID Cards are in the game

Vanilla is 63

maximum total for all items is 144`,id_card_count:{42:50,sidneys_secret_range_start:0,sidneys_secret_range_end:126,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-bread_count":`how many Breads are in the game

Vanilla is 33

maximum total for all items is 144`,bread_count:{50:50,sidneys_secret_range_start:0,sidneys_secret_range_end:126,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-opa_opa_count":`how many Opa-Opas are in the game

Vanilla is 26

maximum total for all items is 144`,opa_opa_count:{26:50,sidneys_secret_range_start:0,sidneys_secret_range_end:126,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-zillion_count":`how many Zillion gun power ups are in the game

Vanilla is 6

maximum total for all items is 144`,zillion_count:{8:50,sidneys_secret_range_start:0,sidneys_secret_range_end:126,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-floppy_disk_count":`how many Floppy Disks are in the game

Vanilla is 5

maximum total for all items is 144`,floppy_disk_count:{7:50,sidneys_secret_range_start:0,sidneys_secret_range_end:126,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-scope_count":`how many Scopes are in the game

Vanilla is 4

maximum total for all items is 144`,scope_count:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:126,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-red_id_card_count":`how many Red ID Cards are in the game

Vanilla is 1

maximum total for all items is 144`,red_id_card_count:{2:50,sidneys_secret_range_start:0,sidneys_secret_range_end:126,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
