---
title: Home Page
subtitle: V. David Zvenyach's Blog
permalink: "/blog/"
layout: home
---

{% assign items = (site.blog | sort 'date') %}
{% for post in items reversed %}
<h2 class="text-center"><a href="{{post.url}}"><big>{{post.posttitle}}</big></a><br><small>{{post.subtitle}}<br><em>Published on: {{post.date | date: "%b %d, %Y"}}</em></small></h2>
{% if post.newest == true %}
<p>{{post.content }}</p>
{% else %}
<p>{{post.content | trucatewords:50}}</p>
{% endif %}
<hr>
{% endfor %}
