---
layout: template
title: 生活
text: 充满见证充满爱
---
<ul>
	{% for post in site.categories.life %}
	<li>
	<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
	{{ post.date | date: "%Y-%m-%d %H:%M" }}
	</li>
	{% endfor %}
</ul>