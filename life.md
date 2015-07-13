---
layout: template
title: 生活
text: 充满见证，充满爱
---

#### 随笔

<ul>
	{% for post in site.categories.life %}
	<li>
	<a href="{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>

#### 初见

<script src="js/jquery.js"></script>
<script src="js/bootstrap-waterfall.js"></script>

<ul class="waterfall gallery">
  {% directory path: images/life reverse: true exclude: private %}
    <li class="pin">
      <a href="{{ file.url }}"><img src="{{ file.url }}" alt="{{ file.name }}" /></a>
    </li>
  {% enddirectory %}
</ul>


<script>
  $(document).ready(function () {
    $('.waterfall').waterfall();
  });
</script>