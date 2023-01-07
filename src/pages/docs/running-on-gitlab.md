---
title: Running On Gitlab
description: This is a guide to running Brisk using Gitlab CI/CD Pipelines
---

Gitlab is a convenient place to run your CI/CD pipeline. You can combine the massive concurrency of Brisk with the convenience of Gitlab.

---

## Bitbucket

### Complete Example

The following is a complete example using Gitlab CI/CD pipeline.

Save this as .gitlab-ci.yml in your repo and configure any other required settings.

```yml
stages:         
  - test

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

### Configuration

- BRISK_CI=true
  This formats the output correctly for a CI environment and disables the interactive and watch mode.

- BRISK_APITOKEN
- BRISK_APIKEY

These are your Brisk API credentials. You should configure them as repository variables in Gitlab. This keeps them secret and ensures you don't commit them to your repo.

You can find these in your Brisk account settings or in your local credentials file which defaults to ~/.config/brisk/config.toml.

You can also pass a configuration file to Brisk using the config_file parameter. This is useful if you want to use a different configuration file for your CI/CD pipeline. You can pass this in the variables section. 

You can also use any of the environment variables for the CLI which are listed in [Environment Variables](/docs/cli-environment-variables).
