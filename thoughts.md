---
layout: template
title: 思考
text: Be the mind hacker
---

<ul>
	{% for post in site.categories.thoughts %}
	<li>
	<a href="{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>
