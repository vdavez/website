---
slug-title: output-csv-json-sqlite
date: 2022-12-17
draft: false
title: "Output JSON (and other formats) from SQLite"
subtitle: "Import and export from SQLite at the command line"
description:  "A TIL entry about how to export common data formats from SQLite at the command line"
images: ["/images/more_you_know.png"]
categories: ["til"]
tags: []
---

{{< figure src="/images/more_you_know.png">}}

Here's a fun experiment. Suppose you have a CSV and want to export it into JSON. Obviously, one way you could do it is through a purpose-built tool. But did you know you can use SQLite directly? Let's try an experiment.

Suppose you have the following CSV saved (cleverly) as "in.csv":

```csv
name,age
Jane Doe,25
William Shakespeare, 40
```

You can run the following script at the command line:

```sh {linenos=true}
sqlite3 /tmp/test.db \
    '.mode csv' \
    '.import in.csv temp' \
    '.mode json' \
    '.once out.json' \
    'SELECT * from temp;'
```
And out you'll get this saved in "out.json"! 

```json
[{"name":"Jane Doe","age":"25"},
{"name":"William Shakespeare","age":" 40"}]
```

What's happening here? Well, a couple of really cool things! You're exploiting the `.import` function of sqlite3 that allows importing csv files into sqlite. But even cooler, you're exploiting the [output formats](https://sqlite.org/cli.html#changing_output_formats) of SQLite by exporting to JSON.

You can even omit line 5 and then go straight into `jq` or whatever format you're messing with! 

```sh
sqlite3 /tmp/test.db \
    '.mode json' \
    'SELECT * from temp;' | jq .
```

As a bonus, you can export into markdown, a table, or even HTML by changing the mode. Neat, huh?

```sh
sqlite3 /tmp/test.db \
    '.mode markdown' \
    'SELECT * from temp;'
```

Hat tip to [this answer on Stack Overflow](https://stackoverflow.com/a/67186486) for teaching me the basic trick!

TIL!