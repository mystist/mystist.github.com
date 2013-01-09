---
layout: template
title: 所有文章
text: 我的联系方式：gjl87910lq@gmail.com 
---
<ul>
	{% for post in site.categories %}
	<li>
	<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>