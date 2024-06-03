---
layout: template
title: 程序员
text: 学习、沉淀、创造以及第一性原理
---

<ul>
	{% for post in site.categories.programmer %}
	<li>
	<a href="{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>
