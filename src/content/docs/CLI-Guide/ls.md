---
title: Ls
lang: en-US
---
# The `ls` Command

The `chibi ls` command is used to retrieve a list of anime or manga based on the specified type and status. It supports detailed filtering options to help you find media you are currently engaging with, planning to watch or read, or have already completed.

## Usage

```bash
$ chibi list [flags]
```

### Aliases

The command supports the following aliases for convenience:

- `list`
- `ls`

## Flags

### `-h, --help`

Provides help information for the `chibi list` command. Use this flag to display details about how the command works and the options available.

```bash
$ chibi list --help
```

### `-s, --status string`

Filters the media list based on its current status. You can use the full status name or the shorthand notation for ease of use. The available status options are:

- `watching` or `w`: Currently watching anime or reading manga.
- `planning` or `p`: Planning to watch or read in the future.
- `completed` or `c`: Finished watching or reading.
- `dropped` or `d`: Dropped media that you don't plan to continue.
- `paused` or `ps`: Temporarily paused media.
- `repeating` or `rp`: Media you are rewatching or rereading.

#### Example:

```bash
chibi list --status completed
```

### `-t, --type string`

Specifies the type of media to list. Use the full name or shorthand notation:

- `anime` or `a`: Filters for anime.
- `manga` or `m`: Filters for manga.

If no type is specified, the default type is `anime`.

#### Example:

```bash
chibi list --type manga
```

### Combined Example

You can combine `--status` and `--type` flags to further narrow your results. For instance:

```bash
chibi list --status watching --type anime
```

This command will display a list of anime that you are currently watching.

## Defaults

- The default `status` is `watching`.
- The default `type` is `anime`.

### Example of Default Usage

```bash
chibi list
```

This command will list anime that you are currently watching by default.

### Output

The output of the `chibi list` command is a detailed list of media that matches the specified criteria, including information like the title, progress, and any additional metadata associated with the media.

```bash
┌──────────┬────────────────────────────────────┬────────┐
│    ID    │               TITLE                │PROGRESS│
├──────────┼────────────────────────────────────┼────────┤
│  107660  │              BEASTARS              │  2/12  │
└──────────┴────────────────────────────────────┴────────┘
```
