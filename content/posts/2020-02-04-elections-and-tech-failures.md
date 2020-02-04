---
slug-title: elections-and-tech-failures
date: 2020-02-04T06:12:22-06:00
draft: false
title: "Elections, tech, and usability"
subtitle: Don't blame the users (or, in this case, the vendor)
images: ["https://upload.wikimedia.org/wikipedia/commons/9/99/Cardboard_ballot_box_-_Smithsonian.jpg"]
---

As I read this morning's news about the fiasco at the Iowa caucuses, it felt like *deja vu*.

During the 2008 primary election, one precinct in the District of Columbia posted results that showed more voters having cast ballots than the total number of registered voters in that precinct. Shortly thereafter, those votes disappeared. These "phantom votes" were scandalous, and the DC Council promptly established a special committee to investigate the cause of those phantom votes and other issues during that election. And, as the Chief of Staff to the chair of that new committee, elections administration suddenly became a major part of my professional life.

One of the lessons from that time was the appalling nature of the excuse for the phantom votes. At the time (it was later disproved), the company that produced the voting machines claimed that static electricity caused the phantom votes. Static. Electricity. Ridiculous. So, anyway, the vendor quickly exonerated itself claiming that it was "not a problem with [the company's] software or hardware [but rather] a matter of human interaction with a mechanical device ... and a cartridge with data, combined with a process issue in the [Board of Elections and Ethics] not thoroughly reviewing their reports before releasing to the media."

What [we learned](http://dcwatch.com/govern/boee081008.htm#Preliminary%20Findings), though, was that (a) this explanation was wrong (it was, in fact, a software issue that led to the failure); and (b) that humans were blamed for the app's inadequacies. As the committee found: "[w]ithout warnings, too much reliance is placed upon the individual judgments of Board members to determine whether [the] system is working properly." [Eventually, we put in place very non-technical solutions to restore confidence in the elections: robust post-election manual auditing, voter-verifiable paper trails, early voting to reduce pressure on polling places on election day, and more.]

My takeaway then: *vendors blamed the user when, in fact, the software failed*.

So, as I read this morning's news from Iowa, my blood pressure rose as I read [this Washington Post report](https://www.washingtonpost.com/politics/iowa-caucuses-2020-live-updates/2020/02/04/23561bd6-4707-11ea-bc78-8a18f7afcee7_story.html):

> "We had had so many complaints about the app that we started telling our chairs that if they were having problems with the app then you should call in the results," Bagniewski said.

> The state party did not provide any training on how to use the app, he said, adding that while the caucus trainings are done at the county level, the app itself came from the state level.

> Local officials had trouble downloading the app, getting a PIN to log in, and activating it even when they had a PIN, Bagniewski said.

People who use software should not have problems like this. It is not the users' fault that they have trouble downloading the app, logging into the app, activating the app, or (apparently) using the app itself. This is not the users' fault.

As Dana Chisnell, perhaps one of the most knowledgeable people about elections administration and technology, teaches:

{{< tweet 1224664894244560896 >}}

And now, there already appears to [be scrutiny into Shadow](https://venturebeat.com/2020/02/04/mysterious-startup-shadow-under-scrutiny-after-iowa-caucus-meltdown/), the vendor who built the app. Fine and good. But not enough. Why? Because software fails all the time, and the only real way to build useful, resilient software is to test it, over and over and over again. In elections, you don't have that many repetitions, it's a much slower feedback cycle. It's intensely hard.

If I don't want to blame the users, I also don't want to be quick to blame the vendor here, either.

And then [there is this](https://www.nytimes.com/2020/02/03/us/politics/iowa-caucuses.html). Apparently, the app was "hastily put together over the past two months." TWO MONTHS. Worse, apparently, party officials "only decided to use the app to report results after a previous party proposal — which entailed having caucus participants call in their votes over the phone — was scrapped, on the advice of Democratic National Committee officials." Party officials wanted a shiny app, and rejected a more sensible "low-tech" solution.

This is just absurd. To future election administrators, party officials, and anyone else who gives a damn about government and technology: *please please please don't insist on a technology solution, spend too little time or money investing in that solution, fail to test the technology, and then blame the user. It ends badly.*

Let us eventually learn from mistakes, and use this as an opportunity to improve.
