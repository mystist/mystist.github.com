---
layout: template
title: 阅读
text: 免责申明：所有笔记内容仅供个人学习参考使用，转载需取得原作者同意
---

<script src="js/jquery.js"></script>
<script src="js/bootstrap-waterfall.js"></script>

#### 读书笔记

<ul>
	{% for post in site.categories.reading %}
	<li>
	<a href="{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>

<hr /><br />

<ul class="waterfall">
  {% directory path: images/reading reverse: true exclude: private %}
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
