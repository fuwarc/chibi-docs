

---
title: Help
lang: en-US
---
# The `help` Command

The `help` command provides information about the usage of a specific command, including available arguments, flags, and a brief description of its functionality. For example:

```shell
$ chibi --help
# Chibi for AniList - A lightweight anime & manga tracker CLI app powered by AniList.

# Usage:
#   chibi [flags]
#   chibi [command]

# Available Commands:
#   add         Add a media to your list
#   help        Help about any command
#   list        List your current anime/manga list
#   login       Login with anilist
#   profile     Get's your AniList profile (requires login)
#   search      Search for anime and manga
#   update      Update a list entry

# Flags:
#   -h, --help      help for chibi
#   -v, --version   Prints the version of the app

# Use "chibi [command] --help" for more information about a command.
```

::: info NOTE
Your output might _differ_ from the example above as new commands and flags may be added in future updates
:::

You can also use the shorthand syntax for the same command:

```shell
$ chibi -h
```

## Command-Specific help

The `help` command can also provide details about individual commands. Use the syntax `chibi <command> --help` to get more specific information. For example:

```shell
$ chibi profile --help
# Get's your AniList profile (requires login)

# Usage:
#   chibi profile [flags]

# Flags:
#   -h, --help   help for profile
```

## Shorthand Syntax Options

The `help` command can be invoked in various formats, all of which work the same way. For instance:

```shell
# All works the same
$ chibi profile --help

$ chibi profile -h

$ chibi help profile
```
