---
title: Running On Github Actions
description: This is a guide to running Brisk on Github Actions
---

Github Actions is a convenient place to run your CI/CD pipeline. You can combine the massive concurrency of Brisk with the convenience of Github Actions.

---

## Github Actions

### Custom Workflow

There is a custom workflow available to install Brisk in you Github Actions pipeline. This is the easiest way to get started.

The worklow is available in the Github marketplace.

```yml
- name: Install Brisk
  uses: brisktest/setup-brisk@v1.1
```

### Complete Example

The following is a complete example using the custom workflow. Creating this file in .github/workflows/brisk-ci.yml will run Brisk on every push to your repository.

```yml
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

### Configuration

In order to pass credentials to Brisk you need to set the following secrets in your repository:

- BRISK_APITOKEN
- BRISK_APIKEY

You can find these in your Brisk account settings or in your local credentials file which defaults to ~/.config/brisk/config.toml.

As shown in the example, you can also pass a configuration file to Brisk using the config_file parameter. This is useful if you want to use a different configuration file for your CI/CD pipeline.

You can also use any of the environment variables for the CLI which are listed in [Environment Variables](/docs/cli-environment-variables).
