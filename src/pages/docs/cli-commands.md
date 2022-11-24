---
title: CLI Commands
description: The Command Line Interface CLI commands for Brisk
---

The CLI is a well behaved command line tool with a number of commands. It accepts flags and ENV variables to configure the behavior of the tool.

---

## Use the Brisk Command Line

```shellscript
❯ brisk -h
Brisk: ⚡Lightning Fast Tests.
Learn more at https://brisktest.com

Usage:
  brisk [flags]
  brisk [command]

Available Commands:
  completion  Generate the autocompletion script for the specified shell
  config      Used to manage the config file
  help        Help about any command
  login       Login to Brisk via web browser
  project     Used to manage projects
  update      Updates to the latest version
  version     Outputs the current version.
  workers     Used to interact with your Brisk workers

Flags:
  -c, --config string        project config file (default "brisk.json")
  -a, --credentials string   brisk credentials file (default "$HOME/.config/brisk/config.toml")
  -h, --help                 help for brisk
  -w, --watch                should brisk watch for local changes (default true)

Use "brisk [command] --help" for more information about a command.
```

### Description

brisk is the command we use to run Brisk locally. Running brisk without arguments will run the tests in the current directory in watch mode. Once the current test run has finished, it will then watch for changes and run the tests again on any change in the current directory.

## Flags

| Flag                     | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| -c, --config string      | project config file (default "brisk.json")                         |
| -a, --credentials string | brisk credentials file (default "$HOME/.config/brisk/config.toml") |
| -h, --help               | help for brisk                                                     |
| -w, --watch              | should brisk watch for local changes (default true)                |

## Commands

### brisk completion

Generate the autocompletion script for the specified shell

```shellscript
❯ brisk completion -h
Generate the autocompletion script for brisk for the specified shell.
See each sub-command's help for details on how to use the generated script.

Usage:
  brisk completion [command]

Available Commands:
  bash        Generate the autocompletion script for bash
  fish        Generate the autocompletion script for fish
  powershell  Generate the autocompletion script for powershell
  zsh         Generate the autocompletion script for zsh
```

This will output a script that you can source into your shell. You can then access completions when using the brisk command.

### brisk config

This command manages the brisk config. At present it only supports the `print` command. And will print out your current config.

### brisk login

This command will open a browser window and allow you to login to Brisk. It will then store your credentials in the credentials file. You will remain logged in until you log out by deleting the credentials file or logging in with a different account.

### brisk project

Used to manage your project.

You can use this to create a project on Brisk and initialize a brisk.json file in the current directory with the default settings for your framework and loaded with your project token and key.

```shellscript
❯ brisk project init -h
Init will create a new Brisk project in the current directory. It takes a second command for the type of project you want to create.

Usage:
  brisk project init [command]

Available Commands:
  jest        Create a new Jest project and inits a config file in the current directory
  node        Used to initialize a new Brisk Node project
  python      Used to initialize a new Brisk Python project
  rails       Used to initialize a new Brisk Rails project
  raw         Used to initialize a new Brisk project

```

### brisk update

This command will update brisk to the latest version. It will download the latest version and replace the current binary. It will then exit.

### brisk version

This command will output the current version of brisk.

### brisk workers

Use this command to interact with your Brisk workers. At present you are able to clear your workers (and force a rebuild on the next run).

```shellscript
❯ brisk workers clear
```

Clears the workers for the current project.
