---
slug-title: the-long-tail-of-federal-data-elements
date: 2020-01-26T10:16:25-06:00
draft: false
images: ['/images/longtail.png']
title: 'The long tail of federal data elements'
subtitle: The challenge of data standardization
---

Longtime readers of the blog may know that I enjoy datasets about federal forms. Today, I wanted to use a new dataset to share an observation about the extent to which federal forms _share_ data elements.

By way of backstory, a few years ago, Congress passed the [DATA Act](https://en.wikipedia.org/wiki/Digital_Accountability_and_Transparency_Act_of_2014). As part of the DATA Act implementation, the Department of Health and Human Services started on an effort to create a database of "common data elements," in an effort to improve the standardization of federal data. Today, the project has resulted in the [Common Data Element Repository (CDER) Library](https://repository.usaspending.gov/cder_library/), which lists an astonishing **34,550** data elements across 444 forms. If you're wonky, you could likely spend months looking through the elements.

Interestingly, though, HHS went one step farther to look for [Data Elements on Multiple Forms](https://repository.usaspending.gov/cder_library/authorized/report/common), which sparked my interest. At first glance, it seemed obvious that some elements would be shared across many forms; after all, an element like "Point of Contact Email" is going to show up in lots and lots of forms.

So, I decided to plot the distribution for data elements that are shared on multiple forms. [Here's my work](https://nbviewer.jupyter.org/gist/vzvenyach/70e4117324d6329f74c89f4dbe7b436a), and here's the result:

{{< figure src="/images/longtail.png" alt="Histogram plot of the distribution of elements on shared forms" class="flex justify-center">}}

As you can see, there's a very long tail here. Most data elements show up on only one or two forms. And, as you get past 5 forms, the numbers drop off further. All of this is to say that federal data standardization is going to be a challenge over the years, but there are good places to start.

Interestingly, if you're curious, the data element that appears on the most forms? The DUNS number, coming up at 58 forms. And plot twist? The DUNS number is being replaced by the [SAMMI](https://interact.gsa.gov/blog/entity-validation-services-frequently-asked-questions-faqs). So expect those forms to change in the coming years!
