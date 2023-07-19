---
title: Github Actions & Rails
description: A quick start guide to running Rails tests in Github Actions with Brisk
---

## Prerequisites

- A Github account
- A Github project with a Rails test suite
- A Brisk account (sign up [here](https://brisktest.com/signup))
- Confirm your email address (you will have received an email from us when you signed up)

## Create a Brisk Project

There are two ways to do this process. You can either create a project from the Brisk dashboard or you can create a project from the command line. We'll cover both methods here.

The CLI method is the easiest and quickest way to get started, however the CLI only supports Linux and OSX at the moment. For Windows users, you can create a project from the dashboard.

### Create a Brisk Project from the Command Line

- Install the Brisk CLI (see [Installation](/docs/installation))
- Navigate to your project directory
- Log in to your Brisk account from the command line by running `brisk login`
- Run `brisk project init rails`
- This will create a project and add a `brisk.json` file in your project directory

### Create a Brisk Project from the Dashboard

- Log in to your Brisk account
- Click the **New Project** button
- Give your project a name
- Click **Create Project**

## Get your Brisk API Key and Token

### Using the CLI

If you created a project using the CLI you can get your API key and Token from the config file which defaults to ".config/brisk/config.toml" in your home directory. The keys you are looking for are "apikey" and "apitoken".

### Using the Dashboard

- Click on your name in the top right corner
- Click **Account Settings**
- Click **API Keys**
- Click **Download API Key** (you can only do this one time)
- Save the file somewhere safe

## Add your Brisk API Key to Github

- Go to your Github project
- Click **Settings**
- Click **Secrets**
- Click **New repository secret**
- Enter `BRISK_APIKEY` in the **Name** field
- Enter your Brisk API Key in the **Value** field
- Click **Add secret**

## Add your Brisk Token to Github

- Go to your Github project
- Click **Settings**
- Click **Secrets**
- Click **New repository secret**
- Enter `BRISK_APITOKEN` in the **Name** field
- Enter your Brisk API Token in the **Value** field
- Click **Add secret**

## Create a Brisk Config File

### Using the CLI

If you created a project using the CLI you can skip this step as the CLI will have created a config file for you.

### Using the Dashboard

If you created your project from the dashboard you will need to create a config file.

- Create a file called `brisk.json` in the root of your project

- Add the following to the file making sure to replace YOUR_PROJECT_TOKEN with the token for your project (you can find this in the project settings in the dashboard) or by running the CLI `command brisk project list` :

```json
{
  "commands": [
    {
      "commandline": "rspec --format progress --format json"
    }
  ],
  "preSyncCommands": [],
  "buildCommands": [
    {
      "commandline": "docker-compose build --parallel "
    },
    {
      "commandline": "docker-compose up -d db "
    },
    {
      "commandline": "yarn install"
    },
    {
      "commandline": "bundle install"
    },

    {
      "commandline": " bundle exec rake db:test:prepare"
    }
  ],
  "excludedFromSync": ["log/", ".git/", "node_modules"],
  "excludedFromWatch": ["log/", ".git/", "node_modules", "tmp/"],
  "environment": {
    "DATABASE_URL": "postgres://postgres:example@0.0.0.0:5432",
    "RAILS_ENV": "test"
  },
  "projectToken": "YOUR_PROJECT_TOKEN",
  "listTestCommand": " bundle exec rspec --dry-run --format json",
  "framework": "Rspec",
  "image": "rails",
  "concurrency": 1
}
```

This config file is for a Rails project using Rspec. If you are using a different framework or test runner you can find the config file for your project [here](/docs/frameworks). It assumes a docker compose file called `docker-compose.yml` in the root of your project. This is how we start any supporting services such as databases. If you are not using docker compose you can remove the docker commands from the "buildCommands" section.

### An example docker-compose.yml file for a Rails project

```yaml
version: "3.1"

services:
  db:
    image: postgres:12.2-alpine
    restart: always
    environment:
      POSTGRES_PASSWORD: example
      POSTGRES_USERNAME: postgres
      POSTGRES_HOST_AUTH_METHOD: trust
    ports:
      - "5432:5432"
  redis:
    image: redis:alpine
    restart: always
    ports:
      - "6379:6379"
```



## Create a Github Action

This is how to create a new Github Action for your project. If you already have a Github Action set up for your project, you can add the step below to your existing workflow.

- Go to your Github project
- Click **Actions**
- Click **New workflow**
- Click **Set up a workflow yourself**
- Copy and paste the following code into the editor giving it a suitable name

```yaml
name: Brisk CI
on: [push]
jobs:
  Brisk-CI:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository code
        uses: actions/checkout@v3
      - name: Install Brisk
        uses: brisktest/setup-brisk@v1.1
        with:
          brisk_version: 'latest'
          api_token: '${{ secrets.BRISK_APITOKEN }}'
          api_key: '${{ secrets.BRISK_APIKEY }}'
          config_file: 'brisk.json'
      - name: Run Brisk
        run: brisk

```

- Click **Start commit** and then **Commit new file**
- Click **Actions**
- Click **Brisk CI**
- Click **Run workflow**

## That's it!

You should now see your tests running in Github Actions and the results in your Brisk dashboard.

## Further Help

If you need help getting set up, please contact us at [support@brisktest.com](mailto:support@brisktest.com) and we'll be happy to help.
