---
title: Getting Started with Teams
description: Tips for using Brisk with your team.
---

Brisk is designed to be used by teams. This page contains tips for setting up your team to use Brisk.

# Team Setup

It is usually ok to share project configuration between teammates on a project. However, it is important to keep your credentials private. Don't commit credentials to source control. Instead, use environment variables to store your credentials. For example, if you are using a project token, you can set the project token as an environment variable. This way, you can share your configuration file with your team, but keep your credentials private.

# Separate Projects

If you are working on a codebase with multiple team members and are accessing the CLI locally it is advisable to use separate projects. This is to prevent contention when accessing the workers and to avoid issues related syncing from multiple different sources.

For CI/CD pipelines it is advisable to create a separate project for each stage in the pipeline (e.g. staging, production etc).

# Environment Variables

For a complete list of environment variables that Brisk supports, see [Environment Variables](/docs/environment-variables).
