/**
 * Created by Administrator on 2016/12/8.
 */

//封装getElementById
var dom=function(ele){
    return document.getElementById(ele);
};

//获得某元素的top
var totalTop= function (selector) {
    var top= selector.offsetTop;
    selector=selector.offsetParent;
    while(selector!=null){
        top+=selector.offsetTop;
        selector=selector.offsetParent;
    }
    return top;
};
//获得某元素的left
var totalLeft= function (selector) {
    var left= selector.offsetLeft;
    selector=selector.offsetParent;
    while(selector!=null){
        left+=selector.offsetLeft;
        selector=selector.offsetParent;
    }
    return left;
};

//定位信息提示框的位置
dom("message_box").style.top=totalTop(dom("search_box"))+dom("search_box").clientHeight+"px";
dom("message_box").style.left=totalLeft(dom("search_box"))+"px";

//监听输入的信息
var index = -1;
function addEvent(selector, event, listener) {
    if(selector.addEventListener){
        selector.addEventListener(event,listener,false);
    }
    else if(selector.attachEvent){
        selector.attachEvent("on"+event,listener);
    }
    else{
        selector["on"+event]=listener;
    }
}

addEvent(dom("input_text"),"keyup",suggest);
var as=new Array;

//监听事件的listener
function suggest() {
    var text=dom("input_text").value.replace(/\s+/,'');
    var lii=document.getElementsByTagName("li");
    document.onclick=function(){
        for(var i= 0,l= lii.length;i<l;i++){
            lii[i].style.display="none";
        }
    };
    var j=0;
    for(var i= 0,l= lii.length;i<l;i++){
        lii[i].style.display="none";
        if(lii[i].innerHTML.substring(0,text.length)==text){
            lii[i].style.display="block";
            as[j]=lii[i];
            j++;
        }
    }

    for(var i=0;i<as.length;i++) {
        as[i].onmouseover = function () {
            this.style.background = "#999";
            var idx = Array.indexOf(as, this);
            index = idx;
        };
        as [i].onclick = function (event) {
            event = event || window.event;
            if (event.stopPropagation) {
                event.stopPropagation();
            }
            else {
                event.cancelBubble = true;
            }
            for(var i= 0,l= lii.length;i<l;i++){
                lii[i].style.display="none";
            }
            console.log(this.innerHTML);
            dom("input_text").value = this.innerHTML;

        };
        as [i].onmouseout = function () {
            this.style.backgroundColor = "#fff";
        };

        //监听相应按键取值的事件
        document.onkeyup = function (event) {
            event = event || window.event;
            for (var i = 0; i < as.length; i++) {
                as[i].style.background = "#fff";
            }
            if (event.keyCode == 38) {
                if (index > 0) {
                    console.log(index);
                    index = index - 1;
                    as[index].style.background = "#999";
                }
                else {
                    console.log(event.keyCode);
                    index = as.length - 1;
                    console.log(index);
                    as[index].style.background = "#999";
                }
            }
            else if (event.keyCode == 40) {
                if (index < as.length - 1) {
                    index = index + 1;
                    as[index].style.background = "#999";
                }
                else {
                    console.log(event.keyCode);
                    index = 0;
                    as[index].style.background = "#999";
                }
            }
            else if (event.keyCode == 13) {
                for(var i= 0,l= lii.length;i<l;i++){
                    lii[i].style.display="none";
                }
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else {
                    event.cancelBubble = true;
                }
                dom("input_text").value = as[index].innerHTML;
            }
        };
    }
}
