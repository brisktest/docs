---
title: CLI Environment Variables
description: The Environment Variables available to the Brisk CLI
---

There are a number of environment variables that can be used to configure the Brisk CLI. These are useful for configuring the CLI in CI/CD pipelines as well as for local development.

---

## Environment Variables

| Variable                     | Description                                                                                                                                                                                                                            |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BRISK_PROJECTTOKEN           | The project token (overrides the contents of brisk.json)                                                                                                                                                                               |
| BRISK_APITOKEN               | The API token to use for the project (overrides the contents of brisk.json)                                                                                                                                                            |
| BRISK_CONCURRENCY            | The Concurrency to us for the run. This is limited by the max concurrency for the project. (overrides the contents of brisk.json)                                                                                                      |
| BRISK_TELEMETRY_ENABLED      | Whether to enable telemetry. Defaults to true.                                                                                                                                                                                         |
| BRISK_CI                     | Whether to run in CI mode. Defaults to false.                                                                                                                                                                                          |
| BRISK_PROJECT_CONFIG_FILE    | The path to the project config file. Defaults to ./brisk.json.                                                                                                                                                                         |
| BRISK_CREDENTIALS_CONFIG     | The path to the credentials config file. Defaults to $HOME/.config/brisk/config.toml.                                                                                                                                                  |
| BRISK_NO_TERM                | Whether to assume a terminal UI. Defaults to false.                                                                                                                                                                                    |
| BRISK_WATCH                  | Whether to watch for changes. Defaults to true.                                                                                                                                                                                        |
| BRISK_PROJECT_IN_USE_TIMEOUT | When a project is accessed simultaneously how long should we wait for a project to become available before trying again. Defaults to 30 seconds. It's recommended to use different projects for different team mates and environments. |
| BRISK_PRINT_KEYS             | Whether to print short lived keys to log in Debug mode. Defaults to true.                                                                                                                                                              |
| BRISK_NOREBUILD              | Never rebuild the project if we detect it needs to be rebuilt. Defaults to false.                                                                                                                                                      |
| BRISK_HASHFILEPATH           | The path to the hash file. Defaults to .rebuild_hash.                                                                                                                                                                                  |
| BRISK_REBUILDWATCHPATHS      | A comma separated list of paths to watch for changes. (overrides the contents of brisk.json)                                                                                                                                           |
| BRISK_APIENDPOINT            | The API endpoint to use. Defaults to api.brisktest.com:50052
| BRISK_LOG_LEVEL              | The log level to use. Defaults to error, possible values are debug, info, warning, error, dpanic, panic, and fatal.
| BRISK_LOG_FILE              | The log file to use. Defaults to /tmp/brisk.log
| BRISK_AFFINITY_ENV_VAR              | An environment variable that links similar test runs in this project. Usually this env var contains the current branch name e.g. BRISK_AFFINITY_ENV_VAR=CI_COMMIT_REF_NAME (in Gitlab)
| BRISK_LIST_TESTS_COMMAND              | An environment variable that overrides the list test command in the brisk.json file for the current project.
| BRISK_TEST_COMMAND              | An environment variable that overrides the test command in the brisk.json file for the current project.

| BRISK_FILES | An environment variable that can be used to give a list of test files that should be run instead of using the list test command, can also be passed as a config option or used with the -f flag
| BRISK_INTERACTIVE | An environment variable that can be used to run the CLI in interactive mode instead of the default non-interactive mode, allows you to rerun, watch etc.
