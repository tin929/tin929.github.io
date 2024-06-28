(function(){var c;var e=function(){};var d=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"];var b=d.length;var a=(window.console=window.console||{});while(b--){c=d[b];if(!a[c]){a[c]=e}}}());!function(f,c,b,d){var a=function(h,g){this.elem=h,this.$elem=f(h),this.options=g,this.metadata=this.$elem.data("plugin-options"),this.$win=f(c),this.sections={},this.didScroll=!1,this.$doc=f(b),this.docHeight=this.$doc.height()};a.prototype={defaults:{navItems:"a",currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollThreshold:0.5,begin:!1,end:!1,scrollChange:!1},init:function(){return this.config=f.extend({},this.defaults,this.options,this.metadata),this.$nav=this.$elem.find(this.config.navItems),""!==this.config.filter&&(this.$nav=this.$nav.filter(this.config.filter)),this.$nav.on("click.onePageNav",f.proxy(this.handleClick,this)),this.getPositions(),this.bindInterval(),this.$win.on("resize.onePageNav",f.proxy(this.getPositions,this)),this},adjustNav:function(g,e){g.$elem.find("."+g.config.currentClass).removeClass(g.config.currentClass),e.addClass(g.config.currentClass)},bindInterval:function(){var g,e=this;e.$win.on("scroll.onePageNav",function(){e.didScroll=!0}),e.t=setInterval(function(){g=e.$doc.height(),e.didScroll&&(e.didScroll=!1,e.scrollChange()),g!==e.docHeight&&(e.docHeight=g,e.getPositions())},250)},getHash:function(e){return e.attr("href").split("#")[1]},getPositions:function(){var j,h,k,g=this;g.$nav.each(function(){j=g.getHash(f(this)),k=f("#"+j),k.length&&(h=k.offset().top,g.sections[j]=Math.round(h))})},getSection:function(j){var g=null,e=Math.round(this.$win.height()*this.config.scrollThreshold);for(var h in this.sections){this.sections[h]-e<j&&(g=h)}return g},handleClick:function(j){var l=this,h=f(j.currentTarget),k=h.parent(),g="#"+l.getHash(h);k.hasClass(l.config.currentClass)||(l.config.begin&&l.config.begin(),l.adjustNav(l,k),l.unbindInterval(),l.scrollTo(g,function(){l.config.changeHash&&(c.location.hash=g),l.bindInterval(),l.config.end&&l.config.end()})),j.preventDefault()},scrollChange:function(){var h,g=this.$win.scrollTop(),e=this.getSection(g);null!==e&&(h=this.$elem.find('a[href$="#'+e+'"]').parent(),h.hasClass(this.config.currentClass)||(this.adjustNav(this,h),this.config.scrollChange&&this.config.scrollChange(h)))},scrollTo:function(g,e){var h=f(g).offset().top;f("html, body").animate({scrollTop:h},this.config.scrollSpeed,this.config.easing,e)},unbindInterval:function(){clearInterval(this.t),this.$win.unbind("scroll.onePageNav")}},a.defaults=a.prototype.defaults,f.fn.onePageNav=function(e){return this.each(function(){new a(this,e).init()})}}(jQuery,window,document);!function(m){var f={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},g=m(window),h=m(document),k=[],j=g.height(),l=function(){for(var q=g.scrollTop(),w=h.height(),i=w-j,n=q>i?i-q:0,v=0;v<k.length;v++){var t=k[v],o=t.stickyWrapper.offset().top,x=o-t.topSpacing-n;if(x>=q){null!==t.currentTop&&(t.stickyElement.css("position","").css("top",""),t.stickyElement.parent().removeClass(t.className),t.currentTop=null)}else{var r=w-t.stickyElement.outerHeight()-t.topSpacing-t.bottomSpacing-q-n;0>r?r+=t.topSpacing:r=t.topSpacing,t.currentTop!=r&&(t.stickyElement.css("position","fixed").css("top",r),"undefined"!=typeof t.getWidthFrom&&t.stickyElement.css("width",m(t.getWidthFrom).width()),t.stickyElement.parent().addClass(t.className),t.currentTop=r)}}},b=function(){j=g.height()},d={init:function(a){var c=m.extend(f,a);return this.each(function(){var n=m(this),p=n.attr("id"),q=m("<div></div>").attr("id",p+"-sticky-wrapper").addClass(c.wrapperClassName);n.wrapAll(q),c.center&&n.parent().css({width:n.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==n.css("float")&&n.css({"float":"none"}).parent().css({"float":"right"});var r=n.parent();r.css("height",n.outerHeight()),k.push({topSpacing:c.topSpacing,bottomSpacing:c.bottomSpacing,stickyElement:n,currentTop:null,stickyWrapper:r,className:c.className,getWidthFrom:c.getWidthFrom})})},update:l,unstick:function(a){return this.each(function(){var c=m(this);removeIdx=-1;for(var n=0;n<k.length;n++){k[n].stickyElement.get(0)==c.get(0)&&(removeIdx=n)}-1!=removeIdx&&(k.splice(removeIdx,1),c.unwrap(),c.removeAttr("style"))})}};window.addEventListener?(window.addEventListener("scroll",l,!1),window.addEventListener("resize",b,!1)):window.attachEvent&&(window.attachEvent("onscroll",l),window.attachEvent("onresize",b)),m.fn.sticky=function(a){return d[a]?d[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void m.error("Method "+a+" does not exist on jQuery.sticky"):d.init.apply(this,arguments)},m.fn.unstick=function(a){return d[a]?d[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?void m.error("Method "+a+" does not exist on jQuery.sticky"):d.unstick.apply(this,arguments)},m(function(){setTimeout(l,0)})}(jQuery);!function(d){var c={slide:0,delay:5000,loop:!0,preload:!1,preloadImage:!1,preloadVideo:!1,timer:!0,overlay:!1,autoplay:!0,shuffle:!1,cover:!0,color:null,align:"center",valign:"center",firstTransition:null,firstTransitionDuration:null,transition:"fade",transitionDuration:1000,transitionRegister:[],animation:null,animationDuration:"auto",animationRegister:[],slidesToKeep:1,init:function(){},play:function(){},pause:function(){},walk:function(){},slides:[]},b={},a=function(g,f){this.elmt=g,this.settings=d.extend({},c,d.vegas.defaults,f),this.slide=this.settings.slide,this.total=this.settings.slides.length,this.noshow=this.total<2,this.paused=!this.settings.autoplay||this.noshow,this.ended=!1,this.$elmt=d(g),this.$timer=null,this.$overlay=null,this.$slide=null,this.timeout=null,this.first=!0,this.transitions=["fade","fade2","blur","blur2","flash","flash2","negative","negative2","burn","burn2","slideLeft","slideLeft2","slideRight","slideRight2","slideUp","slideUp2","slideDown","slideDown2","zoomIn","zoomIn2","zoomOut","zoomOut2","swirlLeft","swirlLeft2","swirlRight","swirlRight2"],this.animations=["kenburns","kenburnsLeft","kenburnsRight","kenburnsUp","kenburnsUpLeft","kenburnsUpRight","kenburnsDown","kenburnsDownLeft","kenburnsDownRight"],this.settings.transitionRegister instanceof Array==!1&&(this.settings.transitionRegister=[this.settings.transitionRegister]),this.settings.animationRegister instanceof Array==!1&&(this.settings.animationRegister=[this.settings.animationRegister]),this.transitions=this.transitions.concat(this.settings.transitionRegister),this.animations=this.animations.concat(this.settings.animationRegister),this.support={objectFit:"objectFit" in document.body.style,transition:"transition" in document.body.style||"WebkitTransition" in document.body.style,video:d.vegas.isVideoCompatible()},this.settings.shuffle===!0&&this.shuffle(),this._init()};a.prototype={_init:function(){var m,h,g,j="BODY"===this.elmt.tagName,k=this.settings.timer,f=this.settings.overlay,l=this;this._preload(),j||(this.$elmt.css("height",this.$elmt.css("height")),m=d('<div class="vegas-wrapper">').css("overflow",this.$elmt.css("overflow")).css("padding",this.$elmt.css("padding")),this.$elmt.css("padding")||m.css("padding-top",this.$elmt.css("padding-top")).css("padding-bottom",this.$elmt.css("padding-bottom")).css("padding-left",this.$elmt.css("padding-left")).css("padding-right",this.$elmt.css("padding-right")),this.$elmt.clone(!0).children().appendTo(m),this.elmt.innerHTML=""),k&&this.support.transition&&(g=d('<div class="vegas-timer"><div class="vegas-timer-progress">'),this.$timer=g,this.$elmt.prepend(g)),f&&(h=d('<div class="vegas-overlay">'),"string"==typeof f&&h.css("background-image","url("+f+")"),this.$overlay=h,this.$elmt.prepend(h)),this.$elmt.addClass("vegas-container"),j||this.$elmt.append(m),setTimeout(function(){l.trigger("init"),l._goto(l.slide),l.settings.autoplay&&l.trigger("play")},1)},_preload:function(){var f,e;for(e=0;e<this.settings.slides.length;e++){(this.settings.preload||this.settings.preloadImages)&&this.settings.slides[e].src&&(f=new Image,f.src=this.settings.slides[e].src),(this.settings.preload||this.settings.preloadVideos)&&this.support.video&&this.settings.slides[e].video&&(this.settings.slides[e].video instanceof Array?this._video(this.settings.slides[e].video):this._video(this.settings.slides[e].video.src))}},_random:function(e){return e[Math.floor(Math.random()*e.length)]},_slideShow:function(){var e=this;this.total>1&&!this.ended&&!this.paused&&!this.noshow&&(this.timeout=setTimeout(function(){e.next()},this._options("delay")))},_timer:function(f){var e=this;clearTimeout(this.timeout),this.$timer&&(this.$timer.removeClass("vegas-timer-running").find("div").css("transition-duration","0ms"),this.ended||this.paused||this.noshow||f&&setTimeout(function(){e.$timer.addClass("vegas-timer-running").find("div").css("transition-duration",e._options("delay")-100+"ms")},100))},_video:function(i){var h,f,g=i.toString();return b[g]?b[g]:(i instanceof Array==!1&&(i=[i]),h=document.createElement("video"),h.preload=!0,i.forEach(function(e){f=document.createElement("source"),f.src=e,h.appendChild(f)}),b[g]=h,h)},_fadeOutSound:function(k,j){var g=this,f=j/10,h=k.volume-0.09;h>0?(k.volume=h,setTimeout(function(){g._fadeOutSound(k,j)},f)):k.pause()},_fadeInSound:function(k,j){var g=this,f=j/10,h=k.volume+0.09;h<1&&(k.volume=h,setTimeout(function(){g._fadeInSound(k,j)},f))},_options:function(f,e){return void 0===e&&(e=this.slide),void 0!==this.settings.slides[e][f]?this.settings.slides[e][f]:this.settings[f]},_goto:function(K){function D(){A._timer(!0),setTimeout(function(){O&&(A.support.transition?(C.css("transition","all "+j+"ms").addClass("vegas-transition-"+O+"-out"),C.each(function(){var f=C.find("video").get(0);f&&(f.volume=1,A._fadeOutSound(f,j))}),z.css("transition","all "+j+"ms").addClass("vegas-transition-"+O+"-in")):z.fadeIn(j));for(var e=0;e<C.length-A.settings.slidesToKeep;e++){C.eq(e).remove()}A.trigger("walk"),A._slideShow()},100)}"undefined"==typeof this.settings.slides[K]&&(K=0),this.slide=K;var z,G,H,k,J,C=this.$elmt.children(".vegas-slide"),x=this.settings.slides[K].src,E=this.settings.slides[K].video,B=this._options("delay"),L=this._options("align"),t=this._options("valign"),I=this._options("cover"),F=this._options("color")||this.$elmt.css("background-color"),A=this,M=C.length,O=this._options("transition"),j=this._options("transitionDuration"),N=this._options("animation"),q=this._options("animationDuration");this.settings.firstTransition&&this.first&&(O=this.settings.firstTransition||O),this.settings.firstTransitionDuration&&this.first&&(j=this.settings.firstTransitionDuration||j),this.first&&(this.first=!1),"repeat"!==I&&(I===!0?I="cover":I===!1&&(I="contain")),("random"===O||O instanceof Array)&&(O=O instanceof Array?this._random(O):this._random(this.transitions)),("random"===N||N instanceof Array)&&(N=N instanceof Array?this._random(N):this._random(this.animations)),("auto"===j||j>B)&&(j=B),"auto"===q&&(q=B),z=d('<div class="vegas-slide"></div>'),this.support.transition&&O&&z.addClass("vegas-transition-"+O),this.support.video&&E?(k=E instanceof Array?this._video(E):this._video(E.src),k.loop=void 0===E.loop||E.loop,k.muted=void 0===E.mute||E.mute,k.muted===!1?(k.volume=0,this._fadeInSound(k,j)):k.pause(),H=d(k).addClass("vegas-video").css("background-color",F),this.support.objectFit?H.css("object-position",L+" "+t).css("object-fit",I).css("width","100%").css("height","100%"):"contain"===I&&H.css("width","100%").css("height","100%"),z.append(H)):(J=new Image,G=d('<div class="vegas-slide-inner"></div>').css("background-image",'url("'+x+'")').css("background-color",F).css("background-position",L+" "+t),"repeat"===I?G.css("background-repeat","repeat"):G.css("background-size",I),this.support.transition&&N&&G.addClass("vegas-animation-"+N).css("animation-duration",q+"ms"),z.append(G)),this.support.transition||z.css("display","none"),M?C.eq(M-1).after(z):this.$elmt.prepend(z),C.css("transition","all 0ms").each(function(){this.className="vegas-slide","VIDEO"===this.tagName&&(this.className+=" vegas-video"),O&&(this.className+=" vegas-transition-"+O,this.className+=" vegas-transition-"+O+"-in")}),A._timer(!1),k?(4===k.readyState&&(k.currentTime=0),k.play(),D()):(J.src=x,J.complete?D():J.onload=D)},_end:function(){this.ended=!0,this._timer(!1),this.trigger("end")},shuffle:function(){for(var g,f,e=this.total-1;e>0;e--){f=Math.floor(Math.random()*(e+1)),g=this.settings.slides[e],this.settings.slides[e]=this.settings.slides[f],this.settings.slides[f]=g}},play:function(){this.paused&&(this.paused=!1,this.next(),this.trigger("play"))},pause:function(){this._timer(!1),this.paused=!0,this.trigger("pause")},toggle:function(){this.paused?this.play():this.pause()},playing:function(){return !this.paused&&!this.noshow},current:function(e){return e?{slide:this.slide,data:this.settings.slides[this.slide]}:this.slide},jump:function(e){e<0||e>this.total-1||e===this.slide||(this.slide=e,this._goto(this.slide))},next:function(){if(this.slide++,this.slide>=this.total){if(!this.settings.loop){return this._end()}this.slide=0}this._goto(this.slide)},previous:function(){if(this.slide--,this.slide<0){if(!this.settings.loop){return void this.slide++}this.slide=this.total-1}this._goto(this.slide)},trigger:function(f){var e=[];e="init"===f?[this.settings]:[this.slide,this.settings.slides[this.slide]],this.$elmt.trigger("vegas"+f,e),"function"==typeof this.settings[f]&&this.settings[f].apply(this.$elmt,e)},options:function(g,f){var h=this.settings.slides.slice();if("object"==typeof g){this.settings=d.extend({},c,d.vegas.defaults,g)}else{if("string"!=typeof g){return this.settings}if(void 0===f){return this.settings[g]}this.settings[g]=f}this.settings.slides!==h&&(this.total=this.settings.slides.length,this.noshow=this.total<2,this._preload())},destroy:function(){clearTimeout(this.timeout),this.$elmt.removeClass("vegas-container"),this.$elmt.find("> .vegas-slide").remove(),this.$elmt.find("> .vegas-wrapper").clone(!0).children().appendTo(this.$elmt),this.$elmt.find("> .vegas-wrapper").remove(),this.settings.timer&&this.$timer.remove(),this.settings.overlay&&this.$overlay.remove(),this.elmt._vegas=null}},d.fn.vegas=function(h){var g,e=arguments,f=!1;if(void 0===h||"object"==typeof h){return this.each(function(){this._vegas||(this._vegas=new a(this,h))})}if("string"==typeof h){if(this.each(function(){var i=this._vegas;if(!i){throw new Error("No Vegas applied to this element.")}"function"==typeof i[h]&&"_"!==h[0]?g=i[h].apply(i,[].slice.call(e,1)):f=!0}),f){throw new Error('No method "'+h+'" in Vegas.')}return void 0!==g?g:this}},d.vegas={},d.vegas.defaults=c,d.vegas.isVideoCompatible=function(){return !/(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i.test(navigator.userAgent)}}(window.jQuery||window.Zepto);