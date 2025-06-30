---
slug-title: changing-the-default-search-language-in-rds
date: 2024-02-03
draft: false
title: 'Changing the default search language in RDS'
subtitle: 'An easy fix to a perplexing problem'
description: 'zvenyach.com | How to change the default full-text search language in postgresql'
images: ['https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg']
categories: ['til']
tags: ['postgresql']
---

[Full text search in PostgreSQL](https://www.postgresql.org/docs/current/textsearch.html) is pretty great!

Recently, though, I found a bug in my application that perplexed me. When I searched for the word "Oddball" in the app, there were no results even though there should have been an entry with Oddball in it. Making matters worse, when I ran the search on my computer in dev, it worked!

After an inordinate amount of time being confused, I discovered that the root cause of the problem was that the default language in PostgreSQL differed from my dev computer and the prod environment. In dev, the language was set to `pg_catalog.english` but in prod (running in AWS RDS), the language defaults to `pg_catalog.simple`.

As a result, the "lexemes" that were stored in the database were different from the search query. For example, when I ran `SELECT * FROM ts_debug('english', 'oddball');` the lexeme was `{oddbal}` (note: only one `l`). But when I ran `SELECT * FROM ts_debug('simple','oddball');`, the lexeme can back with `{oddball}` (two `l`s). That caused the bug.

But the _solution_ required a bit more work because RDS doesn't let you adjust the settings as easily as you might locally. Ultimately, to solve it, I needed to adjust the `default_text_search_config` parameter. If, however, you simply ran `SET default_text_search_config = 'pg_catalog.english;` it wouldn't save it. As soon as you exited the session, the config would revert. Most publicly posted solutions emphasized adjusting the PostgreSQL configuration files, but because it's RDS, you can't really do that.

In the end, the solution required just one more step: granting the _user_ the ability to adjust the public schema and then altering the user's _role_ to set the default language.

Here's the code:

```sql
GRANT USAGE ON SCHEMA public TO dbuser;
ALTER ROLE dbuser SET default_text_search_config = 'pg_catalog.english';
```

Ultimately, this fixed the problem for me and was a simple fix. Because I spent way too much time googling for an answer, though, hopefully this post will help someone else identify the problem and get to a solution a bit faster.
