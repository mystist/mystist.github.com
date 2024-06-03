---
layout: template
title: 全部内容
text: Reach out to gjl87910lq@gmail.com for more
---
<ul>

  {% for post in site.posts %}
  
  {% if post.categories contains 'programmer' or post.categories contains 'thoughts' or post.categories contains 'reading' %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span>{{ post.date | date: "%Y-%m-%d %H:%M" }}</span>
    
    {% assign category_str = '' %}
    {% if post.categories contains "programmer" %}
      {% assign category_str = category_str | append: '[程序员]' %}
    {% endif %}
    {% if post.categories contains "thoughts" %}
      {% assign category_str = category_str | append: '[思考]' %}
    {% endif %}
    {% if post.categories contains "reading" %}
      {% assign category_str = category_str | append: '[阅读]' %}
    {% endif %}
    
    <span style="width: 110px;">{{category_str}}</span>
  </li>
  {% endif %}
  
  {% endfor %}
  
</ul>