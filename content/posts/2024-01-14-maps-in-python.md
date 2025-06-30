---
slug-title: maps-in-python
date: 2024-01-14
draft: false
title: 'Using python map() instead of pandas .apply()'
subtitle: 'A small code tweak to improve performance and code reuse'
description: 'zvenyach.com | A TIL about the python map() function'
images: ['/images/more_you_know.png']
categories: ['til']
tags: []
---

Recently, I was playing with a rather large dataset using [pandas](pandas.pydata.org/) and trying to improve the performance of my code. While reaching for the [`multiprocessing` library](https://docs.python.org/3/library/multiprocessing.html), I learned about one small way to improve performance _and_ improve the readability of my code: use `map` instead of `apply`.

Let's look at some code:

```python
import numpy as np
import pandas as pd

# Let's create a random dataframe
df = pd.DataFrame(np.random.randint(0,100,size=(10, 3)), columns=list('ABC'))

# Normal approach: Use .apply() to iterate through the rows
df["D"] = df.apply(lambda x: x["A"] ** 2, axis=1)

# The new approach: Use python map() to iterate through the rows
def power(x):
 return x ** 2

df["E"] = list(map(power, df["A"]))
```

The new code is admittedly more verbose (requires three lines instead of one), but there are two advantages of this. Let's start with the advantage that motivated it.

## Adding multiprocessing is trivial with this pattern

Now, instead of trying to figure out where / how you're going to handle multiprocessing in your code, you can simply just replace `map` with `pool.map`. Let's see it in action.

```python
import multiprocessing

# Pro tip... you're going to want to make sure this has one of those
# `if __name__ == "__main__":` things in front if you're using
# multiprocessing.
with multiprocessing.Pool() as pool:
 df["F"] = list(pool.map(power, df["A"]))
```

See? Just a slight tweak in the code and suddenly you're using all the cores.

## You get a performance boost without any multiprocessing

This one kind of surprised me, tbh. I tried to see whether, without any multiprocessing, I'd get a speed bump

```python
%timeit df["D"] = df.apply(lambda x: x["A"] ** 2, axis=1)
# 153 µs ± 951 ns per loop (mean ± std. dev. of 7 runs, 10,000 loops each)

%timeit df["E"] = list(map(power, df["A"]))
# 30.7 µs ± 119 ns per loop (mean ± std. dev. of 7 runs, 10,000 loops each)
```

Sure enough: a **5x speed increase**!

I'm not honestly sure _why_ this happens; it's probably some weird thing where python does it better than pandas. But hey, a 5x improvement is notable!

Have fun mapping!
