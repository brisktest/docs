---
title: Using the CLI
description: Using the Command Line Interface CLI version of Brisk
---

Brisk communicates with our servers using a Command Line Interface (CLI). There are two main ways to run Brisk, one locally from your developer machine (to run your test suite per-commit) and the other as part of your CI/CD pipeline. In this article we will cover the CLI usage from your local terminal. For more information on how to use Brisk in your CI/CD pipeline see [Using Brisk in CI/CD](/docs/using-brisk-in-ci-cd).

---

## The CLI for Brisk

### Installation

If you need to install the CLI locally, check out the [installation instructions](/docs/installation).

### Commands, Flags and Environment Variables

The CLI is a well behaved command line tool with a number of commands. It accepts flags and ENV variables to configure the behavior of the tool.

The CLI is coded in Go and is available as a binary for Linux, OSX and Windows. The Windows version is currently experimental and not widely available, please contact us if you would like access to the latest Windows build.

## Overview

In this section we will deal with using Brisk locally i.e. using it as a pre-commit test run accelerator.

Brisks main purpose is to run your test suite faster. It does this by running your tests in parallel distributed over many workers. The CLI is used to configure Brisk and to run your tests remotely.

### Configuration

Brisk is configured using a JSON file. The default location for this file is `./brisk.json`. You can specify a different location using the `--config` flag or the `BRISK_PROJECT_CONFIG_FILE` environment variable.






