---
layout: template
---
<ul>
	{% for post in site.categories.work %}
	<li>{{ post.date | date: "%Y-%m-%d %H:%M" }}
	<a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
	</li>
	{% endfor %}
</ul>