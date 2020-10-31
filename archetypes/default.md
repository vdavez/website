---
slug-title: {{ slicestr .Name 11 }}
date: {{ .Date }}
draft: true
title: "{{ replace (slicestr .Name 11) "-" " " | title }}"
subtitle:
description:
---
