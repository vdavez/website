---
date: '2014-12-06T00:00:00Z'
image: https://esq.io/assets/images/Dog_food_203365.jpg
newest: false
title: Dogfooding with Jekyll
subtitle: Using the new `data_source` configuration to serve mankind
slug-title: dogfooding-with-jekyll
aliases: ['/blog/posts/dogfooding-with-jekyll/']
---

Yesterday, I learned that [Jekyll](http://jekyllrb.com/), the well-known powerful static-site generator, has a little-known feature that is kind of a big deal for open-data sites [hosted on Github](https://help.github.com/articles/using-jekyll-with-pages/).

**tl;dr: Jekyll can let you consume _and_ publish data files with the `data_source` configuration setting**

<!--break-->

{{< figure width="100%" alt="Dog food 203365" src="/images/Dog_food_203365.jpg" title="By Anne Hornyak (Flickr: From 203/365) [CC-BY-SA-2.0](http://creativecommons.org/licenses/by-sa/2.0), via Wikimedia Commons" >}}

## Working with `_data`

Just a few weeks ago, I was complaining to some friends about the [`_data` folder in Jekyll](http://jekyllrb.com/docs/datafiles/). You see, the idea of using simple, flat data files to power a website is [a smart thing to do](./posts/dumbdata/). And while Jekyll makes it easy to **consume** data from YAML, JSON, and CSV files, because Jekyll ignores folders with a leading underscore (and therefore `_data` is not published), Jekyll made it nearly impossible to **publish** the data.

For those of us who like to share our data and use Github, this meant one of two unattractive options, neither of which really worked well:

1. Publish the data twice, once in the `_data` folder and once in a separate `data` folder; or
2. Publish the data in a separate git repository, and use it a submodule.

The obvious alternative -- symlinks -- doesn't work either; because Github uses the `--safe` flag when publishing the site, symlinks are not an option for sites hosted on Github Pages.

This was an unfortunate state of affairs. Despite demands for data publishers to [eat our own dogfood](http://www.antheawatsonstrong.com/writing/2014/9/25/hey-uncle-sam-eat-your-own-dogfood), Github Pages and Jekyll could not deliver... But that was then. The future of `_data` is here!

## `data_source` to the rescue

It turns turns out, the `_data` folder is just the _default_ location for data files in Jekyll. In your `_config.yml` file, you can set a _different_ location for your data folder using the `data_source` configuration setting.

So, let's say you want to publish your data in a folder called `data`. To accomplish this, you simply need to rename the `_data` folder to be `data`, and add this line to your `_config.yml` file:

    data_source: data

That's it. Now the `data` folder is used by Jekyll to power your site _and_ is published for the world to see at a url endpoint `/data`! You have now opened up your dataset. That easy. (If you want to see it in action, check out this basic repository at <https://github.com/vzvenyach/jekyll-data-test/tree/gh-pages> with a demo published here: <http://code.esq.io/jekyll-data-test>).

_Bon appetit_!
