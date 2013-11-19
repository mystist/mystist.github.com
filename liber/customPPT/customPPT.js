/*
 * customPPT
 * 
 * https://github.com/Mystist/customPPT
 *
 * Copyright (c) 2013 Foundation and other contributors
 *
 * License: https://github.com/Mystist/customPPT/blob/master/MIT-LICENSE.txt
 *
 */

(function ($) {

  var methods = {
    init : function(options) {  
      var defaults = {
        $this: this,
        classOfCurrentTag: "on"
      };
      var settings = $.extend(defaults, options);
      var customPPT = new CustomPPT(settings);
      customPPT.initialize();
    }
  }

  function CustomPPT(st) {
    this.$this = st.$this;
    this.classOfCurrentTag = st.classOfCurrentTag;
    this.timer = null;
  }
  
  CustomPPT.prototype = {
    
    initialize: function() {
      this.setTag();
      this.automaticPlay();
      this.bindEvents();
    },
    
    setTag: function() {
      this.$this.find("ul:eq(0) li").each(function(i) {
        $(this).attr("tag", i);
      });
      this.$this.find("ul:eq(1) li").each(function(i) {
        $(this).attr("tag", i);
      });
    },
    
    automaticPlay: function() {
      var tThis = this;
      this.timer = setInterval(function() {
        tThis.moveToNext();
      }, 3000);
    },
    
    moveToNext: function() {
      var cur = parseInt(this.$this.find("ul:eq(1) li[class='"+this.classOfCurrentTag+"']").attr("tag"), 10);
      var next = -1;
      if((cur+1)==this.$this.find("ul:eq(1) li").length) {
        next = 0;
      } else {
        next = cur + 1;
      }
      this.$this.find("ul:eq(0) li[tag='"+cur+"']").removeClass(this.classOfCurrentTag);
      this.$this.find("ul:eq(0) li[tag='"+next+"']").addClass(this.classOfCurrentTag);
      this.$this.find("ul:eq(1) li[tag='"+cur+"']").removeClass(this.classOfCurrentTag);
      this.$this.find("ul:eq(1) li[tag='"+next+"']").addClass(this.classOfCurrentTag);
    },
    
    bindEvents: function() {
      var tThis = this;
      this.$this.find("ul:eq(1) li").bind("mouseover", function(e) {
        var cur = parseInt($(e.currentTarget).attr("tag"), 10);
        clearInterval(tThis.timer);
        tThis.timer = null;
        tThis.$this.find("ul:eq(0) li").removeClass(tThis.classOfCurrentTag);
        tThis.$this.find("ul:eq(0) li[tag='"+cur+"']").addClass(tThis.classOfCurrentTag);
        tThis.$this.find("ul:eq(1) li").removeClass(tThis.classOfCurrentTag);
        tThis.$this.find("ul:eq(1) li[tag='"+cur+"']").addClass(tThis.classOfCurrentTag);
      });
      this.$this.find("ul:eq(1) li").bind("mouseout", function() {
        tThis.automaticPlay();
      });
    }
    
  }
  
  $.fn.customPPT = function(method) {
    if(methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error( 'No '+method+' Method.' );
    }
  };

})(jQuery);