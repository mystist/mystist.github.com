/*
 * picPPT
 * 
 * https://github.com/Mystist/picPPT
 *
 * Copyright (c) 2013 Foundation and other contributors
 *
 * License: https://github.com/Mystist/picPPT/blob/master/MIT-LICENSE.txt
 *
 */
 
(function ($) {

  var methods = {

    init: function(options) {
      var defaults = {
        "subImgWidth": 55,
        "isShowTitle": false
      };
      var settings = $.extend(defaults, options);
      var picPPT = new PicPPT(this, settings);
      picPPT.initialize();
    }
    
  };
  
  function PicPPT($this, st) {
    this.$this = $this;
    this.st = st;
    this.$container = this.$this.find("div[tag='container']");
    this.$imgContainers = this.$this.find("div[tag='img_container']");
    this.count = this.$imgContainers.length;
    this.curWidth = this.$container.width() - (this.count-1)*this.st.subImgWidth;
    this.intervalId = null;
    this.currentIndex = 0;
    this.mouseStartTime = null;
    this.timeoutId = null;
  };
  
  PicPPT.prototype = {
  
    constructor: PicPPT,
    
    initialize: function() {
      this.initHtml();
      this.automaticPlay();
      this.bindEvent();
    },
    
    initHtml: function() {
      var tThis = this;
      this.$container.find("img").css({"border": "0"});
      this.$imgContainers.each(function(i) {
        var tWidth = tThis.st.subImgWidth;
        if(i==0) {
          tWidth = tThis.curWidth;
        }
        $(this).css({
          "position": "relative",
          "overflow": "hidden",
          "float": "left",
          "display": "inline",
          "width": tWidth,
          "height": tThis.$container.height()
        });
      });
      if(this.st.isShowTitle) {
        this.$this.find("div[tag='title_container']").first().hide();
        this.$this.find("div[tag='title_container']").css({
          "position": "absolute",
          "top": 0,
          "left": 0,
          "bottom": 0,
          "right": 0,
          "padding": "10px 0",
          "background-color": "#FAFAFA",
          "z-index": 1
        });
        this.$this.find("div[tag='title']").css({
          "text-align": "center",
          "font-family": "'微软雅黑', Arial",
          "font-size": "20px",
          "word-wrap": "break-word",
          "letter-spacing": "20px",
          "height": "100%",
          "width": 20,
          "margin": "0 auto",
          "overflow": "hidden"
        });
        var $triangle = $("<div></div>");
        $triangle.css({
          "position": "absolute",
          "top": 0,
          "right": 0,
          "border-color": "transparent #5bc0de transparent transparent",
          "border-width": "0 20px 20px 0",
          "border-style": "solid",
          "line-height": 0
        });
        this.$this.find("div[tag='title_container']").append($triangle);
      }
    },
    
    automaticPlay: function() {
      var tThis = this;
      clearInterval(this.intervalId);
      this.intervalId = setInterval(function() {
        var index = (tThis.currentIndex+1) >= tThis.count?0:(tThis.currentIndex+1);
        if(index!=tThis.currentIndex) {
          tThis.showThisImg(index);
        }
      }, 10000-6180);
    },
    
    showThisImg: function(index) {
      var tThis = this;
      tThis.mouseStartTime = new Date();
      clearTimeout(tThis.timeoutId);
      tThis.timeoutId = setTimeout(function() {
        if(new Date()-tThis.mouseStartTime>=100) {
          tThis.$imgContainers.each(function() {
            $(this).stop(true, true);
          });
          if(tThis.st.isShowTitle) {
            tThis.$imgContainers.eq(index).find("div[tag='title_container']").hide();
          }
          tThis.$imgContainers.eq(tThis.currentIndex).animate({
            "width": tThis.st.subImgWidth
          }, 200, "swing");
          var tIndex = tThis.currentIndex;
          tThis.$imgContainers.eq(index).animate({
            "width": tThis.curWidth
          }, 200, "swing", function() {
          if(tThis.st.isShowTitle) {
            tThis.$imgContainers.eq(tIndex).find("div[tag='title_container']").show();
          }
          });
          tThis.currentIndex = index;
        }
      }, 120);
    },
    
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
  
  }

  $.fn.picPPT = function(method) {
    if(methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error( 'No '+method+' Method.' );
    }
  };

})(jQuery);
