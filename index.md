---
layout: template
title: Welcome
text: 欢迎访问Liber的博客，这是最新的一篇技术文章。
---
{% assign items = site.categories.work.push(new_scope=site.categories.work_ruby) %}
{% for item in items %}
{% if forloop.first == true %}
《{{ item.title }}》
{{item.content}}
{% endif %}
{% endfor %}