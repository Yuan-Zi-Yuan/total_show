/**
 * Created by Administrator on 2016/12/3.
 */
//获得当前时间
//点击提交按钮，获得用户输入的年月日
addClickEvent("#submit",show);
function show(){
    var int=setInterval(function(){
        //获得输入时间
        var iYear=$("#iYear").value;
        var iMonth=$("#iMonth").value-1;
        var iDate=$("#iDate").value;
        $("#ipt").innerHTML="距离"+iYear+"年"+iMonth+"月"+iDate+"日"+"还有 ";
        //获得当前具体时间
        var nday=new Date();
        var nYear=nday.getFullYear();
        var nMonth=nday.getMonth();
        var nDate=nday.getDate();
        var nHours=nday.getHours();
        var nSeconds=nday.getSeconds();
        var nMinutes=nday.getMinutes();
        //如果输入的时间大于当前的时间，进行倒计时
        if((nDate*60*60*24+nMonth*60*60*24*30+nYear*60*60*24*30*365+nSeconds+nMinutes*60+nHours*60*60)<(iDate*60*60*24+iMonth*60*60*24*30+iYear*60*60*24*30*365))//运算顺序
        {
            $("#cYear").innerHTML=iYear-nYear;
            if(iMonth>=nMonth){
                $("#cMonth").innerHTML=iMonth-nMonth;}
            else{
                $("#cMonth").innerHTML=iMonth-nMonth+11;
                $("#cYear").innerHTML-=1;
            }
            if(iDate>=nDate){
                $("#cDate").innerHTML=iDate-nDate;}
            else{
                $("#cDate").innerHTML=iDate-nDate+30;
                $("#cMonth").innerHTML-=1;
            }
            if(nSeconds+nMinutes*60+nHours*60*60>0){
                $("#cDate").innerHTML-=1;
        $("#cHours").innerHTML=24-nHours;
        $("#cMinutes").innerHTML=60-nMinutes;
        $("#cSeconds").innerHTML=60-nSeconds;}}
        //如果输入时间与当前时间小于当前时间，取消定时调用，请求重新输入时间
        else if((nDate*60*60*24+nMonth*60*60*24*30+nYear*60*60*24*30*365+nSeconds+nMinutes*60+nHours*60*60)>(iDate*60*60*24+iMonth*60*60*24*30+iYear*60*60*24*30*365)){
            clearInterval(int);
            alert("请重新输入！");
            addClickEvent("#submit",show);
        }
        //如果输入时间与当前时间小于当前时间，取消定时调用，显示倒计时结束
        else{
            clearInterval(int);
            alert("倒计时结束！");
        }
    },1000);
}
