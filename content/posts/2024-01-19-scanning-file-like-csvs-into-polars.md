---
slug-title: scanning-file-like-csvs-into-polars
date: 2024-01-19
draft: false
title: "How to use `scan_csv` with a file-like object in Polars"
subtitle: "One small trick to handle memory-intensive CSVs"
description: "zvenyach.com | How to use `scan_csv` with a file-like object in Polars"
images:
  [
    "https://raw.githubusercontent.com/pola-rs/polars-static/master/logos/polars_github_logo_rect_dark_name.svg",
  ]
categories: ["til"]
tags: []
---

I have a case where a bunch of CSVs are stored together in a zip file and I want to convert those CSVs into a parquet file. I'm using [polars](https://pola.rs) because it has an awesome ability to lazily read CSVs and then efficiently sink to parquet. It's actually kind of magical.

But, there's a problem. Because the CSVs are in a zipfile, you hit a snag pretty quick. That's because you can't just pass the CSV file name to the `scan_csv` function. The following code will _not_ work!

```python
import polars as pl

with zip_file.open("csv_in_zipfolder.csv") as csv_file:
  pl.scan_csv(csv_file).sink_parquet("my_new_file.parquet")
```

That's because `csv_file` is actually a `ZipExtFile`, and the `scan_csv` function can't accept that! According to the [pola.rs API documentation](https://docs.pola.rs/py-polars/html/reference/api/polars.scan_csv.html), `scan_csv` only accepts a path to a file. Unlike the `read_csv` function, which accepts a path _or_ a file-like objects, `scan_csv` does not allow file-like objects.

This also means that attempting to download from a URL directly into `scan_csv` won't work either. Bummer, right?

But, there's a hack if your csv file will fit in memory\*: write it to a temporary named file and then pass that temporary named file to the `scan_csv` function. Here's how that looks:

```python
import polars as pl

with zip_file.open("csv_in_zipfolder.csv") as csv_file:
	# Create the temporary file
	with tempfile.NamedTemporaryFile() as tf:
		tf.write(fp.read()) # Write the csv file to the temporary file
		tf.seek(0)          # Start at the beginning of the temporary file
		pl.scan_csv(tf.name).sink_parquet("my_new_file.parquet")
```

By saving the file-like object into the temporary file system as a temporary file, you can happily pass the path to that file to polars and scan to your heart's content.

\* Technically, you could even iterate over the lines of your CSV file if it doesn't fit into memory at all.
