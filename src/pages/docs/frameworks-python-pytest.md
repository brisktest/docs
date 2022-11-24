---
title: Frameworks - Python - Pytest
description: Specific documentation for Python, Pytest and Brisk
---

# Pytest

Pytest is a popular testing framework for Python projects.

## Pytest Configuration

## Complete Example

Here is a simple example using Pytest. We use the [pytest-split](https://pypi.org/project/pytest-split/) library to split the tests. It takes a value for the current node and the number of total nodes and intelligently splits the tests using test duration information. Because we are using this library we have set the listTestCommand entry to a nop.

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

You'll probably want to add a `rebuildFilePaths` entry to your brisk.json file. This will tell Brisk to rebuild your project when any of the files in the list change. This is useful if you have a requirements.txt file or a setup.py file that changes often. Here is an example:

```json
{
  "rebuildFilePaths": ["requirements.txt", "setup.py"]
}
```
