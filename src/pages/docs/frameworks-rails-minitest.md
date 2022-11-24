---
title: Frameworks - Rails - Minitest
description: Specific documentation for Rails Minitest and Brisk
---

# Minitest

Minitest is a popular testing framework for Ruby projects which comes as the default testing framework with Rails.

## Minitest Configuration

## Complete Example

This is an example using the rails source code. It runs all of the activerecord unit tests.

```json
{
  "listTestCommand": "./listTests.sh",
  "commands": [
    {
      "commandline": "cd activerecord && bin/test "
    }
  ],
  "preSyncCommands": [],
  "buildCommands": [
    {
      "commandline": "bundle install"
    }
  ],

  "excludedFromSync": ["log/", ".git/", "node_modules", ".rvm"],
  "excludedFromWatch": ["log/", ".git/", "node_modules"],

  "projectToken": "PROJECT_TOKEN",
  "framework": "Rails",
  "image": "rails"
}
```

### listTests.sh

For completeness, here is the listTests.sh file that is used in the example above. It is a simple script that lists all the tests in the activerecord directory.

```bash
cd activerecord && ls test/**/*_test.rb | jq -R -s -c 'split("\n")[:-1]'
```
