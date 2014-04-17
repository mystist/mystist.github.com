---
layout: template
title: I'm Liber 
text: Believe In Jesus, Love Team more than Products. ( Last refresh at 2014-04-17 )
---

[中文](liber.html) / [English](liber_en.html)

Hi there, My name is `Gong Junlei`, from China. Working for `DJHealthUnion` at present.  

### Tags:  
A deep `Front-End` engineer and a fresh `Full-Stack` engineer.  
`Javascript` Web Developer Who loves create `SPA` (Single Page Application).  
So called `Backbone` guru.  
Master in `jQuery`.  
Using `Bootstrap`, `requirejs`.  
Using `Ruby` (Just because Matz is a Christian).  
Like singing with `Sinatra`, love `git`.  
A `Puritan`.  

### Basic Info:  
Full Name: `Gong Junlei`  
English Name: `Liber`  
Date of Birth: `1987-11-01`  
Gender: `Male`  
Yrs.of Experience: `> 3 years`  
E-mail: `gjl87910lq@gmail.com`   
Mobile Phone: `+86 136-8169-8273`  
Education: `Bachelor Degree, Hulunbeir College & Harbin Normal University, 2006 - 2010, Computer Science and Technology`  
Certifications: `Third Price in Northeast China, ACM/ICPC 2008`  
English Level: `CET4`  
Blog: [http://mystist.github.com](http://mystist.github.com)  
Personal Project: [http://1050.14201420.com/dev-blog](http://1050.14201420.com/dev-blog)  
GitHub: [https://github.com/Mystist](https://github.com/Mystist)  
Stackoverflow: [http://stackoverflow.com/users/1773006/liber](http://stackoverflow.com/users/1773006/liber)   

### Words:  
Everyone is unique.  
We value our future.  
Show me something interesting !  
Products, Codes, Art Altogether.  
Always get things done.  
Believe In Jesus, Love Team more than Products.  

### Work Experience:  
`DJHealthUnion`, Front-End engineer, (2012-09 - Present)  
<em>Introduction: </em>  
Develop software for Hospital.  
<em>Why leave: </em>  
We do not work with F2E Team leader together for location reason.  
Far away from home.  

`NanRuan`, Software engineer, (2011-05 - 2012-08)  
<em>Introduction: </em>  
Develop software for logistics company.  
<em>Why leave: </em>  
The `cn` lauguage that created by the company is not good for personal career.  

`LinZhi`, C# Programer, (2010-09 - 2011-04)  
<em>Introduction: </em>  
iTry86 is a website that can trade stocks with virtual money.  
<em>Why leave: </em>  
IPO failure, team off.  

### Projects:  

`1050:` (Personal project, 2013-09 - Present)  
<em>Introduction: </em>  
A website: The 1050 Poetry of Christian.  
Site: [http://1050.14201420.com/dev-blog](http://1050.14201420.com/dev-blog)  
<em>Responsibility: </em>  
I'm the starter and work as a Full-Stack engineer.  
<em>Achievements: </em>  
Know more about `Backbone`, `paas`, `ruby`, `sinatra`, `git`.  
Best practice of Zero-Cost Startup !  

<hr />

`MRS:` (DJHealthUnion, Front-End engineer, 2013-06 - Present)  
<em>Introduction: </em>  
MRS is a Data visualization system: Medical Report System.   
Version 1 use `BIRT`, Version 2 use `OLAP` and `eCharts`.  
<em>Responsibility: </em>  
Communicate with PM.  
Take charge of front-end team.  
Create a tool to custom report: `BIKit`.  
<em>Achievements: </em>  
Experience with manage team.  
Know more about `OLAP`, `eCharts` and `hightCharts`.  
Master in handle `JSON` datas.  

<hr />

`MiniWorkStation:` (DJHealthUnion, Front-End engineer, 2012-12 - 2013-05)  
<em>Introduction: </em>  
A system that the Doctors and Nurses can work together.  
Nurse can do: Manage patients, Make plan for patients, execute docter orders, etc.  
Docter can do: Manage orders, Make applications and Add dialysis orders for patients.  
<em>Responsibility: </em>  
Work with Designer and PM.  
Work with Back-End engineer.  
<em>Achievements: </em>  
Know more about the Roles of Designer, Front-End and Back-End.  
Know more about Front-End MVC.  
Business technologies about `HIS`.  

<hr />

`Plugin - Timetrack:` (DJHealthUnion, Front-End engineer, 2012-09 - 2012-11)  
<em>Introduction: </em>  
jQuery plugin to manage dates and events.  
<em>Responsibility: </em>  
Achieve it from zero to end.   
<em>Achievements: </em>  
Know more about `jQuery`.  
Self-confidence and Achievability.  

<hr />

`E-commerce Website for ZLD:`(NanRuan, Software engineer, 2012-01 - 2012-08)  
<em>Introduction: </em>  
ZLD is a logistics company.  
The clients of ZLD can use the website to make orders online, search informations.  
The carriers of ZLD can use the website to print order infotmations.  
<em>Responsibility: </em>  
Work with architect engineer.  
Design and Achieve the website.  
<em>Achievements: </em>  
Learnt the `cn` lauguage made by NanRuan.  
Learnt something about `UI`, `UE`.  
Business technologies about `logistics`.  

<hr />

`ERP system for HaiJiXing:`(NanRuan, Software engineer, 2011-05 - 2011-12)  
<em>Introduction: </em>  
HaiJiXing is a medical made/sell company.  
<em>Responsibility: </em>  
Achieve clients management.  
Technical support on site.  
<em>Achievements: </em>  
Know how to handle things on site.  
Business technologies about `ERP`.  

<hr />

`Group of iTry86:`  (LinZhi, C# Programer, 2010-09 - 2011-04)  
<em>Introduction: </em>  
iTry86 is a website that can trade stocks with virtual money.  
Group of iTry86 is the subsite that users can communicate with each other there.  
<em>Responsibility: </em>  
Work with Designer.  
Fix other sites.  
<em>Achievements: </em>  
Know more about `jQuery` and `Memorycache`.  
Know how to work with colleagues.  
Business technologies about `Finance`.  

<hr />
<br />

### Works:  

`getTreeListFromListByLevels` (2014-02)  
Tip: Get a tree from a source list which we got it from the server.  

<iframe frameborder="0" scrolling="no" src="/liber/getTree/demo.html" width="100%" height="320px;" ></iframe>

Take a glance of code:  

```javascript

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

```

[Source Download](/liber/getTree/getTree.rar)

<hr />

`picPPT` (2013-09)  
Tip: Another PPT, `iframe` supported.  

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

<hr />

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

<hr />

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

<hr />

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

<hr />

`tdWider` (2013-04)  
Tip: Try to drag the right line of `td` within `thead`.  

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

<hr />

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

<hr />

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

