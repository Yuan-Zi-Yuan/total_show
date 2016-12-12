/**
 * Created by Administrator on 2016/9/10.
 */
function showPic(whichPic)
{
    var source=whichPic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text=whichPic.getAttribute("title")? whichPic.getAttribute("title"):" ";
    var description=document.getElementById("description");
    description.childNodes[0].nodeValue=text;
    return true;
}
function prepareGallery()
{
    if(!document.getElementById)  return false;
    if(!document.getElementsByTagName)  return false;
    var gallery=document.getElementsByTagName("a");
    for(var i=0;i<gallery.length;i++)
    {
        gallery[i].onclick=function()
        {
            return !showPic(this);
        }
    }
}
addLoadEvent(prepareGallery);
function countBodyChildren()
{
    var bodyReplace=document.getElementsByTagName("body")[0];
    var bodyChild=bodyReplace.childNodes;
}
addLoadEvent(countBodyChildren);
function popUp(winURL)
{
    window.open(winURL,"popup","width=320,height=480");
}
addLoadEvent(prepareLinks);
function prepareLinks()
{
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++)
    {
        if(links[i].getAttribute("class")=="popUp")
        {
            links[i].onclick=function()
            {
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
function addLoadEvent(func)
{
    var oldOnLoad=window.onload;
    if(typeof window.onload!="function")
    {
        window.onload=func;
    }
    else
    {
        window.onload=function()
        {
            oldOnLoad();
            func();
        }
    }
}
function preparePlaceholder()
{
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/create_images/9840.jpg_wh300.jpg");
    placeholder.setAttribute("alt","花朵占位符");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("choose a picture");
    description.appendChild(desctext);
    var popUp=document.getElementsByClassName("popUp")[0];
    var parent=popUp.parentNode;
    parent.insertBefore(description,popUp);
    parent.insertBefore(placeholder,description);
}
addLoadEvent(preparePlaceholder);
function insertAfter(newElement,targetElement)
{
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement)
    {
        parent.appendChild(newElement);
    }
    else
    {

        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}
function prepareSlideShow()
{
    //确保浏览器支持DOM方法
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    //确保元素存在
    if(!document.getElementById("gallery")) return false;
    if(!document.getElementById("preview")) return false;
    //为图片应用样式
    var preview=document.getElementById("preview");
    preview.style.position="absolute";
    //取得列表中的所有链接
    var list=document.getElementById("gallery");
    var links=list.getElementsByTagName("a");
    //为mouseover事件添加动画效果
    links[0].onmouseover= function(){moveElement("preview",0,0,10);}
    links[1].onmouseover= function(){moveElement("preview",-95,0,10);}
    links[2].onmouseover= function(){moveElement("preview",-190,0,10);}
    links[3].onmouseover= function(){moveElement("preview",-285,0,10);}
}
addLoadEvent(prepareSlideShow);
function moveElement(elementId,finalX,finalY,intervals)
{
    if(!document.getElementsByClassName) return false;
    if(!document.getElementById(elementId)) return false;
    var elem=document.getElementById(elementId);
    if(elem.movement)
    {clearTimeout(elem.movement);}
    if(!elem.style.left)
    {
        elem.style.left="0px";
    }
    if(!elem.style.top)
    {
        elem.style.top="0px";
    }
    var xpos=parseInt(elem.style.left);
    var ypos=parseInt(elem.style.top);
        if(xpos==finalX&&ypos==finalY)
            return true;
        if(xpos<finalX)
        {
            xpos++;
        }
        if(xpos>finalX)
        {
            xpos--;
        }
        if(ypos<finalY)
        {
            ypos++;
        }
        if(ypos>finalY)
        {
            ypos--;
        }
        elem.style.left=xpos+"px";
        elem.style.top=ypos+"px";
        moveElement(elementId,finalX,finalY,intervals);
        movement=setTimeout("moveElement()",10);
}
