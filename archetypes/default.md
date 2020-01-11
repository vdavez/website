---
title: {{ slicestr .Name 11 }}
date: {{ .Date }}
draft: true
posttitle: "{{ replace (slicestr .Name 11) "-" " " | title }}"
subtitle:
---
