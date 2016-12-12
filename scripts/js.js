/**
 * Created by Administrator on 2016/12/2.
F */
//实现一个简单的query
function $(ele){
    ele=ele.replace(/\s+/, ' ');
    switch (ele[0]){
        case'#':
            var idx=ele.indexOf('.');
            if(idx==(-1)){
                ele=ele.substring(1,ele.length);
                ele=document.getElementById(ele);
                return ele;
            }
            else{
                var temp=document.getElementById(ele.substring(1,idx-1));
                for(var i= 0;i<ele.length;i++){
                    if(temp.childNodes[i].className==ele.substring(idx+1,ele.length)){
                        ele=temp.childNodes[i];
                        return ele;
                    }
                }
            }
            break;
        case'.':
            ele=document.getElementsByClassName(ele.substring(1,ele.length))[0];
            return ele;
        case'[':
            var idx=ele.indexOf('=');
            var all=document.getElementsByTagName("*");
            if(idx==-1){
                var key=ele.substring(1,ele.length-1);
                for(var i=0;i<all.length;i++){
                    if(all[i][key]){
                        ele=all[i];
                        return ele;
                    }
                }
            }else{
                var key=ele.substring(1,idx);
                var value=ele.substring(idx+2,ele.length-2);
                for(var i=0;i<all.length;i++){
                    if(all[i][key]===value){
                        ele=all[i];
                        return ele;
                    }
                }
            }
            break;
        default :
            break;
    }
//    console.log("ele:"+(ele.className||ele.id));
}


//字符串分成数组，控制字符串输入数量，
function a(){
    var array=$("#ipt").value.split(/\s+|,|，|;|；|、/);
    $("#warn").style.color="red";
    $("#warn").style.display="none";
    if(array.length>10||array[0]==""){
        if(array.length>10){
            $("#warn").innerHTML="输入数量不能超过10个！";
        }
        else{
            $("#warn").innerHTML="请输入!";
        }
        $("#warn").style.display="block";
        return false;
    }
    array=arr(array);
    for(var i= 0,l=array.length;i<l;i++){
        var ipt=document.createElement("input");
        var label=document.createTextNode(array[i]);
        ipt.type="checkbox";
        $("#btn").parentNode.appendChild(ipt);
        $("#btn").parentNode.appendChild(label);
    }
}


//元素监听

function addEvent(selector, event, listener) {
    var element=$(selector);
    // your implement
    if(element.addEventListener){
        element.addEventListener(event,listener,false);
    }
    else if(element.attachEvent){
        console.log("attach");
        element.attachEvent("on"+event,listener);
    }
    else{
        console.log("o");
        element["on"+event]=listener;
    }
}

//取消element的事件监听

function removeEvent(selector,event,listener){
    var element=$(selector);
    if(element.removeEventListener){
        element.removeEventListener(event,listener,false);
    }
    else{
        element.detachEvent("on"+event,listener);
    }
}

//实现对click事件的绑定
function addClickEvent(selector,listener){
    addEvent(selector,"click",listener);
}

//实现对于按enter键的绑定
function addEnterEvent(selector, listener) {
    addEvent(selector, "keyup", function (event) {
        if (event.keyCode == 13) {
            a();
        }
    });
}

function delegateEvent(selector, tag, eventName, listener) {
    // your implement
    addEvent(selector,eventName,function(event){
        var e=event||window.event,
            target= e.target?e.target: e.srcElement;
        if(e.preventDefault){
            e.preventDefault();
        }
        else{
            e.returnValue=false;
        }
        if(target.nodeName.toLowerCase()===tag){
            listener.apply(target);
        }
    });
}

//把以上五个函数变成$对象的方法
$.on=addEvent;
$.un=removeEvent;
$.click=addClickEvent;
$.enter=addEnterEvent;
$.delegate = delegateEvent;
//$.delegate("#nav","a","click",a);

//测试浏览器是否为IE，documentMode是ie浏览器特有属性
//console.log(isIE());
function isIE() {
    return document.documentMode||false;
}

//设置缓存
//setCookie("wo","men",365);
function setCookie(name, value, expires) {
    var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    if (expires instanceof Date) {
        cookieText += "; expires=" + expires.toUTCString();
    }

    document.cookie = cookieText;
}

//获取缓存
function getCookie(name) {
    var cookieName = encodeURIComponent(name) + "=",
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;

    if (cookieStart > -1) {
        var cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
            cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    }

    return cookieValue;
}


arr(["a","b","b","c","d","b","a","e"]);
//数组去空，去重
function arr(array){
    var temp=new Array,
        j= 0,
        g;
    for(var i= 0,l=array.length;i<l;i++){
        if(array[i].indexOf(" ")==-1){
            if(i==0){
                temp[0]=array[0];
            }else {
                for (j=0 , g = temp.length; j < g; j++) {
                    if (array[i] == temp[j]) {
                        break;
                    }
                }
                if(array[i]!=temp[j]){
                    j=temp.length;
                    temp[j] = array[i];
                }
            }
        }
    }
    return temp;
}
