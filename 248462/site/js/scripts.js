include("js/jquery-ui-1.8.24.custom.min.js");
include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/uScroll.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/bgStretch.js");
include("js/sImg.js");
include("js/forms.js");
include("js/MathUtils.js");
include("js/jquery.cycle.all.min.js");
include("js/jquery.jqtransform.js");
include("js/jquery.transform2d.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = true, MSIE9 = true, SAFARI = true, content;

function addAllListeners() {
    $('.list1>li>a,.list3>li>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).children('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).children('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
    
    var val1 = $('.readMore').css('color');
    $('.readMore').hover(
        function(){
            $(this).stop().animate({'color':'#29b1b2'},300,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'color':val1},600,'easeOutCubic');
        }
    );
    var val2 = $('.list2>li>a').css('color');
    $('.list2>li>a').hover(
        function(){
            $(this).stop().animate({'color':'#29b1b2'},400,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'color':val2},700,'easeOutCubic');
        }
    );
    var val3 = rgb2hex($('.prevBtn').css('backgroundColor'));
    $('.prevBtn').hover(
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':'#29b1b2'},400,'easeOutExpo')
                    .find('span').stop().animate({'backgroundPosition':'right center'},400,'easeOutExpo')
            }else{
                $(this).stop().css({'backgroundColor':'#29b1b2'})
                    .find('span').stop().css({'backgroundPosition':'right center'})
            }
        },
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':val3},700,'easeOutCubic')
                    .find('span').stop().animate({'backgroundPosition':'left center'},700,'easeOutCubic')
            } else {
                $(this).stop().css({'backgroundColor':val3})
                    .find('span').stop().css({'backgroundPosition':'left center'})
            }
        }
    );
    $('.nextBtn').hover(
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':'#29b1b2'},400,'easeOutExpo')
                    .find('span').stop().animate({'backgroundPosition':'left center'},400,'easeOutExpo')
            } else {
                $(this).stop().css({'backgroundColor':'#29b1b2'})
                    .find('span').stop().css({'backgroundPosition':'left center'})
            }
        },
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':val3},700,'easeOutCubic')
                    .find('span').stop().animate({'backgroundPosition':'right center'},700,'easeOutCubic')
            } else {
                $(this).stop().css({'backgroundColor':val3})
                    .find('span').stop().css({'backgroundPosition':'right center'})
            }
        }
    );
    var val4 = rgb2hex($('.btnDown').css('backgroundColor'));
    $('.btnDown').hover(
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':'#29b1b2'},400,'easeOutExpo')
                    .find('span').stop().animate({'backgroundPosition':'center top'},400,'easeOutExpo')
            }else {
                $(this).stop().css({'backgroundColor':'#29b1b2'})
                    .find('span').stop().css({'backgroundPosition':'center top'})
            }
        },
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':val4},700,'easeOutCubic')
                    .find('span').stop().animate({'backgroundPosition':'center bottom'},700,'easeOutCubic')
            } else {
                $(this).stop().css({'backgroundColor':val4})
                    .find('span').stop().css({'backgroundPosition':'center bottom'})
            }
        }
    );
    $('.btnUp').hover(
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':'#29b1b2'},400,'easeOutExpo')
                    .find('span').stop().animate({'backgroundPosition':'center bottom'},400,'easeOutExpo')
            } else {
                $(this).stop().css({'backgroundColor':'#29b1b2'})
                    .find('span').stop().css({'backgroundPosition':'center bottom'})
            }
        },
        function(){
            if (!MSIE9) {
                $(this).stop().animate({'backgroundColor':val4},700,'easeOutCubic')
                    .find('span').stop().animate({'backgroundPosition':'center top'},700,'easeOutCubic')
            } else {
                $(this).stop().css({'backgroundColor':val4})
                    .find('span').stop().css({'backgroundPosition':'center top'})
            }
        }
    );
}

function showSplash(){
    if (!MSIE && !SAFARI) {
        $('#bg_front').stop(true).delay(250).animate({'left':'2083px','top':'-51px','transform':'rotate(-45deg)'},500,'easeInExpo')
        $('#bg_back').stop(true).delay(150).animate({'left':'-2000px','top':'-51px','transform':'rotate(45deg)'},400,'easeInExpo')
    } else {
        $('#bg_front').stop(true).delay(250).animate({'left':'2083px','top':'-51px'},500,'easeInExpo')
        $('#bg_back').stop(true).delay(150).animate({'left':'-2000px','top':'-51px'},400,'easeInExpo')
    }
}

function hideSplash(prevPage){
    var delay = 200;
    if (prevPage != 0) {
        if (!MSIE && !SAFARI) {
            $('#bg_front').stop(true)
                .delay(delay).animate({'left':'2083px','top':'-51px','transform':'rotate(-30deg)'},400,'easeInExpo')
                .delay(delay).animate({'left':'283px','top':'-51px','transform':'rotate(0)'},500,'easeOutExpo')
            $('#bg_back').stop(true)
                .animate({'left':'-2000px','top':'-51px','transform':'rotate(30deg)'},400,'easeInExpo')
                .animate({'left':'262px','top':'-51px','transform':'rotate(0)'},500,'easeOutExpo')
        } else{
            $('#bg_front').stop(true)
                .delay(delay).animate({'left':'2083px','top':'-51px'},400,'easeInExpo')
                .delay(delay).animate({'left':'283px','top':'-51px'},500,'easeOutExpo')
            $('#bg_back').stop(true)
                .animate({'left':'-2000px','top':'-51px'},400,'easeInExpo')
                .animate({'left':'262px','top':'-51px'},500,'easeOutExpo')
        }
    } else {
        if (!MSIE && !SAFARI) {
            $('#bg_front').stop(true).delay(delay).animate({'left':'283px','top':'-51px','transform':'rotate(0)'},600,'easeOutExpo')
            $('#bg_back').stop(true).animate({'left':'262px','top':'-51px','transform':'rotate(0)'},500,'easeOutExpo')
        } else {
            $('#bg_front').stop(true).delay(delay).animate({'left':'283px','top':'-51px'},600,'easeOutExpo')
            $('#bg_back').stop(true).animate({'left':'262px','top':'-51px'},500,'easeOutExpo')
        }
    }
}

function hideSplashQ(){
    if (!MSIE && !SAFARI) {
        $('#bg_front').stop(true).animate({'left':'1583px','top':'-51px','transform':'rotate(0)'},0)
        $('#bg_back').stop(true).animate({'left':'-1500px','top':'-51px','transform':'rotate(0)'},0)
    } else {
        $('#bg_front').stop(true).animate({'left':'1583px','top':'-51px'},0)
        $('#bg_back').stop(true).animate({'left':'-1500px','top':'-51px'},0)
    }
}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);

function ON_READY() {
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    MSIE9 = ($.browser.msie) && ($.browser.version <= 9);
    SAFARI = ($.browser.safari && !/chrome/.test(navigator.userAgent.toLowerCase()))
    $('.spinner').fadeOut();
    
    if (MSIE9) {
       $('.list2.type2').addClass('ie');
    }
    
    $('#form2').jqTransform({imgPath:'images/'});
    
    $( "#datepicker1, #datepicker2").datepicker({
		showOn: "button",
		buttonImage: "images/calendar.png",
		buttonImageOnly: true
	}); 
    
    $('.scroll').uScroll({
		mousewheel:true,
        step:100
	})
    
	$('.list1>li>a,.list3>li>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list1>li>a, .list3>li>a').fancybox({
        'transitionIn': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
    
    if ($("#slider1").length) {
        $('#slider1').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '#next1',
    		prev: '#prev1',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    if ($("#slider2").length) {
        $('#slider2').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '#next2',
    		prev: '#prev2',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
   
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden'});		
        },
        actFu:function(_){            
            if(_.curr){                
                if (_.n == 0){
                    showSplash()
                } else {
                    hideSplash(_.pren)
                }
                _.curr
                    .css({'height':'0','visibility':'visible'}).stop(true).delay(1000).show().animate({'height':'100%'},{duration:800,easing:'easeOutExpo'});
            } 
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'height':'0'},{duration:400,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'visibility':'hidden'});
                            }
                        }
		              });
            }            
  		}
    });
    $('#menu>li>a').each(function (){
        $(this).find('strong').text($(this).text())
    })
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_splash',
        hoverIn:function(li){
            $('>a>strong', li).stop().animate({'height': '100%'},500,'easeOutExpo');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>a>strong', li).stop().animate({'height': '0'},600,'easeOutCubic');
            }
        }
    })
    .navs(function(n,_){
   	    $('#content').tabs(n);
        if (_.prevHash == '#!/page_mail') { 
            $('#form1 a').each(function (ind, el){
                if ($(this).attr('data-type') == 'reset') { $(this).trigger('click') }   
            })
        }
   	});
    
    setTimeout(function(){
        $('#bgStretch').bgStretch({
    	   align:'leftTop',
           navs:$('.pagin').navs({autoPlay:10000})
        })
        .sImg({
            sleep: 1000
        });
    },0);
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
}

$(window).resize(function (){
    if (content) content.stop().animate({'top':(windowH()-content.height())*.5},500,'easeOutCubic');
});