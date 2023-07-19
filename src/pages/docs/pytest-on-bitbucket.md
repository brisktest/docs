---
title: Bitbucket & Python with Pytest
description: A quick start guide to running Brisk on Bitbucket with Python and Pytest
---

## Prerequisites

- A Bitbucket account
- A Bitbucket project with a Python test suite
- A Brisk account (sign up [here](https://brisktest.com/signup))
- Confirm your email address (you will have received an email from us when you signed up)

## Create a Brisk Project

There are two ways to do this process. You can either create a project from the Brisk dashboard or you can create a project from the command line. We'll cover both methods here.

The CLI method is the easiest and quickest way to get started, however the CLI only supports Linux and OSX at the moment. For Windows users, you can create a project from the dashboard.

### Create a Brisk Project from the Command Line

- Install the Brisk CLI (see [Installation](/docs/installation))
- Navigate to your project directory
- Log in to your Brisk account from the command line by running `brisk login`
- Run `brisk project init python`
- This will create a project and add a `brisk.json` file in your project directory

### Create a Brisk Project from the Dashboard

- Log in to your Brisk account
- Click the **New Project** button
- Give your project a name
- Select Python from the dropdown
- Click **Create Project**

## Get your Brisk API Key and Token

### Using the CLI

If you created a project using the CLI you can get your API key and Token from the config file which defaults to ".config/brisk/config.toml" in your home directory. The keys you are looking for are "apikey" and "apitoken".

### Using the Dashboard

- Click on your name/icon in the top right corner
- Click **Account Settings**
- Click **API Keys**
- Click **Download API Key** (you can only do this one time)
- Save the file somewhere safe

## Add your Brisk API Key to Bitbucket

- Go to your Bitbucket project
- Click **Settings**
- Click **Pipelines**
- Click **Repository variables**
- Click **Add variable**
- Enter `BRISK_APIKEY` in the **Key** field
- Enter your Brisk API Key in the **Value** field
- Click **Add**

## Add your Brisk Token to Bitbucket

- Go to your Bitbucket project
- Click **Settings**
- Click **Pipelines**
- Click **Repository variables**
- Click **Add variable**
- Enter `BRISK_APITOKEN` in the **Key** field
- Enter your Brisk API Token in the **Value** field
- Click **Add**

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
      "commandline": "pytest --suppress-no-test-exit-code --splits $BRISK_NODE_TOTAL --group $((BRISK_NODE_INDEX+1))"
    }
  ],
  "buildCommands": [
    {
      "commandline": "pip install pytest-custom_exit_code"
    }
  ],
  "concurrency": 5,
  "excludedFromSync": ["log/", ".git/", "node_modules", ".rvm"],
  "excludedFromWatch": ["log/", ".git/", "node_modules"],
  "projectToken": "PROJECT_TOKEN",
  "framework": "Python",
  "listTestCommand": "echo 'list tests nop",
  "image": "python",
  "rebuildFilePaths": null
}

```

## Add a Brisk Pipeline

- Go to your Bitbucket project
- Create a Pipeline file using the following as a template:

```yaml
pipelines:
  default:
    - step:
        name: Run API tests
        script:
          - apt-get update
          - apt-get install -y rsync
          - curl "https://update.brisktest.com/brisk/latest/linux-amd64/brisk" -o brisk
          - chmod +x brisk
          - pip install .
          - export BRISK_APITOKEN="${BRISK_APITOKEN}"
          - export BRISK_APIKEY="${BRISK_APIKEY}"
          - export BRISK_CI=true
          - ./brisk
```

## That's it!

You should now be able to run your tests on Brisk by pushing to your Bitbucket repository.

## Further Help

If you need further help, please email us at [support@brisktest.com](mailto:support@brisktest.com)




