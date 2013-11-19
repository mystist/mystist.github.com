---
layout: template
title: I'm Liber 
text: We value our future
---

Hi there, My name is `Gong Junlei`, from China. Working for `DJHealthUnion` at present.  

#### Tags:  
`Javascript` Web Developer.  
`Backbone` guru.  
Master in `jQuery`.  
Using `Bootstrap`, `requirejs`.  
Using `Ruby`. (Just because Yukihiro is a Christian)  
Like sing with `Sinatra`, love `git`.  
A `Puritan`.  

#### Basic Info:  
Full Name: `Gong Junlei`  
English Name: `Liber`  
Date of Birth: `1987-11-01`  
Gender: `Male`  
Yrs.of Experience: `> 3 years`  
E-mail: `gjl87910lq@gmailcom`   
Mobile Phone: `+86 136-8169-8273`  
Education: `Bachelor Degree, Hulunbeir College & Harbin Normal University, 2006 - 2010, Computer Science and Technology`  
Certifications: `Third Price in Northeast China, ACM/ICPC 2008`  
English Level: `CET4`  
Blog: [mystist.github.com][0]  
Website: [1050.14201420.com][1]  

[0]: http://mystist.github.com
[1]: http://1050.14201420.com

#### Features:  
`Smart:`  
Can plays awesome in Dota competitions and gain the highest marks I can get from the ACM Online Judgement as well.  
`Efficient:`  
Watch and watch, think and think before coding something. When I'm coding, It's almost finished.  
`Perfectionist:`  
Program, User Experience and Beauty must benefit each other.  

#### Words:  
Life is a journey.  
Everyone is irreplaceable.  
We were created by our God of different purposes with different talent.  
So, Why not do something that values, to ourselves, to our nation and to mankind.  
Using the talent our father gives us.  

Now, A coder, A booming world.  
It is the best time that we can value something.  
And I'm here, Hi-Ne-Ni.  


<img src="images/2013_01_07_1.png" />

<br />

#### Works:  

<hr />

`Timetrack` (2012-11)  
Tip: You can drag it left and right, click the events, zoom in/out by click the `plus/minus` button on the right bottom, etc...  

<iframe frameborder="0" scrolling="no" src="liber/timetrack/page/timetrack.html" width="100%" height="400px;" ></iframe>

Take a glance of code:  

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
    return	numbers;
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

[See in Github][2]  
[Source Download][3]
[2]: https://github.com/Mystist/timetrack
[3]: https://github.com/Mystist/timetrack/archive/master.zip

<br /><hr />

`inputTip` (2012-12)  
Tip: Input a `s` and try to scroll to the bottom.  

<iframe frameborder="0" scrolling="no" src="liber/inputTip/demo.html" width="100%" height="400px;" ></iframe>

Take a glance of code:  

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

[See in Github][4]  
[Source Download][5]
[4]: https://github.com/Mystist/inputTip
[5]: https://github.com/Mystist/inputTip/archive/master.zip

<br /><hr />

`theadFixer` (2013-04)  
Tip: The `table's header` will hold when you are scrolling.  

<iframe frameborder="0" scrolling="no" src="liber/theadFixer/demo.html" width="100%" height="400px;" ></iframe>

Take a glance of code:  

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

[See in Github][6]  
[Source Download][7]
[6]: https://github.com/Mystist/theadFixer
[7]: https://github.com/Mystist/theadFixer/archive/master.zip

<br /><hr />

`tdWider` (2013-04)  
Tip: Try to drag the right line of `td`.  

<iframe frameborder="0" scrolling="no" src="liber/tdWider/demo.html" width="100%" height="400px;" ></iframe>

Take a glance of code:  

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

[See in Github][8]  
[Source Download][9]
[8]: https://github.com/Mystist/tdWider
[9]: https://github.com/Mystist/tdWider/archive/master.zip

<br /><hr />

`customPPT` (2013-05)  

<iframe frameborder="0" scrolling="no" src="liber/customPPT/demo.html" width="100%" height="320px;" ></iframe>

Take a glance of code:  

{% highlight javascript %}
    automaticPlay: function() {
      var tThis = this;
      this.timer = setInterval(function() {
        tThis.moveToNext();
      }, 3000);
    },
{% endhighlight %}

[See in Github][10]  
[Source Download][11]
[10]: https://github.com/Mystist/customPPT
[11]: https://github.com/Mystist/customPPT/archive/master.zip

<br /><hr />

`multiSelect` (2013-06)  
Tip: Keyboard supported, try `up` and `down`.  

<iframe frameborder="0" scrolling="no" src="liber/multiSelect/demo.html" width="100%" height="300px;" ></iframe>

Take a glance of code:  

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

[See in Github][12]  
[Source Download][13]
[12]: https://github.com/Mystist/multiSelect
[13]: https://github.com/Mystist/multiSelect/archive/master.zip

<br /><hr />

`partialPrint` (2013-07)  
Tip:  
Press `F8` to `open/close` the plugin.  
Just move your mouse to select the items you want to print.  
Right click on those items then choose print.  

<a href="liber/partialPrint/demo.html" target="_blank">See demo here</a>

Take a glance of code:  

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

[See in Github][14]  
[Source Download][15]
[14]: https://github.com/Mystist/partialPrint
[15]: https://github.com/Mystist/partialPrint/archive/master.zip

<br /><hr />

`picPPT` (2013-09)  
Tip:  Another PPT, `iframe` supported.  

<iframe frameborder="0" scrolling="no" src="liber/picPPT/demo.html" width="100%" height="320px;" ></iframe>

Take a glance of code:  

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

[See in Github][16]  
[Source Download][17]
[16]: https://github.com/Mystist/picPPT
[17]: https://github.com/Mystist/picPPT/archive/master.zip
