---
layout: template
title: 所有文章
text: 欢迎大家和我沟通关于生活、技术以及信仰的任何问题，我的联系方式：gjl87910lq@gmail.com 
---
<ul>

  {% for post in site.posts %}
  
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
    
    {% assign category_str = '' %}
    {% if post.categories contains "work" %}
      {% assign category_str = category_str | append: '[前端技术]' %}
    {% endif %}
    {% if post.categories contains "work_ruby" %}
      {% assign category_str = category_str | append: '[Ruby]' %}
    {% endif %}
    {% if post.categories contains "plugin" %}
      {% assign category_str = category_str | append: '[jQuery插件]' %}
    {% endif %}
    {% if post.categories contains "life" %}
      {% assign category_str = category_str | append: '[生活]' %}
    {% endif %}
    {% if post.categories contains "reading" %}
      {% assign category_str = category_str | append: '[读书]' %}
    {% endif %}
    
    <span style="width: 110px;">{{category_str}}</span>
  </li>
  
  {% endfor %}
  
</ul>