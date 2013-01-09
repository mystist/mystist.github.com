---
layout: template
title: Welcome
text: 欢迎访问Liber的博客，这是最新的一篇技术文章。
---
{% for item in (site.categories.work join site.categories.work_ruby) %}
{% if forloop.first == true %}
《{{ item.title }}》  
  

{{item.content}}
{% endif %}
{% endfor %}