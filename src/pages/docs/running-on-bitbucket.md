---
title: Running On Bitbucket
description: This is a guide to running Brisk using Bitbucket Pipelines
---

Bitbucket is a convenient place to run your CI/CD pipeline. You can combine the massive concurrency of Brisk with the convenience of Bitbucket.

---

## Bitbucket

### Complete Example

The following is a complete example using Bitbucket pipelines.

```yml
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

### Configuration

- BRISK_CI=true
  This formats the output correctly for a CI environment and disables the interactive and watch mode.

- BRISK_APITOKEN
- BRISK_APIKEY

You can find these in your Brisk account settings or in your local credentials file which defaults to ~/.config/brisk/config.toml.

As shown in the example, you can also pass a configuration file to Brisk using the config_file parameter. This is useful if you want to use a different configuration file for your CI/CD pipeline.

You can also use any of the environment variables for the CLI which are listed in [Environment Variables](/docs/cli-environment-variables).
