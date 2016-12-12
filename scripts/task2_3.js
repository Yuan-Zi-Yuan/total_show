/**
 * Created by Administrator on 2016/12/4.
 */
window.onload=function(){
    $("#img").style.left=0;
    var select=document.getElementsByTagName("option");
    var second=1;
    //点击圆点显示相应的图片
    var circleUl=$("#circle");
    var a=circleUl.getElementsByTagName("a");
    for(var i= 0,l=a.length;i<l;i++){
        a[i].onclick=function(){
            var idx=this.id;
            $("#img").style.left=(-442)*(idx)+"px";
        }
    }
    //监听输入值的变化
    change();
    function change() {
        setInterval(function () {
            if ($("#second").value!=""&&parseInt($("#second").value)!=second) {
                second = $("#second").value;
                second = parseInt(second);
                clearInterval(int);
                change();
                return false;
            }
        }, 1000);
        //每隔second秒调用一次
        var int = setInterval(function () {
            //用户输入了调用间隔数值second，则间隔second秒调用一次，否则默认为1秒
            if (typeof (second) == "number") {
                //政协
                if (select[0].selected == true) {
                    if (parseInt($("#img").style.left) > (-1326)) {
                        $("#img").style.left = (parseInt($("#img").style.left) - 442) + "px";
                    }
                    else if ($("#check").checked == true && $("#img").style.left == -1326 + "px") {
                        $("#img").style.left = 0;
                    }
                }
                //逆序
                else if (select[1].selected == true) {
                    if (parseInt($("#img").style.left) >= (-1326) && parseInt($("#img").style.left) < 0) {
                        $("#img").style.left = (parseInt($("#img").style.left) + 442) + "px";
                    }
                    else if ($("#check").checked == true && $("#img").style.left == 0 + "px") {
                        $("#img").style.left = (-1326) + "px";
                    }
                }
            }
            //用户未正确输入数值，请求重新输入
            else {
                clearInterval(int);
                alert("请重新输入数值！");
                return arguments.callee(true);
            }
        }, second * 1000);
    }
};