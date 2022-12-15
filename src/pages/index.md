---
title: Getting started
pageTitle: Brisk Docs - Supercharge Your Tests
description: Run your tests in seconds not hours. Unleash the the speed of your test suite.
---

Learn how to get Brisk set up in your project in under 5 minutes {% .lead %}

{% quick-links %}

{% quick-link title="Getting Started" icon="installation" href="/#quick-start" description="Step-by-step guides to setting up your project and getting to your first pass." /%}

{% quick-link title="Integrate in CI/CD Pipeline" icon="presets" href="/docs/running-on-github-actions" description="Learn how you can use Brisk to run your CI tests." /%}

{% quick-link title="Frameworks" icon="plugins" href="/docs/frameworks-jest" description="See how to setup Brisk with your framework of choice." /%}

{% quick-link title="CLI reference" icon="theming" href="/docs/using-the-cli" description="Detailed instructions for configuring the CLI and your project brisk.json file." /%}

{% /quick-links %}

With Brisk you'll be harnessing the power of massive concurrency to run your test suite in seconds. Find out how to run Brisk locally for super fast pre-commit tests and/or how to run Brisk in CI mode in your Continuous Integration and Deployment Pipeline.

---

# First Use Guide

## Quick start

Follow this guide to set up Brisk for your project.

## Install the CLI

Download the relevant CLI binary for your architecture from the [downloads](https://brisktest.com/download) page. Then move it to your path.

## Sign up for an Account

If you haven't done so already, now would be a good time to create an account on [brisktest](https://brisktest.com). Don't forget to confirm the email to verify your account.

## Sign in with the CLI

```shell
brisk login
```

Running brisk login will open a web browser and log you in on the site. This saves your credentials to ~/.config/brisk/config.toml. You will remain logged in until you explicitly log out.

---

## Your First Project

In the root or the project directory running

```shell
brisk project init rails|python|node
```

will create a project on brisktest.com and generate a default brisk.json file in the current directory with the required project tokens and keys.
You can add this brisk.json file to your .gitignore , later when we run this in CI we will pass all secrets using env vars.

## Changing the project file

A straightforward project may run correctly using a default project file, but many users will need to edit the brisk.json file with custom configuration for their project.

{% callout title="Configuring Your Project" %}
To see more info on editing the brisk.json file, and to see specific examples for different frameworks, see framework sections in the sidebar on the left.
{% /callout %}

## Build Commands

The build commands are sequence of commands that need to be run to set up your test environment. They are the things you do once in your local environment like setting up your database, choosing a node or ruby version, installing packages etc. They are run one time per worker, subsequent test runs don't run the build commands.

## Environment

Often times there are environment variables that need to be set for the project to work as expected. You can pass any environment variables in the brisk.json file.

## Test List Command

The test list command is the command we run to get the filenames of all of your tests. We use this to then split the tests optimally among the many workers. Usually the default works fine,
but you may have some non-standard test configuration and if so you can edit this to include your tests. This requires a json array as input.

## Test Run command

This is the command we run to execute your tests. We will pass a list of test files to this command. Again, the default is usually fine unless you use a different test runner in which case you'll need to update this line.

---

# Running Your Tests

## Your First Run

For your first run we can run Brisk in the root directory of the project we just configured.

```shell
brisk
```

Hopefully you will see your project sync, assign a worker and run to completion.

## More Workers

The initial configuration of the projects use one worker. This is to make things easier while you get set up. Once you have a clean run you can now increase the concurrency.

You can edit the brisk.json file and change the concurrency to a number of your choosing say 20.

Then re run brisk. The first run will be slow as the build commands need to be simultaneously run on each worker. Once this run finishes hit the 'r', spacebar or enter keys to rerun the tests. It should be fast 🚀 as none of the workers needed a rebuild. You can now experiment with adding more workers to see if you can increase the speed.

# Next Steps

## CI/CD & Onboarding Teammates

Hopefully you have brisk configured from your local machine. With this setup it is trivial to share Brisk with your colleagues and to add Brisk to your CI/CD pipelines. Check out the guides on the left for more information.

# Getting help

We have dedicated support to get you to your first clean test run, we are happy to jump on a call to get you setup. We are also always available via email for any other questions or concerns. Reach out at <support@brisktest.com>.
