---
title: Twitter timeline with embedded replies
date: 2022-11-17
description: "A TIL entry about using how to update a twitter timeline to include replies"
images: ["https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif"]
draft: false
---

Today, one of my colleagues reached out because the [twitter embed](https://help.twitter.com/en/using-twitter/embed-twitter-feed) on their website only showed tweets, not replies. I helped build the website, so I offered to figure out how to fix that.

To use a twitter embed, you simply include an \<a\> tag with the class "twitter-timeline" and import a bit of javascript. That javascript will then replace the tag with all of the necessary tweet data from the twitter API and apply some styles. It's pretty slick.

But, by default, the javascript doesn't allow for replies. So I dug a bit into [the documentation](https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference
).

There, I learned that you can set a "data-* attribute" to enable replies. It's pretty simple:

```html {linenos=false,hl_lines=3,linenostart=3}
<a 
    class="twitter-timeline"
    data-show-replies=true
    href="https://twitter.com/${USERNAME}"
>
    Tweets by ${username}
</a>
<script async charset="utf-8"
    src="https://platform.twitter.com/widgets.js" 
>
</script>
```

Just like that, with the addition of that highlighted line, your twitter replies show up in your timeline!

## Bonus: "Do Not Track" parameter

As I perused the documentation, I noticed another parameter called `dnt`, which is short for "Do Not Track":

> When set to true, the timeline and its embedded page on your site are not used for purposes that include personalized suggestions and personalized ads.

I could spill ink here about default rules, ethics, and user privacy, but instead I'll simply note: `dnt` defaults to "false," which means that, you are enabling twitter to track people's usage on your site by default. So, I flipped that setting the data attribute to "true."

```html {linenos=false,hl_lines=["3-4"],linenostart=3}
<a 
    class="twitter-timeline"
    data-show-replies=true 
    data-dnt=true
    href="https://twitter.com/${USERNAME}"
>
    Tweets by ${username}
</a>
<script async charset="utf-8"
    src="https://platform.twitter.com/widgets.js" 
>
</script>
```
