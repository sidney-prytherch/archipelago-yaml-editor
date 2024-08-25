const e={name:"Player{number}",description:"Default Metroid Zero Mission Template",game:"Metroid Zero Mission",requires:{version:"0.5.0"},"Metroid Zero Mission":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0},"sidneys_secret_documentation-chozodia_access":`Open: You can access Chozodia by using a Power Bomb to open the doors.
Closed: You must defeat Mother Brain to access Chozodia.`,chozodia_access:{open:50,closed:0},"sidneys_secret_documentation-skip_chozodia_stealth":"After escaping Tourian, place Samus in the save room just outside of the Chozo Ghost's room in Chozodia.",skip_chozodia_stealth:{false:0,true:50},"sidneys_secret_documentation-unknown_items_always_usable":`Unknown Items (Plasma Beam, Space Jump, and Gravity Suit) are activated and usable as soon as
they are received.

When this option is disabled, the player will need to defeat the Chozo Ghost in Chozodia as ZSS in order
to unlock Samus' fully-powered suit, after which they may then use the Plasma Beam, Space Jump,
and Gravity Suit, as in the unmodified game.`,unknown_items_always_usable:{false:0,true:50},"sidneys_secret_documentation-layout_patches":`Modify the layout of a few rooms to reduce softlocks.
NOTE: You can warp to the starting room from any save station or Samus' ship by holding L+R while selecting "No"
when asked to save.`,layout_patches:{false:0,true:50},"sidneys_secret_documentation-morph_ball":`Influences where the Morph Ball will be placed.
Normal: Shuffled into the pool with no special treatment.
Early: Forced to be local in an early location.`,morph_ball:{normal:0,early:50},"sidneys_secret_documentation-ibj_in_logic":`Allows for using IBJ (infinite bomb jumping) in logic.

Enabling this option may require you to traverse long vertical or horizontal distances using only bombs.

If disabled, this option does not disable performing IBJ, but it will never be logically required.`,ibj_in_logic:{false:50,true:0},"sidneys_secret_documentation-heatruns_lavadives":`Allows for traversing heated rooms and acid/lava dives without the appropriate suit(s) in logic.

When enabled, logic will ensure you have a reasonable amount of energy before requiring an environmental damage
run. When disabled, you will not be required to endure any environmental damage before receiving the appropriate
mitigating suit.`,heatruns_lavadives:{false:50,true:0},"sidneys_secret_documentation-walljumps_in_logic":`Allows for using walljumps in logic. You may be required to walljump instead of using items such as Hi-Jump or
Power Grip in order to logically progress, where possible.

Disabling this option will not remove the ability to walljump, but it will never be logically required.`,walljumps_in_logic:{false:0,true:50},"sidneys_secret_documentation-display_nonlocal_items":`How to display items that will be sent to other players.

Match Series: Items from Super Metroid and SMZ3 display as their counterpart in Zero Mission.
Match Game: Items for other Zero Mission worlds appear as the item that will be sent.
None: All items for other players appear as Archipelago logos.`,display_nonlocal_items:{none:0,match_game:0,match_series:50},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[],"sidneys_secret_documentation-start_inventory_from_pool":`Start with these items and don't place them in the world.

The game decides what the replacement items will be.`,start_inventory_from_pool:{},"sidneys_secret_documentation-junk_fill_weights":`Specify the distribution of extra capacity expansions that should be used to fill vacancies in the pool.
This option only has any effect if there are unfilled locations, e.g. when some items are removed.`,junk_fill_weights:{"Missile Tank":1,Nothing:0,"Power Bomb Tank":0,"Super Missile Tank":0}}};export{e as default};
