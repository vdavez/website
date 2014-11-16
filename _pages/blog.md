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
{{post.content }}
{% else %}
{{ post.content | split:'<!--break-->' | first }}
{% if post.content contains '<!--break-->' %}
<em class="pull-right"><a href="{{ post.url }}">Read more</a></em>
{% endif %}
{% endif %}
<hr>
{% endfor %}
