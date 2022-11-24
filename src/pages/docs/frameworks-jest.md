---
title: Frameworks - Jest
description: Specific documentation for Jest and Brisk
---

# Jest

Jest is a popular testing framework for Javascript. It is used by many popular projects such as React and React Native.

## Jest Configuration

## Complete Example

This is a complete example that works for the [react codebase](https://github.com/facebook/react)

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

Make sure to replace the projectToken with your own.
