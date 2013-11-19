/*
 * multiSelect
 * 
 * https://github.com/Mystist/multiSelect
 *
 * Copyright (c) 2013 Foundation and other contributors
 *
 * License: https://github.com/Mystist/multiSelect/blob/master/MIT-LICENSE.txt
 *
 */
 
(function ($) {

  var methods = {

    init: function(options) {
    
      var defaults = {
        "rows": 3,
        "isSingleRow": false
      }
      var settings = $.extend(defaults, options);
      
      var $this = this;
      $this[0].settings = settings;
      
      initilize($this, $this[0].settings);
      
    },
    
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
    
    destroy: function() {
      this.remove();
    }
    
  }
  
  var initilize = function($this, st) {
    initHtml($this, st);
    bindEvents($this, st);
  }
  
  var initHtml = function($this, st) {
    
    $this.css("position", "relative");
    
    var $textarea = $('<textarea style="overflow: auto; resize: none;"></textarea>');
    $textarea.css({
      "position": "absolute",
      "top": 0,
      "left": 0,
      "margin": 0,
      "padding": 0,
      "width": $this.find("select").width() - 17-1,
      "height": st.isSingleRow==true?$this.find("select").height():$this.find("select").height()*st.rows,
      "font-size": $this.find("select").css("font-size"),
      "font-family": $this.find("select").css("font-family"),
      "line-height": $this.find("select").height() + "px"
    });
    
    $textarea.attr("tabindex", $this.find("select").attr("tabindex"));
    $textarea.attr("class", $this.find("select").attr("class"));
    $textarea.attr("name", $this.find("select").attr("name"));
    $this.find("select").removeAttr("tabindex").removeAttr("class").removeAttr("name");
    
    if($.trim($this.find("select").attr("thevalue"))!="") {
      $textarea.val($this.find("select").attr("thevalue"));
    }
    
    $this.append($textarea);
    
  }
  
  var bindEvents = function($this, st) {
  
    $this.find("textarea").bind("keydown", function(e) {
    
      if(e.keyCode==40) { // down
        e.cancelable = true;
        e.preventDefault();
        initTipHtml($this, st);
      } else if(e.keyCode==13) { // enter
        e.cancelable = true;
        e.preventDefault();
      }
      
    });
    
    $this.find("select").bind("change", function(e) {
      addValueToInput($(this).val(), $this, st);
      this.options[0].selected = true;
    });
    
  }
  
  var initTipHtml = function($this, st) {
  
    var $outerDom = $('<div class="m_outerDom"></div>');
    $outerDom.css({
      "position": "absolute",
      "top": 1 + $this.find("select").height(),
      "left": 1,
      "width": $this.find("select").width(),
      "z-index": 999
    });
    
    var $dom = $('<ul tabindex="-1" ></ul>');
    $dom.css({
      "margin": 0,
      "padding": 0,
      "list-style-type": "none",
      "border": "1px solid #999",
      "background-color": "white",
      "font-size": $this.find("select").css("font-size"),
      "font-family": $this.find("select").css("font-family"),
      "color": "black"
    });
    
    $dom.html(getLiByOptions($this));
    
    $this.append($outerDom.html($dom));
    
    bindItemEvents($this, st);
    
    $this.find("ul").focus();
  
  }
  
  var getLiByOptions = function ($this) {
  
    var sb = '';
    var target = $this.find("select")[0].options;
  
    for(var i=0; i<target.length; i++ ) {
      sb+='<li style="height:'+($this.find("select").height()-2)+'px; line-height:'+($this.find("select").height()-2)+'px; padding: 0 2px;">'+target[i].value+'</li>';
    }
    
    return sb;
  
  }
  
  var moveToNext = function($this) {
  
    var cur = -1;
    $this.find("li").each(function(i) {
      if($(this).css("color")=="white"||$(this).css("color")=="rgb(255, 255, 255)") {
        cur = i;
      }
    });
    $this.find("li").eq(cur).css({
      "background-color": "white",
      "color": "black"
    });
    $this.find("li").eq((cur+1)==$this.find("li").length?0:(cur+1)).css({
      "background-color": "#3399ff",
      "color": "white"
    });
  
  }
  
  var moveToPre = function($this) {
  
    var cur = $this.find("li").length;
    $this.find("li").each(function(i) {
      if($(this).css("color")=="white"||$(this).css("color")=="rgb(255, 255, 255)") {
        cur = i;
      }
    });
    $this.find("li").eq(cur).css({
      "background-color": "white",
      "color": "black"
    });
    $this.find("li").eq((cur-1)==-1?($this.find("li").length-1):(cur-1)).css({
      "background-color": "#3399ff",
      "color": "white"
    });
  
  }
  
  var bindItemEvents = function($this, st) {
  
    var $target = $this.find(".m_outerDom");
  
    $target.delegate("li", "mouseover", function() {
      $this.find("li").css({
        "background-color": "white",
        "color": "black"      
      });
      $(this).css({
        "background-color": "#3399ff",
        "color": "white"
      });
    });
    
    $target.delegate("li", "click", function() {
      addValueToInput($(this).text(), $this, st);
      $target.remove();
    });
    
    $target.delegate("ul", "keydown", function(e) {
      e.cancelable = true;
      e.preventDefault();
    });
    
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
  
  var addValueToInput = function(value, $this, st) {
    var $target = $this.find("textarea");
    if($.trim($target.val())==""||st.isSingleRow) {
      $target.val(value);
    } else {
      $target.val($target.val()+","+value);
    }
    setCaretPosition($target, 1000);
  }
  
  function setCaretPosition($target, caretPos) {
    var elem = $target[0];

    if (elem != null) {
      if (elem.createTextRange) {
        var range = elem.createTextRange();
        range.move('character', caretPos);
        range.select();
      } else {
        if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(caretPos, caretPos);
        } else elem.focus();
      }
    }
  }

  $.fn.multiSelect = function(method) {
    if(methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error( 'No '+method+' Method.' );
    }
  };

})(jQuery);

