---
slug-title: better-rss-feed-content
date: 2022-11-30T10:27:25-06:00
draft: false
title: "Better RSS Feed Content"
subtitle: Using `<!--more-->`
description: A TIL entry about how to improve the look and feel of posts using Hugo's default RSS feed.
images: ["https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif"]
categories: ["til"]
tags: ["blogging"]
---

{{< giphy id="3og0IMJcSI8p6hYQXS" >}}

I rely heavily on RSS feeds and I published my own content here using an [RSS feed](https://vdavez.com/posts/index.xml). But, I noticed that my RSS reader wasn't formatting my posts very well. 

TIL how to fix that using Hugo's [content summaries](https://gohugo.io/content-management/summaries/).

Bottom line: mark up your content with a "<\!\-\-more\-\->" tag.

<!--more-->
---

To illustrate the problem a bit, I have copied the RSS's feed XML from the paragraphs above to demonstrate what it looked like before and after I made the adjustment.

Before...

```xml
<description>
I rely heavily on RSS feeds and I published my own content here using an RSS feed. But, I noticed that my RSS reader wasn&rsquo;t formatting my posts very well. TIL how to fix that using Hugo&rsquo;s content summaries. Bottom line: mark up your content with a &ldquo;&lt;!--more--&gt;&rdquo; tag. via GIPHY </description>
```

and after...

```xml
<description>
<p>I rely heavily on RSS feeds and I published my own content here using an <a href="https://vdavez.com/posts/index.xml">RSS feed</a>. But, I noticed that my RSS reader wasn&rsquo;t formatting my posts very well.</p> <p>TIL how to fix that using Hugo&rsquo;s <a href="https://gohugo.io/content-management/summaries/">content summaries</a>.</p> <p>Bottom line: mark up your content with a &ldquo;&lt;!--more--&gt;&rdquo; tag.</p> <div class='grid justify-center '><iframe src='https://giphy.com/embed/3og0IMJcSI8p6hYQXS' width="480" height="355" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href='https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif'>via GIPHY</a></p></div></description>
```

As you can see, in the first snippet, there are no links and no paragraph breaks. Everything is just plain text. But in the second snippet, it's complete html.

And all you need to do is add that "<\!\-\-more\-\->" tag to get it done. 

That's because the default [Hugo RSS feed template](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/rss.xml#L35) relies on the `.Summary` variable. And Hugo's default is to "automatically take[] the first 70 words of your content as its summary and store[] it into the `.Summary` page variable for use in your templates."

But, the docs also say this:

> Alternatively, you may add the "<\!\-\-more\-\-\>" summary divider where you want to split the article.
> Content that comes before the summary divider will be used as that content’s summary and stored in the `.Summary` page variable with all HTML formatting intact.

That's right! If you drop in that summary divider, all of the html is preserved.

Which means that, out of the box, you get prettier RSS.