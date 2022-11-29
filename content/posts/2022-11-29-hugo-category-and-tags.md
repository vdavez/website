---
slug-title: hugo-categories-and-tags
date: 2022-11-29T12:08:17-06:00
draft: false
title: Hugo Categories and Tags
subtitle: A better way to organize this site
description: zvenyach.com | How to use tags for hugo sites
images: ["https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif"]
categories: ["til"]
tags: ["blogging"]
---

Most content-management systems allow for some kind of content tagging. Until recently, though, I was creating "TILs" as a separate content type. This was fine, I guess, but it was sort of clunky too in its own way.

But, then I discovered hugo's [taxonomies](https://gohugo.io/content-management/taxonomies/). tl;dr — hugo ships "tags" and "categories" out of the box for posts.

So, I moved all of my TILs into the `posts` folder, added `categories = ["til"]` to the front matter and :boom: I have the ability to just have my TILs in my blog posts. 

Two observations: 
1. I used categories for TILs instead of tags because then I can tag the TILs (like I have here: "blogging") and can group TILs (or posts!) based on those tags.
2. I also had to add a `slug-title` to my front matter for the TILs because that's how I have posts configured. But that was easy enough.

I'm pretty pleased with the new, improved setup!