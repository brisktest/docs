---
title: Installation
description: Installing the Command Line Interface CLI version of Brisk
---

Brisk communicates with our servers using a Command Line Interface (CLI). There are two main ways to run Brisk, one locally from your developer machine (to run your test suite per-commit) and the other as part of your CI/CD pipeline. So there are two main installation methods. The first is a manual one using your web browser and the second a more automated one suitable for use in your CI/CD automation.

---

## Download Using Web Browser

Navigate to <https://brisktest.com/download> and select the relevant binary for your architecture and OS. Linux and OSX binaries are available. Windows builds are currently experimental, let us know if you would like access to the latest build.

### Adding the binary to the path

In order for the binary to be available from the command line you must add the binary to your path. The simplest way to do that is by moving it to /usr/local/bin directory.

### Updating the Binary

Once you have installed the binary on your system, if you need to update, running

```shell
brisk update
```

updates to the latest version.

## Install on CI/CD pipelines

### Github Actions

For a Github action the easiest way to install Brisk is using the custom action which is available in the Github marketplace.

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
          config_file: 'brisk-ci.json'
      - name: Run Brisk
        run: brisk
```

### Direct download with curl

For other pipelines you can download and install brisk as part of the setup.

```shell
curl "https://update.brisktest.com/brisk/latest/linux-amd64/brisk" -o brisk
chmod +x brisk
```

### Bitbucket Example

Here is a complete example from a Bitbucket Pipeline (for a Python project)

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
          - export BRISK_APITOKEN="${BRISK_APITOKEN}"
          - export BRISK_APIKEY="${BRISK_APIKEY}"
          - export BRISK_CI=true
          - ./brisk
```
