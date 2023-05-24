# Homepage for Nexusia Z

This is a temporary homepage until we decide what framework to use.

It uses TailwindCSS and Astro for the build.

It should get deployed to https://nexusia-z.github.io/ when the `main` branch is updated.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## How to add a blog post

Create a new markdown file in `src/pages/blog/` with the following format:

```markdown
---
layout: ../../layouts/BlogPage.astro
title: Your title
author: Your name
description: |
  Your description
date: May 24, 2023
---

This is **markdown** content for your blog post.
```

The content between the two `---` is the metadata for the blog post in yaml. The rest is the content of the blog post.

You can put the entire description in one line if you want, but the pipe symbol (`|`) allows you to put it on multiple lines. Make sure to indent the text though.

Push your changes to your fork and create a pull request to the `main` branch of this repository.