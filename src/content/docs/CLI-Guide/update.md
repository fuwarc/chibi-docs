---
title: Update
lang: en-US
---
# The `update` Command

The `chibi update` command is used to update the progress of a specific anime or manga entry in your list. You can specify the entry by its ID and provide the new progress value.

## Usage

```bash
$ chibi update [id] [flags]
```

## Flags

### `-h, --help`

Provides help information for the `chibi update` command. Use this flag to display details about how the command works.

#### Example:

```bash
$ chibi update --help
```

### `-p, --progress int`

Specifies the updated number of episodes (for anime) or chapters (for manga) that you have completed. Use this flag to update your progress for the specified entry.

#### Example:

```bash
$ chibi update 1234 --progress 10
```

This command updates the progress of the entry with ID `1234` to 10 episodes/chapters.

## Parameters

### `[id]`

The unique identifier of the anime or manga entry you want to update. This is a required parameter.

#### Example:

```bash
$ chibi update 5678 --progress 20
```

This command updates the entry with ID `5678` to reflect 20 episodes/chapters completed.

## Example Usage

### Basic Usage

To update the progress of an anime or manga entry:

```bash
$ chibi update 9876 --progress 15
```

This command sets the progress of the entry with ID `9876` to 15 episodes/chapters.

### Help Flag

To learn more about the command:

```bash
$ chibi update --help
```

## Output

Upon successful execution, the command will confirm the update with a message like the following:

```bash
Done ✅
```

::: info NOTE
When the progress entered is equal to the total episodes/chapters of the entry, a special prompt will be popped, guiding you to mark the entry as `completed`. This includes changing completed date, adding notes, assigning your score etc.,
:::
