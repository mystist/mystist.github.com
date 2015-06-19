---
layout: template
title: 读书
text: 没有生不逢时，只是未遇好书。
---

<script src="js/jquery.js"></script>
<script src="js/bootstrap-waterfall.js"></script>

<div class="waterfall">
  <div class="pin"><img src="images/reading/64.jpg" /></div>
  <div class="pin"><img src="images/reading/60.jpg" /></div>
  <div class="pin"><img src="images/reading/24.jpg" /></div>
  <div class="pin"><img src="images/reading/62.jpg" /></div>
  <div class="pin"><img src="images/reading/23.jpg" /></div>
  <div class="pin"><img src="images/reading/22.jpg" /></div>
  <div class="pin"><img src="images/reading/52.jpg" /></div>
  <div class="pin"><img src="images/reading/61.jpg" /></div>
  <div class="pin"><img src="images/reading/58.jpg" /></div>
  <div class="pin"><img src="images/reading/51.jpg" /></div>
  <div class="pin"><img src="images/reading/49.jpg" /></div>
  <div class="pin"><img src="images/reading/37.jpg" /></div>
  <div class="pin"><img src="images/reading/47.jpg" /></div>
  <div class="pin"><img src="images/reading/1.jpg" /></div>
  <div class="pin"><img src="images/reading/2.jpg" /></div>
  <div class="pin"><img src="images/reading/5.jpg" /></div>
  <div class="pin"><img src="images/reading/4.jpg" /></div>
  <div class="pin"><img src="images/reading/3.jpg" /></div>
  <div class="pin"><img src="images/reading/21.jpg" /></div>
  <div class="pin"><img src="images/reading/6.jpg" /></div>
  <div class="pin"><img src="images/reading/7.jpg" /></div>
  <div class="pin"><img src="images/reading/15.jpg" /></div>
  <div class="pin"><img src="images/reading/28.jpg" /></div>
  <div class="pin"><img src="images/reading/29.jpg" /></div>
  <div class="pin"><img src="images/reading/18.jpg" /></div>
  <div class="pin"><img src="images/reading/19.jpg" /></div>
  <div class="pin"><img src="images/reading/17.jpg" /></div>
  <div class="pin"><img src="images/reading/20.jpg" /></div>
  <div class="pin"><img src="images/reading/59.jpg" /></div>
  <div class="pin"><img src="images/reading/30.jpg" /></div>
  <div class="pin"><img src="images/reading/25.jpg" /></div>
  <div class="pin"><img src="images/reading/26.jpg" /></div>
  <div class="pin"><img src="images/reading/27.jpg" /></div>
  <div class="pin"><img src="images/reading/68.jpg" /></div>
  <div class="pin"><img src="images/reading/54.jpg" /></div>
  <div class="pin"><img src="images/reading/34.jpg" /></div>
  <div class="pin"><img src="images/reading/35.jpg" /></div>
  <div class="pin"><img src="images/reading/8.jpg" /></div>
  <div class="pin"><img src="images/reading/9.jpg" /></div>
  <div class="pin"><img src="images/reading/12.jpg" /></div>
  <div class="pin"><img src="images/reading/13.jpg" /></div>
  <div class="pin"><img src="images/reading/14.jpg" /></div>
  <div class="pin"><img src="images/reading/67.jpg" /></div>
  <div class="pin"><img src="images/reading/63.jpg" /></div>
  <div class="pin"><img src="images/reading/56.jpg" /></div>
  <div class="pin"><img src="images/reading/57.jpg" /></div>
  <div class="pin"><img src="images/reading/36.jpg" /></div>
  <div class="pin"><img src="images/reading/32.jpg" /></div>
  <div class="pin"><img src="images/reading/31.jpg" /></div>
  <div class="pin"><img src="images/reading/38.jpg" /></div>
  <div class="pin"><img src="images/reading/39.jpg" /></div>
  <div class="pin">img src="images/reading/40.jpg" /></div>
  <div class="pin">img src="images/reading/41.jpg" /></div>
  <div class="pin">img src="images/reading/42.jpg" /></div>
  <div class="pin">img src="images/reading/43.jpg" /></div>
  <div class="pin">img src="images/reading/44.jpg" /></div>
  <div class="pin">img src="images/reading/45.jpg" /></div>
  <div class="pin">img src="images/reading/46.jpg" /></div>
  <div class="pin">img src="images/reading/48.jpg" /></div>
  <div class="pin">img src="images/reading/50.jpg" /></div>
  <div class="pin">img src="images/reading/53.jpg" /></div>
  <div class="pin">img src="images/reading/55.jpg" /></div>
  <div class="pin">img src="images/reading/65.jpg" /></div>
  <div class="pin">img src="images/reading/66.jpg" /></div>
  <div class="pin">img src="images/reading/33.jpg" /></div>
  <div class="pin">img src="images/reading/16.jpg" /></div>
  <div class="pin">img src="images/reading/10.jpg" /></div>
  <div class="pin">img src="images/reading/11.jpg" /></div>
</div>

<hr /><br />

#### 读书笔记

<ul>
	{% for post in site.categories.reading %}
	<li>
	<a href="{{ post.url }}">{{ post.title }}</a>
	<span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
	</li>
	{% endfor %}
</ul>


<script>
  $(document).ready(function () {
    $('.waterfall').waterfall();
  });
</script>
