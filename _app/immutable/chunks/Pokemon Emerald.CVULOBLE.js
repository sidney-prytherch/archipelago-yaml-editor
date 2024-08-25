const e={name:"Player{number}",description:"Default Pokemon Emerald Template",game:"Pokemon Emerald",requires:{version:"0.5.0"},"Pokemon Emerald":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.

A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.

- **Locations:** ensure everything can be reached and acquired.
- **Items:** ensure all logically relevant items can be acquired.
- **Minimal:** ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-goal":`Determines what your goal is to consider the game beaten.

- Champion: Become the champion and enter the hall of fame
- Steven: Defeat Steven in Meteor Falls
- Norman: Defeat Norman in Petalburg Gym
- Legendary Hunt: Defeat or catch legendary pokemon (or whatever was randomized into their encounters)`,goal:{champion:50,steven:0,norman:0,legendary_hunt:0},"sidneys_secret_documentation-badges":`Adds Badges to the pool.

- Vanilla: Gym leaders give their own badge
- Shuffle: Gym leaders give a random badge
- Completely Random: Badges can be found anywhere`,badges:{vanilla:0,shuffle:0,completely_random:50},"sidneys_secret_documentation-hms":`Adds HMs to the pool.

- Vanilla: HMs are at their vanilla locations
- Shuffle: HMs are shuffled among vanilla HM locations
- Completely Random: HMs can be found anywhere`,hms:{vanilla:0,shuffle:0,completely_random:50},"sidneys_secret_documentation-key_items":`Adds most key items to the pool.

These are usually required to unlock a location or region (e.g. Devon Scope, Letter, Basement Key).`,key_items:{false:0,true:50},"sidneys_secret_documentation-bikes":"Adds the Mach Bike and Acro Bike to the pool.",bikes:{false:50,true:0},"sidneys_secret_documentation-event_tickets":"Adds the event tickets to the pool, which let you access legendaries by sailing from Lilycove.",event_tickets:{false:50,true:0},"sidneys_secret_documentation-rods":"Adds fishing rods to the pool.",rods:{false:50,true:0},"sidneys_secret_documentation-overworld_items":"Adds items on the ground with a Pokeball sprite to the pool.",overworld_items:{false:0,true:50},"sidneys_secret_documentation-hidden_items":"Adds hidden items to the pool.",hidden_items:{false:50,true:0},"sidneys_secret_documentation-npc_gifts":"Adds most gifts received from NPCs to the pool (not including key items or HMs).",npc_gifts:{false:50,true:0},"sidneys_secret_documentation-berry_trees":"Adds berry trees to the pool. Empty soil patches are converted to locations and contribute Sitrus Berries to the pool.",berry_trees:{false:50,true:0},"sidneys_secret_documentation-dexsanity":`Adding a "caught" pokedex entry gives you an item (catching, evolving, trading, etc.). Only wild encounters are considered logical access to a species.

Blacklisting wild encounters removes the dexsanity location.

Defeating gym leaders provides dex info, allowing you to see where on the map you can catch species you need.

Each pokedex entry adds a Poke Ball, Great Ball, or Ultra Ball to the pool.`,dexsanity:{false:50,true:0},"sidneys_secret_documentation-trainersanity":`Defeating a trainer gives you an item.

Trainers are no longer missable. Trainers no longer give you money for winning. Each trainer adds a valuable item (Nugget, Stardust, etc.) to the pool.`,trainersanity:{false:50,true:0},"sidneys_secret_documentation-item_pool_type":`Determines which non-progression items get put into the item pool.

- Shuffled: Item pool consists of shuffled vanilla items
- Diverse Balanced: Item pool consists of random items approximately proportioned according to what they're replacing
- Diverse: Item pool consists of uniformly random (non-unique) items`,item_pool_type:{shuffled:50,diverse_balanced:0,diverse:0},"sidneys_secret_documentation-require_itemfinder":"The Itemfinder is logically required to pick up hidden items.",require_itemfinder:{false:0,true:50},"sidneys_secret_documentation-require_flash":"Determines whether HM05 Flash is logically required to navigate a dark cave.",require_flash:{neither:0,only_granite_cave:0,only_victory_road:0,both:50},"sidneys_secret_documentation-elite_four_requirement":`Sets the requirements to challenge the elite four.

- Badges: Obtain some number of badges
- Gyms: Defeat some number of gyms`,elite_four_requirement:{badges:50,gyms:0},"sidneys_secret_documentation-elite_four_count":"Sets the number of badges/gyms required to challenge the elite four.",elite_four_count:{8:50,sidneys_secret_range_start:0,sidneys_secret_range_end:8,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-norman_requirement":`Sets the requirements to challenge the Petalburg Gym.

- Badges: Obtain some number of badges
- Gyms: Defeat some number of gym leaders`,norman_requirement:{badges:50,gyms:0},"sidneys_secret_documentation-norman_count":"Sets the number of badges/gyms required to challenge the Petalburg Gym.",norman_count:{4:50,sidneys_secret_range_start:0,sidneys_secret_range_end:7,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-legendary_hunt_catch":`Sets whether legendaries need to be caught to satisfy the Legendary Hunt win condition.

Defeated legendaries can be respawned by defeating the Elite 4.`,legendary_hunt_catch:{false:50,true:0},"sidneys_secret_documentation-legendary_hunt_count":"Sets the number of legendaries that must be caught/defeated for the Legendary Hunt goal.",legendary_hunt_count:{3:50,sidneys_secret_range_start:1,sidneys_secret_range_end:12,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-allowed_legendary_hunt_encounters":`Sets which legendary encounters can contribute to the Legendary Hunt goal.

Latias will always be at Southern Island. Latios will always be the roamer. The TV broadcast describing the roamer gives you "seen" info for Latios.

The braille puzzle in Sealed Chamber gives you "seen" info for Wailord and Relicanth. The move tutor in Fortree City always teaches Dig.`,allowed_legendary_hunt_encounters:["Groudon","Kyogre","Rayquaza","Latios","Latias","Regirock","Registeel","Regice","Ho-Oh","Lugia","Deoxys","Mew"],"sidneys_secret_documentation-wild_pokemon":`Randomizes wild pokemon encounters (grass, caves, water, fishing).

- Vanilla: Wild encounters are unchanged
- Match Base Stats: Wild pokemon are replaced with species with approximately the same bst
- Match Type: Wild pokemon are replaced with species that share a type with the original
- Match Base Stats and Type: Apply both Match Base Stats and Match Type
- Completely Random: There are no restrictions`,wild_pokemon:{vanilla:50,match_base_stats:0,match_type:0,match_base_stats_and_type:0,completely_random:0},"sidneys_secret_documentation-wild_encounter_blacklist":`Prevents listed species from appearing in the wild when wild encounters are randomized.

May be overridden if enforcing other restrictions in combination with this blacklist is impossible.

Use "_Legendaries" as a shortcut for all legendary pokemon.`,wild_encounter_blacklist:[],"sidneys_secret_documentation-starters":`Randomizes the starter pokemon in Professor Birch's bag.

- Vanilla: Starters are unchanged
- Match Base Stats: Starters are replaced with species with approximately the same bst
- Match Type: Starters are replaced with species that share a type with the original
- Match Base Stats and Type: Apply both Match Base Stats and Match Type
- Completely Random: There are no restrictions`,starters:{vanilla:50,match_base_stats:0,match_type:0,match_base_stats_and_type:0,completely_random:0},"sidneys_secret_documentation-starter_blacklist":`Prevents listed species from appearing as starters when starters are randomized.

May be overridden if enforcing other restrictions in combination with this blacklist is impossible.

Use "_Legendaries" as a shortcut for all legendary pokemon.`,starter_blacklist:[],"sidneys_secret_documentation-trainer_parties":`Randomizes the parties of all trainers.

- Vanilla: Parties are unchanged
- Match Base Stats: Trainer pokemon are replaced with species with approximately the same bst
- Match Type: Trainer pokemon are replaced with species that share a type with the original
- Match Base Stats and Type: Apply both Match Base Stats and Match Type
- Completely Random: There are no restrictions`,trainer_parties:{vanilla:50,match_base_stats:0,match_type:0,match_base_stats_and_type:0,completely_random:0},"sidneys_secret_documentation-trainer_party_blacklist":`Prevents listed species from appearing in opponent trainers' parties if opponent parties are randomized.

May be overridden if enforcing other restrictions in combination with this blacklist is impossible.

Use "_Legendaries" as a shortcut for all legendary pokemon.`,trainer_party_blacklist:[],"sidneys_secret_documentation-force_fully_evolved":"When an opponent uses a pokemon of the specified level or higher, restricts the species to only fully evolved pokemon.",force_fully_evolved:{100:50,sidneys_secret_range_start:1,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-legendary_encounters":`Randomizes legendary encounters (Rayquaza, Regice, Latias, etc.). The roamer will always be Latios during legendary hunts.

- Vanilla: Legendary encounters are unchanged
- Shuffle: Legendary encounters are shuffled between each other
- Match Base Stats: Legendary encounters are replaced with species with approximately the same bst
- Match Type: Legendary encounters are replaced with species that share a type with the original
- Match Base Stats and Type: Apply both Match Base Stats and Match Type
- Completely Random: There are no restrictions`,legendary_encounters:{vanilla:50,shuffle:0,match_base_stats:0,match_type:0,match_base_stats_and_type:0,completely_random:0},"sidneys_secret_documentation-misc_pokemon":`Randomizes non-legendary static encounters. May grow to include other pokemon like trades or gifts.

- Vanilla: Species are unchanged
- Shuffle: Species are shuffled between each other
- Match Base Stats: Species are replaced with species with approximately the same bst
- Match Type: Species are replaced with species that share a type with the original
- Match Base Stats and Type: Apply both Match Base Stats and Match Type
- Completely Random: There are no restrictions`,misc_pokemon:{vanilla:50,shuffle:0,match_base_stats:0,match_type:0,match_base_stats_and_type:0,completely_random:0},"sidneys_secret_documentation-types":`Randomizes the type(s) of every pokemon. Each species will have the same number of types.

- Vanilla: Types are unchanged
- Shuffle: Types are shuffled globally for all species (e.g. every Water-type pokemon becomes Fire-type)
- Completely Random: Each species has its type(s) randomized
- Follow Evolutions: Types are randomized per evolution line instead of per species`,types:{vanilla:50,shuffle:0,completely_random:0,follow_evolutions:0},"sidneys_secret_documentation-abilities":`Randomizes abilities of every species. Each species will have the same number of abilities.

- Vanilla: Abilities are unchanged
- Completely Random: Each species has its abilities randomized
- Follow Evolutions: Abilities are randomized, but if a pokemon would normally retain its ability when evolving, the random ability will also be retained`,abilities:{vanilla:50,completely_random:0,follow_evolutions:0},"sidneys_secret_documentation-ability_blacklist":`Prevent species from being given these abilities.

Has no effect if abilities are not randomized.`,ability_blacklist:[],"sidneys_secret_documentation-level_up_moves":`Randomizes the moves a pokemon learns when they reach a level where they would learn a move. Your starter is guaranteed to have a usable damaging move.

- Vanilla: Learnset is unchanged
- Randomized: Moves are randomized
- Start with Four Moves: Moves are randomized and all Pokemon know 4 moves at level 1`,level_up_moves:{vanilla:50,randomized:0,start_with_four_moves:0},"sidneys_secret_documentation-move_match_type_bias":`Sets the probability that a learned move will be forced match one of the types of a pokemon.

If a move is not forced to match type, it will roll for Normal type bias.`,move_match_type_bias:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-move_normal_type_bias":`After it has been decided that a move will not be forced to match types, sets the probability that a learned move will be forced to be the Normal type.

If a move is not forced to be Normal, it will be completely random.`,move_normal_type_bias:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-tm_tutor_compatibility":`Sets the percent chance that a given TM or move tutor is compatible with a species.

Some opponents like gym leaders are allowed to use TMs. This option can affect the moves they know.`,tm_tutor_compatibility:{sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-vanilla":"equivalent to -1",vanilla:50,"sidneys_secret_notes-full":"equivalent to 100",full:0},"sidneys_secret_documentation-hm_compatibility":`Sets the percent chance that a given HM is compatible with a species.

Some opponents like gym leaders are allowed to use HMs. This option can affect the moves they know.`,hm_compatibility:{sidneys_secret_range_start:50,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-vanilla":"equivalent to -1",vanilla:50,"sidneys_secret_notes-full":"equivalent to 100",full:0},"sidneys_secret_documentation-tm_tutor_moves":`Randomizes the moves taught by TMs and move tutors.

Some opponents like gym leaders are allowed to use TMs. This option can affect the moves they know.`,tm_tutor_moves:{false:50,true:0},"sidneys_secret_documentation-reusable_tms_tutors":"Sets TMs to not break after use (they remain sellable). Sets move tutors to infinite use.",reusable_tms_tutors:{false:50,true:0},"sidneys_secret_documentation-move_blacklist":`Prevents species from learning these moves via learnsets, TMs, and move tutors.

HM moves are already banned.`,move_blacklist:[],"sidneys_secret_documentation-min_catch_rate":`Sets the minimum catch rate a pokemon can have. Any pokemon with a catch rate below this floor will have it raised to this value.

Legendaries are often in the single digits
Fully evolved pokemon are often double digits
Pidgey is 255`,min_catch_rate:{3:50,sidneys_secret_range_start:3,sidneys_secret_range_end:255,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-guaranteed_catch":"Every throw is guaranteed to catch a wild pokemon.",guaranteed_catch:{false:50,true:0},"sidneys_secret_documentation-normalize_encounter_rates":`Make every slot on an encounter table approximately equally likely.

This does NOT mean each species is equally likely. In the vanilla game, each species may occupy more than one slot, and slots vary in probability.

Species will still occupy the same slots as vanilla, but the slots will be equally weighted. The minimum encounter rate will be 8% (higher in water).`,normalize_encounter_rates:{false:50,true:0},"sidneys_secret_documentation-exp_modifier":`Multiplies gained experience by a percentage.

100 is default
50 is half
200 is double
etc.`,exp_modifier:{100:50,sidneys_secret_range_start:0,sidneys_secret_range_end:1e3,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-blind_trainers":"Trainers will not start a battle with you unless you talk to them.",blind_trainers:{false:50,true:0},"sidneys_secret_documentation-purge_spinners":"Trainers will rotate in predictable patterns on a set interval instead of randomly and don't turn toward you when you run.",purge_spinners:{false:50,true:0},"sidneys_secret_documentation-match_trainer_levels":`When you start a battle with a trainer, your party's levels will be automatically set to match that trainer's highest level pokemon.

The experience you receive will match your party's average actual level, and will only be awarded when you win the battle.

This is a pseudo-replacement for a level cap and makes every trainer battle a fair fight while still allowing you to level up.

- Off: The vanilla experience
- Additive: The modifier you apply to your team is a flat bonus
- Multiplicative: The modifier you apply to your team is a percent bonus`,match_trainer_levels:{off:50,additive:0,multiplicative:0},"sidneys_secret_documentation-match_trainer_levels_bonus":`A level bonus (or penalty) to apply to your team when matching an opponent's levels.

When the match trainer levels option is "additive", this value is added to your team's levels during a battle.
 For example, if this value is 5 (+5 levels), you'll have a level 25 team against a level 20 team, and a level 45 team against a level 40 team.

When the match trainer levels option is "multiplicative", this is a percent bonus.
 For example, if this value is 5 (+5%), you'll have a level 21 team against a level 20 team, and a level 42 team against a level 40 team.`,match_trainer_levels_bonus:{0:50,sidneys_secret_range_start:-100,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-double_battle_chance":`The percent chance that a trainer with more than 1 pokemon will be converted into a double battle.

If these trainers would normally approach you, they will only do so if you have 2 unfainted pokemon.

They can be battled by talking to them no matter what.`,double_battle_chance:{0:50,sidneys_secret_range_start:0,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-better_shops":"Pokemarts sell every item that can be obtained in a pokemart (except mail, which is still unique to the relevant city).",better_shops:{false:50,true:0},"sidneys_secret_documentation-remove_roadblocks":`Removes specific NPCs that normally stand in your way until certain events are completed.

This can open up the world a bit and make your playthrough less linear, but be careful how many you remove; it may make too much of your world accessible upon receiving Surf.`,remove_roadblocks:[],"sidneys_secret_documentation-extra_boulders":`Places strength boulders on Route 115 which block access to Meteor Falls from the beach.

This aims to take some power away from Surf by restricting how much it allows you to access.`,extra_boulders:{false:50,true:0},"sidneys_secret_documentation-extra_bumpy_slope":`Adds a bumpy slope to Route 115 which allows access to Meteor Falls if you have the Acro Bike.

This aims to take some power away from Surf by adding a new way to exit the Rustboro area.`,extra_bumpy_slope:{false:50,true:0},"sidneys_secret_documentation-modify_118":`Changes the layout of Route 118 so that it must be crossed with the Acro Bike instead of Surf.

This aims to take some power away from Surf by restricting how much it allows you to access.`,modify_118:{false:50,true:0},"sidneys_secret_documentation-free_fly_location":"Enables flying to one random location (excluding cities reachable with no items).",free_fly_location:{false:50,true:0},"sidneys_secret_documentation-hm_requirements":"Sets the requirements to use HMs outside of battle.",hm_requirements:{vanilla:50,fly_without_badge:0},"sidneys_secret_documentation-turbo_a":"Holding A will advance most text automatically.",turbo_a:{false:50,true:0},"sidneys_secret_documentation-receive_item_messages":`Determines whether you receive an in-game notification when receiving an item. Items can still only be received in the overworld.

- All: Every item shows a message
- Progression: Only progression items show a message
- None: All items are added to your bag silently (badges will still show).`,receive_item_messages:{all:50,progression:0,none:0},"sidneys_secret_documentation-remote_items":`Instead of placing your own items directly into the ROM, all items are received from the server, including items you find for yourself.

This enables co-op of a single slot and recovering more items after a lost save file (if you're so unlucky).

But it changes pickup behavior slightly and requires connection to the server to receive any items.`,remote_items:{false:50,true:0},"sidneys_secret_documentation-music":"Shuffles music played in any situation where it loops. Includes many FRLG tracks.",music:{false:50,true:0},"sidneys_secret_documentation-fanfares":`Shuffles fanfares for item pickups, healing at the pokecenter, etc.

When this option is enabled, pressing B will interrupt most fanfares.`,fanfares:{false:50,true:0},"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0},"sidneys_secret_documentation-enable_wonder_trading":`Allows participation in wonder trading with other players in your current multiworld. Speak with the center receptionist on the second floor of any pokecenter.

Wonder trading NEVER affects logic.

Certain aspects of a pokemon species are per-game, not per-pokemon. As a result, some things are not retained during a trade, including type, ability, level up learnset, and so on.

Receiving a pokemon this way does not mark it as found in your pokedex.

Trade evolutions do not evolve this way; they retain their modified methods (level ups and item use).`,enable_wonder_trading:{false:0,true:50},"sidneys_secret_documentation-easter_egg":`Enter certain phrases and something special might happen.

All secret phrases are something that could be a trendy phrase in Dewford Town. They are case insensitive.`,easter_egg:{"EMERALD SECRET":50},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the ``!hint`` command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the ``!hint`` command.",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item.",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item.",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[]}};export{e as default};
