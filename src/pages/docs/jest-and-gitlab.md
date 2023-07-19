---
title: Gitlab CI/CD with Jest
description: A quick start guide to running Jest tests in Gitlab CI/CD with Brisk
---



## Prerequisites

- A Gitlab account
- A Gitlab project with a Jest test suite
- A Brisk account (sign up [here](https://brisktest.com/signup))
- Confirm your email address (you will have received an email from us when you signed up)

## Create a Brisk Project

There are two ways to do this process. You can either create a project from the Brisk dashboard or you can create a project from the command line. We'll cover both methods here.

The CLI method is the easiest and quickest way to get started, however the CLI only supports Linux and OSX at the moment. For Windows users, you can create a project from the dashboard.

### Create a Brisk Project from the Command Line

- Install the Brisk CLI (see [Installation](/docs/installation))
- Navigate to your project directory
- Log in to your Brisk account from the command line by running `brisk login`
- Run `brisk project init jest`
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

## Add your Brisk API Key to Gitlab

- Go to your Gitlab project
- Click **Settings**
- Click **CI/CD**
- Click **Variables**
- Click **Add Variable**
- Enter `BRISK_APIKEY` in the **Key** field
- Enter your Brisk API Key in the **Value** field
- Click **Add Variable**

## Add your Brisk API Token to Gitlab

- Go to your Gitlab project
- Click **Settings**
- Click **CI/CD**
- Click **Variables**
- Click **Add Variable**
- Enter `BRISK_APITOKEN` in the **Key** field
- Enter your Brisk API Token in the **Value** field
- Click **Add Variable**

## Create a Brisk Config File

### With the CLI

If you followed the CLI method above you will have a brisk.json file in your project directory. It will contain default settings that you can edit in the next step.

### With the Dashboard

If you created your project from the dashboard you will need to create a config file.

- Create a file called `brisk.json` in the root of your project
- Add the following to the file making sure to replace YOUR_PROJECT_TOKEN with the token for your project (you can find this in the project settings in the dashboard) or by running the CLI command `brisk project list`:



```json
{
  "commands": [
    {
      "commandline": "FORCE_COLOR=true yarn test  --json "
    }
  ],
  "buildCommands": [
    {
      "commandline": "nvm alias default 16.7 && nvm use default"
    },
    {
      "commandline": "yarn"
    }
  ],
  "concurrency": 60,
  "excludedFromSync": ["log/", ".git/", "node_modules", ".rvm"],
  "excludedFromWatch": ["log/", ".git/", "node_modules"],
  "projectToken": "YOUR_PROJECT_TOKEN",
  "framework": "Jest",
  "listTestCommand": "yarn -s test --listTests --json",
  "environment": {
    "MY_ENV": "empty"
  },
  "image": "node-lts",
  "rebuildFilePaths": ["package.json"]
}
```


## Add a Brisk Test Step to your Gitlab CI/CD Pipeline

- Go to your Gitlab project
- Click **CI/CD**
- Click **Editor**
- Add the following to your `.gitlab-ci.yml` file (or your gitlab workflow file):

```yaml
brisk-job:
  variables:
    BRISK_CI: "true"
  stage: test
  script:
    - apt-get update
    - apt-get install -y rsync
    - curl "https://update.brisktest.com/brisk/latest/linux-amd64/brisk" -o brisk
    - chmod +x brisk
    - ./brisk
```


## Run your Gitlab CI/CD Pipeline

Your Gitlab CI/CD pipeline will now run your tests in Brisk. You can view the results in the Brisk dashboard and Brisk will automatically update your Gitlab pipeline with the results.

## Further Help

If you run into any errors or need help getting set up, please contact us at [support@brisktest.com](mailto:support@brisktest.com) and we'll be happy to help.
