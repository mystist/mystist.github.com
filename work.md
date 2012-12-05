---
layout: template
title: 前端技术
text: 从未被模仿，一直被超越
---
<ul>
	{% for workpage in site.categories.work %}
	<li>
	<a href="{{ site.baseurl }}{{ workpage.url }}">{{ workpage.title }}</a>
	<span>{{ workpage.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>