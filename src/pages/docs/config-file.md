---
title: Config File
description: The documentation for the project file used to configure Brisk Projects
---

This page covers the brisk.json config file. It is used to configure Brisk projects. It contains information identifying the project and how to run the tests.

---

## Build Commands

Build commands are the commands that must be run to build the project. This is usually a build command such as `npm install` or `yarn install`. The build commands are run in the order they are specified in the config file. They will be run once per worker on the first run. If they succeed they will not be run again.

They are used to set up the test environment and to install any dependencies.

Here is are some example build commands. In this rails project we use docker-compose to run our db ,we then run yarn install to install javascript dependencies. We run bundle install to install our gems and finally we prepare the test db.

```json
 "buildCommands": [
    {
      "commandline": "docker-compose build --parallel ",
    },
    {
      "commandline": "docker-compose up -d db ",
    },
    {
      "commandline": "yarn install",
    },
    {
      "commandline": "bundle install",
    },
    {
      "commandline": " bundle exec rake db:test:prepare",
    }
  ],
```


{% callout title="Changing Build Commands" %}
Although we make a best effort to detect changes to build commands, in certain circumstances (for example in CI mode) when you change build commands you may need to clear your workers for a project. Run the command 
```shell
brisk workers clear
```
to clear the workers for the current project.
{% /callout %}
## Test Commands

Test commands are the commands that must be run to run the tests. This is usually a test command such as `npm test` or `yarn test`. The test commands are run in the order they are specified in the config file.

We will pass a list of files to the test command on each worker.

This example runs rspec.

```json
  "commands": [
    {
      "commandline": "rspec --format progress --format json",
    }
  ],
```

A python example using pytest and the pytest-split plugin might be

```json
  "commands": [
    {
      "commandline": "pytest --suppress-no-test-exit-code --splits $BRISK_NODE_TOTAL --group $((BRISK_NODE_INDEX+1))",
```

This example uses the BRISK_NODE_TOTAL and BRISK_NODE_INDEX runtime ENV vars to split the tests.

## Concurrency

Concurrency is the number of workers to use to run your tests. On initial project creation it will be set to 1 but once you have configured your tests you can increase it to run your tests faster. It is limited to the amount of concurrency you have available for the project with 60 workers being the maximum.

Sometimes the allocated amount of workers will differ this setting. For high concurrency we make a best effort to allocate the number of workers. If some workers are down or otherwise unavailable we will prioritize running your tests over assigning new workers.

```json
  "concurrency": 60,
```

## Excluded From Sync

This specifies what files and directories should be excluded from the sync. It's best to not sync things like node_modules or other packages, because they are often built specifically for the target OS and Architecture especially when local extensions are compiled for various libraries.

```json
"excludedFromSync": ["log/", ".git/","node_modules/"]
```

## Excluded From Watch

This specifies what to not watch in watch mode. So any files in these directories will not trigger a test run if they are changed.

```json
"excludedFromWatch": ["log/", ".git/",  "node_modules", "tmp/"]
```

## Environment

This is where you pass any Environment vars that you want to make available to your tests as they run on the workers. They are also available when build commands are being run.

```json
 "environment": {
    "RAILS_ENV": "test",
    "DATABASE_URL": "postgres://postgres:example@0.0.0.0:5432",
  },
```

## Project Token

This identifies the project, it is auto generated on project init.

```json
  "projectToken": "iPOs7KLDK4",
```

## Api Key

The Api Key is used with the Project Token to grant access to the Project. Again it is auto generated on project init.

```json
  "apiKey": "UJSKsko8OphICw7O8S",
```

## Api Endpoint

Used to point the CLI at an alternate Api Backend.

```json
  "apiEndpoint": "api.brisktest.com:50052",
```

## listTestCommand

The listTestCommand is used to specify the command that will list the tests to split. This is used to split the tests across the workers. It is run once per run on the first worker. The output of this command should be a json array. Certain setups don't need a listTestCommand - for example if you are splitting using the BRISK_NODE_TOTAL and BRISK_NODE_INDEX environment variables - and it can be left empty in those situations.

```json
  "listTestCommand": " bundle exec rspec --dry-run --format json",
```

## framework

Specifies the framework that the project is using.

Current permitted values are "Jest", "Rspec", "Cypress", "Rails", "Python" or "Raw"

```json
"framework": "Rspec",
```

## image

Specifies the docker image to use for the workers. Currently supported images are "rails", "node-lts" and "python". Contact us if you need help creating a custom image.

```json
  "image": "rails",
```

## rebuildFilePaths

Specifies the files that should trigger a rebuild of the project. If any of these files change the current workers will be discarded, new workers will be assigned and the all of the build commands will run again.

```json
  "rebuildFilePaths": ["Gemfile", "Gemfile.lock", "package.json", "yarn.lock"],
```
