---
title: Profile
lang: en-US
---
# The `profile` Command

The `chibi profile` command is used to retrieve your AniList profile. This command requires you to be logged in to access your profile information.

## Usage

```bash
chibi profile [flags]
```

## Flags

### `-h, --help`

Provides help information for the `chibi profile` command. Use this flag to display details about how the command works.

#### Example:

```bash
$ chibi profile --help
```

## Requirements

This command requires you to be logged in to your AniList account. If you are not logged in, the command will prompt you to do so before retrieving your profile information.

## Example Usage

To fetch your AniList profile, use:

```bash
$ chibi profile
```

## Output

The command will display your AniList profile details, including information like your username, anime and manga statistics, and other profile metadata.

Example Output:

```bash
ID : 851923
Name : CosmicPredator
Total Anime : 147
Total Manga : 1
Total Days Watched : 24.21
Total Chapters Read : 4
URL : https://anilist.co/user/851923
```
