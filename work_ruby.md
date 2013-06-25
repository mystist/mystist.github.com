---
layout: template
title: Ruby
text: Ruby我只喜欢你，深深地爱上了你，没有理由，没有原因
---
<ul>
	{% for post in site.categories.work_ruby %}
	<li>
	<a href="{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>