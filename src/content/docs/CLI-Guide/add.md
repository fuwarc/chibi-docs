

---
title: Add
lang: en-US
---
# The `add` Command

The `chibi add` command allows you to add an anime or manga to your list. You can specify the entry by its ID and set its initial status.

## Usage

```bash
$ chibi add [id] [flags]
```

## Flags

### `-h, --help`

Provides help information for the `chibi add` command. Use this flag to display details about how the command works.

#### Example:

```bash
$ chibi add --help
```

### `-s, --status string`

Specifies the status of the media you are adding to your list. You can use either the full name or shorthand notation. The available status options are:

- `watching` or `w`: Currently watching anime or reading manga.
- `planning` or `p`: Planning to watch or read in the future (default).
- `completed` or `c`: Finished watching or reading.
- `dropped` or `d`: Dropped media that you don't plan to continue.
- `paused` or `ps`: Temporarily paused media.
- `repeating` or `rp`: Media you are rewatching or rereading.

#### Example:

```bash
$ chibi add 1234 --status watching
```

This command adds the entry with ID `1234` to your list with a status of `watching`.

## Parameters

### `[id]`

The unique identifier of the anime or manga entry you want to add. This is a required parameter.

#### Example:

```bash
$ chibi add 5678 --status planning
```

This command adds the entry with ID `5678` to your list with the default status of `planning`.

## Defaults

- The default `status` is `planning` if not specified.

### Example of Default Usage

```bash
$ chibi add 4321
```

This command adds the entry with ID `4321` to your list with a status of `planning`.

## Example Usage

### Add with Specific Status

To add a manga to your list and set its status as `reading`:

```bash
$ chibi add 7890 --status reading
```

### Add with Default Status

To add an anime to your list with the default status (`planning`):

```bash
$ chibi add 9876
```

### Help Flag

To learn more about the command:

```bash
$ chibi add --help
```

## Output

Upon successful execution, the command will confirm the addition with a message like the following:

```bash
Done ✅
```
