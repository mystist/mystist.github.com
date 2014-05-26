---
layout: template
title: 读书
text: 没有生不逢时，只是未遇好书。
---

#### 在读

<div>
  
</div>

<hr /><br />

#### 已读

<div>
  <img style="padding-right: 10px;" src="images/reading/64.jpg" />
  <img style="padding-right: 10px;" src="images/reading/60.jpg" />
  <img style="padding-right: 10px;" src="images/reading/24.jpg" />
  <img style="padding-right: 10px;" src="images/reading/62.jpg" />
  <img style="padding-right: 10px;" src="images/reading/23.jpg" />
  <img style="padding-right: 10px;" src="images/reading/22.jpg" />
  <img style="padding-right: 10px;" src="images/reading/52.jpg" />
  <img style="padding-right: 10px;" src="images/reading/61.jpg" />
  <img style="padding-right: 10px;" src="images/reading/58.jpg" />
  <img style="padding-right: 10px;" src="images/reading/51.jpg" />
  <img style="padding-right: 10px;" src="images/reading/49.jpg" />
  <img style="padding-right: 10px;" src="images/reading/37.jpg" />
  <img style="padding-right: 10px;" src="images/reading/47.jpg" />
  <img style="padding-right: 10px;" src="images/reading/1.jpg" />
  <img style="padding-right: 10px;" src="images/reading/2.jpg" />
  <img style="padding-right: 10px;" src="images/reading/5.jpg" />
  <img style="padding-right: 10px;" src="images/reading/4.jpg" />
  <img style="padding-right: 10px;" src="images/reading/3.jpg" />
  <img style="padding-right: 10px;" src="images/reading/21.jpg" />
  <img style="padding-right: 10px;" src="images/reading/6.jpg" />
  <img style="padding-right: 10px;" src="images/reading/7.jpg" />
  <img style="padding-right: 10px;" src="images/reading/15.jpg" />
  <img style="padding-right: 10px;" src="images/reading/28.jpg" />
  <img style="padding-right: 10px;" src="images/reading/29.jpg" />
  <img style="padding-right: 10px;" src="images/reading/18.jpg" />
  <img style="padding-right: 10px;" src="images/reading/19.jpg" />
  <img style="padding-right: 10px;" src="images/reading/17.jpg" />
  <img style="padding-right: 10px;" src="images/reading/20.jpg" />
  <img style="padding-right: 10px;" src="images/reading/59.jpg" />
  <img style="padding-right: 10px;" src="images/reading/30.jpg" />
  <img style="padding-right: 10px;" src="images/reading/25.jpg" />
  <img style="padding-right: 10px;" src="images/reading/26.jpg" />
  <img style="padding-right: 10px;" src="images/reading/27.jpg" />
</div>

<hr /><br />

#### 已读但个人觉得一般

<div>
  <img style="padding-right: 10px;" src="images/reading/68.jpg" />
  <img style="padding-right: 10px;" src="images/reading/54.jpg" />
  <img style="padding-right: 10px;" src="images/reading/34.jpg" />
  <img style="padding-right: 10px;" src="images/reading/35.jpg" />
  <img style="padding-right: 10px;" src="images/reading/8.jpg" />
  <img style="padding-right: 10px;" src="images/reading/9.jpg" />
  <img style="padding-right: 10px;" src="images/reading/12.jpg" />
  <img style="padding-right: 10px;" src="images/reading/13.jpg" />
  <img style="padding-right: 10px;" src="images/reading/14.jpg" />
</div>

<hr /><br />

#### 想读

<div>
  <img style="padding-right: 10px;" src="images/reading/67.jpg" />
  <img style="padding-right: 10px;" src="images/reading/63.jpg" />
  <img style="padding-right: 10px;" src="images/reading/56.jpg" />
  <img style="padding-right: 10px;" src="images/reading/57.jpg" />
  <img style="padding-right: 10px;" src="images/reading/36.jpg" />
  <img style="padding-right: 10px;" src="images/reading/32.jpg" />
  <img style="padding-right: 10px;" src="images/reading/31.jpg" />
  <img style="padding-right: 10px;" src="images/reading/38.jpg" />
  <img style="padding-right: 10px;" src="images/reading/39.jpg" />
  <img style="padding-right: 10px;" src="images/reading/40.jpg" />
  <img style="padding-right: 10px;" src="images/reading/41.jpg" />
  <img style="padding-right: 10px;" src="images/reading/42.jpg" />
  <img style="padding-right: 10px;" src="images/reading/43.jpg" />
  <img style="padding-right: 10px;" src="images/reading/44.jpg" />
  <img style="padding-right: 10px;" src="images/reading/45.jpg" />
  <img style="padding-right: 10px;" src="images/reading/46.jpg" />
  <img style="padding-right: 10px;" src="images/reading/48.jpg" />
  <img style="padding-right: 10px;" src="images/reading/50.jpg" />
  <img style="padding-right: 10px;" src="images/reading/53.jpg" />
  <img style="padding-right: 10px;" src="images/reading/55.jpg" />
</div>
  
<hr /><br />

#### 已买还未读

<div>
  <img style="padding-right: 10px;" src="images/reading/65.jpg" />
  <img style="padding-right: 10px;" src="images/reading/66.jpg" />
  <img style="padding-right: 10px;" src="images/reading/33.jpg" />
  <img style="padding-right: 10px;" src="images/reading/16.jpg" />
  <img style="padding-right: 10px;" src="images/reading/10.jpg" />
  <img style="padding-right: 10px;" src="images/reading/11.jpg" />
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
