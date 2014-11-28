---
title: in-praise-of-commoditization
posttitle: "In Praise of Commoditization"
subtitle: 'Open source takes a village'
date: 2014-11-28
layout: post
newest: true
---

Earlier this week, Dr. Robert Read and [Eric Mill](https://konklone.com) penned an article for the [18F blog](https://18f.gsa.gov), entitled [How to Use More Open Source in Your Next Federal IT Acquisition](https://18f.gsa.gov/2014/11/26/how-to-use-more-open-source/). It's an important article for a variety of reasons. Most of it is a pitch-perfect explanation of why open-source tools are more important than ever, and why federal (and *ahem* local and state governments) should be looking for opportunities to use open-source tools.

<!--break-->

> "It's important that every Federal CIO, CTO, Architect, and Program Manager seeking to build or procure new IT projects understand that open source exists, that it can be of high quality and highly reusable, and how to use it securely."
> - Dr. Robert Read & Eric Mill 

Couldn't agree more.

But there were two aspects of the post that jumped out at me: (1) the article's definition of commodity; and (2) the impression that the maturation of open-source tools is essentially teleological. Neither aspect is essential to their argument. And I imagine that the authors might even refine their points if the post were longer. That said, dwelling on the nuances of these two points can lead to an greater understanding of *why* open source matters. 

## WAR(E): What is It Good For?

In their post, Read & Mill lead with the following unassailable observation: "[t]he Federal knowledge worker who shares responsibility for an IT project cannot escape the need to understand trends in the commoditization of information technology." 

The follow this observation with the following assertions:

> By commoditization, we mean the relentless evolution of technology: from a unique idea, to custom-built usage, to a widely used Commercial Off-The Shelf (COTS) product, into a Free Open-Source Software (FOSS) commodity. By commodity, we mean a product, function, or service that is broadly and cheaply available. It is natural for important software systems to eventually become commodities.

> The end point of this evolution is always a freely available, reliable, open source software project supported by a large, accommodating community. In other words, a broadly supported Free Open-Source Software (FOSS) project is the ultimate commoditization of a Commercial Off-The Shelf (COTS) project. FOSS is COTS, whether a firm ever offers paid support for it or not.

> As projects become more stable and widely used, they develop communities of supporters and users. These communities prevent the negative aspects of being dependent upon, or locked-in to, a single entity for support. No Federal project should be handcuffed to a tiny, unproductive development community. The best way to harness the innovative effort of a large number of people is to use a mature, commoditized project that many people are actively contributing to---and that means using open source.

<figure>
<a href="http://reactiongifs.com/?p=18327"><img src="/assets/images/yes-wait-wtf.gif" alt="Yes, Wait, WTF?" width="100%"></a>
<figcaption>"Yes, Wait, WTF?", via <a href="http://reactiongifs.com/?p=18327">Reaction GIFS</a>.</figcaption>
</figure>

Let's unpack this.

## Commoditization: A definitional quibble

At the jump, Read & Mill define a commodity as a "product, function, or service that is broadly and cheaply available." This is an intriguing definition for a few reasons.

First, it does not align with the most common meaning of the word "commodity" in that it includes services and implies that the goods are "refined," rather than raw materials. When I typically think of commodities, I think "animals, vegetable, minerals." Not, e.g., Android phones. And some commodities ain't bountiful or cheap. Think Rare-Earth Magnets. Think Gold. Think Caviar. 

Based on my reading of the post, my guess is that Read and Mill would argue that I'm describing "commoditized components" not "commodities." This might be a perfectly valid narrowing construction, but it's still not clear that the commodities are always cheap or broadly available, particularly at scale.

Moreover, under their definition, most closed-source software is a commodity. Adobe Acrobat Reader, for example, is broadly and cheaply available. But it is not a FOSS commodity. And it is unlikely to "evolve into" a FOSS commodity. 

Ultimately, their definition probably aligns with a [lesser-known definition of commodity](http://www.merriam-webster.com/dictionary/commodity): "a good or service whose wide availability typically leads to smaller profit margins and diminishes the importance of factors (as brand name) other than price." Or perhaps, they are implicitly channeling the [concept of commoditization as a mercantile race to the bottom](http://ianmurdock.com/open-source-and-the-commoditization-of-software/). Yet even this is not always so. Surely, [Bootstrap](http://getbootstrap.com) and [jQuery](https://jquery.org/) are ubiquitous and free, but they're not ubiquitous *because* they're free. They're ubiqitous because of their utility and--to a certain extent--the network effects of an accepted framework. And it is hardly the case that Bootstrap is interchangeable with other front-end frameworks. 

In some sense, the problem of their definition is that it ignores "differentiating value" (h/t to [@ghelleks](https://twitter.com/ghelleks)). If the software is uniquely different enough, it is [not really a commodity](http://www.extension.iastate.edu/agdm/wholefarm/html/c5-203.html). It might be cheap and broadly available, but it is not suspectible to commoditization.

All of which is to say, if we read the post applying a common understanding of commodity (raw materials available on the market), there's actually a new insight. Thinking of *FOSS commodities* allows us to see the trees from the forest. If you want to refresh your legacy system, [you don't need to throw it away and start over](https://18f.gsa.gov/2014/09/08/the-encasement-strategy-on-legacy-systems-and-the/). Instead, you can plug-in some FOSS and make your customers happy. If you find that you need a relational database, "there's  an app for that." 

By understanding the characteristics of the raw materials, you can make informed decisions about how to get a little extra mileage out of your existing systems and how to avoid additional cost for unnecessary refinements on new systems. After all, if you want to make a gold necklace, it's better to start with just plain gold than to start with a gold watch.

## Evolution: A communal challenge and a call to arms

We all remember what happened with [Heartbleed](http://en.wikipedia.org/wiki/Heartbleed), right? It was a [failing of the community](http://www.nytimes.com/2014/04/19/technology/heartbleed-highlights-a-contradiction-in-the-web.html), an Internet version of the [Tragedy of the Commons](http://en.wikipedia.org/wiki/Tragedy_of_the_commons).

So, it was surprising for me to see Read & Mill argue that "the end point of this evolution is always a freely available, reliable, open source software project supported by a large, accommodating community." Surely, it is not *always* the case. Sometimes FOSS lacks the robust community support that it needs, as was the case with Heartbleed. Sometimes FOSS goes *kaput* once the [benevolent dictator](http://www.theatlantic.com/technology/archive/2014/01/on-the-reign-of-benevolent-dictators-for-life-in-software/283139/) moves on.

I know what they *meant*, which is that FOSS explicitly allows for communities to emerge around tools, and that maturation and extensibility of software can be improved when it is FOSS. But, we should not assume that FOSS is teleological. It isn't. A lot of software--all software really--needs assiduous attention. That's why Read & Mill have it exactly right when they say that "It is our hope that ten years from now there may be many people contributing to Federal open source projects under tight code review."

This aspiration--that government's source code will be constantly scrutinized and improved-upon--is an implicit and accurate critique of the *status quo*. If government software is closed source, it will always be up to the government and its vendors to tend to the bugs and design errors  in the system. We gain none of the benefit of the broad--and growing--open-source community. But if the government is both *contributing* to open source and *participating* in the open-source ecosystem, there is a greater chance that our software systems will stand the tests of time. 

# Conclusion 
 
Notwithstanding my two proposed refinements to their article, Read & Mill have it completely right in the end: "Code that you write or contract to have written should be open source from the start, because it relieves you of the terrible risk and burden of maintaining the secrecy of the codebase." Such good advice.