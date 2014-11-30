---
title: client-confidentiality-on-trello
posttitle: "Client Confidentiality on Trello?"
subtitle: "Why two-factor authentication matters for lawyers who want to use the agile tool"
date: 2014-11-29
layout: post
newest: true
---

This weekend I signed up for [Trello](trello.com). I started playing around with it, started liking it, and then I hit a snag. There's no **two-factor authentication** ("2FA"). 

As a practicing lawyer obligated to protect client confidentiality, this is a major barrier to entry. Fortunately, Trello has [announced that 2FA is on the way](https://trello.com/c/O6DrHazq/1532-two-factor-authentication). This is a great development. Read on for why this matters, especially for lawyers like me.
<!--break-->

## What is Trello?

I'd heard about Trello, which all the kids seem to be using nowadays [for agile development](http://www.tommasonervegna.com/blog/2014/1/9/10-effective-tips-for-using-trello-as-an-agile-scrum-project-management-tool), and I was intrigued by a particular public Trello board so I signed up. Then I read a recent post by [@ghelleks](https://twitter.com/ghelleks) about [using Trello and Remember the Milk](https://atechnologyjobisnoexcuse.com/2014/11/getting-things-done-with-trello-and-remember-the-milk/) and I figured I'd spend a little more time digging around.

It's a neat, deceptively simple, system. I can see why folks use it, but then I realized that it lacked 2FA support...

## What is 2FA?

At [transparency camp](http://transparencycamp.org/) last year, [Paul Schreiber](https://twitter.com/paulschreiber) led a session of security on the Internet. Among the important takeaways? **Use multi-factor authentication**.

Multi-factor authentication requires that, in order to gain access to information, you must prove to the system at least two of the following three things:

1. That you know something that only you can know (e.g., password);
2. That you possess something that only you possess or have access to (e.g., phone or email); or 
3. That you *are* something that only you can be (e.g., a fingerprint). 

The most common implementation of multi-factor authentication is 2FA, where you must provide a password and have access to your phone.

The reason this is important is that [guessing or stealing a password is not too hard](http://www.cnn.com/2014/09/02/showbiz/hacked-nude-photos-five-things/) through what's called a "brute-force attack." This is especially true if you use [easy-to-guess passwords](http://www.wired.co.uk/news/archive/2013-05/28/password-cracking). But guessing or stealing a password *and* having access to your phone at the same time *is* hard. So the likelihood of hacking is dramatically reduced when you use 2FA.

## Why does it matter that Trello doesn't support 2FA?

For some folks, privacy and confidentiality is just a smart thing. But for *lawyers*, we are [ethically obligated to maintain client confidentiality](http://www.americanbar.org/publications/gpsolo_ereport/2012/september_2012/ethics_cloud_computing_lawyers.html). This means, for example, lawyers must consider the following information before putting client information in the cloud:

> the sensitivity of the information, the likelihood of disclosure if additional safeguards are not employed, the cost of employing additional safeguards, the difficulty of implementing the safeguards, and the extent to which the safeguards adversely affect the lawyer’s ability to represent clients (e.g., by making a device or important piece of software excessively difficult to use).

In other words, using Trello is probably unwise for sensitive client information. It may not get you disbarred, but I personally won't do it. Trello can only be a plaything for me unless 2FA is available. And after hunting through the help files to find 2FA, I came up broke. Bummer.

## 2FA on the way

[One developer](https://joshldavis.com/) set up a site <https://twofactorauth.org> (source code: <https://github.com/jdavis/twofactorauth>) that keeps track of important sites that support (or don't support) 2FA:

<figure>
<a href="https://twofactorauth.org" target="blank"><img src="/assets/images/twofactorauthdotorg.png" alt="Screenshot of twofactorauth.org" width="100%"></a>
<figcaption>Screenshot of twofactorauth.org</figcaption>
</figure>

When I learned that Trello didn't support 2FA, I sent in an email asking them to support it. Then I learned that the [feature is "In Progress"](https://trello.com/c/O6DrHazq/1532-two-factor-authentication). This little feature will help lawyers have a little more assurance that their clients' confidential information is protected.

I hope Trello moves quickly on implementing 2FA. When it does, I expect it will become an important part of my workflow. I'm excited to give it a go.

And, if you're a Trello user, **especially if you're a lawyer**, [head over to Trello's Development Board and give a thumb's up to 2FA](https://trello.com/c/O6DrHazq/1532-two-factor-authentication)!