/**
 * Created by Administrator on 2016/12/3.
 */
//��õ�ǰʱ��
//����ύ��ť������û������������
addClickEvent("#submit",show);
function show(){
    var int=setInterval(function(){
        //�������ʱ��
        var iYear=$("#iYear").value;
        var iMonth=$("#iMonth").value-1;
        var iDate=$("#iDate").value;
        $("#ipt").innerHTML="����"+iYear+"��"+iMonth+"��"+iDate+"��"+"���� ";
        //��õ�ǰ����ʱ��
        var nday=new Date();
        var nYear=nday.getFullYear();
        var nMonth=nday.getMonth();
        var nDate=nday.getDate();
        var nHours=nday.getHours();
        var nSeconds=nday.getSeconds();
        var nMinutes=nday.getMinutes();
        //��������ʱ����ڵ�ǰ��ʱ�䣬���е���ʱ
        if((nDate*60*60*24+nMonth*60*60*24*30+nYear*60*60*24*30*365+nSeconds+nMinutes*60+nHours*60*60)<(iDate*60*60*24+iMonth*60*60*24*30+iYear*60*60*24*30*365))//����˳��
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
        //�������ʱ���뵱ǰʱ��С�ڵ�ǰʱ�䣬ȡ����ʱ���ã�������������ʱ��
        else if((nDate*60*60*24+nMonth*60*60*24*30+nYear*60*60*24*30*365+nSeconds+nMinutes*60+nHours*60*60)>(iDate*60*60*24+iMonth*60*60*24*30+iYear*60*60*24*30*365)){
            clearInterval(int);
            alert("���������룡");
            addClickEvent("#submit",show);
        }
        //�������ʱ���뵱ǰʱ��С�ڵ�ǰʱ�䣬ȡ����ʱ���ã���ʾ����ʱ����
        else{
            clearInterval(int);
            alert("����ʱ������");
        }
    },1000);
}
