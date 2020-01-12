---
slug-title: "make-it-simple"
date: 2020-01-11T11:02:33-06:00
title: '"Make" it simpler'
subtitle: Using GNU make to standardize my dev flow
---

Given the proliferation of different commands on the command line that you need to master—*docker-compose up*, *poetry run [blah]*, *npm run [blah]*, *hugo serve*, etc.—it can sometimes feel impossible to remember how to do the simple things. Although it may seem like a minor pain, I find myself spending mental energy that I don't want to spend trying to remember how I set up an application. I also find myself trying to install other people's source code and wishing it were easier to do things like check for installation dependencies, getting things to run, and handling builds.

As I started thinking about how to avoid this mental overhead, I remembered [make](https://www.gnu.org/software/make/manual/make.html) and realized it might be the answer I have been looking for. Make has the advantages of being cross-platform (Windows, Mac, and Linux all come with make) and free and open source. It's also intuitive: if I want to "make something," maybe I just want to run *make serve* and not worry about remembering that it's technically *poetry run python manage.py runserver*.

This may not be the Right Way to Do Things, but recently I have been experimenting with using make as a way to enjoy a more consistent development flow across platforms and applications.

To do it, I create a `Makefile` in the root of my application, and start writing commands. For example, on this website, the file starts like this:

``` sh
serve:
	@hugo serve -D

.PHONY: serve
```

Now, all I have to do is `make serve`. What that does is run the [Hugo](https://gohugo.io) server with the default that I expect; when I'm doing local development, I want draft blog posts to show up. Without make, I have to remember that hugo requires this command-line switch to show draft posts. Honestly, I don't need that mess. And, the beautiful thing is that I can have this same flow for _any_ application, whether it's a Node app or a Python app or whatever.

But I can do more, too. Suppose I want to create blog posts that have a consistent file naming convention. Right now I could type in `hugo new posts/2020-01-11-make-it-simple.md` in the command line. But then I'd have to remember that command convention. Instead, in my `Makefile`, you can find the following:

``` sh
new:
	@hugo new posts/$$(date +%Y-%m-%d)-$(TITLE).md

.PHONY: new
```

Now, when I run `make new TITLE="whatever-i-want"`, it just works.

The key here is the use of the [Phony Target](https://www.gnu.org/software/make/manual/make.html#Phony-Targets), which allows you to write `.PHONY: serve new` and you can run the target as part of the make command.

Additionally, though I am still early days in this flow, I imagine using this to simplify the common chores of installing an app and checking for dependencies (*make install*), testing the app (*make test*), deploying the app (*make deploy*), and more.

Is this something you've seen or used before? If not, I hope it's useful for you, too! Looking forward to feedback and making a simpler future.
