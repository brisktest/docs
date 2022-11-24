---
title: Typical CLI Workflow
description: Typical CLI workflow for Brisk
---

## Watch Mode

Watch mode is a feature of Brisk that allows you to run your tests whenever you make changes to a file. This is useful for when you are developing and want to run your tests as you make changes. It is the default mode for Brisk.

Brisk will watch the files in the current directory (excluding any specified in the config file). Whenever a change is made it will sync the changes and then run all of the tests.

Once the initial environment is setup, Brisk is designed to be fast enough to run tests in seconds so you should see the test by the time you switch to you terminal.

## For Teams

It can be useful for teams to use Environment variables to specify Project Tokens and Api Keys. This allows you to share the same config file across the team and not have to worry about committing secrets to the repo.
