
<div align="center">
<h1>Chibi for AniList</h1>
<h2>A lightweight anime & manga tracker CLI app powered by AniList</h2>

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
![Go](https://img.shields.io/badge/go-%2300ADD8.svg?style=flat&logo=go&logoColor=white)
[![Build (Multiple Arch)](https://github.com/CosmicPredator/chibi-cli/actions/workflows/build.yml/badge.svg)](https://github.com/CosmicPredator/chibi-cli/actions/workflows/build.yml)

![Made with VHS](https://vhs.charm.sh/vhs-4o1iqUYYSVr7QIO5m9Q5nX.gif)

</div>

## Features

- 😊 Easily manage your anime and manga lists without even opening your browser.
- 🪶 Lightweight and easy on your keyboard.
- 🌈 Colorful and structured outputs.
- 🗔 Supports most terminals and shells.
- 🔄 Changes are synced directly with AniList. No local saving BS.
- 🚀 Faster by design.

## Getting Started

This section provides the quickest way to get started with chibi-cli. For detailed tutorial, refer to [Documentation](#documentation)

### Optional Pre-Requisites

- Make sure you use any one of the [Nerd Fonts](https://www.nerdfonts.com/) for a proper output.
- Make sure your terminal supports 24 bit ANSI color profile.
- Most modern terminals like **Windows Terminal**, **Gnome Terminal**, **Kitty** or **Alacritty** etc., should work.

### Quick Installation

- Download the binary for your OS from the [releases](https://github.com/CosmicPredator/chibi-cli/releases) page.
- Open your favourite terminal in the directory where you downloaded chibi.
- Type in `./chibi` and you are in!

> [!NOTE]
> For windows, you may type `./chibi.exe` (in powershell).

> [!NOTE]
> For linux, make the binary executable by the following command,
>
> ```sh
> $ chmod +x ./chibi
> ```

## Documentation

You can check the docs [here](https://chibi-cli.pages.dev/) (original).

## 🚀 New docs Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                     | Action                                               |
| :-------------------------- | :--------------------------------------------------- |
| `npm install`             | Installs dependencies                                |
| `npm run dev`             | Starts local dev server at `localhost:4321`        |
| `npm run build`           | Build your production site to `./dist/`            |
| `npm run preview`         | Preview your build locally, before deploying         |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                         |

## Contributing

Contributions are heartily welcomed...!

Please refer to the [pull request guide](https://github.com/CosmicPredator/chibi-cli/blob/develop/.github/PULL_REQUEST_TEMPLATE.md)
before creating a pull request.

## Special Thanks

This project is not possible without the following libraries,

- AniList - [Website](https://anilist.co)
- spf13/cobra - [GitHub](https://github.com/spf13/cobra)
- charmbracelet/huh - [GitHub](https://github.com/charmbracelet/huh)
- charmbracelet/lipgloss - [GitHub](https://github.com/charmbracelet/lipgloss)
- withastro/starlight - [GitHub](https://github.com/withastro/starlight)
