---
layout: template
title: 生活
text: 充满见证，充满爱
---
<ul>
	{% for lifepage in site.categories.life %}
	<li>
	<a href="{{ site.baseurl }}{{ lifepage.url }}">{{ lifepage.title }}</a>
	<span>{{ lifepage.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>