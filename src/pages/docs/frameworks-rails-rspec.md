---
title: Frameworks - Rails - RSpec
description: Specific documentation for Rails Rspec and Brisk
---

# Rspec

Rspec is a popular testing framework for Ruby projects.

## Rspec Configuration

## Complete Example

This is a complete example that configures a postgres db using docker-compose and the provided docker server.

```json
{
  "commands": [
    {
      "commandline": "rspec --format progress --format json"
    }
  ],
  "preSyncCommands": [],
  "buildCommands": [
    {
      "commandline": "docker-compose build --parallel "
    },
    {
      "commandline": "docker-compose up -d db "
    },
    {
      "commandline": "yarn install"
    },
    {
      "commandline": "bundle install"
    },

    {
      "commandline": " bundle exec rake db:test:prepare"
    }
  ],
  "excludedFromSync": ["log/", ".git/", "node_modules"],
  "excludedFromWatch": ["log/", ".git/", "node_modules", "tmp/"],
  "environment": {
    "DATABASE_URL": "postgres://postgres:example@0.0.0.0:5432",
    "RAILS_ENV": "test"
  },
  "projectToken": "YOUR_PROJECT_TOKEN",
  "listTestCommand": " bundle exec rspec --dry-run --format json",
  "framework": "Rspec",
  "image": "rails",
  "concurrency": 1
}
```

Make sure to replace the projectToken with your own.

## The Corresponding docker-compose.yml

For completeness, here is the docker-compose.yml file that is used in the example above.

```yml
version: '3.1'

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_PASSWORD: example
      POSTGRES_USERNAME: postgres
    ports:
      - '5432:5432'
```
