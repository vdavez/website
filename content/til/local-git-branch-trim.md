---
title: Trimming local git branches
date: 2021-07-03
description: "Remembering how to clean local merged git branches"
images: ["https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif"]
draft: false
---

Every now and then I remember to clean local unmerged git branches, and I always forget how to do it. So, TIL how to think about it, thanks to [this post](https://www.hacksparrow.com/git/delete-all-branches-except-master.html).

1. Get on the `main` branch.
2. Run a script using the following procedure:
   a. Check all of the branches
   b. Look for the asterisk (\*) and _ignore it_
   c. Pass all of the other branches and run the git branch deletion command

```sh
git checkout main && git branch | grep '^*' | xargs git branch -d
```

I've created and alias in `.zshrc` for this command as `git-trim`.
