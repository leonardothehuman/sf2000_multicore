# SF2000 Multicore

## About the platform
More information about the SF2000 handheld gaming system can be found [here](https://vonmillhausen.github.io/sf2000/).

## About this modification
This version enables the game's built-in SRAM save, it also stores SRAM and savestates on the same directory of the rom instead of a save directory, to avoid conflict when you have multiple roms with the same file name for different cores, if you are upgrading from previous versions, you must move your saves manually, you must also rename the ram extension to srm.

It also creates a new stub format that doesn't rely on the stub name, which allows you to rename the stub files independently of the rom name, and you don't need the core name taking almost half of the space available for the game name on the screen, the old stub format is still supported.

Since the space for storing the loader is very limited, I had to sacrifice the stub loader's logging.

To distinguish between a GBA rom and a stub, this version of multicore uses the size of the file, files with up to 251 bytes are stubs, bigger files are roms

## Status
Some cores build and work well, others build and have issues (no sound, slowness, etc.), some build but do not currently work, and others do not build at all. For current information on the state of each core, please see the [spreadsheet](https://docs.google.com/spreadsheets/d/1BDPqLwRcY2cN7tObuyW7RzLw8oGyY9XGLS1D4jLgz2Q/edit?usp=sharing).

## Releases
Multicore releases can be found here: https://github.com/madcock/sf2000_multicore_cores/releases
Multicore with save feature enabled can be found here: https://github.com/leonardothehuman/sf2000_multicore/releases

## Setup (before building)
(This is the top level project, forked from: https://github.com/madcock/sf2000_multicore, wich was forked from https://gitlab.com/kobily/sf2000_multicore)
- choose a directory to contain all this
- decide if you want EVERYTHING (there are a lot of cores!)
    - YES, I want ALL the cores!
        - `git clone --recurse-submodules --shallow-submodules https://github.com/leonardothehuman/sf2000_multicore.git`
        - wait for a long while
    - NO, I want to select individual cores
        - `git clone https://github.com/leonardothehuman/sf2000_multicore.git`
        - `cd sf2000_multicore/libs/libretro-common`
        - `git submodule update --init .`
        - `cd ../..`
        - choose a core to grab, for example, picodrive
        - `cd cores/picodrive`
        - `git submodule update --init .`
        - repeat this process for as many cores as you want
    - Note: libretro-mrboom takes a very long time to receive, even with `--shallow-submodules`, so I guess be patient!
- from the top level of this repo, install the compiler tools
    - `./install-toolchain.sh`
- copy the 08/03/2023 (official release 1.6) file
    - `cp <YOUR_1.6_BISRV.ASD> bisrv_08_03.asd`
 
## Building
If setup properly, there are a few ways to build.

If all the core sources for working cores are available:
- `./cleancoresworking.sh` to clean only working cores
- `./buildcoresworking.sh` to build only working cores

Or use the scripts to clean and build all the buildable cores:
- `./cleancores.sh` to clean all cores
- `./buildcores.sh` to build all cores

If only some of the core sources are available:
- edit the Makefile as necessary to point to the core(s) you want to build
- the Makefile must include one entry for `CORE` and one for `CONSOLE` with an optional `MAKEFILE` entry
- the easiest thing to do is just uncomment a single core

Optionally, use the Makefile.everything:
- uncomment a single core, as described above
- `make -f Makefile.everything`

All of the cores are independent.

## Updating
- update EVERYTHING from the top level of this repo:
    - `git pull --recurse-submodules`
    - wait for a while
- you can still pull from individual directories (like a core), as usual, but you may want to grab submodule updates too:
    - `git pull; git submodule update --remote`

## Discussion
All the latest information can be found in the [dev channel on Discord](https://discord.com/channels/741895796315914271/1099465777825972347) which is part of [Retro Handhelds](https://discord.gg/retrohandhelds).

## Notes
This repo was forked from the official repo in github at https://github.com/madcock/sf2000_multicore, wich was forked from https://gitlab.com/kobily/sf2000_multicore.

Here are some useful notes on dealing with submodules: <https://www.vogella.com/tutorials/GitSubmodules/article.html>
