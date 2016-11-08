window.onload=function(){
// head左边下拉框
var headxlleft=$(".headxlleft")[0];
var headxlleftxx=$(".headxlleftxx")[0];
var headxlleftxx1=$(".headxlleftxx1")[0];
var headxlleftxx2=$(".headxlleftxx2")[0];
var headleft=$(".headleft")[0];
var leftad=$(".leftad");
var bj=$(".bj")[0];
leftad[0].style.background="#C81623";
leftad[0].style.color="#fff";
for (var i = 0; i < leftad.length; i++) {
	leftad[i].index=i;
	leftad[i].onclick=function(){
       for (var i = 0; i < leftad.length; i++) {
       	leftad[i].style.background="#fff";
       	leftad[i].style.color="#666";
       }
       	leftad[this.index].style.color="#fff";
        leftad[this.index].style.background="#C81623";
        bj.innerHTML=this.innerHTML;
	}
}
headleft.onmouseover=function(){
	headxlleft.style.display="block";
	headxlleftxx.style.display="block";
	headxlleftxx1.style.display="block";
	headxlleftxx2.style.display="block";
    headleft.style.background="#fff";

}
headleft.onmouseout=function(){
	headxlleft.style.display="none";
	headxlleftxx.style.display="none";
	headxlleftxx1.style.display="none";
	headxlleftxx2.style.display="none";
	headleft.style.background="#f1f1f1";
}
// 我的京东
var xiala1=$(".xiala1")[0];
var xlwdjd=$(".xlwdjd")[0];
var wdjdxx=$(".wdjdxx")[0];
var wdjdxx1=$(".wdjdxx1")[0];
var wdjdxx2=$(".wdjdxx2")[0];
  xiala1.onmouseover=function(){
  	   xlwdjd.style.display="block";
  	   xiala1.style.background="#fff";
  	   wdjdxx.style.display="block";
  	   wdjdxx1.style.display="block";
  	   wdjdxx2.style.display="block";
  }
   xiala1.onmouseout=function(){
  	   xlwdjd.style.display="none";
  	   xiala1.style.background="#f1f1f1";
  	   wdjdxx.style.display="none";
  	   wdjdxx1.style.display="none";
  	   wdjdxx2.style.display="none";
  }
// 手机京东
var xiala2=$(".xiala2")[0];
var xlsjjd=$(".xlsjjd")[0];
var sjjdxx=$(".sjjdxx")[0];
var sjjdxx1=$(".sjjdxx1")[0];
var sjjdxx2=$(".sjjdxx2")[0];
  xiala2.onmouseover=function(){
  	   xlsjjd.style.display="block";
  	   xiala2.style.background="#fff";
  	   sjjdxx.style.display="block";
  	   sjjdxx1.style.display="block";
  	   sjjdxx2.style.display="block";
  }
   xiala2.onmouseout=function(){
  	   xlsjjd.style.display="none";
  	   xiala2.style.background="#f1f1f1";
  	   sjjdxx.style.display="none";
  	   sjjdxx1.style.display="none";
  	   sjjdxx2.style.display="none";
  }
// 关注京东
var xiala3=$(".xiala3")[0];
var xlgzjd=$(".xlgzjd")[0];
var gzjdxx=$(".gzjdxx")[0];
var gzjdxx1=$(".gzjdxx1")[0];
var gzjdxx2=$(".gzjdxx2")[0];
  xiala3.onmouseover=function(){
  	   xlgzjd.style.display="block";
  	   xiala3.style.background="#fff";
  	   gzjdxx.style.display="block";
  	   gzjdxx1.style.display="block";
  	   gzjdxx2.style.display="block";
  }
   xiala3.onmouseout=function(){
  	   xlgzjd.style.display="none";
  	   xiala3.style.background="#f1f1f1";
  	   gzjdxx.style.display="none";
  	   gzjdxx1.style.display="none";
  	   gzjdxx2.style.display="none";
  }
// 客户服务
var xiala4=$(".xiala4")[0];
var xlkhfw=$(".xlkhfw")[0];
var kfjdxx=$(".kfjdxx")[0];
var kfjdxx1=$(".kfjdxx1")[0];
var kfjdxx2=$(".kfjdxx2")[0];
  xiala4.onmouseover=function(){
  	   xlkhfw.style.display="block";
  	   xiala4.style.background="#fff";
  	   kfjdxx.style.display="block";
  	   kfjdxx1.style.display="block";
  	   kfjdxx2.style.display="block";
  }
   xiala4.onmouseout=function(){
  	   xlkhfw.style.display="none";
  	   xiala4.style.background="#f1f1f1";
  	   kfjdxx.style.display="none";
  	   kfjdxx1.style.display="none";
  	   kfjdxx2.style.display="none";
  }
// 网站导航
var xiala5=$(".xiala5")[0];
var xlwzdh=$(".xlwzdh")[0];
var wzjdxx=$(".wzjdxx")[0];
var wzjdxx1=$(".wzjdxx1")[0];
var wzjdxx2=$(".wzjdxx2")[0];
  xiala5.onmouseover=function(){
  	   xlwzdh.style.display="block";
  	   xiala5.style.background="#fff";
  	   wzjdxx.style.display="block";
  	   wzjdxx1.style.display="block";
  	   wzjdxx2.style.display="block";
  }
   xiala5.onmouseout=function(){
  	   xlwzdh.style.display="none";
  	   xiala5.style.background="#f1f1f1";
  	   wzjdxx.style.display="none";
  	   wzjdxx1.style.display="none";
  	   wzjdxx2.style.display="none";
  }
// 购物车
var dhright1=$(".dhright1")[0];
var xlgwc=$(".xlgwc")[0];
var gwcxx=$(".gwcxx")[0];
  dhright1.onmouseover=function(){
  	   xlgwc.style.display="block";
  	   gwcxx.style.display="block";
  }
   dhright1.onmouseout=function(){
  	   xlgwc.style.display="none";
  	   gwcxx.style.display="none";
  }
 // 图片点击关闭
 var close=$(".t-close")[0];
 var pic1=$(".pic1")[0];
 close.onclick=function(){
 	pic1.style.display="none";
 }
 // 左侧下拉框
 var fenlei=$(".fenlei");
 var ck=$(".ck");
 for (var i = 0; i < fenlei.length; i++) {
 	fenlei[i].index=i;
 	fenlei[i].onmouseover=function(){
 		for (var i = 0; i < ck.length; i++) {
 			ck[i].style.display="none";
 		}
 		ck[this.index].style.display="block";
 	}
 	fenlei[i].onmouseout=function(){
 		ck[this.index].style.display="none";
 	}
 };
// banner
var anniu1=$(".anniu1");
var anniuL=$(".anniuL");
var anniuR=$(".anniuR");
var bannertu=$(".bannertu",$(".bannerzmain")[0]);
var bannermiddle=$(".middle",$(".bannerzmain")[0]);
var flag=true;
var now=0;
bannertu[0].style.zInedx=11;
anniu1[0].style.background="#b61b1f";
var t=setInterval(move,2000);
    bannermiddle[0].onmouseover=function(){
    	clearInterval(t);
    	anniuL[0].style.display="block";
    	anniuR[0].style.display="block";
    }
     bannermiddle[0].onmouseout=function(){
    	t=setInterval(move,2000);
    	anniuL[0].style.display="none";
    	anniuR[0].style.display="none";
    }
    function move(){
       now++;
       if (now==bannertu.length) {
       	now=0;
       };
       for (var i = 0; i < anniu1.length; i++) {
       	anniu1[i].style.background="#3e3e3e";
       	animate(bannertu[i],{opacity:0},function(){
          flag=true;
        });
       }
       anniu1[now].style.background="#b61b1f";
       animate(bannertu[now],{opacity:1});
    }
    function moveL(){
    	now--;
    	if (now<0) {
    		now=bannertu.length-1;
    	}
    	 for (var i = 0; i < anniu1.length; i++) {
       	anniu1[i].style.background="#3e3e3e";
       	animate(bannertu[i],{opacity:0},function(){
          flag=true;
        });
       }
       anniu1[now].style.background="#b61b1f";
       animate(bannertu[now],{opacity:1});
    }
     anniuL[0].onclick=function(){
        if (flag) {
         moveL();
         flag=false;
       }
      }
      anniuR[0].onclick=function(){
        if(flag){
        move();
        flag=false;
      }
      }
      for (var i = 0; i < anniu1.length; i++) {
      	anniu1[i].index=i;
      	anniu1[i].onclick=function(){
      		if (parseInt(getStyle(bannertu[this.index],"opacity"))==0) {
      		for (var i = 0; i < bannertu.length; i++) {
      			animate(bannertu[i],{opacity:0});
      			anniu1[i].style.background="#3e3e3e";
      		}
      		animate(bannertu[this.index],{opacity:1});
      		anniu1[this.index].style.background="#b61b1f";
      		now=this.index;
      	}
      }
	 }
// 轮播图
var right=$(".right",$(".bannerbottom")[0]);
var flag=true;
var right1=$(".right1",$(".bannerbottom")[0]);
var hezi=$(".hezi",$(".bannerbottom")[0]);
var zf=$(".zf",$(".bannerbottom")[0]);
var yf=$(".yf",$(".bannerbottom")[0]);
var aw=parseInt(getStyle(hezi[0],"width"));
right1[0].style.width=aw*hezi.length+"px";
var a=setInterval(hh,2000);
 right[0].onmouseover=function(){
      clearInterval(a);
      zf[0].style.display="block";
       yf[0].style.display="block";
 }
 right[0].onmouseout=function(){
      a=setInterval(hh,2000);
       zf[0].style.display="none";
        yf[0].style.display="none";
 }
   function hh(){
   	animate(right1[0],{left:-4*aw},function(){
   	for (var i=0; i<4; i++) {	
     var first=firstChild(right1[0]);
	 right1[0].appendChild(first);
	 right1[0].style.left=0;
	 }
	 flag=true;
   	})
   }
   function hhL() {
	for (var i=0; i<4; i++) {
   var first=firstChild(right1[0]);
   var last=lastChild(right1[0]);
	 right1[0].insertBefore(last,first);
	}
	 right1[0].style.left=-4*aw+"px";
  animate(right1[0],{left:0},function(){
     flag=true;
  })
}
  zf[0].onclick=function(){
	  if(flag){
     hhL();
	 flag=false;
	  }
  }
   yf[0].onclick=function(){
	   if(flag){
     hh();
	 flag=false;
	  }
  }
// 猜你喜欢
var cnxhbottom=$(".cnxhbottom");
var hyp=$(".hyp")[0];
var cnxh=0;
cnxhbottom[0].style.display="block";
hyp.onclick=function(){
	cnxh++;
	if (cnxh==cnxhbottom.length) {
          cnxh=0;
	}
	for (var i = 0; i < cnxhbottom.length; i++) {
		cnxhbottom[i].style.display="none";
	}
	cnxhbottom[cnxh].style.display="block";
}
// 一楼
var F1top3=$(".F1top3");
var F1top2=$(".F1top2");
var F1top4=$(".F1top4");
var F1one=$(".one",$(".F1")[0]);
var dp=$(".dp",$(".F1")[0]);
var dp1=$(".dp1",$(".F1")[0]);
var dp2=$(".dp2",$(".F1")[0]);
// var lhd=$(".lhd");
    F1top3[0].style.borderLeft="1px solid #C81623";
	F1top3[0].style.borderRight="1px solid #C81623";
	F1top3[0].style.borderBottom="1px solid #fff";
	F1top3[0].style.borderTop="3px solid #C81623";
	F1top3[0].style.height="32px";
	F1one[0].style.display="none";
	dp[0].style.display="block";
F1top3[0].onmouseover=function(){
	F1top3[0].style.borderLeft="1px solid #C81623";
	F1top3[0].style.borderRight="1px solid #C81623";
	F1top3[0].style.borderBottom="1px solid #fff";
	F1top3[0].style.borderTop="3px solid #C81623";
	F1top3[0].style.height="32px";
	F1top3[0].style.lineHeight="30px";
	for (var i = 0; i < dp1.length; i++) {
	dp1[i].style.display="none";
	F1top2[i].style.borderLeft="none";
	F1top2[i].style.borderRight="none";
	F1top2[i].style.borderBottom="1px solid #C81623";
	F1top2[i].style.borderTop="1px solid #ededed";
	F1top2[i].style.height="34px";
	F1top2[i].style.lineHeight="34px";

	}
	for (var i = 0; i < F1one.length; i++) {
	F1one[i].style.display="block";
	}
	F1one[0].style.display="none";
	dp2[0].style.display="none";
	dp[0].style.display="block";
	F1top4[0].style.borderLeft="none";
	F1top4[0].style.borderRight="1px solid #ededed";
	F1top4[0].style.borderBottom="1px solid #C81623";
	F1top4[0].style.borderTop="1px solid #ededed";
	F1top4[0].style.height="34px";
	F1top4[0].style.lineHeight="34px";

}

for (var i = 0; i < F1top2.length; i++) {
F1top2[i].index=i;
F1top2[i].onmouseover=function(){
	for (var i = 0; i < dp1.length; i++) {
		dp1[i].style.display="none";
		F1top2[i].style.borderLeft="none";
	    F1top2[i].style.borderRight="none";
	    F1top2[i].style.borderBottom="1px solid #C81623";
	    F1top2[i].style.borderTop="1px solid #ededed";
	    F1top2[i].style.height="34px";
	    F1top2[i].style.lineHeight="34px";
	}
	F1top2[this.index].style.borderLeft="1px solid #C81623";
	F1top2[this.index].style.borderRight="1px solid #C81623";
	F1top2[this.index].style.borderBottom="1px solid #fff";
	F1top2[this.index].style.borderTop="3px solid #C81623";
	F1top2[this.index].style.height="32px";
	F1top2[this.index].style.lineHeight="30px";
	F1top3[0].style.lineHeight="34px";
	F1top4[0].style.lineHeight="34px";
	dp[0].style.display="none";
    for (var i = 0; i < F1one.length; i++) {
	F1one[i].style.display="block";
	}
	F1one[this.index].style.display="none";
	F1one[this.index+1].style.display="none";
	dp2[0].style.display="none";
	dp1[this.index].style.display="block";
	F1top3[0].style.borderLeft="1px solid #ededed";
	F1top3[0].style.borderRight="none";
	F1top3[0].style.borderBottom="1px solid #C81623";
	F1top3[0].style.borderTop="1px solid #ededed";
	F1top3[0].style.height="34px";
	F1top4[0].style.borderLeft="none";
	F1top4[0].style.borderRight="1px solid #ededed";
	F1top4[0].style.borderBottom="1px solid #C81623";
	F1top4[0].style.borderTop="1px solid #ededed";
	F1top4[0].style.height="34px";
}
}
F1top4[0].onmouseover=function(){
	for (var i = 0; i < dp1.length; i++) {
		dp1[i].style.display="none";
		F1top2[i].style.borderLeft="none";
	    F1top2[i].style.borderRight="none";
	    F1top2[i].style.borderBottom="1px solid #C81623";
	    F1top2[i].style.borderTop="1px solid #ededed";
	    F1top2[i].style.height="34px";
	    F1top2[i].style.lineHeight="34px";
	}
	for (var i = 0; i < F1one.length; i++) {
	F1one[i].style.display="block";
	}
	F1top4[0].style.borderLeft="1px solid #C81623";
	F1top4[0].style.borderRight="1px solid #C81623";
	F1top4[0].style.borderBottom="1px solid #fff";
	F1top4[0].style.borderTop="3px solid #C81623";
	// lhd[8].style.lineHeight="29px";
	F1one[7].style.display="none";
	F1top4[0].style.height="32px";
	F1top3[0].style.lineHeight="34px";
	F1top4[0].style.lineHeight="30px";
	dp[0].style.display="none";
	dp2[0].style.display="block";
	F1top3[0].style.borderLeft="1px solid #ededed";
	F1top3[0].style.borderRight="none";
	F1top3[0].style.borderBottom="1px solid #C81623";
	F1top3[0].style.borderTop="1px solid #ededed";
	F1top3[0].style.height="34px";

}
// F1轮播图
var dpleft2=$(".dpleft2",$(".F1")[0]);
var F1img=$("img",dpleft2[0]);
F1img[0].style.zInedx=10;
var F1now=0;
var F1next=0;
var F1L=$(".F1anniuleft")[0];
var F1R=$(".F1anniuright")[0];
var F1t=setInterval(F1move,2000);
var F1mw=parseInt(getStyle(F1img[0],"width"));
var F1xanniu1=$(".F1xanniu1");
F1xanniu1[0].style.background="#C81623";
dpleft2[0].onmouseover=function(){
	clearInterval(F1t);
	F1L.style.display="block";
	F1R.style.display="block";
}
dpleft2[0].onmouseout=function(){
	F1t=setInterval(F1move,2000);
	F1R.style.display="none";
	F1L.style.display="none";
}
	for(var i=0;i<F1img.length;i++){
	   if(i==0){
	   continue;
	   }
	   else{
	     F1img[i].style.left=F1mw+"px";
	   }
	}
    function F1move(){
         F1next++;
		 if(F1next==F1img.length){
		   F1next=0;
		 }
		 
         F1img[F1next].style.left=F1mw+"px";
		 animate(F1img[F1now],{left:-F1mw});
		 F1xanniu1[F1now].style.background="#3e3e3e";
		 animate(F1img[F1next],{left:0},function(){
		    flag=true});
		 F1xanniu1[F1next].style.background="#C81623";
		 F1now=F1next;
    }
	 function F1moveL(){
         F1next--;
		 if(F1next<0){
		   F1next=F1img.length-1;
		 }
         F1img[F1next].style.left=-F1mw+"px";
		 animate(F1img[F1now],{left:F1mw});
		 F1xanniu1[F1now].style.background="#3e3e3e";
		 animate(F1img[F1next],{left:0},function(){
		    flag=true
		 });
		 F1xanniu1[F1next].style.background="#C81623";
		 F1now=F1next;
    }
	var flag=true;
    F1R.onclick=function(){
		if(flag){
	    F1move();
		flag=false;
		}
	}  
	F1L.onclick=function(){
		if(flag){
	    F1moveL();
		flag=false;
		}
	}
		for(var i=0;i<F1xanniu1.length;i++){ 
	   F1xanniu1[i].index=i;
	   
	   F1xanniu1[i].onclick=function(){
         //next this.index
		 if(parseInt(getStyle(F1img[F1next],"left"))==0){
		 if(F1now<this.index){
		 F1img[this.index].style.left=F1mw+"px";
		 animate(F1img[F1now],{left:-F1mw});
		 animate(F1img[this.index],{left:0});
		 }
		 else if(now>this.index){
		 F1img[this.index].style.left=-F1mw+"px";
		 animate(F1img[F1now],{left:F1mw});
		 animate(F1img[this.index],{left:0});
		 }
		 else{
		    return;
		 }
		 F1xanniu1[F1now].style.background="#3e3e3e";
		 F1xanniu1[this.index].style.background="#C81623";
		 F1now=this.index;
		 F1next=this.index;
	   }  
	   }
	}
// 2楼

var F2top3=$(".F2top3");
var F2top2=$(".F2top2");
var F2top4=$(".F2top4");
var F2one=$(".one",$(".F2")[0]);
var F2xiala=$(".F2xiala",$(".F2")[0]);
var F2xiala1=$(".F2xiala1",$(".F2")[0]);
var F2xiala2=$(".F2xiala2",$(".F2")[0]);

var F3top3=$(".F3top3");
var F3top2=$(".F3top2");
var F3top4=$(".F3top4");
var F3one=$(".one",$(".F3")[0]);
var F3xiala=$(".F3xiala",$(".F3")[0]);
var F3xiala1=$(".F3xiala1",$(".F3")[0]);
var F3xiala2=$(".F3xiala2",$(".F3")[0]);

var F4top3=$(".F4top3");
var F4top2=$(".F4top2");
var F4top4=$(".F4top4");
var F4one=$(".one",$(".F4")[0]);
var F4xiala=$(".F4xiala",$(".F4")[0]);
var F4xiala1=$(".F4xiala1",$(".F4")[0]);
var F4xiala2=$(".F4xiala2",$(".F4")[0]);

var F5top3=$(".F5top3");
var F5top2=$(".F5top2");
var F5top4=$(".F5top4");
var F5one=$(".one",$(".F5")[0]);
var F5xiala=$(".F5xiala",$(".F5")[0]);
var F5xiala1=$(".F5xiala1",$(".F5")[0]);
var F5xiala2=$(".F5xiala2",$(".F5")[0]);

// var F6top3=$(".F6top3");
// var F6top2=$(".F6top2");
// var F6top4=$(".F6top4");
// var F6one=$(".one",$(".F6")[0]);
// var F6xiala=$(".F6xiala",$(".F6")[0]);
// var F6xiala1=$(".F6xiala1",$(".F6")[0]);
// var F6xiala2=$(".F6xiala2",$(".F6")[0]);

// var F7top3=$(".F7top3");
// var F7top2=$(".F7top2");
// var F7top4=$(".F7top4");
// var F7one=$(".one",$(".F7")[0]);
// var F7xiala=$(".F7xiala",$(".F7")[0]);
// var F7xiala1=$(".F7xiala1",$(".F7")[0]);
// var F7xiala2=$(".F7xiala2",$(".F7")[0]);

var F8top3=$(".F8top3");
var F8top2=$(".F8top2");
var F8top4=$(".F8top4");
var F8one=$(".one",$(".F8")[0]);
var F8xiala=$(".F8xiala",$(".F8")[0]);
var F8xiala1=$(".F8xiala1",$(".F8")[0]);
var F8xiala2=$(".F8xiala2",$(".F8")[0]);

var F9top3=$(".F9top3");
var F9top2=$(".F9top2");
var F9top4=$(".F9top4");
var F9one=$(".one",$(".F9")[0]);
var F9xiala=$(".F9xiala",$(".F9")[0]);
var F9xiala1=$(".F9xiala1",$(".F9")[0]);
var F9xiala2=$(".F9xiala2",$(".F9")[0]);

var F10top3=$(".F10top3");
var F10top2=$(".F10top2");
var F10top4=$(".F10top4");
var F10one=$(".one",$(".F10")[0]);
var F10xiala=$(".F10xiala",$(".F10")[0]);
var F10xiala1=$(".F10xiala1",$(".F10")[0]);
var F10xiala2=$(".F10xiala2",$(".F10")[0]);

var F11top3=$(".F11top3");
var F11top2=$(".F11top2");
var F11top4=$(".F11top4");
var F11one=$(".one",$(".F11")[0]);
var F11xiala=$(".F11xiala",$(".F11")[0]);
var F11xiala1=$(".F11xiala1",$(".F11")[0]);
var F11xiala2=$(".F11xiala2",$(".F11")[0]);
hks(F2top3,F2top2,F2top4,F2one,F2xiala,F2xiala1,F2xiala2);
hks(F3top3,F3top2,F3top4,F3one,F3xiala,F3xiala1,F3xiala2);
hks(F4top3,F4top2,F4top4,F4one,F4xiala,F4xiala1,F4xiala2);
hks(F5top3,F5top2,F5top4,F5one,F5xiala,F5xiala1,F5xiala2);
// hks(F6top3,F6top2,F6top4,F6one,F6xiala,F6xiala1,F6xiala2);
// hks(F7top3,F7top2,F7top4,F7one,F7xiala,F7xiala1,F7xiala2);
hks(F8top3,F8top2,F8top4,F8one,F8xiala,F8xiala1,F8xiala2);
hks(F9top3,F9top2,F9top4,F9one,F9xiala,F9xiala1,F9xiala2);
hks(F10top3,F10top2,F10top4,F10one,F10xiala,F10xiala1,F10xiala2);
hks(F11top3,F11top2,F11top4,F11one,F11xiala,F11xiala1,F11xiala2);
function hks(a,b,c,d,e,f,g){
a[0].style.borderLeft="1px solid #C81623";
	a[0].style.borderRight="1px solid #C81623";
	a[0].style.borderBottom="1px solid #fff";
	a[0].style.borderTop="3px solid #C81623";
	a[0].style.height="32px";
	e[0].style.display="block";
	d[0].style.display="none";
a[0].onmouseover=function(){
	a[0].style.borderLeft="1px solid #C81623";
	a[0].style.borderRight="1px solid #C81623";
	a[0].style.borderBottom="1px solid #fff";
	a[0].style.borderTop="3px solid #C81623";
	a[0].style.height="32px";
	e[0].style.display="block";
	a[0].style.lineHeight="30px";
	c[0].style.lineHeight="34px";
    
	for (var i = 0; i < f.length; i++) {
	f[i].style.display="none";
	b[i].style.borderLeft="none";
	b[i].style.borderRight="none";
	b[i].style.borderBottom="1px solid #C81623";
	b[i].style.borderTop="1px solid #ededed";
	b[i].style.height="34px";
	b[i].style.lineHeight="34px";		
	}
	for (var i = 0; i < d.length; i++) {
	d[i].style.display="block";
	}
	d[0].style.display="none";
	g[0].style.display="none";
	c[0].style.borderLeft="none";
	c[0].style.borderRight="1px solid #ededed";
	c[0].style.borderBottom="1px solid #C81623";
	c[0].style.borderTop="1px solid #ededed";
	c[0].style.height="34px";
}
for (var i = 0; i < b.length; i++) {
	b[i].index=i;
b[i].onmouseover=function(){
	for (var i = 0; i < f.length; i++) {
		f[i].style.display="none";
		b[i].style.borderLeft="none";
	    b[i].style.borderRight="none";
	    b[i].style.borderBottom="1px solid #C81623";
	    b[i].style.borderTop="1px solid #ededed";
	    b[i].style.height="34px";
	    b[i].style.lineHeight="34px";
	}
	b[this.index].style.borderLeft="1px solid #C81623";
	b[this.index].style.borderRight="1px solid #C81623";
	b[this.index].style.borderBottom="1px solid #fff";
	b[this.index].style.borderTop="3px solid #C81623";
	b[this.index].style.lineHeight="30px";
	a[0].style.lineHeight="34px";
	c[0].style.lineHeight="34px";
	
	b[this.index].style.height="32px";
	e[0].style.display="none";
    for (var i = 0; i < d.length; i++) {
	d[i].style.display="block";
	}
	d[this.index].style.display="none";
	d[this.index+1].style.display="none";
	g[0].style.display="none";
	f[this.index].style.display="block";
	a[0].style.borderLeft="1px solid #ededed";
	a[0].style.borderRight="none";
	a[0].style.borderBottom="1px solid #C81623";
	a[0].style.borderTop="1px solid #ededed";
	a[0].style.height="34px";
	c[0].style.borderLeft="none";
	c[0].style.borderRight="1px solid #ededed";
	c[0].style.borderBottom="1px solid #C81623";
	c[0].style.borderTop="1px solid #ededed";
	c[0].style.height="34px";
}
}
c[0].onmouseover=function(){
	for (var i = 0; i <f.length; i++) {
		f[i].style.display="none";
		b[i].style.borderLeft="none";
	    b[i].style.borderRight="none";
	    b[i].style.borderBottom="1px solid #C81623";
	    b[i].style.borderTop="1px solid #ededed";
	    b[i].style.height="34px";
	    b[i].style.lineHeight="34px";
	}
	for (var i = 0; i < d.length; i++) {
	d[i].style.display="block";
	}
	a[0].style.lineHeight="34px";
	c[0].style.lineHeight="30px";
	c[0].style.borderLeft="1px solid #C81623";
	c[0].style.borderRight="1px solid #C81623";
	c[0].style.borderBottom="1px solid #fff";
	c[0].style.borderTop="3px solid #C81623";
	d[7].style.display="none";
	c[0].style.height="32px";
	e[0].style.display="none";
	g[0].style.display="block";
	a[0].style.borderLeft="1px solid #ededed";
	a[0].style.borderRight="none";
	a[0].style.borderBottom="1px solid #C81623";
	a[0].style.borderTop="1px solid #ededed";
	a[0].style.height="34px";

}
}
// 2楼 6楼 7楼 8楼 9楼轮播图
// a F2xanniu1
// b F2xialaleft
// c F2L
// d F2R
// e F2img1
// f F2img2
var F2xanniu1=$(".F2xanniu1");
var F2xialaleft=$(".F2xialaleft",$(".F2")[0]);
var F2L=$(".F2anniuleft")[0];
var F2R=$(".F2anniuright")[0];
var F2xialaleft1=$(".F2xialaleft1");
var F2xialaleft2=$(".F2xialaleft2");
var F2img1=$("img",F2xialaleft1[0]);
var F2img2=$("img",F2xialaleft2[0]);

var F6xanniu1=$(".F6xanniu1");
var F6xialaleft=$(".F6xialaleft",$(".F6")[0]);
var F6L=$(".F6anniuleft")[0];
var F6R=$(".F6anniuright")[0];
var F6xialaleft1=$(".F6xialaleft1");
var F6xialaleft2=$(".F6xialaleft2");
var F6img1=$("img",F6xialaleft1[0]);
var F6img2=$("img",F6xialaleft2[0]);

var F7xanniu1=$(".F7xanniu1");
var F7xialaleft=$(".F7xialaleft",$(".F7")[0]);
var F7L=$(".F7anniuleft")[0];
var F7R=$(".F7anniuright")[0];
var F7xialaleft1=$(".F7xialaleft1");
var F7xialaleft2=$(".F7xialaleft2");
var F7img1=$("img",F7xialaleft1[0]);
var F7img2=$("img",F7xialaleft2[0]);

var F8xanniu1=$(".F8xanniu1");
var F8xialaleft=$(".F8xialaleft",$(".F8")[0]);
var F8L=$(".F8anniuleft")[0];
var F8R=$(".F8anniuright")[0];
var F8xialaleft1=$(".F8xialaleft1");
var F8xialaleft2=$(".F8xialaleft2");
var F8img1=$("img",F8xialaleft1[0]);
var F8img2=$("img",F8xialaleft2[0]);

var F9xanniu1=$(".F9xanniu1");
var F9xialaleft=$(".F9xialaleft",$(".F9")[0]);
var F9L=$(".F9anniuleft")[0];
var F9R=$(".F9anniuright")[0];
var F9xialaleft1=$(".F9xialaleft1");
var F9xialaleft2=$(".F9xialaleft2");
var F9img1=$("img",F9xialaleft1[0]);
var F9img2=$("img",F9xialaleft2[0]);
F2(F2xanniu1,F2xialaleft,F2L,F2R,F2img1,F2img2);
F2(F6xanniu1,F6xialaleft,F6L,F6R,F6img1,F6img2);
F2(F7xanniu1,F7xialaleft,F7L,F7R,F7img1,F7img2);
F2(F8xanniu1,F8xialaleft,F8L,F8R,F8img1,F8img2);
F2(F9xanniu1,F9xialaleft,F9L,F9R,F9img1,F9img2);

function F2(a,b,c,d,e,f){
var F2now=0;
var F2next=0;
e[0].style.zInedx=10;
f[0].style.zInedx=10;
var F2t=setInterval(F2move,2000);
var F2mw=parseInt(getStyle(e[0],"width"));
a[0].style.background="#C81623";
b[0].onmouseover=function(){
	clearInterval(F2t);
	c.style.display="block";
	d.style.display="block";
}
b[0].onmouseout=function(){
	F2t=setInterval(F2move,2000);
	d.style.display="none";
	c.style.display="none";
}
	for(var i=0;i<e.length;i++){
	   if(i==0){
	   continue;
	   }
	   else{
	     e[i].style.left=F2mw+"px";
	     f[i].style.left=F2mw+"px";
	   }
	}
    function F2move(){
         F2next++;
		 if(F2next==e.length){
		   F2next=0;
		 }
		 
         e[F2next].style.left=F2mw+"px";
         f[F2next].style.left=F2mw+"px";
		 animate(e[F2now],{left:-F2mw});
		 a[F2now].style.background="#3e3e3e";
		 animate(e[F2next],{left:0},function(){
		    flag=true});
		 animate(f[F2now],{left:-F2mw});
		 animate(f[F2next],{left:0},function(){
		    flag=true});
		 a[F2next].style.background="#C81623";		 
		 F2now=F2next;
    }
	 function F2moveL(){
         F2next--;
		 if(F2next<0){
		   F2next=e.length-1;
		 }
         e[F2next].style.left=-F2mw+"px";
         f[F2next].style.left=-F2mw+"px";
		 animate(e[F2now],{left:F2mw});
		 a[F2now].style.background="#3e3e3e";
		 animate(e[F2next],{left:0},function(){
		    flag=true
		 });
		 animate(f[F2now],{left:F2mw});
		 animate(f[F2next],{left:0},function(){
		    flag=true
		 });
		 a[F2next].style.background="#C81623";
		 F2now=F2next;
    }
	var flag=true;
    d.onclick=function(){
		if(flag){
	    F2move();
		flag=false;
		}
	}  
	c.onclick=function(){
		if(flag){
	    F2moveL();
		flag=false;
		}
	}
	for(var i=0;i<a.length;i++){ 
	   a[i].index=i;	   
	   a[i].onclick=function(){
         //next this.index
		 if(parseInt(getStyle(e[F2next],"left"))==0&&
		 	parseInt(getStyle(f[F2next],"left"))==0){
		 if(F2now<this.index){
		 e[this.index].style.left=F2mw+"px";
		 animate(e[F2now],{left:-F2mw});
		 animate(e[this.index],{left:0});
		 f[this.index].style.left=F2mw+"px";
		 animate(f[F2now],{left:-F2mw});
		 animate(f[this.index],{left:0});
		 }
		 else if(now>this.index){
		 e[this.index].style.left=-F2mw+"px";
		 animate(e[F2now],{left:F2mw});
		 animate(e[this.index],{left:0});
		 f[this.index].style.left=-F2mw+"px";
		 animate(f[F2now],{left:F2mw});
		 animate(f[this.index],{left:0});
		 }
		 else{
		    return;
		 }
		 a[F2now].style.background="#3e3e3e";
		 a[this.index].style.background="#C81623";
		 F2now=this.index;
		 F2next=this.index;
	   }  
	   }
	}
	}
// // 3楼轮播图
// a F3xanniu1
// b F3xialaleft
// c F3L
// d F3R
// e F3img1
var F3xanniu1=$(".F3xanniu1");
var F3xialaleft=$(".F3xialaleft",$(".F3")[0]);
var F3xialaleft1=$(".F3xialaleft1");
var F3xialaleft2=$(".F3xialaleft2");
var F3img1=$("img",F3xialaleft1[0]);
var F3L=$(".F3anniuleft")[0];
var F3R=$(".F3anniuright")[0];

var F4xanniu1=$(".F4xanniu1");
var F4xialaleft=$(".F4xialaleft",$(".F4")[0]);
var F4xialaleft1=$(".F4xialaleft1");
var F4xialaleft2=$(".F4xialaleft2");
var F4img1=$("img",F4xialaleft1[0]);
var F4L=$(".F4anniuleft")[0];
var F4R=$(".F4anniuright")[0];

var F5xanniu1=$(".F5xanniu1");
var F5xialaleft=$(".F5xialaleft",$(".F5")[0]);
var F5xialaleft1=$(".F5xialaleft1");
var F5xialaleft2=$(".F5xialaleft2");
var F5img1=$("img",F5xialaleft1[0]);
var F5L=$(".F5anniuleft")[0];
var F5R=$(".F5anniuright")[0];

var F10xanniu1=$(".F10xanniu1");
var F10xialaleft=$(".F10xialaleft",$(".F10")[0]);
var F10xialaleft1=$(".F10xialaleft1");
var F10xialaleft2=$(".F10xialaleft2");
var F10img1=$("img",F10xialaleft1[0]);
var F10L=$(".F10anniuleft")[0];
var F10R=$(".F10anniuright")[0];

var F11xanniu1=$(".F11xanniu1");
var F11xialaleft=$(".F11xialaleft",$(".F11")[0]);
var F11xialaleft1=$(".F11xialaleft1");
var F11xialaleft2=$(".F11xialaleft2");
var F11img1=$("img",F11xialaleft1[0]);
var F11L=$(".F11anniuleft")[0];
var F11R=$(".F11anniuright")[0];
F3(F3xanniu1,F3xialaleft,F3L,F3R,F3img1);
F3(F4xanniu1,F4xialaleft,F4L,F4R,F4img1);
F3(F5xanniu1,F5xialaleft,F5L,F5R,F5img1);
F3(F10xanniu1,F10xialaleft,F10L,F10R,F10img1);
F3(F11xanniu1,F11xialaleft,F11L,F11R,F11img1);
function F3(a,b,c,d,e){
e[0].style.zInedx=10;
var F3now=0;
var F3next=0;
var F3t=setInterval(F3move,2000);
var F3mw=parseInt(getStyle(e[0],"width"));
a[0].style.background="#C81623";
b[0].onmouseover=function(){
	clearInterval(F3t);
	c.style.display="block";
	d.style.display="block";
}
b[0].onmouseout=function(){
	F3t=setInterval(F3move,2000);
	d.style.display="none";
	c.style.display="none";
}
	for(var i=0;i<e.length;i++){
	   if(i==0){
	   continue;
	   }
	   else{
	     e[i].style.left=F1mw+"px";
	   }
	}
    function F3move(){
         F3next++;
		 if(F3next==e.length){
		   F3next=0;
		 }
		 
         e[F3next].style.left=F3mw+"px";
		 animate(e[F3now],{left:-F3mw});
		 a[F3now].style.background="#3e3e3e";
		 animate(e[F3next],{left:0},function(){
		    flag=true});
		 a[F3next].style.background="#C81623";		 
		 F3now=F3next;
    }
	 function F3moveL(){
         F3next--;
		 if(F3next<0){
		   F3next=e.length-1;
		 }
         e[F3next].style.left=-F3mw+"px";
		 animate(e[F3now],{left:F3mw});
		 a[F3now].style.background="#3e3e3e";
		 animate(e[F3next],{left:0},function(){
		    flag=true
		 });
		 a[F3next].style.background="#C81623";
		 F3now=F3next;
    }
	var flag=true;
    d.onclick=function(){
		if(flag){
	    F3move();
		flag=false;
		}
	}  
	c.onclick=function(){
		if(flag){
	    F3moveL();
		flag=false;
		}
	}
	for(var i=0;i<a.length;i++){ 
	   a[i].index=i;	   
	   a[i].onclick=function(){
         //next this.index
		 if(parseInt(getStyle(e[F3next],"left"))==0){
		 if(F3now<this.index){
		 e[this.index].style.left=F3mw+"px";
		 animate(e[F3now],{left:-F3mw});
		 animate(e[this.index],{left:0});
		 }
		 else if(now>this.index){
		 e[this.index].style.left=-F3mw+"px";
		 animate(e[F3now],{left:F3mw});
		 animate(e[this.index],{left:0});
		 }
		 else{
		    return;
		 }
		 a[F3now].style.background="#3e3e3e";
		 a[this.index].style.background="#C81623";
		 F3now=this.index;
		 F3next=this.index;
	   }  
	   }
	}
	}
// // 6楼
var F6top3=$(".F6top3");
var F6top2=$(".F6top2");
var F6top4=$(".F6top4");
var F6one=$(".one",$(".F6")[0]);
var F6xiala=$(".F6xiala",$(".F6")[0]);
var F6xiala1=$(".F6xiala1",$(".F6")[0]);
var F6xiala2=$(".F6xiala2",$(".F6")[0]);
F6top3[0].style.borderLeft="1px solid #C81623";
	F6top3[0].style.borderRight="1px solid #C81623";
	F6top3[0].style.borderBottom="1px solid #fff";
	F6top3[0].style.borderTop="3px solid #C81623";
	F6top3[0].style.height="32px";
	F6xiala[0].style.display="block";
	F6one[0].style.display="none";
F6top3[0].onmouseover=function(){
	F6top3[0].style.borderLeft="1px solid #C81623";
	F6top3[0].style.borderRight="1px solid #C81623";
	F6top3[0].style.borderBottom="1px solid #fff";
	F6top3[0].style.borderTop="3px solid #C81623";
	F6top3[0].style.height="32px";
	F6top3[0].style.lineHeight="30px";
	F6top4[0].style.lineHeight="34px";
	F6xiala[0].style.display="block";
	for (var i = 0; i < F6xiala1.length; i++) {
	F6xiala1[i].style.display="none";
	F6top2[i].style.borderLeft="none";
	F6top2[i].style.borderRight="none";
	F6top2[i].style.borderBottom="1px solid #C81623";
	F6top2[i].style.borderTop="1px solid #ededed";
	F6top2[i].style.height="34px";
	F6top2[i].style.lineHeight="34px";

	}
	for (var i = 0; i < F6one.length; i++) {
	F6one[i].style.display="block";
	}
	F6one[0].style.display="none";
	F6xiala2[0].style.display="none";
	F6top4[0].style.borderLeft="none";
	F6top4[0].style.borderRight="1px solid #ededed";
	F6top4[0].style.borderBottom="1px solid #C81623";
	F6top4[0].style.borderTop="1px solid #ededed";
	F6top4[0].style.height="34px";
}
for (var i = 0; i < F6top2.length; i++) {
	F6top2[i].index=i;
F6top2[i].onmouseover=function(){
	for (var i = 0; i < F6xiala1.length; i++) {
		F6xiala1[i].style.display="none";
		F6top2[i].style.borderLeft="none";
	    F6top2[i].style.borderRight="none";
	    F6top2[i].style.borderBottom="1px solid #C81623";
	    F6top2[i].style.borderTop="1px solid #ededed";
	    F6top2[i].style.height="34px";
		F6top2[i].style.lineHeight="34px";
	}
	F6top2[this.index].style.borderLeft="1px solid #C81623";
	F6top2[this.index].style.borderRight="1px solid #C81623";
	F6top2[this.index].style.borderBottom="1px solid #fff";
	F6top2[this.index].style.borderTop="3px solid #C81623";
	F6top2[this.index].style.lineHeight="30px";
	F6top3[0].style.lineHeight="34px";
	F6top4[0].style.lineHeight="34px";
	F6top2[this.index].style.height="32px";
	F6xiala[0].style.display="none";
    for (var i = 0; i < F6one.length; i++) {
	F6one[i].style.display="block";
	}
	F6one[this.index].style.display="none";
	F6one[this.index+1].style.display="none";
	F6xiala2[0].style.display="none";
	F6xiala1[this.index].style.display="block";
	F6top3[0].style.borderLeft="1px solid #ededed";
	F6top3[0].style.borderRight="none";
	F6top3[0].style.borderBottom="1px solid #C81623";
	F6top3[0].style.borderTop="1px solid #ededed";
	F6top3[0].style.height="34px";
	F6top4[0].style.borderLeft="none";
	F6top4[0].style.borderRight="1px solid #ededed";
	F6top4[0].style.borderBottom="1px solid #C81623";
	F6top4[0].style.borderTop="1px solid #ededed";
	F6top4[0].style.height="34px";
}
}
F6top4[0].onmouseover=function(){
	for (var i = 0; i <F6xiala1.length; i++) {
		F6xiala1[i].style.display="none";
		F6top2[i].style.borderLeft="none";
	    F6top2[i].style.borderRight="none";
	    F6top2[i].style.borderBottom="1px solid #C81623";
	    F6top2[i].style.borderTop="1px solid #ededed";
		F6top2[i].style.lineHeight="34px";
	    F6top2[i].style.height="34px";
	}
	for (var i = 0; i < F6one.length; i++) {
	F6one[i].style.display="block";
	}
	F6top3[0].style.lineHeight="34px";
	F6top4[0].style.lineHeight="30px";
	F6top4[0].style.borderLeft="1px solid #C81623";
	F6top4[0].style.borderRight="1px solid #C81623";
	F6top4[0].style.borderBottom="1px solid #fff";
	F6top4[0].style.borderTop="3px solid #C81623";
	F6one[5].style.display="none";
	F6top4[0].style.height="32px";
	F6xiala[0].style.display="none";
	F6xiala2[0].style.display="block";
	F6top3[0].style.borderLeft="1px solid #ededed";
	F6top3[0].style.borderRight="none";
	F6top3[0].style.borderBottom="1px solid #C81623";
	F6top3[0].style.borderTop="1px solid #ededed";
	F6top3[0].style.height="34px";

}
// //7楼
var F7top3=$(".F7top3");
var F7top2=$(".F7top2");
var F7top4=$(".F7top4");
var F7one=$(".one",$(".F7")[0]);
var F7xiala=$(".F7xiala",$(".F7")[0]);
var F7xiala1=$(".F7xiala1",$(".F7")[0]);
var F7xiala2=$(".F7xiala2",$(".F7")[0]);
F7top3[0].style.borderLeft="1px solid #C81623";
	F7top3[0].style.borderRight="1px solid #C81623";
	F7top3[0].style.borderBottom="1px solid #fff";
	F7top3[0].style.borderTop="3px solid #C81623";
	F7top3[0].style.height="32px";
	F7xiala[0].style.display="block";
	F7one[0].style.display="none";
F7top3[0].onmouseover=function(){
	F7top3[0].style.borderLeft="1px solid #C81623";
	F7top3[0].style.borderRight="1px solid #C81623";
	F7top3[0].style.borderBottom="1px solid #fff";
	F7top3[0].style.borderTop="3px solid #C81623";
	F7top3[0].style.height="32px";
	F7top3[0].style.lineHeight="30px";
	F7top4[0].style.lineHeight="34px";
	F7xiala[0].style.display="block";
	for (var i = 0; i < F7xiala1.length; i++) {
	F7xiala1[i].style.display="none";
	F7top2[i].style.borderLeft="none";
	F7top2[i].style.borderRight="none";
	F7top2[i].style.borderBottom="1px solid #C81623";
	F7top2[i].style.borderTop="1px solid #ededed";
	F7top2[i].style.lineHeight="34px";
	F7top2[i].style.height="34px";		
	}
	for (var i = 0; i < F7one.length; i++) {
	F7one[i].style.display="block";
	}
	F7one[0].style.display="none";
	F7xiala2[0].style.display="none";
	F7top4[0].style.borderLeft="none";
	F7top4[0].style.borderRight="1px solid #ededed";
	F7top4[0].style.borderBottom="1px solid #C81623";
	F7top4[0].style.borderTop="1px solid #ededed";
	F7top4[0].style.height="34px";
}
for (var i = 0; i < F7top2.length; i++) {
	F7top2[i].index=i;
F7top2[i].onmouseover=function(){
	for (var i = 0; i < F7xiala1.length; i++) {
		F7xiala1[i].style.display="none";
		F7top2[i].style.borderLeft="none";
	    F7top2[i].style.borderRight="none";
	    F7top2[i].style.borderBottom="1px solid #C81623";
	    F7top2[i].style.borderTop="1px solid #ededed";
		F7top2[i].style.lineHeight="34px";
	    F7top2[i].style.height="34px";
	}
	F7top2[this.index].style.borderLeft="1px solid #C81623";
	F7top2[this.index].style.borderRight="1px solid #C81623";
	F7top2[this.index].style.borderBottom="1px solid #fff";
	F7top2[this.index].style.borderTop="3px solid #C81623";
	F7top2[this.index].style.height="32px";
	F7top2[this.index].style.lineHeight="30px";
	F7top3[0].style.lineHeight="34px";
	F7top4[0].style.lineHeight="34px";
	F7xiala[0].style.display="none";
    for (var i = 0; i < F7one.length; i++) {
	F7one[i].style.display="block";
	}
	F7one[this.index].style.display="none";
	F7one[this.index+1].style.display="none";
	F7xiala2[0].style.display="none";
	F7xiala1[this.index].style.display="block";
	F7top3[0].style.borderLeft="1px solid #ededed";
	F7top3[0].style.borderRight="none";
	F7top3[0].style.borderBottom="1px solid #C81623";
	F7top3[0].style.borderTop="1px solid #ededed";
	F7top3[0].style.height="34px";
	F7top4[0].style.borderLeft="none";
	F7top4[0].style.borderRight="1px solid #ededed";
	F7top4[0].style.borderBottom="1px solid #C81623";
	F7top4[0].style.borderTop="1px solid #ededed";
	F7top4[0].style.height="34px";
}
}
F7top4[0].onmouseover=function(){
	for (var i = 0; i <F7xiala1.length; i++) {
		F7xiala1[i].style.display="none";
		F7top2[i].style.borderLeft="none";
	    F7top2[i].style.borderRight="none";
	    F7top2[i].style.borderBottom="1px solid #C81623";
	    F7top2[i].style.borderTop="1px solid #ededed";
		F7top2[2].style.lineHeight="34px";
	    F7top2[i].style.height="34px";
	}
	for (var i = 0; i < F7one.length; i++) {
	F7one[i].style.display="block";
	}
	F7top3[0].style.lineHeight="34px";
	F7top4[0].style.lineHeight="30px";
	F7top4[0].style.borderLeft="1px solid #C81623";
	F7top4[0].style.borderRight="1px solid #C81623";
	F7top4[0].style.borderBottom="1px solid #fff";
	F7top4[0].style.borderTop="3px solid #C81623";
	F7one[6].style.display="none";
	F7top4[0].style.height="32px";
	F7xiala[0].style.display="none";
	F7xiala2[0].style.display="block";
	F7top3[0].style.borderLeft="1px solid #ededed";
	F7top3[0].style.borderRight="none";
	F7top3[0].style.borderBottom="1px solid #C81623";
	F7top3[0].style.borderTop="1px solid #ededed";
	F7top3[0].style.height="34px";

}
// 12楼轮播图
var F12xialaleft=$(".F12xialaleft",$(".F12")[0]);
var F12bottom2top=$(".F12bottom2top");
var F12xialaleft2=$(".F12xialaleft2");
var F12img1=$("img",F12bottom2top[0]);
F12img1[0].style.zInedx=10;
var F12now=0;
var F12next=0;
var F12L=$(".F12anniuleft")[0];
var F12R=$(".F12anniuright")[0];
var F12t=setInterval(F12move,2000);
var F12mw=parseInt(getStyle(F12img1[0],"width"));
var F12xanniu1=$(".F12xanniu1");
F12xanniu1[0].style.background="#C81623";
F12bottom2top[0].onmouseover=function(){
	clearInterval(F12t);
	F12L.style.display="block";
	F12R.style.display="block";
}
F12bottom2top[0].onmouseout=function(){
	F12t=setInterval(F12move,2000);
	F12R.style.display="none";
	F12L.style.display="none";
}
	for(var i=0;i<F12img1.length;i++){
	   if(i==0){
	   continue;
	   }
	   else{
	     F12img1[i].style.left=F1mw+"px";
	   }
	}
    function F12move(){
         F12next++;
		 if(F12next==F12img1.length){
		   F12next=0;
		 }
		 
         F12img1[F12next].style.left=F12mw+"px";
		 animate(F12img1[F12now],{left:-F12mw});
		 F12xanniu1[F12now].style.background="#3e3e3e";
		 animate(F12img1[F12next],{left:0},function(){
		    flag=true});
		 F12xanniu1[F12next].style.background="#C81623";		 
		 F12now=F12next;
    }
	 function F12moveL(){
         F12next--;
		 if(F12next<0){
		   F12next=F12img1.length-1;
		 }
         F12img1[F12next].style.left=-F12mw+"px";
		 animate(F12img1[F12now],{left:F12mw});
		 F12xanniu1[F12now].style.background="#3e3e3e";
		 animate(F12img1[F12next],{left:0},function(){
		    flag=true
		 });
		 F12xanniu1[F12next].style.background="#C81623";
		 F12now=F12next;
    }
	var flag=true;
    F12R.onclick=function(){
		if(flag){
	    F12move();
		flag=false;
		}
	}  
	F12L.onclick=function(){
		if(flag){
	    F12moveL();
		flag=false;
		}
	}
	for(var i=0;i<F12xanniu1.length;i++){ 
	   F12xanniu1[i].index=i;	   
	   F12xanniu1[i].onclick=function(){
         //next this.index
		 if(parseInt(getStyle(F12img1[F12next],"left"))==0){
		 if(F12now<this.index){
		 F12img1[this.index].style.left=F12mw+"px";
		 animate(F12img1[F12now],{left:-F12mw});
		 animate(F12img1[this.index],{left:0});
		 }
		 else if(now>this.index){
		 F12img1[this.index].style.left=-F12mw+"px";
		 animate(F12img1[F12now],{left:F12mw});
		 animate(F12img1[this.index],{left:0});
		 }
		 else{
		    return;
		 }
		 F12xanniu1[F12now].style.background="#3e3e3e";
		 F12xanniu1[this.index].style.background="#C81623";
		 F12now=this.index;
		 F12next=this.index;
	   }  
	   }
	}
var F13xialaleft=$(".F13xialaleft",$(".F13")[0]);
var F13bottom2top=$(".F12bottom2top");
var F13xialaleft2=$(".F13xialaleft2");
var F13img1=$("img",F13bottom2top[1]);
F13img1[0].style.zInedx=10;
var F13now=0;
var F13next=0;
var F13L=$(".F13anniuleft")[0];
var F13R=$(".F13anniuright")[0];
var F13t=setInterval(F13move,2000);
var F13mw=parseInt(getStyle(F13img1[0],"width"));
var F13xanniu1=$(".F13xanniu1");
F13xanniu1[0].style.background="#C81623";
F13bottom2top[1].onmouseover=function(){
	clearInterval(F13t);
	F13L.style.display="block";
	F13R.style.display="block";
}
F13bottom2top[1].onmouseout=function(){
	F13t=setInterval(F13move,2000);
	F13R.style.display="none";
	F13L.style.display="none";
}
	for(var i=0;i<F13img1.length;i++){
	   if(i==0){
	   continue;
	   }
	   else{
	     F13img1[i].style.left=F1mw+"px";
	   }
	}
    function F13move(){
         F13next++;
		 if(F13next==F13img1.length){
		   F13next=0;
		 }
		 
         F13img1[F13next].style.left=F13mw+"px";
		 animate(F13img1[F13now],{left:-F13mw});
		 F13xanniu1[F13now].style.background="#3e3e3e";
		 animate(F13img1[F13next],{left:0},function(){
		    flag=true});
		 F13xanniu1[F13next].style.background="#C81623";		 
		 F13now=F13next;
    }
	 function F13moveL(){
         F13next--;
		 if(F13next<0){
		   F13next=F13img1.length-1;
		 }
         F13img1[F13next].style.left=-F13mw+"px";
		 animate(F13img1[F13now],{left:F13mw});
		 F13xanniu1[F13now].style.background="#3e3e3e";
		 animate(F13img1[F13next],{left:0},function(){
		    flag=true
		 });
		 F13xanniu1[F13next].style.background="#C81623";
		 F13now=F13next;
    }
	var flag=true;
    F13R.onclick=function(){
		if(flag){
	    F13move();
		flag=false;
		}
	}  
	F13L.onclick=function(){
		if(flag){
	    F13moveL();
		flag=false;
		}
	}
	for(var i=0;i<F13xanniu1.length;i++){ 
	   F13xanniu1[i].index=i;	   
	   F13xanniu1[i].onclick=function(){
         //next this.index
		 if(parseInt(getStyle(F13img1[F13next],"left"))==0){
		 if(F13now<this.index){
		 F13img1[this.index].style.left=F13mw+"px";
		 animate(F13img1[F13now],{left:-F13mw});
		 animate(F13img1[this.index],{left:0});
		 }
		 else if(now>this.index){
		 F13img1[this.index].style.left=-F13mw+"px";
		 animate(F13img1[F13now],{left:F13mw});
		 animate(F13img1[this.index],{left:0});
		 }
		 else{
		    return;
		 }
		 F13xanniu1[F13now].style.background="#3e3e3e";
		 F13xanniu1[this.index].style.background="#C81623";
		 F13now=this.index;
		 F13next=this.index;
	   }  
	   }
	}
// 天天低价轮播
var ttdjbottomrightn=$(".ttdjbottomrightn")[0];
var ttdjbottomrightn1=$(".ttdjbottomrightn1");
var ttdjbottomrightn11=$(".ttdjbottomrightn11");
var tt=ttdjbottomrightn11[0].offsetHeight;
ttdjbottomrightn1[0].style.width=tt*ttdjbottomrightn11.length+"px";
var ttt=setInterval(ttdj,2000);
 ttdjbottomrightn.onmouseover=function(){
      clearInterval(ttt);
 }
 ttdjbottomrightn.onmouseout=function(){
      ttt=setInterval(ttdj,2000);
 }
function ttdj() {
	var first1=firstChild(ttdjbottomrightn1[0]);
	var last1=lastChild(ttdjbottomrightn1[0]);
	ttdjbottomrightn1[0].insertBefore(last1,first1);
	ttdjbottomrightn1[0].style.top=-tt+"px";
	animate(ttdjbottomrightn1[0],{top:0});
}


// 左导航
var Fx=$(".Fx");
var zdh=$(".zdh")[0];
var zdhn=$(".zdhn");
var nowxx;
var zdhn1=$(".zdhn1");
var zdhn2=$(".zdhn2");
var nnn=true;
var cHeight=document.documentElement.clientHeight;
for (var i = 0; i < Fx.length; i++) {
      	Fx[i].h=Fx[i].offsetTop;
          }
window.onscroll=function(){
	if (nnn) {
	var obj=document.body .scrollTop?document.body:document.documentElement;
    var Top=obj.scrollTop;
    if (Top>=Fx[0].h-300) {
      	      	zdh.style.display="block";
      	      }
    if (Top<Fx[0].h-300||Top>=Fx[11].h+600) {
      	      	zdh.style.display="none";
      	      }
    for (var i = 0; i < zdhn.length; i++) {
      	      if (Top>=Fx[i].h-200) {
      	            for (var j = 0; j < zdhn.length; j++) {
      	 	        zdhn1[j].style.display="block";
      	 	        zdhn2[j].style.display="none";
      	            }
      	            zdhn1[i].style.display="none";
      	            zdhn2[i].style.display="block";
                    nowxx=i;
                }                   
      	    }
}
}
for (var i = 0; i < zdhn.length; i++) {
          zdhn[i].index=i;
          zdhn[i].onclick=function(){
          	nnn=false;
             animate(document.body,{scrollTop:Fx[this.index].h},500,function(){
             	nnn=true;
             });
             animate(document.documentElement,{scrollTop:Fx[this.index].h},500,function(){
             	nnn=true;
             });
             zdhn1[this.index].style.display="none";
             zdhn2[this.index].style.display="block";
             zdhn2[this.index].style.color="red";
             zdhn2[this.index].style.background="#fff";

             nowxx=this.index;
          }
        }
for (var i = 0; i < zdhn.length; i++) {
          zdhn[i].index=i;
          zdhn[i].onmouseover=function(){
            zdhn1[this.index].style.display="none";
            zdhn2[this.index].style.display="block";
            zdhn2[this.index].style.background="red";
            zdhn2[this.index].style.color="#fff";
          }
            zdhn[i].onmouseout=function(){
              if (this.index==nowxx) {
                        return;
              }
              zdhn1[this.index].style.display="block";
              zdhn2[this.index].style.display="none";
              zdhn2[this.index].style.background="#fff";
              zdhn2[this.index].style.color="red";


            }
            // hover()
        }
// 右导航
var ydh1=$(".ydh1");
var hq=$(".hq");
var ydhword=$(".ydhword");
for(var i=0;i<ydh1.length;i++){
  ydh1[i].index=i;
   hover(ydh1[i],function(){
  hq[this.index].style.backgroundColor="#c81623";
  animate(ydhword[this.index],{left:-62},600);
  ydhword[this.index].style.background="#c81623";
},function(){
  hq[this.index].style.backgroundColor="#7a6e6e";
  animate(ydhword[this.index],{left:0},600);
  ydhword[this.index].style.background="#7a6e6e";
})
}
ydh1[6].onclick=function(){
    animate(document.body,{scrollTop:0},300)
    animate(document.documentElement,{scrollTop:0},300)
}








}