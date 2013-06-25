---
layout: template
title: 生活
text: 充满见证，充满爱
---
<ul>
	{% for post in site.categories.life %}
	<li>
	<a href="/">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>