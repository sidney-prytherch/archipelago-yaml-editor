const e={name:"Player{number}",description:"Default Links Awakening DX Template",game:"Links Awakening DX",requires:{version:"0.5.0"},"Links Awakening DX":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-logic":`Affects where items are allowed to be placed.
[Normal] Playable without using any tricks or glitches. Can require knowledge from a vanilla playthrough, such as how to open Color Dungeon.
[Hard] More advanced techniques may be required, but glitches are not. Examples include tricky jumps, killing enemies with only pots.
[Glitched] Advanced glitches and techniques may be required, but extremely difficult or tedious tricks are not required. Examples include Bomb Triggers, Super Jumps and Jesus Jumps.
[Hell] Obscure knowledge and hard techniques may be required. Examples include featherless jumping with boots and/or hookshot, sequential pit buffers and unclipped superjumps. Things in here can be extremely hard to do or very time consuming.`,logic:{normal:50,hard:0,glitched:0,hell:0},"sidneys_secret_documentation-goal":`The Goal of the game
[Instruments] The Wind Fish's Egg will only open if you have the required number of Instruments of the Sirens, and play the Ballad of the Wind Fish.
[Seashells] The Egg will open when you bring 20 seashells. The Ballad and Ocarina are not needed.
[Open] The Egg will start pre-opened.`,goal:{instruments:50,seashells:0,open:0},"sidneys_secret_documentation-instrument_count":"Sets the number of instruments required to open the Egg",instrument_count:{8:50,sidneys_secret_range_start:0,sidneys_secret_range_end:8,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-shuffle_nightmare_keys":`Shuffle Nightmare Keys
[Original Dungeon] The item will be within its original dungeon
[Own Dungeons] The item will be within a dungeon in your world
[Own World] The item will be somewhere in your world
[Any World] The item could be anywhere
[Different World] The item will be somewhere in another world`,shuffle_nightmare_keys:{original_dungeon:50,own_dungeons:0,own_world:0,any_world:0,different_world:0},"sidneys_secret_documentation-shuffle_small_keys":`Shuffle Small Keys
[Original Dungeon] The item will be within its original dungeon
[Own Dungeons] The item will be within a dungeon in your world
[Own World] The item will be somewhere in your world
[Any World] The item could be anywhere
[Different World] The item will be somewhere in another world`,shuffle_small_keys:{original_dungeon:50,own_dungeons:0,own_world:0,any_world:0,different_world:0},"sidneys_secret_documentation-shuffle_maps":`Shuffle Dungeon Maps
[Original Dungeon] The item will be within its original dungeon
[Own Dungeons] The item will be within a dungeon in your world
[Own World] The item will be somewhere in your world
[Any World] The item could be anywhere
[Different World] The item will be somewhere in another world`,shuffle_maps:{original_dungeon:50,own_dungeons:0,own_world:0,any_world:0,different_world:0},"sidneys_secret_documentation-shuffle_compasses":`Shuffle Dungeon Compasses
[Original Dungeon] The item will be within its original dungeon
[Own Dungeons] The item will be within a dungeon in your world
[Own World] The item will be somewhere in your world
[Any World] The item could be anywhere
[Different World] The item will be somewhere in another world`,shuffle_compasses:{original_dungeon:50,own_dungeons:0,own_world:0,any_world:0,different_world:0},"sidneys_secret_documentation-shuffle_stone_beaks":`Shuffle Owl Beaks
[Original Dungeon] The item will be within its original dungeon
[Own Dungeons] The item will be within a dungeon in your world
[Own World] The item will be somewhere in your world
[Any World] The item could be anywhere
[Different World] The item will be somewhere in another world`,shuffle_stone_beaks:{original_dungeon:50,own_dungeons:0,own_world:0,any_world:0,different_world:0},"sidneys_secret_documentation-shuffle_instruments":`Shuffle Instruments
[Original Dungeon] The item will be within its original dungeon
[Own Dungeons] The item will be within a dungeon in your world
[Own World] The item will be somewhere in your world
[Any World] The item could be anywhere
[Different World] The item will be somewhere in another world
[Vanilla] The item will be in its vanilla location in your world`,shuffle_instruments:{original_dungeon:0,own_dungeons:0,own_world:0,any_world:0,different_world:0,vanilla:50},"sidneys_secret_documentation-warp_improvements":`[On] Adds remake style warp screen to the game. Choose your warp destination on the map after jumping in a portal and press B to select.
[Off] No change`,warp_improvements:{false:50,true:0},"sidneys_secret_documentation-additional_warp_points":`[On] (requires warp improvements) Adds a warp point at Crazy Tracy's house (the Mambo teleport spot) and Eagle's Tower
[Off] No change`,additional_warp_points:{false:50,true:0},"sidneys_secret_documentation-tradequest":`[On] adds the trade items to the pool (the trade locations will always be local items)
[Off] (default) doesn't add them`,tradequest:{false:50,true:0},"sidneys_secret_documentation-rooster":`[On] Adds the rooster to the item pool. 
[Off] The rooster spot is still a check giving an item. But you will never find the rooster. Any rooster spot is accessible without rooster by other means.`,rooster:{false:0,true:50},"sidneys_secret_documentation-trendy_game":`[Easy] All of the items hold still for you
[Normal] The vanilla behavior
[Hard] The trade item also moves
[Harder] The items move faster
[Hardest] The items move diagonally
[Impossible] The items move impossibly fast, may scroll on and off the screen`,trendy_game:{easy:0,normal:50,hard:0,harder:0,hardest:0,impossible:0},"sidneys_secret_documentation-nag_messages":"Controls if nag messages are shown when rocks and crystals are touched. Useful for glitches, annoying for everyone else.",nag_messages:{false:50,true:0},"sidneys_secret_documentation-boots_controls":`Adds additional button to activate Pegasus Boots (does nothing if you haven't picked up your boots!)
[Vanilla] Nothing changes, you have to equip the boots to use them
[Bracelet] Holding down the button for the bracelet also activates boots (somewhat like Link to the Past)
[Press A] Holding down A activates boots
[Press B] Holding down B activates boots`,boots_controls:{vanilla:50,bracelet:0,press_a:0,press_b:0},"sidneys_secret_documentation-experimental_dungeon_shuffle":`[WARNING] Experimental, may fail to fill
Randomizes dungeon entrances within eachother`,experimental_dungeon_shuffle:{false:50,true:0},"sidneys_secret_documentation-experimental_entrance_shuffle":`[WARNING] Experimental, may fail to fill
Randomizes where overworld entrances lead to.
[Simple] Single-entrance caves/houses that have items are shuffled amongst each other.
If random start location and/or dungeon shuffle is enabled, then these will be shuffled with all the non-connector entrance pool.
Note, some entrances can lead into water, use the warp-to-home from the save&quit menu to escape this.`,experimental_entrance_shuffle:{none:50,simple:0},"sidneys_secret_documentation-link_palette":`Sets link's palette
A-D are color palettes usually used during the damage animation and can change based on where you are.`,link_palette:{normal:50,green:0,yellow:0,red:0,blue:0,invert_a:0,invert_b:0,invert_c:0,invert_d:0},"sidneys_secret_documentation-gfxmod":`Sets the sprite for link, among other things
The option should be the same name as a with sprite (and optional name) file in data/sprites/ladx`,gfxmod:{Link:50},"sidneys_secret_documentation-palette":`Sets the palette for the game. 
Note: A few places aren't patched, such as the menu and a few color dungeon tiles.
[Normal] The vanilla palette
[1-Bit] One bit of color per channel
[2-Bit] Two bits of color per channel
[Greyscale] Shades of grey
[Pink] Aesthetic
[Inverted] Inverted`,palette:{normal:50,"1bit":0,"2bit":0,greyscale:0,pink:0,inverted:0},"sidneys_secret_documentation-text_shuffle":`[On] Shuffles all the text in the game
[Off] (default) doesn't shuffle them.`,text_shuffle:{false:50,true:0},"sidneys_secret_documentation-music":`[Vanilla] Regular Music
[Shuffled] Shuffled Music
[Off] No music`,music:{vanilla:50,shuffled:0,off:0},"sidneys_secret_documentation-music_change_condition":`Controls how the music changes.
[Sword] When you pick up a sword, the music changes
[Always] You always have the post-sword music`,music_change_condition:{sword:0,always:50},"sidneys_secret_documentation-ap_title_screen":"Enables AP specific title screen and disables the intro cutscene",ap_title_screen:{false:0,true:50},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
