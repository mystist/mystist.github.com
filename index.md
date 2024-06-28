---
layout: template
title: Liber's Blog
text: 欢迎访问Liber的私人博客，这是最新的一篇内容
---
{% assign had_shown = false %}

{% for post in site.posts %}

{% if post.categories contains 'programmer' or post.categories contains 'thoughts' or post.categories contains 'reading' %}

{% if had_shown == false %}

<h2 style="margin-bottom: 15px;"> {{post.title}} </h2>

{{post.content}}

{% endif %}

{% assign had_shown = true %}

{% endif %}

{% endfor %}
