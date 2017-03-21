---
layout: template
title: Works
text: 部分作品
---

`getTreeListFromListByLevels` (2014-02)  
提示: 通过后台传过来的原始JSON数据，递归生成zTree需要的数据。  

<iframe frameborder="0" scrolling="no" src="/liber/getTree/demo.html" width="100%" height="320px;" ></iframe>

代码片段：  

~~~ javascript

  _.each(uniqListArr, function(listItem) {

    var children = [];
    if(_.indexOf(uniqBranchArr, listItem) != -1) {
      var currentList = _.filter(branchList, function(item) {
        return item[levels[0]] === listItem;
      });
      children = this.getTreeListFromListByLevels(currentList, levels.slice(1), options);
    }
    var branchObj = {
      'name': listItem,
      'children': children,
      'open': false
    };
    treeList.push(branchObj);
    
    _.each(leafList, function(leafItem) {
      if(leafItem[levels[0]] === listItem) {
        branchObj.children.push(getObjFromItemAndOptionsAtLevels(leafItem, options, levels));
      }
    });
    
  }, this);

~~~

[代码下载](/liber/getTree/getTree.rar)

<hr />

`picPPT` (2013-09)  
提示：支持`iframe`的幻灯片插件。  

<iframe frameborder="0" scrolling="no" src="liber/picPPT/demo.html" width="100%" height="320px;" ></iframe>

代码片段：  

{% highlight javascript %}
    bindEvent: function() {
      var tThis = this;
      this.$imgContainers.bind("mouseover", function() {
        clearInterval(tThis.intervalId);
        var index = tThis.$imgContainers.index(this);
        if(index!=tThis.currentIndex) {
          tThis.showThisImg(index);
        }
      });
      this.$container.bind("mouseout", function() {
        tThis.automaticPlay();
      });
    }
{% endhighlight %}

[Github地址][16]  
[代码下载][17]
[16]: https://github.com/Mystist/picPPT
[17]: https://github.com/Mystist/picPPT/archive/master.zip

<hr />

`partialPrint` (2013-07)  
提示: 局部打印。  
按 `F8` 打开/关闭 插件功能。  
使用鼠标选择要打印的元素。    
点击鼠标右键，选择`打印`。  

<a href="liber/partialPrint/demo.html" target="_blank">查看Demo</a>

代码片段：  

{% highlight javascript %}
  var includeCss = function(styles, media) {
    var style = document.createElement("style");
    style.type = "text/css";
    style.media = media || "screen";
    (document.getElementsByTagName("head")[0] || document.body).appendChild(style);
    if (style.styleSheet) { // for IE
      style.styleSheet.cssText = styles;
    } else { //for w3c
      style.appendChild(document.createTextNode(styles));
    }
  };
{% endhighlight %}

[Github地址][14]  
[代码下载][15]
[14]: https://github.com/Mystist/partialPrint
[15]: https://github.com/Mystist/partialPrint/archive/master.zip

<hr />

`multiSelect` (2013-06)  
提示：让html的select元素支持多选功能。支持键盘上下选择。  

<iframe frameborder="0" scrolling="no" src="liber/multiSelect/demo.html" width="100%" height="300px;" ></iframe>

代码片段：  

{% highlight javascript %}
    $target.delegate("ul", "keyup", function(e) {
    
      e.cancelable = true;
      e.preventDefault();
    
      if(e.keyCode==38) { // up
        moveToPre($this);
      } else if(e.keyCode==40) { // down
        moveToNext($this);
      } else if(e.keyCode==13) { // enter
        $this.find("li").each(function() {
          if($(this).css("color")=="white"||$(this).css("color")=="rgb(255, 255, 255)") {
            $(this).click();
            return false;
          }
        });
      } else if(e.keyCode==27) { // esc
        $this.find(".m_outerDom").remove();
        $this.find("textarea").focus();
      }
    
    });
  
  }
{% endhighlight %}

[Github地址][12]  
[代码下载][13]
[12]: https://github.com/Mystist/multiSelect
[13]: https://github.com/Mystist/multiSelect/archive/master.zip

<hr />

`customPPT` (2013-05)  

<iframe frameborder="0" scrolling="no" src="liber/customPPT/demo.html" width="100%" height="320px;" ></iframe>

代码片段：  

{% highlight javascript %}
    automaticPlay: function() {
      var tThis = this;
      this.timer = setInterval(function() {
        tThis.moveToNext();
      }, 3000);
    },
{% endhighlight %}

[Github地址][10]  
[代码下载][11]
[10]: https://github.com/Mystist/customPPT
[11]: https://github.com/Mystist/customPPT/archive/master.zip

<hr />

`tdWider` (2013-04)  
提示：试试将鼠标移到表头`td`的右边。  

<iframe frameborder="0" scrolling="no" src="liber/tdWider/demo.html" width="100%" height="400px;" ></iframe>

代码片段：  

{% highlight javascript %}
      this.$this.find(".m_inner").draggable({
        "axis": "x",
        "start": function(e) {
          tThis.drawLine($(e.target));
          if(tThis.applyToAnotherTable) {
            tThis.drawLine(tThis.$this.find("span[index='"+$(e.target).attr("index")+"']:last"));
          }
        },
        "drag": function(e, ui) {
          if(tThis.applyToAnotherTable) {
            var fixNumber = 0;
            if(ui.position.left - ui.originalPosition.left < 0) {
              fixNumber = -1;
            } else {
              fixNumber = 1;
            }
            tThis.$this.find("span[index='"+$(e.target).attr("index")+"']:last").css("left", parseInt($(e.target).css("left"), 10) + fixNumber);
          }
        },
        "stop": function(e, ui) {
          tThis.currentMoveLength = ui.position.left - ui.originalPosition.left;
          tThis.changeTdWidth(e);
          $(e.target).css("left", ui.originalPosition.left);
          tThis.removeLine($(e.target));
          if(tThis.applyToAnotherTable) {
            tThis.removeLine(tThis.$this.find("span[index='"+$(e.target).attr("index")+"']:last"));
          }
        }
      });
{% endhighlight %}

[Github地址][8]  
[代码下载][9]
[8]: https://github.com/Mystist/tdWider
[9]: https://github.com/Mystist/tdWider/archive/master.zip

<hr />

`theadFixer` (2013-04)  
提示：滚动表格的时候，表头会固定住。  

<iframe frameborder="0" scrolling="no" src="liber/theadFixer/demo.html" width="100%" height="400px;" ></iframe>

代码片段：  

{% highlight javascript %}
    option: function(optionName, optionValue) {
      if(optionName&&optionValue) {
        this[0].settings[optionName] = optionValue;
      } else if(optionName) {
        if(typeof optionName == "object") {
          for(var propName in optionName) {
            this[0].settings[propName] = optionName[propName];
          }
        } else {
          return this[0].settings[optionName];
        }
      } else {
        return this[0].settings;
      }
    },
{% endhighlight %}

[Github地址][6]  
[代码下载][7]
[6]: https://github.com/Mystist/theadFixer
[7]: https://github.com/Mystist/theadFixer/archive/master.zip

<hr />

`inputTip` (2012-12)  
提示：试试输入一个`s`然后试着滚动到底部。  

<iframe frameborder="0" scrolling="no" src="liber/inputTip/demo.html" width="100%" height="400px;" ></iframe>

代码片段：  

{% highlight javascript %}
      if(filteredItemList.length!=0) {
        for(var i=0; i< st.maxItemNumber; i++) {
          if(filteredItemList[0]) {
            toDoItemList.push(filteredItemList[0]);
            filteredItemList.shift();
          }
        }
      }
      
      $this.append(getTipDivHtml($this, toDoItemList, st));
      setTipStyle($this, st);
      
      st.tipIsShowing();
      
      $this.find(st.scrollTarget).unbind().scroll(function() {
        
        if( $(this).scrollTop()+100 >=$this.find("table:last").height()-$(this).height() ) {
          toDoItemList = [];
          for(var i=0; i< st.maxItemNumber; i++){
            if(filteredItemList[0]) {
              toDoItemList.push(filteredItemList[0]);
              filteredItemList.shift();
            }
          }
          if(toDoItemList.length>0) {
            $this.find(".tipDiv table:last tbody").append(getTrByList($this, toDoItemList, st));
          }
        }
        
      });
{% endhighlight %}

[Github地址][4]  
[代码下载][5]
[4]: https://github.com/Mystist/inputTip
[5]: https://github.com/Mystist/inputTip/archive/master.zip

<hr />

`Timetrack` (2012-11)  
提示：左右拖动、添加/查看事件、放大、缩小等等。  

<iframe frameborder="0" scrolling="no" src="liber/timetrack/page/timetrack.html" width="100%" height="400px;" ></iframe>

代码片段：  

{% highlight javascript %}
  function getNumbersByDateType(startTime, endTime, type) {
    var stime = formatDateTime(startTime, type, "Date");
    var etime = formatDateTime(endTime, type, "Date");
    var curTime = new Date( stime.valueOf() );
    var numbers = 0;
    while( curTime < etime ) {
      numbers++;
      curTime = addNByDateType(curTime, type);
    }
    return numbers;
  }
  
  function addNByDateType(time, type) {
    var n = 1;
    if(arguments[2]!==undefined) {
      n=arguments[2];
    }
    if(type==="hour") {
      time.setHours( time.getHours() + n );
    } else if(type==="day") {
      time.setDate( time.getDate() + n );
    } else if(type==="month") {
      time.setMonth( time.getMonth() + n );
    } else if(type==="year") {
      time.setFullYear( time.getFullYear() + n );
    }
    return time;
  }
{% endhighlight %}

[Github地址][2]  
[代码下载][3]
[2]: https://github.com/Mystist/timetrack
[3]: https://github.com/Mystist/timetrack/archive/master.zip
