---
layout: template
title: 前端技术
text: 从未被模仿，一直被超越
---
<ul>
	{% for post in site.categories.work %}
	<li>
	<a href="{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>