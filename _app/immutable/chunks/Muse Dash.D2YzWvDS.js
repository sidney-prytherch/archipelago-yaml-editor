const e={name:"Player{number}",description:"Default Muse Dash Template",game:"Muse Dash",requires:{version:"0.4.6"},"Muse Dash":{"sidneys_secret_documentation-progression_balancing":`A system that can move progression earlier, to try and prevent the player from getting stuck and bored early.
A lower setting means more getting stuck. A higher setting means less getting stuck.`,progression_balancing:{sidneys_secret_range_start:0,sidneys_secret_range_end:99,random:0,"random-low":0,"random-high":0,"sidneys_secret_notes-disabled":"equivalent to 0",disabled:0,"sidneys_secret_notes-normal":"equivalent to 50",normal:50,"sidneys_secret_notes-extreme":"equivalent to 99",extreme:0},"sidneys_secret_documentation-accessibility":`Set rules for reachability of your items/locations.
Locations: ensure everything can be reached and acquired.
Items: ensure all logically relevant items can be acquired.
Minimal: ensure what is needed to reach your goal can be acquired.`,accessibility:{locations:0,items:50,minimal:0},"sidneys_secret_documentation-local_items":"Forces these items to be in their native world.",local_items:[],"sidneys_secret_documentation-non_local_items":"Forces these items to be outside their native world.",non_local_items:[],"sidneys_secret_documentation-start_inventory":"Start with these items.",start_inventory:{},"sidneys_secret_documentation-start_hints":"Start with these item's locations prefilled into the !hint command.",start_hints:[],"sidneys_secret_documentation-start_location_hints":"Start with these locations and their item prefilled into the !hint command",start_location_hints:[],"sidneys_secret_documentation-exclude_locations":"Prevent these locations from having an important item",exclude_locations:[],"sidneys_secret_documentation-priority_locations":"Prevent these locations from having an unimportant item",priority_locations:[],"sidneys_secret_documentation-item_links":"Share part of your item pool with other players.",item_links:[],"sidneys_secret_documentation-allow_just_as_planned_dlc_songs":`Whether [Muse Plus] DLC Songs, and all the albums included in it, can be chosen as randomised songs.
Note: The [Just As Planned] DLC contains all [Muse Plus] songs.`,allow_just_as_planned_dlc_songs:{false:50,true:0},"sidneys_secret_documentation-dlc_packs":"Which non-[Muse Plus] DLC packs can be chosen as randomised songs.",dlc_packs:{},"sidneys_secret_documentation-streamer_mode_enabled":`In Muse Dash, an option named 'Streamer Mode' removes songs which may trigger copyright issues when streaming.
If this is enabled, only songs available under Streamer Mode will be available for randomization.`,streamer_mode_enabled:{false:50,true:0},"sidneys_secret_documentation-starting_song_count":"The number of songs that will be automatically unlocked at the start of a run.",starting_song_count:{5:50,sidneys_secret_range_start:3,sidneys_secret_range_end:10,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-additional_song_count":`The total number of songs that will be placed in the randomization pool.
- This does not count any starting songs or the goal song.
- The final song count may be lower due to other settings.`,additional_song_count:{40:50,sidneys_secret_range_start:15,sidneys_secret_range_end:528,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-song_difficulty_mode":`Ensures that at any chosen song has at least 1 value falling within these values.
- Any: All songs are available
- Easy: 1, 2 or 3
- Medium: 4, 5
- Hard: 6, 7
- Expert: 8, 9
- Master: 10+
- Manual: Uses the provided minimum and maximum range.`,song_difficulty_mode:{any:50,easy:0,medium:0,hard:0,expert:0,master:0,manual:0},"sidneys_secret_documentation-song_difficulty_min":`Ensures that 1 difficulty has at least 1 this value or higher per song.
- Difficulty Mode must be set to Manual.`,song_difficulty_min:{4:50,sidneys_secret_range_start:1,sidneys_secret_range_end:11,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-song_difficulty_max":`Ensures that 1 difficulty has at least 1 this value or lower per song.
- Difficulty Mode must be set to Manual.`,song_difficulty_max:{8:50,sidneys_secret_range_start:1,sidneys_secret_range_end:11,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-grade_needed":`Completing a song will require a grade of this value or higher in order to unlock items.
The grades are as follows:
- Silver S (SS): >= 95% accuracy
- Pink S (S): >= 90% accuracy
- A: >= 80% or a Full Combo
- B: >= 70%
- C: >= 60%`,grade_needed:{any:50,c:0,b:0,a:0,pinks:0,silvers:0},"sidneys_secret_documentation-music_sheet_count_percentage":`Controls how many music sheets are added to the pool based on the number of songs, including starting songs.
Higher numbers leads to more consistent game lengths, but will cause individual music sheets to be less important.`,music_sheet_count_percentage:{20:50,sidneys_secret_range_start:10,sidneys_secret_range_end:40,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-music_sheet_win_count_percentage":"The percentage of Music Sheets in the item pool that are needed to unlock the winning song.",music_sheet_win_count_percentage:{80:50,sidneys_secret_range_start:50,sidneys_secret_range_end:100,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-available_trap_types":`This controls the types of traps that can be added to the pool.
- VFX Traps consist of visual effects that play over the song. (i.e. Grayscale.)
- SFX Traps consist of changing your sfx setting to one possibly more annoying sfx.
Traps last the length of a song, or until you die.
Note: SFX traps are only available if [Just as Planned] DLC songs are enabled.`,available_trap_types:{none:0,vfx:0,sfx:0,all:50},"sidneys_secret_documentation-trap_count_percentage":"This controls how many traps to add into the pool, based the total number of songs.",trap_count_percentage:{15:50,sidneys_secret_range_start:0,sidneys_secret_range_end:35,random:0,"random-low":0,"random-high":0},"sidneys_secret_documentation-death_link":"When you die, everyone dies. Of course the reverse is true too.",death_link:{false:50,true:0},"sidneys_secret_documentation-include_songs":`Any song listed here will be guaranteed to be included as part of the seed.
- Difficulty options will be skipped for these songs.
- If there being too many included songs, songs will be randomly chosen without regard for difficulty.
- If you want these songs immediately, use start_inventory instead.`,include_songs:[],"sidneys_secret_documentation-exclude_songs":"Any song listed here will be excluded from being a part of the seed.",exclude_songs:[]}};export{e as default};