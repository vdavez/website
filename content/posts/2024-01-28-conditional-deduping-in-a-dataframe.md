---
slug-title: conditional-deduping-in-a-dataframe
date: 2024-01-28
draft: false
title: 'How to remove *some* duplicates from a dataframe'
subtitle: 'A TIL about how to partially de-dupe'
description: 'zvenyach.com | How to remove *some* duplicates from a dataframe'
images:
  [
    'https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars_github_logo_rect_dark_name.svg',
  ]
categories: ['til']
tags: []
---

I have a dataframe that has contains duplicates. And although I wanted to get rid of many of the duplicates, I _also_ wanted to keep some duplicates on certain conditions. In this post, I outline the motivating problem and the solution (Note: I'm using [polars](https://pola.rs) here but you could use pandas/etc for your dataframe).

## The motivating problem

To illustrate, here's a random dataframe of foods, their categories, and some "last_date" field.

| food    | food_type | last_date  |
| ------- | --------- | ---------- |
| carrot  | vegetable | 2024-01-28 |
| lettuce | vegetable | 2024-01-28 |
| lettuce | vegetable | 2024-01-27 |
| apple   | fruit     | 2024-01-28 |
| banana  | fruit     | 2024-01-28 |
| banana  | fruit     | 2024-01-27 |
| salmon  | seafood   | 2024-01-28 |
| salmon  | seafood   | 2024-01-27 |

What I _want_ in this example here is to keep both lettuces but discard the oldest fruit. In other words, I want my final table to look like this:

| food    | food_type | last_date  |
| ------- | --------- | ---------- |
| carrot  | vegetable | 2024-01-28 |
| lettuce | vegetable | 2024-01-28 |
| lettuce | vegetable | 2024-01-27 |
| apple   | fruit     | 2024-01-28 |
| banana  | fruit     | 2024-01-28 |
| salmon  | seafood   | 2024-01-28 |

See how there are two fewer rows? The second banana and the second salmon entries drop off, but the second lettuce entry stays.

## How can you do that?

The way to reason about this is that you're going to (1) split the dataframe into two separate dataframes, (2) do your deduplication on one of them, and then (3) concatenate them into a new dataframe. Here's some code:

```python
# Sort the dataframe
df_sorted = df.sort(["last_date"], descending=True)

# Split the dataframe into two dataframes, one with vegetables and one without
df_vegetables = df_sorted.filter(df_sorted["food_type"] == "vegetable")
df_others = df_sorted.filter(df_sorted["food_type"] != "vegetable")

# Drop the duplicates from the dataframe that does not have vegetables in it
df_others_latest = df_others.unique(subset=["food"])

# Combine the dataframes again, now with the dupes dropped
final_df = pl.concat([df_vegetables, df_others_latest])
```

And voila, a conditionally deduped dataframe.

Is there a better way to do this? Perhaps! But it worked for me!

## AI Disclosure

ChatGPT helped me think through a solution here when I got stuck. Hopefully this is the best way to do it, but if there's a better way, please let me know and I'll update the blog with a better solution.
