$(document).ready(function(){
// head左边下拉框
    $(".leftad").eq(0).css({"background":"#C81623","color":"#fff"});
    $(".headleft").hover(function(){
    	$(".headxlleft").css("display","block");
    	$(".headxlleftxx").css("display","block");
    	$(".headxlleftxx1").css("display","block");
    	$(".headxlleftxx2").css("display","block");
    	$(".headleft").css("background","#fff");

    },function(){
        $(".headxlleft").css("display","none");
    	$(".headxlleftxx").css("display","none");
    	$(".headxlleftxx1").css("display","none");
    	$(".headxlleftxx2").css("display","none");
    	$(".headleft").css("background","#f1f1f1");
    })
// headleft轮播
// 轮播图
var flagh=true;
var hw=$(".user-icon  li").eq(0).outerWidth(true);
function headr(){
        $(".user-icon ul ").eq(0).animate({left:-3*hw},function(){
                $(".user-icon ul").append($(".user-icon ul .li:first-child")).css("left",0);
                flagh=true;
        })
    }
function headl(){
        $(".user-icon ul .li:last-child").insertBefore(".user-icon ul .li:first-child");
        $(".user-icon ul .li").css("left",-3*hw).animate({left:0},function(){flagh=true});
    }
$(".user-icon .al").click(function(){
         if (flagh) {
            headl();
            flagh=false;
         }
    })
$(".user-icon .ar").click(function(){
         if (flagh) {
            headr();
            flagh=false;
         }
    })
// 我的京东
    $(".xiala1").hover(function(){
    	$(".xlwdjd").css("display","block");
    	$(".wdjdxx").css("display","block");
    	$(".wdjdxx1").css("display","block");
    	$(".wdjdxx2").css("display","block");
    	$(".xiala1").css("background","#fff");
    },function(){
    	$(".xlwdjd").css("display","none");
    	$(".wdjdxx").css("display","none");
    	$(".wdjdxx1").css("display","none");
    	$(".wdjdxx2").css("display","none");
    	$(".xiala1").css("background","#f1f1f1");
    })
// 手机京东
    $(".xiala2").hover(function(){
    	$(".xlsjjd").css("display","block");
    	$(".sjjdxx").css("display","block");
    	$(".sjjdxx1").css("display","block");
    	$(".sjjdxx2").css("display","block");
    	$(".xiala2").css("background","#fff");
    },function(){
    	$(".xlsjjd").css("display","none");
    	$(".sjjdxx").css("display","none");
    	$(".sjjdxx1").css("display","none");
    	$(".sjjdxx2").css("display","none");
    	$(".xiala2").css("background","#f1f1f1");
    }) 
//关注京东
    $(".xiala3").hover(function(){
    	$(".xlgzjd").css("display","block");
    	$(".gzjdxx").css("display","block");
    	$(".gzjdxx1").css("display","block");
    	$(".gzjdxx2").css("display","block");
    	$(".xiala3").css("background","#fff");
    },function(){
    	$(".xlgzjd").css("display","none");
    	$(".gzjdxx").css("display","none");
    	$(".gzjdxx1").css("display","none");
    	$(".gzjdxx2").css("display","none");
    	$(".xiala3").css("background","#f1f1f1");
    }) 
// 客户服务
    $(".xiala4").hover(function(){
    	$(".xlkhfw").css("display","block");
    	$(".kfjdxx").css("display","block");
    	$(".kfjdxx1").css("display","block");
    	$(".kfjdxx2").css("display","block");
    	$(".xiala4").css("background","#fff");
    },function(){
    	$(".xlkhfw").css("display","none");
    	$(".kfjdxx").css("display","none");
    	$(".kfjdxx1").css("display","none");
    	$(".kfjdxx2").css("display","none");
    	$(".xiala4").css("background","#f1f1f1");
    })
// 网站导航
    $(".xiala5").hover(function(){
    	$(".xlwzdh").css("display","block");
    	$(".wzjdxx").css("display","block");
    	$(".wzjdxx1").css("display","block");
    	$(".wzjdxx2").css("display","block");
    	$(".xiala5").css("background","#fff");
    },function(){
    	$(".xlwzdh").css("display","none");
    	$(".wzjdxx").css("display","none");
    	$(".wzjdxx1").css("display","none");
    	$(".wzjdxx2").css("display","none");
    	$(".xiala5").css("background","#f1f1f1");
    })
// 购物车
  $(".dhright1").hover(function(){
  	$(".xlgwc").css("display","block");
  	$(".gwcxx").css("display","block");
  },function(){
  	$(".xlgwc").css("display","none");
  	$(".gwcxx").css("display","none");
  })
// 点击图片关闭
  	$(".t-close").click(function(){$(".pic1").css("display","none")});
// 左侧下拉框
	$(".fenlei").hover(function(){
		var index=$(".fenlei").index($(this));
		$(".ck").css("display","none").eq(index).css("display","block");
	},function(){
        $(".ck").css("display","none");
	})
// banner上轮播
var flagtop=true;
var topw=$(".lbleft  li").eq(0).outerHeight(true);
var toplb=setInterval(lbbottom,2000);
$(".topmiddle .right1").hover(function(){
    clearInterval(toplb);
},function(){
     toplb=setInterval(lbbottom,2000);
})
function lbtop(){
        $(".lbleft ul ").eq(0).animate({top:-topw},function(){
                $(".lbleft ul").append($(".lbleft ul li:first-child")).css("top",0);
                flagtop=true;
        })
    }
function lbbottom(){
        $(".lbleft ul li:last-child").insertBefore(".lbleft ul li:first-child");
        $(".lbleft ul").css("top",-topw).animate({top:0},function(){flagtop=true});
    }
$(".lbtop").click(function(){
         if (flagtop) {
            lbbottom();
            flagtop=false;
         }
    })
$(".lbbottom").click(function(){
         if (flagtop) {
            lbtop();
            flagtop=false;
         }
    })
// tu-main
$(".tu-main .middle-top .a2").eq(0).css("margin-right","8px");
// banner
var flag=true;
var now=0;
var next=0;
$(".bannerzmain .bannertu").css("display","none").eq(0).css("display","block");
$(".em").css("display","block").eq(0).css("display","none");
$(".item i").removeClass("cur").eq(0).addClass("cur");    
$(".item").css("display","none").eq(0).css("display","block");
var t=setInterval(move,2000);
$(".bannerzmain .middle").hover(function(){
    clearInterval(t);
    $(".anniuL").css("display","block");
    $(".anniuR").css("display","block");
},function(){
    t=setInterval(move,2000);
    $(".anniuL").css("display","none");
    $(".anniuR").css("display","none");
})
function move(){
    next++;
    if (next==$(".bannerzmain .bannertu").length) {
        next=0;
    }
    if (next%2!=0) {
        $(".bannerzmain .bannertu").eq(now).fadeOut().end().eq(next).fadeIn(function(){flag=true});
        if (next!=2) {
        $(".item i").eq(now).removeClass("cur").end().eq(next).addClass("cur");
        }
        var nextn=Math.floor((next)/2);
        $(".em").css("display","block").eq(nextn).css("display","none");
        $(".item").css("display","none").eq(nextn).css("display","block");
        now=next;
    }
    // else{
    //     $(".bannerzmain .bannertu").eq(next-1).fadeIn();
    //     now=next;
    // }
    
}
function moveR(){
     next++;
    if (next==$(".bannerzmain .bannertu").length) {
        next=0;
    }
    $(".bannerzmain .bannertu").eq(now).fadeOut().end().eq(next).fadeIn(function(){flag=true});
    $(".item i").eq(now).removeClass("cur").end().eq(next).addClass("cur");
    var nextn=Math.floor((next)/2);
    $(".em").css("display","block").eq(nextn).css("display","none");
    $(".item").css("display","none").eq(nextn).css("display","block");
    now=next;
}
function moveL(){
     next--;
    if (next<0) {
        next=$(".bannerzmain .bannertu").length-1;
    }
    $(".bannerzmain .bannertu").eq(now).fadeOut().end().eq(next).fadeIn(function(){flag=true});
    $(".item i").eq(now).removeClass("cur").end().eq(next).addClass("cur");
    var nextn=Math.floor((next)/2);
    $(".em").css("display","block").eq(nextn).css("display","none");
    $(".item").css("display","none").eq(nextn).css("display","block");
    now=next;
}
$(".anniuR").click(function(){
	if (flag) {
       moveR();
       flag=false;
	}
})
$(".anniuL").click(function(){
    if (flag) {
       moveL();
       flag=false;
    }
})
$(".bannerzmain .anniu1 p b").mouseover(function(){
	var index=$(".bannerzmain .anniu1 p b").index($(this));
    $(".bannerzmain .bannertu").eq(now).fadeOut().end().eq(index).fadeIn(function(){flag=true});
    $(".item i").eq(now).removeClass("cur").end().eq(index).addClass("cur");
    var index1=Math.floor((index)/2);
    $(".em").css("display","block").eq(index1).css("display","none");
    $(".item").css("display","none").eq(index1).css("display","block");
    now=index;
    next=index;
})
// 猜你喜欢
$(".cnxhbottom1").eq(0).css("display","block");
var cnxh=0;
$(".hyp").click(function(){
    cnxh++;
    if (cnxh==$(".cnxhbottom1").length) {
          cnxh=0;
    }
    $(".cnxhbottom1").css("display","none").eq(cnxh).css("display","block");
})
// banner右
var bannerflag=true;
if (bannerflag) {
        bannerflag=false;
$(".kgz").mouseover(function(){
    var index=$(".kgz").index($(this));
    $(".middlekx").css("zIndex","5").eq(index).css("zIndex","10");
    $(".middlekx").animate({"top":"71px"},function(){
        bannerflag=true;
    });
})
}
$(".hfcz").css("display","none").eq(0).css("display","block");
$(".gnjpz").css("display","none").eq(0).css("display","block");
$(".zzry").css("display","none").eq(0).css("display","block");
$(".dk").css("display","none").eq(0).css("display","block");
$(".l3").eq(0).css("background","#c81623");
$(".l4").eq(0).css("background","#c81623");
$(".l2").eq(0).css("background","#c81623");
$(".l5").eq(0).css("background","#c81623");
$(".l1a1").eq(0).css("color","#fff");
$(".l1a2").eq(0).css("color","#fff");
$(".l1a4").eq(0).css("color","#fff");
$(".l1a5").eq(0).css("color","#fff");
$(".sjx1").eq(0).css("display","block");
$(".sjx2").eq(0).css("display","block");
$(".sjx4").eq(0).css("display","block");
$(".sjx5").eq(0).css("display","block");
$(".l3").mouseover(function(){
    var index=$(".l3").index($(this));
        $(".hfcz").css("display","none").eq(index).css("display","block");
        $(".l3").css("background","#fff").eq(index).css("background","#c81623");
        $(".l1a1").css("color","#666").eq(index).css("color","#fff");
        $(".sjx1").css("display","none").eq(index).css("display","block");
    })
$(".l2").mouseover(function(){
    var index=$(".l2").index($(this));
        $(".gnjpz").css("display","none").eq(index).css("display","block");
        $(".l2").css("background","#fff").eq(index).css("background","#c81623");
        $(".l1a2").css("color","#666").eq(index).css("color","#fff");
        $(".sjx2").css("display","none").eq(index).css("display","block");
    })
$(".l4").mouseover(function(){
    var index=$(".l4").index($(this));
        $(".zzry").css("display","none").eq(index).css("display","block");
        $(".l4").css("background","#fff").eq(index).css("background","#c81643");
        $(".l1a4").css("color","#666").eq(index).css("color","#fff");
        $(".sjx4").css("display","none").eq(index).css("display","block");
    })
$(".l5").mouseover(function(){
    var index=$(".l5").index($(this));
        $(".dk").css("display","none").eq(index).css("display","block");
        $(".l5").css("background","#fff").eq(index).css("background","#c81643");
        $(".l1a5").css("color","#666").eq(index).css("color","#fff");
        $(".sjx5").css("display","none").eq(index).css("display","block");
    })
$(".closex").click(function(){
    $(".middlekx").animate({"top":"209px"});
    $(".middlekg").animate({"top":"0"});
})

// 一楼
xlmain("F1");
xlmain("F2");
xlmain("F3");
xlmain("F4");
xlmain("F5");
xlmain("F6");
xlmain("F7");
xlmain("F8");
xlmain("F9");
function xlmain(obj){
$("."+obj+" .F1dw22 a").eq(1).css("color","#e3101e").end().eq(2).css("color","#e3101e");
$("."+obj+" .F1top2").eq(0).css({"background":"#535353"});
$("."+obj+" .F1top2 .a1").eq(0).css({"color":"#fff"});
$("."+obj+" .F1top2").css({"lineHeight":"34px"});
$("."+obj+" .F1xiala1").eq(0).css("display","block");
$("."+obj+" .F1top2").mouseover(function(){
    var index=$("."+obj+" .F1top2").index($(this));
    $("."+obj+" .F1top2").css({"background":"#fff"}).eq(index).css({"background":"#535353"});
    $("."+obj+" .F1top2 .a1").css({"color":"#535353"}).eq(index).css("color","#fff");
    $("."+obj+" .F1xiala1").css("display","none").eq(index).css("display","block");
})
var yan=0;
$("."+obj+" .yf").click(function(){
    yan++;
    if (yan==$("."+obj+" .F1top2").length) {
          yan=0;
    }
    $("."+obj+" .F1top2").css({"background":"#fff"}).eq(yan).css({"background":"#535353"});
    $("."+obj+" .F1top2 .a1").css({"color":"#535353"}).eq(yan).css("color","#fff");
    $("."+obj+" .F1xiala1").css("display","none").eq(yan).css("display","block");
})
$("."+obj).hover(function(){
    $("."+obj+" .yf").css("display","block");
},function(){
    $("."+obj+" .yf").css("display","none");
})
}
// 2楼轮播
F1($(".F1 .F1xialaleft1 img"),$(".F1 .F1xanniu1"),$(".F1 .F1xialaleft"),$(".F1 .F1anniuleft"),$(".F1 .F1anniuright"))
F1($(".F2 .F1xialaleft1 img"),$(".F2 .F1xanniu1"),$(".F2 .F1xialaleft"),$(".F2 .F1anniuleft"),$(".F2 .F1anniuright"))
F1($(".F3 .F1xialaleft1 img"),$(".F3 .F1xanniu1"),$(".F3 .F1xialaleft"),$(".F3 .F1anniuleft"),$(".F3 .F1anniuright"))
F1($(".F4 .F1xialaleft1 img"),$(".F4 .F1xanniu1"),$(".F4 .F1xialaleft"),$(".F4 .F1anniuleft"),$(".F4 .F1anniuright"))
F1($(".F5 .F1xialaleft1 img"),$(".F5 .F1xanniu1"),$(".F5 .F1xialaleft"),$(".F5 .F1anniuleft"),$(".F5 .F1anniuright"))
F1($(".F6 .F1xialaleft16 img"),$(".F6 .F1xanniu1"),$(".F6 .F1xialaleft6"),$(".F6 .F1anniuleft"),$(".F6 .F1anniuright"))
F1($(".F7 .F1xialaleft1 img"),$(".F7 .F1xanniu1"),$(".F7 .F1xialaleft"),$(".F7 .F1anniuleft"),$(".F7 .F1anniuright"))
F1($(".F8 .F1xialaleft1 img"),$(".F8 .F1xanniu1"),$(".F8 .F1xialaleft"),$(".F8 .F1anniuleft"),$(".F8 .F1anniuright"))
F1($(".F9 .F1xialaleft1 img"),$(".F9 .F1xanniu1"),$(".F9 .F1xialaleft"),$(".F9 .F1anniuleft"),$(".F9 .F1anniuright"))
function F1(a,b,c,d,e){
var F1now=0;
var F1next=0;
var F1flag=true;
var F1mw=a.width()+1;
var F1t=setInterval(F1move,2000);
b.eq(0).css("background","#C81623");
a.css("left",F1mw).eq(0).css({"left":0});
c.hover(function(){
	clearInterval(F1t);
	d.css("display","block");
	e.css("display","block");
},function(){
    F1t=setInterval(F1move,2000);
    d.css("display","none");
	e.css("display","none");
})
 function F1move(){
    	F1next++;
    	if (F1next>=a.length) {
              F1next=0;
    	}
    	a.eq(F1next).css("left",F1mw).end().eq(F1now).animate({"left":-F1mw},function(){F1flag=true}).end().eq(F1next).animate({"left":0});
    	b.eq(F1now).css("background","#3e3e3e").end().eq(F1next).css("background","#C81623");
    	F1now=F1next;
    }
    function F1moveL(){
    	F1next--;
    	if (F1next<0) {
              F1next=a.length-1;
    	}
    	a.eq(F1next).css("left",-F1mw).end().eq(F1now).animate({"left":F1mw},function(){F1flag=true}).end().eq(F1next).animate({"left":0});
    	b.eq(F1now).css("background","#3e3e3e").end().eq(F1next).css("background","#C81623");
    	F1now=F1next;
    }
    e.click(function(){
    	if (F1flag) {
        // F1flag=false;
    	F1move();
    	}
    })
    d.click(function(){
    	if (F1flag) {
        // F1flag=false;
    	F1moveL();
    	}
    })
    b.click(function(){
    	var index=$(this).index();
    	if (F1now<index) {
            a.eq(index).css("left",F1mw).end().eq(F1now).animate({left:-F1mw}).end().eq(index).animate({left:0});
    	}
    	else if(F1now>index){
    		a.eq(index).css("left",-F1mw).end().eq(F1now).animate({left:F1mw}).end().eq(index).animate({left:0});
    	}
    	else{
    		return;
    	}
    	b.eq(index).css("background","#C81623").end().eq(F1now).css("background","#3e3e3e");
    	F1now=index;
    	F1next=index;
    })
}
// 左导航
  var s;
  var flag_0=true;
  var flag_1=true;
  var flag_2=true;
  $(".FF1z").css({"fontSize":"20px","marginTop":"0"});
  $(".Fx").each(function(index,val){
      $(".Fx").eq(index).data("h",$(".Fx").eq(index).position().top);
  })
  $(window).on("scroll",function(){
  	if (flag_2) {
  		var obj=document.body.scrollTop?document.body:document.documentElement;
  		var Top=$(obj).scrollTop();
  		if (Top>=$(".Fx").eq(0).data("h")-300) {
          $(".zdh").css("display","block");
    }
    	else{
          $(".zdh").css("display","none");
      		
    	}
    	$(".Fx").each(function(index,val){
    		if (Top>=$(".Fx").eq(index).data("h")-300) {
    			$(".Fx").each(function(index1,val1){
                  $(".zdhn1").eq(index1).css("color","#5e5e5e");
                  $(".zdhn1 span").eq(index1).css("color","#5e5e5e");
    			})
                  $(".zdhn1").eq(index).css("color","#c00");
                  $(".zdhn1 span").eq(index).css("color","#c00");
                  s=index;
    		}
    	})
   }
  })
           $(".zdhn").each(function(index,val){
            $(".zdhn").eq(index).click(function(){
                flag_2=false;
                $(document.body).animate({scrollTop:$(".Fx").eq(index).data("h")},function(){
                    flag_2=true;
                })
                $(document.documentElement).animate({scrollTop:$(".Fx").eq(index).data("h")},function(){
                    flag_2=true;
                })
                s=$(".zdhn").eq(index).data("x");
            })
  			$(".zdhn").eq(index).hover(function(){
                  $(".zdhn1").eq(index).css("color","#c00");
                  $(".zdhn1 span").eq(index).css("color","#c00");
  			},function(){
  				if (index==s) {
		        return;
	       }
                  $(".zdhn1").eq(index).css("color","#5e5e5e");
                  $(".zdhn1 span").eq(index).css("color","#5e5e5e");
                  
  			})
  		})
        $(".to_top").hover(function(){
            $(".to_top a").css("backgroundPosition","0 -222px");
        },function(){
            $(".to_top a").css("backgroundPosition","-18px -222px");

        })
        jQuery.backTop($(".to_top"),1000);
        jQuery.backBottom($(".to_bottom"),1000);
        $(".to_bottom").hover(function(){
            $(".to_bottom a").css("backgroundPosition","0 -214px");
        },function(){
            $(".to_bottom a").css("backgroundPosition","-18px -214px");

        })
//懒加载
  $("img.lazy").lazyload({
    threshold:200,
     effect:"fadeIn"
  })
// 晒单
$(".cxspr1").eq(0).css("display","block");
var cnxh=0;
$(".hyp1").click(function(){
    cnxh++;
    if (cnxh==$(".cxspr1").length) {
          cnxh=0;
    }
    $(".cxspr1").css("display","none").eq(cnxh).css("display","block");
})
// 二维码
$(".em1").hover(function(){
    $(".em1 div").css("display","block");
},function(){
    $(".em1 div").css("display","none");
})
$(".em2").hover(function(){
    $(".em2 div").css("display","block");
},function(){
    $(".em2 div").css("display","none");
})
// police
$(".police i").eq(1).css("backgroundPosition","-35px -180px");
$(".police i").eq(2).css("backgroundPosition","-70px -180px");
$(".police i").eq(3).css("backgroundPosition","-105px -180px");
$(".police i").eq(4).css("backgroundPosition","-140px -180px");
$(".police b").eq(2).css("padding-top","9px");
$(".police b").eq(4).css("padding-top","9px");
// 右导航
$(".xap").mouseover(function(){
  $(".smk").stop(true);
  $(".smk").delay(200).animate({"left":-140});
  $(".xap b").css("background-position","-40px -464px");
})
$("body").click(function(){
  $(".smk").stop(true);
  $(".smk").delay(200).animate({"left":140});
  $(".xap b").css("background-position","-47px -464px");
})
function hover(a,b,c){
  a.hover(function(){
  b.stop(true);
  b.delay(200).animate({"left":-82});
  c.css("background-position","-40px -464px");
  $(".smk").stop(true);
  $(".smk").delay(200).animate({"left":140});
  $(".xap b").css("background-position","-47px -464px");
},function(){
   b.stop(true);
   b.delay(200).animate({"left":82});
   c.css("background-position","-47px -464px");
})
}
hover($(".servy"),$(".servy .transform"), $(".servy b"));
hover($(".service"),$(".service .transform"), $(".service b"));
hover($(".go-back"),$(".go-back .transform"), $(".go-back b"));
jQuery.backTop($(".transform"),1000);
})

