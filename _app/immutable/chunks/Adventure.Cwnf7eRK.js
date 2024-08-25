const e={name:"Player{number}",description:"Default Adventure Template",game:"Adventure",requires:{version:"0.5.0"},Adventure:{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-dragon_slay_check":"If true, slaying each dragon for the first time is a check",dragon_slay_check:{false:0,true:50},"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0},"sidneys_secret_documentation-bat_logic":`How the bat is considered for logic

With cannot_break, the bat cannot pick up an item that starts out-of-logic until the player touches it
With can_break, the bat is free to pick up any items, even if they are out-of-logic
With use_logic, the bat can pick up anything just like can_break, and locations are no longer considered to require
  the magnet or bridge to collect, since the bat can retrieve these.
A future option may allow the bat itself to be placed as an item.

Supported values: cannot_break, can_break, use_logic
Default value: can_break`,bat_logic:{cannot_break:0,can_break:50,use_logic:0},"sidneys_secret_documentation-freeincarnate_max":`How many maximum freeincarnate items to allow

When done generating items, any remaining item slots will be filled
with freeincarnates, up to this maximum amount.  Any remaining item
slots after that will be 'nothing' items placed locally, so in multigame
multiworlds, keeping this value high will allow more items from other games
into Adventure.`,freeincarnate_max:{17:50,sidneys_secret_range_start:0,sidneys_secret_range_end:17,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-dragon_rando_type":`How to randomize the dragon starting locations

normal: Grundle is in the overworld, Yorgle in the white castle, and Rhindle in the black castle
shuffle: A random dragon is placed in the overworld, one in the white castle, and one in the black castle
overworldplus: Dragons can be placed anywhere, but at least one will be in the overworld
randomized: Dragons can be anywhere except the credits room


Supported values: normal, shuffle, overworldplus, randomized
Default value: shuffle`,dragon_rando_type:{normal:0,shuffle:50,overworldplus:0,randomized:0},"sidneys_secret_documentation-connector_multi_slot":`If true, the client and lua connector will add lowest 8 bits of the player slot
to the port number used to connect to each other, to simplify connecting multiple local
clients to local EmuHawk instances.
Set in the yaml, since the connector has to read this out of the rom file before connecting.`,connector_multi_slot:{false:50,true:0},"sidneys_secret_documentation-yorgle_speed":`Sets Yorgle's initial speed.  Yorgle has a speed of 2 in the original game
Default value: 2`,yorgle_speed:{2:50,sidneys_secret_range_start:1,sidneys_secret_range_end:9,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-yorgle_min_speed":`Sets Yorgle's speed when all speed reducers are found.  Yorgle has a speed of 2 in the original game
Default value: 2`,yorgle_min_speed:{1:50,sidneys_secret_range_start:1,sidneys_secret_range_end:9,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-grundle_speed":`Sets Grundle's initial speed.  Grundle has a speed of 2 in the original game
Default value: 2`,grundle_speed:{2:50,sidneys_secret_range_start:1,sidneys_secret_range_end:9,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-grundle_min_speed":`Sets Grundle's speed when all speed reducers are found.  Grundle has a speed of 2 in the original game
Default value: 2`,grundle_min_speed:{1:50,sidneys_secret_range_start:1,sidneys_secret_range_end:9,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-rhindle_speed":`Sets Rhindle's initial speed.  Rhindle has a speed of 3 in the original game
Default value: 3`,rhindle_speed:{3:50,sidneys_secret_range_start:1,sidneys_secret_range_end:9,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-rhindle_min_speed":`Sets Rhindle's speed when all speed reducers are found.  Rhindle has a speed of 3 in the original game
Default value: 2`,rhindle_min_speed:{2:50,sidneys_secret_range_start:1,sidneys_secret_range_end:9,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-difficulty_switch_a":`Set availability of left difficulty switch
This controls the speed of the dragons' bite animation`,difficulty_switch_a:{normal:0,locked_hard:0,hard_with_unlock_item:50},"sidneys_secret_documentation-difficulty_switch_b":`Set availability of right difficulty switch
On hard, dragons will run away from the sword`,difficulty_switch_b:{normal:0,locked_hard:0,hard_with_unlock_item:50},"sidneys_secret_documentation-start_castle":`Choose or randomize which castle to start in front of.

This affects both normal start and reincarnation.  Starting
at the black castle may give easy dot runs, while starting
at the white castle may make them more dangerous!  Also, not
starting at the yellow castle can make delivering the chalice
with a full inventory slightly less trivial.

This doesn't affect logic since all the castles are reachable
from each other.`,start_castle:{yellow:50,black:0,white:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
