---
title: Pandoc and lua filters
date: 2020-11-30
description: "A TIL entry about using pandoc and lua filters to handle hugo shortcodes"
images: ["https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif"]
draft: false
---

For my work on [techprocurement.org](https://techprocurement.org), I opted to use [hugo](https://gohugo.io) and the [hugo-book](https://themes.gohugo.io/hugo-book/) theme. Initially, this proved a super useful strategy. But it created a bit of a problem for generating PDFs, specifically when using some custom [shortcodes](https://gohugo.io/content-management/shortcodes/#readout). Specifically, I planned on using [pandoc](https://pandoc.org) to manage the PDF and EPUB creation, but when processing the markdown with shortcodes, pandoc didn't understand these shortcodes.

The solution, apparently, is to use [pandoc filters](https://pandoc.org/filters.html). Because there's a python implementation, I attempted that first. But there was a [weird recursion issue](https://github.com/jgm/pandocfilters/issues/72). Fortunately, [lua filters](https://pandoc.org/lua-filters.html) didn't have that recursion issue. So, I used a lua filter.

Here's my [gist with the lua filter](https://gist.github.com/vdavez/30be043550d0cd811284b94195f98c79). The key approach, though, is to walk through each `Para` element in the file and look for text that matches the `{{</* foo bar */>}}` shortcode format and replace the text inside with the desired output.
