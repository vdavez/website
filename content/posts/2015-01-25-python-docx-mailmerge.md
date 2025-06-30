---
date: '2015-01-25T00:00:00Z'
image: https://vdavez.com/assets/images/word_templates.png
newest: false
title: Mailmerge for Word Docs... in Python?
subtitle: A neat trick for document automation
slug-title: python-docx-mailmerge
aliases: ['/blog/posts/python-docx-mailmerge/']
---

I'm going to say something nice about Microsoft Word: there's a simple loophole to its impossibly [ornate OOXML schema](http://www.ecma-international.org/publications/standards/Ecma-376.htm) that allows for document templating. If you are trying to do some document automation for Word documents from Python (or other languages, I suppose), listen up.

<!--break-->

<figure>
<img src="/images/word_templates.png" alt="Templating with Microsoft Word?! Yep." width="100%">
<figcaption>Templating with Microsoft Word?! Yep.</figcaption>
</figure>

### Defining the problem

Last fall, I found myself working on a project that would let a legal-service provider input data into a web form and inject that data into a Word document. When I took on the project, it seemed like a simple problem and surely one that had been perfected. After all, it was 2014. There are dozens of templating tools out there, from Mustache to Jade to Jinja to ERB and many more...

Word has been [around _since 1983_](https://en.wikipedia.org/wiki/Microsoft_Word) and Python has been [around _since 1991_](<https://en.wikipedia.org/wiki/Python_(programming_language)>). Surely, _someone_ figured out a way to seamlessly inject some text into a Word document.

### The state of the art is... meh

As it turned out, although there are a number of handy tools to _create_ and even to _manipulate_ Word documents, there is not a reliable library that I found to simply inject text at a predefined location into a Word document.

For example, [python-docx](http://python-docx.readthedocs.org/en/latest/) is very handy at creating a Word document. But because of the way that Word arbitrarily structures the XML, you could not be sure whether syntax like \{\{text\}\} would be preserved. In practice, about 25% of the time, Word would split the group into three parts, making templating unreliable.

Similarly, there was a [mailmerge solution](https://github.com/Bouke/docx-mailmerge) that got close to allowing text injection, but failed to preserve formatting for the inserted documents. For documents to be filed with a court, that's a nonstarter.

Then there was [a blog post](http://virantha.com/2013/08/16/reading-and-writing-microsoft-word-docx-files-with-python/) that explained how the author enclosed text within bracket as a way around the problem. But this assumed that nothing would be enclosed in brackets in the document. With rich document sets, that assumption was too fragile for my taste.

### The solution for simple document automation: Mailmerge?

After several failed efforts to trick Microsoft Word, I finally happened upon the loophole: the actual mailmerge fields. You see, when you insert a mailmerge field in a Word document, that mailmerge field is nicely contained in the XML.

Actually, to be somewhat more complicated, Microsoft imposes _two_ types of mailmerge fields (without obvious reasons for picking one or the other): `fldSimple` and `fldChar` (see <http://officeopenxml.com/WPfields.php> for more information). But, once you've hit on those fields, you can simply replace the placeholder text with your desired text.

And here's the best part, it preserves the formatting and can handle arbitrary lengths of text. It can even handle (somewhat badly) new line characters and the like.

### How to do it

After literally days of work, the script to allow for mailmerge in python is surprisingly simple:

<script src="https://gist.github.com/vzvenyach/38d1fb78d95f1ae1cfdc.js"></script>

To run it, you simply have to insert mailmerge fields in the Word document and pass the `docxmerge` function a filename, a json object that corresponds to the fields in the Word document, and the output file.

`docxmerge('in_file.docx', {"field":"value"}, 'out_file.docx')`

To make it even easier, you can run it from the command line (you'll need to install lxml first) as follows:

`./docx_mailmerge.py -f /path/to/template.docx -d '{"key":"pair"}' -o /path/to/destination.docx`

Simple.

As everyone reading this likely knows, there are many reasons why Word and the Internet have not peacefully coexisted. But, this little loophole may give us hope that even Word can be forced to [eat some dogfood](/blog/posts/dogfooding-with-jekyll/).
