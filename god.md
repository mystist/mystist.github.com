---
layout: template
title: 信仰
text: 认识上帝，就是神迹。
---

<script src="js/jquery.js"></script>
<script src="js/bootstrap-waterfall.js"></script>

<ul class="waterfall">
  {% directory path: images/god exclude: private %}
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
