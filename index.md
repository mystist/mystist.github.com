---
layout: template
title: Welcome
text: 欢迎访问Liber的博客，这是最新的一篇技术文章。
---
{% assign had_shown = false %}

{% for post in site.posts %}

{% if post.categories contains 'work' or post.categories contains 'work_ruby' %}

{% if had_shown == false %}

## {{post.title}}
### {{&nbsp;}}

{{post.content}}

{% endif %}

{% assign had_shown = true %}

{% endif %}

{% endfor %}
