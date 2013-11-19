
/*
 * TimeTrack
 *
 * Last modified by Liber 2012-11-22
 * 
 * https://github.com/Mystist/timetrack
 *
 */
(function( $ ){

	var DIALOGWIDTH = 300, DIALOGHEIGHT = 103, DIALOGADDHEIGHT = 225;
	var colorLib = [];
	var colorLibColor = ["#99CCFF", "#CC9933", "#336666", "#666666", "#CCCC33", "#336633", "#990033", "#FFCC99", "#333366", "#669999", "#996600", "#993333", "#CC9966", "#CC99CC", "#663366", "#663300"];
	var colorLibBlue = ["#0071B1", "#008ACC", "#00558D", "#006EA4", "#3187BD", "#55A2D8", "#00507D", "#2F6A96", "#4C86B2", "#1D4F73", "#5C82A3", "#003963", "#003757", "#2E4960", "#697E93", "#737C86", "#3D4855"];
	var colorLibGrey = ["#A6928B", "#4E4E4D", "#5E5E5C", "#757574", "#888986", "#9C9D9B", "#B0B0AE", "#BBBCBB", "#CACBC8", "#E0E2DF"];
	var colorLibOrange = ["#DC7743", "#D67835", "#C28500", "#C1865A", "#B06007", "#C28500", "#AA8D04", "#9F6D0D"];
	var colorLibGreen = ["#003B22", "#00714D", "#223129", "#186D50", "#3E6B55", "#70A087", "#52665A", "#3D6878", "#00907F", "#1C524C"];
	colorLib = colorLibBlue;
	var curColor = colorLib.slice();				//传说中的数组复制
	
	var tt = null;									//timetrack对象
		
	var methods = {

		init : function(options) {

			var eventListDefault = [];				//事件集合
			var defaults = {
				name : 'Someone',					//timetack的名称
				title : '',							//timetack的标题
				bgColor : '#3a3a3a',				//背景颜色
				perTimeWidth : 80,					//时间粒度的宽度
				perTimeHeight : 60,					//时间粒度的高度
				startTime : '2012-01-01 00:00:00',	//开始时间
				endTime   : '2012-02-01 23:59:59',	//结束时间
				eventList : eventListDefault,		//事件集合
				type : 'day'						//类型：hour、day、month、year
			}
			var $this = this;
			
			/*--事件委托--*/
			boxEventDelegate($this);
			helperInputMust($this);
			/*------------*/
			
			var st = $.extend( true, defaults, options );
			tt = new Timetrack(st);					//初始化Timetrack对象
			tt.htmlInit($this);						//初始化页面
			tt.dialogInit($this);					//初始化对话框
			tt.reBuildInit(st, $this);				//初始化时间粒度按钮

		},
		
		addEvent : function() {
		
			return tt.addEvent();
			
		},
		
		destory : function() {
		
			this.children().remove();
			tt = null;
		
		}
	}
	
	function Timetrack(st) {
		this.name = st.name;														//插件的名称
		this.title = st.title;														//插件的标题
		this.bgColor = st.bgColor;													//插件的背景颜色
		this.viewHeight = 0;														//view部分的高度（view部分与line部分见Div类名结构）
		this.perTimeWidth = st.perTimeWidth;										//时间粒度的宽度
		this.perTimeHeight = st.perTimeHeight;										//时间粒度的高度
		this.width = 0;																//主体部分的宽度
		this.height = st.height;													//插件的高度
		this.headAddedHeight = 0;													//头部补充层的高度
		this.startTime = new Date( Date.parse(st.startTime.replace(/-/g, "/")) );	//开始时间
		this.endTime = new Date( Date.parse(st.endTime.replace(/-/g, "/")) );		//结束时间
		this.eventList = $.extend( true, [], st.eventList );						//事件列表
		this.viewStr = '';															//上部的类名为m-view-group的div里面的内容
		this.lineStr = '';															//下部的类名为m-line-group的div里面的内容
		this.type = st.type;														//显示类型，时、天、月、年
		this.$emptyBoxColumn = null;												//默认生成的列元素，通过空BOX填充
		this.c = 0;																	//当前宽度下，能显示的时间元素的个数
		this.curTime = new Date( Date.parse(st.startTime.replace(/-/g, "/")) );		//拖动过程中，已显示时间的位置
		this.splitedEventList = [];													//拆分持续事件为单一事件之后的容器
	}
	
	Timetrack.prototype = {
	
		constructor : Timetrack,
		
		htmlInit : function($this) {
		
			getDefaultEvents.call(this, this.eventList, $this);
			
			$this.append('<div class="m-title">'+this.title+'</div><div class="m-placement" ><div id="m-drag" onselectstart="return false" ><div style="height: '+this.headAddedHeight+'px;"></div></div></div>')
				.append(drawBottom.call(this, this.startTime, this.endTime))															//生成页面底部部分
				.children()
				.eq(1)
				.children().eq(0)
				.append(drawView(this.width, this.viewHeight))																			//补充view部分框架
				.append(drawLine(this.width));																							//补充line部分框架
				$(".m-placement").attr("style", "height: "+(this.viewHeight+45+this.headAddedHeight)+"px; background-color: "+this.bgColor+" ");				//设置页面的高度，45为line部分的高度

			drawHiddenDivAndDoDelegate(this.eventList, this.viewHeight);
			drawTimeLine.call(this, this.startTime);

			var tThis = this;
			var dragCoef = -1;
			var bodyWidth = $this.width();
			var $viewGroup = $(".m-view-group");
			var $lineGroup = $(".m-line-group");
			
			$("#m-drag").draggable({
				distance : 20, 
				axis : "x", 
				cursor : "move",
				revert : false,
				drag: function(event, ui) {

					/*
					var leftTemp = 0;
					leftTemp = (parseInt($("#m-drag").width()) - parseInt($("#timetrack").width()))*(-1);
					
					if(ui.position.left > 0) {
						ui.originalPosition.left = 0;
						$("#m-drag").draggable({ revert: true });
					} else if(ui.position.left < leftTemp  ) {
						ui.originalPosition.left = leftTemp;
						$("#m-drag").draggable({ revert: true });
					} else {
						$("#m-drag").draggable({ revert: false });
					}
					*/
					
					if(ui.originalPosition.left > ui.position.left) {						//目标左移

						//滑到body的宽*n的距离之后，加载之后的BOX列，删除左边的BOX列。-dragCoef-1为目标左移时元素增加的次数。Math.ceil(tThis.width / bodyWidth) -3 为左移时元素最多能增加的次数
						if( (ui.position.left+bodyWidth) / bodyWidth <= dragCoef && (-dragCoef-1) < (Math.ceil(tThis.width / bodyWidth)-3) ) {

							tThis.viewStr = '';
							tThis.lineStr = '';

							getBoxColumn.call(tThis, addNByDateType(tThis.curTime, tThis.type, tThis.c), $(tThis.$emptyBoxColumn));
							
							tt.eventInit(1);
							
							$viewGroup.css({
								"position" : "absolute",
								"left" : -1*(ui.position.left+bodyWidth),
								"width" : $viewGroup.width() - bodyWidth
							}).children().slice(0, tThis.c).remove();
							
							$lineGroup.css({
								"position" : "absolute",
								"left" : -1*(ui.position.left+bodyWidth),
								"width" : $lineGroup.width() - bodyWidth
							}).children().slice(0, tThis.c).remove();;
							
							dragCoef--;
						}
						
					} else if(ui.originalPosition.left < ui.position.left) {				//目标右移
						
						//滑到元素的宽*n的距离之后，加载之前的BOX列，删除之后的BOX列。分子应在拖动时在0-body的宽内变化。-dragCoef-1为目标左移时元素增加的次数
						if( ( (ui.position.left+bodyWidth) + bodyWidth*(-dragCoef-1) ) / bodyWidth >= 1 && (-dragCoef-1) >= 1 ) {
							
							tThis.viewStr = '';
							tThis.lineStr = '';
							
							getBoxColumn.call(tThis, calNByDateType(tThis.curTime, tThis.type, -1*tThis.c*3), $(tThis.$emptyBoxColumn));
							addNByDateType(tThis.curTime, tThis.type, -1*tThis.c)
							
							tt.eventInit(-1);
							
							$viewGroup.css({
								"position" : "absolute",
								"left" : -1*(ui.position.left+bodyWidth),
								"width" : $viewGroup.width() + bodyWidth
							}).children().slice(-tThis.c).remove();
							
							$lineGroup.css({
								"position" : "absolute",
								"left" : -1*(ui.position.left+bodyWidth),
								"width" : $lineGroup.width() + bodyWidth
							}).children().slice(-tThis.c).remove();;

							dragCoef++;
						}
					}
					
				}
			}).css("left", tThis.width > bodyWidth ? -bodyWidth : 0 );
			
		},
		
		eventInit : function(direction) {
			
			var eventList = this.splitedEventList;
			
			var tThis = this;
			
			var $viewStr = $(tThis.viewStr).css("width", this.perTimeWidth);
			
			for(var i=0, len=eventList.length; i<len; i++) {				//遍历事件列表以及不显示的box列表，如果id匹配，则生成一个box
			
				var $currentEle = "", event = eventList[i];

				$viewStr.each(function() {
					
					var $viewStrThis = $(this);

					if( formatDateTime( event.time, tThis.type, "shortString" ) === $viewStrThis.attr("id") ) {

						//var numbers = getNumbersByDateType(event.time, event.etime, tThis.type) + 1;		//box的事件分为一般事件和持续事件，通过事件的开始时间和结束时间来计算出该box事件的类型
						
						var colLen = $viewStrThis.children().length-1;
						
						if( !event.isLongEvent ) {						//一般事件
							$viewStrThis.find(".boxout").eq(colLen-event.no+1).attr("class", "boxout");
							$viewStrThis.find(".boxline").eq(colLen-event.no+1).attr("class", "boxline");
							$currentEle = $viewStrThis.find(".boxout").eq(colLen-event.no+1).find(".nobox").attr("class", "box")
								.html(event.title)
								.attr("eventid", typeof event.id==="undefined"?"unkownId":event.id)
								.attr("title", event.content)
								.attr("time", event.time)
								.attr("content", event.content)
								.attr("etime", event.etime)
								.attr("bgcolor", event.bgcolor)
								.attr("eventtitle", event.title)
								.attr("otime", event.time)
								.attr("name", "box-event-boxno-"+event.boxNo)
								.css({
									"width": (tThis.perTimeWidth-2-7)+"px",
									"background-color": event.bgcolor,
									"height" : tThis.perTimeHeight - 6
								});
						} else {										//持续事件
							var eventPos = "";
							var eventWidth = 0;
							var eventTitle = event.title;
							if(formatDateTime(event.otime, tThis.type) === event.time) {
								eventPos = "first";
								$viewStrThis.find(".boxline").eq(colLen-event.no+1).attr("class", "boxline");
								eventWidth = tThis.perTimeWidth-1;
							} else if(formatDateTime(event.etime, tThis.type) === event.time) {
								eventPos = "last";
								eventTitle="";
								eventWidth = tThis.perTimeWidth-2;
							} else {
								eventPos = "mid";
								eventTitle="";
								eventWidth = tThis.perTimeWidth;
							}
							$viewStrThis.find(".boxout").eq(colLen-event.no+1).attr("class", "boxout");
							$currentEle = $viewStrThis.find(".boxout").eq(colLen-event.no+1).find(".nobox").attr("class", "box long "+eventPos+"")
								.html(eventTitle)
								.attr("eventid", typeof event.id==="undefined"?"unkownId":event.id)
								.attr("title", event.content)
								.attr("time", event.time)
								.attr("content", event.content)
								.attr("etime", event.etime)
								.attr("bgcolor", event.bgcolor)
								.attr("eventtitle", event.title)
								.attr("otime", event.otime)
								.attr("name", "box-event-boxno-"+event.boxNo)
								.css({
									"width": (eventWidth)+"px",
									"background-color": event.bgcolor,
									"height" : tThis.perTimeHeight
								});
							$viewStrThis.find(".boxout").eq(colLen-event.no+1).append("<div class='nobox'></div>");
						}

						return false;						
					}
					
				});
				
			}
			
			tThis.viewStr = "";
			
			$viewStr.each(function() {
				tThis.viewStr += this.outerHTML;			
			});
			
			if(direction==1) {
				$(".m-view-group").append(tThis.viewStr);
				$(".m-line-group").append(tThis.lineStr);
			} else if(direction==-1) {
				$(".m-view-group").prepend(tThis.viewStr);
				$(".m-line-group").prepend(tThis.lineStr);
			}			
			
			tThis.viewStr = "";
			tThis.lineStr = "";
			
		},
		
		dialogInit : function($this) {										//生成对话框。计算其显示的位置。绑定辅助函数事件，增强用户体验
			var topPos =(this.viewHeight - DIALOGHEIGHT) * 0.382;			//0.382 由 1-0.618 得到。0.618是黄金分割 的比例值
			var topPosAdd =(this.viewHeight - DIALOGADDHEIGHT) * 0.382;
			var leftPos = ($(".m-placement").width() - DIALOGWIDTH) / 2;
			var tThis = this;
			
			$this.find(".m-placement").append('<form name="m-dialog-form" class="m-dialog-form" ><div id="m-dialog" class="m-dialog">'+
				'<div class="m-dialog-head">'+
				'<div class="m-dialog-title"></div>'+
				'<a href="javascript:;" onclick="$(this).parent().parent().hide();"><span class="m-close"></span></a>'+
				'<a style="margin-right: 5px;" class="m-event-edit" href="javascript:;" ><span class="m-event-edit"></span></a>'+
				'</div>'+
				'<div class="m-dialog-body"><div class="time"></div><div class="content"></div></div></div></form>')
				.children().last().children().attr("style", "top: "+topPos+"px; left: "+leftPos+"px");
				
			$this.find(".m-placement").append('<form name="m-dialog-add-form" class="m-dialog-add-form" ><div id="m-dialog-add" class="m-dialog add">'+
				'<div class="m-dialog-head">'+
				'<div class="m-dialog-title">添加事件</div>'+
				'<a href="javascript:;" onclick="$(this).parent().parent().hide();" ><span class="m-close" ></span></a>'+
				'</div>'+
				'<div class="m-dialog-body">'+
				'<ul>'+
				'<li style="display: none;"><label>ID：</label><input name="id" type="text" value="unknow" /></li>'+
				'<li><label>标题：</label><input name="title" class="m-helper-input-tip m-helper-input-must" type="text" value="请填写标题"/><span class="red"> *</span></li>'+
				'<li><label>发生时间：</label><input name="time" class="m-helper-input-tip m-helper-input-must" type="text" value="请填写事件发生的时间"/><span class="red"> *</span></li>'+
				'<li><label>内容：</label><input name="content" class="m-helper-input-tip" value="请填写内容，不填则为空" /></li>'+
				'<li><label>背景颜色：</label><input name="bgcolor" class="m-helper-input-tip" type="text" value="不填则为默认"/></li>'+
				'<li><label>结束时间：</label><input name="etime" class="m-helper-input-tip" type="text" value="请填写事件结束的时间"/></li>'+
				'<li class="m-button"><div class="m-helper-input-must-ok">确定</div><div class="m-helper-input-must-cancel" href="javascript:;" onclick="$(this).parent().parent().parent().parent().hide();" >关闭</div></li>'+
				'</ul>'+
				'</div>'+
				'</div></form>')
				.children().last().children().attr("style", "top: "+topPosAdd+"px; left: "+leftPos+"px");			
		},
		
		addEvent : function() {
			return $("form.m-dialog-add-form").serialize();
		},
		
		reBuildInit : function(st, $this) {			//点击了页面之后的时间粒度按钮之后，销毁之前的timetrack，根据新的参数生成新的timetrack
			
			var mySettings = {};
			var ttet = $.extend(true, [], tt.eventList);
			var stet = $.extend(true, [], st.eventList);
			
			$(".m-zoom li div").unbind("click").bind("click", function() {
			
				switch(this.innerHTML) {
					case "年" :
						mySettings = { type : "year", eventList : ttet }
						doReBuild(st, $this, mySettings);
						break;
					case "月" :
						mySettings = { type : "month", eventList : ttet }
						doReBuild(st, $this, mySettings);
						break;
					case "日" :
						mySettings = { type : "day", eventList : ttet }
						doReBuild(st, $this, mySettings);
						break;
					case "时" :
						mySettings = { type : "hour", eventList : ttet }
						doReBuild(st, $this, mySettings);
						break;
					/*
					case "All" :
						mySettings = { type : "all" }
						showAll(st, $this);
						break;
					*/
					case "灰" :
						colorLib = colorLibGrey.slice();
						curColor = colorLibGrey.slice();
						mySettings = { eventList : stet }
						doReBuild(st, $this, mySettings);
						break;
					case "蓝" :
						colorLib = colorLibBlue.slice();
						curColor = colorLibBlue.slice();
						mySettings = { eventList : stet }
						doReBuild(st, $this, mySettings);
						break;
					case "黄" :
						colorLib = colorLibOrange.slice();
						curColor = colorLibOrange.slice();
						mySettings = { eventList : stet }
						doReBuild(st, $this, mySettings);
						break;
					case "绿" :
						colorLib = colorLibGreen.slice();
						curColor = colorLibGreen.slice();
						mySettings = { eventList : stet }
						doReBuild(st, $this, mySettings);
						break;
					case "R" :
						colorLib = colorLibColor.slice();
						curColor = colorLibColor.slice();
						mySettings = { eventList : stet }
						doReBuild(st, $this, mySettings);
						break;
					default : ;
				}
			});
			
			$(".m-oper li div").unbind("click").bind("click", function() {
			
				switch(this.firstChild.className) {
					case "add" :
						$("form").children().hide();
						$("#m-dialog-add").show();
						$("#m-dialog-add .m-dialog-title").html("添加事件");
						$("#m-dialog-add .m-dialog-head").css("background-color", "#2191C0");
						$("#m-dialog-add input[name='id']").val("unkownid");
						$("#m-dialog-add input[name='title']").val("请填写标题");
						$("#m-dialog-add input[name='time']").val("请填写事件发生的时间");
						$("#m-dialog-add input[name='content']").val("请填写内容，不填则为空");
						$("#m-dialog-add input[name='bgcolor']").val("不填则为默认");
						$("#m-dialog-add input[name='etime']").val("请填写事件结束的时间");
						helperInputTip.call(tt);
						break;
					case "print" :
						window.print();
						break;
					case "plus" :
						mySettings = { perTimeWidth : tt.perTimeWidth+10 }
						doReBuild(st, $this, mySettings);
						break;
					case "minus" :
						if(tt.perTimeWidth-10 > 30) {
							mySettings = { perTimeWidth : tt.perTimeWidth-10 }
							doReBuild(st, $this, mySettings);
						}
						break;
					default : ;
				}				
			});

		}
		
	}
	
	//reBuild执行函数
	function doReBuild(st, $this, mySettings) {
	
		var settings = $.extend( st, mySettings );
		
		$this.children().remove();
		tt = null;
		
		tt = new Timetrack(settings);

		tt.htmlInit($this);
		tt.dialogInit($this);
		tt.reBuildInit(st, $this);
		
	}
	
	/*
	//在当前宽度下显示所有内容
	function showAll(st, $this) {
	
		var oldPerTimeWidth = st.perTimeWidth;
		var totalWidth = tt.width;
		var thisWidth = $this.width();
		mySettings = { perTimeWidth : (tt.perTimeWidth * thisWidth / totalWidth).toFixed(0) }
		
		var settings = $.extend( st, mySettings );
		
		$this.children().remove();
		tt = null;
		
		tt = new Timetrack(settings);
		tt.htmlInit($this);
		tt.dialogInit($this);
		st.perTimeWidth = oldPerTimeWidth;
		tt.reBuildInit(st, $this);
		$("#m-drag").css("left", 0);		
	}
	*/
	
	//获取随机颜色的函数
	function getMyRandomColor() {
		var pos = Math.floor(Math.random()*curColor.length);
		var color = curColor[pos];
		curColor.splice(pos, 1);
		if(curColor.length===0) {
			curColor = colorLib.slice();
		}
		return color;
	}
	
	/*
	//按顺序获取颜色
	function getNextColor() {	
		var color = curColor[0];
		curColor.splice(0, 1);
		if(curColor.length===0) {
			curColor = colorLib.slice();
		}		
		return color;
	}
	*/
	

	//计算timetrack的宽度
	function calWidth(type, startTime, endTime, perTimeWidth ) {
		return perTimeWidth * ( getNumbersByDateType(startTime, endTime, type) + 1 );
	}
	
	//生成上面部分
	function drawView(width, viewHeight) {
		var s = $('<div class="m-view-group" style="width: '+width+'px " ></div>');
		return $('<div class="m-view" style="height: '+viewHeight+'px "></div>').append(s);
	}
	
	//生成下面部分
	function drawLine(width) {
		var s = $('<div class="m-line-group" style="width: '+width+'px " ></div>');
		return $('<div class="m-line"></div>').append(s);
	}
	//生成底部
	function drawBottom() {
	
		var s1 = '<span class="time">时间轴区间：'+formatDateTime(arguments[0], this.type, "shortString")+' 至 '+formatDateTime(arguments[1], this.type, "shortString")+'</span>';
		var s2 = '<ul class="m-oper"><li><div class="sp"><p class="minus"></p></div></li><li><div class="sp"><p class="plus"></p></div></li><li><div class="sp" onclick="window.print();"><p class="print"></p></div></li><li><div class="sp"><p class="add"></p></div></li><li class="li-blank">&nbsp;</li></ul>';
		var s3 = '<ul class="m-zoom"><li><div class=\''+(this.type=="year"?"on sp":"sp")+'\'>年</div></li><li><div class=\''+(this.type=="month"?"on":"")+'\' >月</div></li><li><div class=\''+(this.type=="day"?"on":"")+'\'>日</div></li><li><div class=\''+(this.type=="hour"?"on":"")+'\'>时</div></li><li class="li-blank">&nbsp;</li></ul>';
		var s4 = '<ul class="m-zoom"><li><div class="sp grey">灰</div></li><li><div class="green">绿</div></li><li><div class="blue">蓝</div></li><li><div class="orange">黄</div></li><li><div class="color">R</div></li></ul>';
	
		return $('<div class="m-bottom"></div>').append(s1).append(s2).append(s3).append(s4);	
	}
	
	//生成时间轴元素集
	function drawTimeLine(startTime) {
		
		getBoxColumn.call(this, startTime, this.$emptyBoxColumn);
		getBoxColumn.call(this, addNByDateType(this.curTime, this.type, this.c), this.$emptyBoxColumn);
		getBoxColumn.call(this, addNByDateType(this.curTime, this.type, this.c), this.$emptyBoxColumn);
		
		tt.eventInit(1);
		
	}
	
	//加载BOX列
	function getBoxColumn(startTime, viewEle) {
	
		var curTime = new Date( startTime.valueOf() );
		
		//var c = getNumbersByDateType(startTime, endTime, this.type) + 1;	//该函数计算出传入时间区间内出现时间粒度的次数。根据该值就可以知道横轴共需要多少列。
		
		for(var i=0; i<this.c; i++) {										//遍历，生成横轴的所有列。
			
			var lineEle = formatDateTime(curTime, this.type, "shortString");
			
			this.lineStr += '<div class="m-line-item" style="width: '+(this.perTimeWidth-1)+'px ">'+lineEle+'</div>';		//生成line的内容
			
			viewEle.children().attr("id", lineEle);							//将format之后的日期作为box的id
			
			this.viewStr += viewEle.html();									//生成view的内容
			
			curTime = addNByDateType(curTime, this.type);					//当前的时间+1时间粒度
		}
	
	}
	
	//事件布局初始化
	function getDefaultEvents(eventList, $this) {
	
		/*--如果传入的结束时间小于事件的最大结束时间，则改之--*/
		var maxEventTime = "";
		for(var i=0; i<eventList.length; i++ ) {
			if(eventList[i].etime>maxEventTime) {
				maxEventTime = eventList[i].etime;
			}
		}
		maxEventTime = formatDateTime(maxEventTime, this.type, "Date");
		if(this.endTime<maxEventTime) {
			this.endTime = maxEventTime;
		}
		/*----*/

		this.width = calWidth(this.type, this.startTime, this.endTime, this.perTimeWidth);		//计算timetrack的宽度
	
		var AnonFunc = createComparisonFunction("time");
		var eList = eventList.sort(AnonFunc);						//将传入的事件对象列表按time的值排序
		AnonFunc = null;
		
		var maxTimes = 0;											//在单位时间粒度下事件的最多出现的次数
		var tempTimes = 1;
		for(var i=0,len=eList.length-1; i<len; i++) {				//遍历事件列表，计算出单位时间粒度下事件最多的个数
		
			if( formatDateTime( eList[i].time, this.type ) === formatDateTime( eList[i+1].time, this.type ) ) {
				eList[i].no = tempTimes;
				tempTimes++;
				if(tempTimes > maxTimes) {
					maxTimes = tempTimes;
				}
			} else {
				eList[i].no = tempTimes;	//no属性指示原事件在当前列中的位置。从下自上从1开始递增。
				tempTimes = 1;
			}
			eList[i].boxNo = i;				//boxNo属性指示原事件的序列位置，从1开始递增。
		}
		eList[eList.length-1].no = tempTimes;
		eList[eList.length-1].boxNo = i;

		//maxTimes = maxTimes < 3 ? 3 : maxTimes;
		//maxTimes++;

		while((this.height-45) < (maxTimes * (this.perTimeHeight+15) + 15)) {
			this.perTimeHeight -= 1;
		}
		
		if( (this.height-45) > (maxTimes * (this.perTimeHeight+15) + 15) ) {
			this.headAddedHeight = this.height-45 - (maxTimes * (this.perTimeHeight+15) + 15);
		}
		
		this.viewHeight = (maxTimes * (this.perTimeHeight+15) + 15);
		
		var viewEleOut = $('<div class="m-view-item"></div>');
		var perViewEle = '';
		
		for(var i = 0; i < maxTimes; i++) {						//生成这些不显示的box
			perViewEle += '<div class="boxout none" style="height: '+this.perTimeHeight+'px"><div class="boxline none" style="height: '+(this.perTimeHeight+15)+'px"></div><div class="nobox"></div></div>';
		}
		
		this.$emptyBoxColumn = $('<div></div>').append(viewEleOut.append(perViewEle)[0]);
		
		this.c = getDefaultTimeSpan($this, this.perTimeWidth);
		
		getEventListColor(eventList);
		
		splitLongEvent.call(this);
	}
	
	/*--生成隐藏的div，利用其实现box自定义事件委托--*/
	function drawHiddenDivAndDoDelegate(eList, height) {
		for(var i=0,len=eList.length; i<len; i++) {
			if( typeof eList[i].callback==="function" ) {
				var callBack = eList[i].callback;
				$(".m-view-group").wrap('<div style="height: '+height+'px;"></div>').parent()			//难道事件冒泡只冒parent()啊？？？要不然下面那句怎么不行呢！
				//$('<div style="display:none;"></div>').appendTo($(".m-view"))
					.delegate("div[name='box-event-boxno-"+eList[i].boxNo+"']", "click", callBack);
			}
		}
	}

	
	//根据插件宽度得到默认能显示的时间区间个数
	function getDefaultTimeSpan($this, perTimeWidth) {
	
		return Math.ceil( $this.width() / perTimeWidth );
	
	}
	
	//得到时间区间内的 时/天/月/年 个数
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
	
	//时/天/月/年 加 n
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
	
	//时/天/月/年 加 n，不改变原time的值
	function calNByDateType(time, type) {
		var myTime = new Date( time.valueOf() );
		var n = 1;
		if(arguments[2]!==undefined) {
			n=arguments[2];
		}
		if(type==="hour") {
			myTime.setHours( myTime.getHours() + n );
		} else if(type==="day") {
			myTime.setDate( myTime.getDate() + n );
		} else if(type==="month") {
			myTime.setMonth( myTime.getMonth() + n );
		} else if(type==="year") {
			myTime.setFullYear( myTime.getFullYear() + n );
		}
		
		return myTime;
	}
	
	//日期格式化函数
	function formatDateTime(time, type, resultType) {
		var timeStr = "";
		var len = 10;
		if(typeof time === "string") {			
			time = new Date( Date.parse(time.replace(/-/g, "/")) );
		}
		switch(type) {
			case "year" :
				timeStr = time.getFullYear() + "-01" + "-01" + " " + "00" + ":00" + ":00";
				len = 4;
				break;
			case "month" :
				timeStr = time.getFullYear() + "-" + dateAddZero((time.getMonth()+1).toString()) + "-01" + " " + "00" + ":00" + ":00";
				len = 7;
				break;
			case "day" :
				timeStr = time.getFullYear() + "-" + dateAddZero((time.getMonth()+1).toString()) + "-" + dateAddZero(time.getDate().toString()) + " " + "00" + ":00" + ":00";
				len = 10;
				break;
			case "hour" :
				timeStr = time.getFullYear() + "-" + dateAddZero((time.getMonth()+1).toString()) + "-" + dateAddZero(time.getDate().toString()) + " " + dateAddZero(time.getHours().toString()) + ":00" + ":00";
				len = 13;
				break;
			case "minute" :
				timeStr = time.getFullYear() + "-" + dateAddZero((time.getMonth()+1).toString()) + "-" + dateAddZero(time.getDate().toString()) + " " + dateAddZero(time.getHours().toString()) + ":" + dateAddZero(time.getMinutes().toString()) + ":00";
				len = 16;
				break;
			case "second" :
				timeStr = time.getFullYear() + "-" + dateAddZero((time.getMonth()+1).toString()) + "-" + dateAddZero(time.getDate().toString()) + " " + dateAddZero(time.getHours().toString()) + ":" + dateAddZero(time.getMinutes().toString()) + ":" + dateAddZero(time.getSeconds().toString());
				len = 19;
				break;
			default :
				timeStr = time.getFullYear() + "-" + dateAddZero((time.getMonth()+1).toString()) + "-" + dateAddZero(time.getDate().toString()) + " " + "00" + ":00" + ":00";
		}
		if(resultType==="Date") {
			return new Date( Date.parse(timeStr.replace(/-/g, "/")) );
		} else if(resultType==="shortString") {
			return timeStr.slice(0, len);
		} else {
			return timeStr;
		}
	}
	
	//日期补零函数
	function dateAddZero(str) {
		str = '0' + str;
		return str.length >= 3 ? str.slice(1, 3) : str;
	}
	
	//对象比较函数
	function createComparisonFunction(propertyName) {
		return function(object1, object2) {
			var value1 = object1[propertyName];
			var value2 = object2[propertyName];			
			if(value1 < value2) {
				return -1;
			} else if(value1 > value2) {
				return 1;
			} else {
				return 0;
			}			
		};
	}
	
	//m-helper-input-tip
	function helperInputTip() {

		var tThis = this;
		var oldValue = "";
		var oldColor = "#000000";
	
		var focusFunc = function() {
			oldValue = this.value;
			this.value = "";
		}
		
		var blurFunc = function() {
			this.value = oldValue;
		}
		
		var keydownFunc = function(e) {
			if(e.keyCode!=9) {
				$(this).css("color", oldColor)
				.unbind("focus blur keydown");
			}
		}

		$(".m-helper-input-tip")
			.unbind("focus blur keydown")
			.bind("focus", focusFunc)
			.bind("blur", blurFunc)
			.bind("keydown", keydownFunc)
			.css("color", "#CCC");
	}
	
	//m-helper-input-must
	function helperInputMust($this) {

		var oldValue = "";
		var oldColor = "#000000";
	
		var focusFunc = function() {
			oldValue = this.value;
			this.value = "";
		}
		
		var blurFunc = function() {
			this.value = oldValue;
		}
		
		var keydownFunc = function(e) {
			if(e.keyCode!=9) {
				$(this).css("color", oldColor)
				.unbind("focus blur keydown");
			}
		}
	
		$this.delegate(".m-helper-input-must-ok", "click", function() {
		
			$(this).parentsUntil("form").find("input").each(function() {
			
				if( !( $(this).css("color") == "rgb(0, 0, 0)" || $(this).css("color") == "#000000" ) ) {
					this.value = "";
				}
				
			});
			
			var f = true;
			
			$(this).parentsUntil("form").find(".m-helper-input-must").each(function() {
				if($.trim(this.value) === "") {
					this.value = "这是必填项";
					$(this)
						.unbind("focus blur keydown")
						.bind("focus", focusFunc)
						.bind("blur", blurFunc)
						.bind("keydown", keydownFunc)
						.css("color", "red");
					f = false;
				}
			});
			
			if(f) {
			
				tt.addEvent();
				
				$(".m-helper-input-must-cancel").click();
				
			}
		
		});
	
	}
	
	//持续事件拆分函数
	function splitLongEvent() {
		var eventList = this.eventList;
		for(var i = 0; i < eventList.length; i++) {
			var numbers = getNumbersByDateType(eventList[i].time, eventList[i].etime, this.type) + 1;
			if(numbers>1) {
				var t = 0;
				while(numbers>=1) {
					var eventTemp = $.extend( true, {}, eventList[i] );
					eventTemp.isLongEvent = true;
					eventTemp.otime = eventTemp.time;
					var et = formatDateTime(eventTemp.time, this.type, "Date");
					addNByDateType(et, this.type, t);
					eventTemp.time = formatDateTime(et, this.type);
					this.splitedEventList.push(eventTemp);
					t++;
					numbers--;
				}

			} else {
				this.splitedEventList.push(eventList[i]);
			}
		}
	}
	
	//获取eventList颜色
	function getEventListColor(eventList) {
		for(var i=0; i<eventList.length; i++) {
			if(eventList[i].bgcolor===undefined) {
				eventList[i].bgcolor = getMyRandomColor();
			}
		}
	}
	
	//Box事件委托
	function boxEventDelegate($this) {
		
		var callBackDefault = function() {
			var $boxThis = $(this), $mdialog = $("#m-dialog"), $mdialogadd = $("#m-dialog-add");
			$mdialog.hide();
			$mdialogadd.hide();
			$mdialog
				.children().first()
				.css("background-color", $boxThis.css("background-color"))
				.children().first()
				.html(""+$boxThis.attr("eventtitle")+"")
				.parent().parent().children().last()
				.children().first()
				.html($boxThis.attr("otime") + " 至 " + $boxThis.attr("etime"))
				.parent().children().last()
				.html($boxThis.attr("content")).attr("etime", $boxThis.attr("etime")).attr("bgcolor", $boxThis.attr("bgcolor"));
			$mdialog.show();
			
			$mdialog.find(".m-event-edit").unbind("click").bind("click", function() {
				$mdialog.hide();
				$(".m-helper-input-tip").unbind("focus blur keydown");				
				$mdialogadd.find("input").css("color", "#000000");
				$mdialogadd.find(".m-dialog-title").html("编辑事件");
				$mdialogadd.find(".m-dialog-head").css("background-color", $boxThis.css("background-color"));
				$mdialogadd.find("input[name='id']").val($boxThis.attr("eventid"));				
				$mdialogadd.find("input[name='title']").val($boxThis.attr("eventtitle"));
				$mdialogadd.find("input[name='time']").val($boxThis.attr("otime"));
				$mdialogadd.find("input[name='content']").val($boxThis.attr("content"));
				$mdialogadd.find("input[name='bgcolor']").val($boxThis.css("background-color"));
				$mdialogadd.find("input[name='etime']").val($boxThis.attr("etime"));
				$mdialogadd.show();
			});
		}
		
		$this.delegate(".box", "click", function() {
			callBackDefault.call(this);
		});

	}
	
	
	$.fn.timetrack = function( method ) {
		if( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ) );
		} else if ( typeof method === 'object' || !method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'No '+method+' method' );
		}
	}

})( jQuery );