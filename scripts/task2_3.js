/**
 * Created by Administrator on 2016/12/4.
 */
window.onload=function(){
    $("#img").style.left=0;
    var select=document.getElementsByTagName("option");
    var second=1;
    //���Բ����ʾ��Ӧ��ͼƬ
    var circleUl=$("#circle");
    var a=circleUl.getElementsByTagName("a");
    for(var i= 0,l=a.length;i<l;i++){
        a[i].onclick=function(){
            var idx=this.id;
            $("#img").style.left=(-442)*(idx)+"px";
        }
    }
    //��������ֵ�ı仯
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
        //ÿ��second�����һ��
        var int = setInterval(function () {
            //�û������˵��ü����ֵsecond������second�����һ�Σ�����Ĭ��Ϊ1��
            if (typeof (second) == "number") {
                //��Э
                if (select[0].selected == true) {
                    if (parseInt($("#img").style.left) > (-1326)) {
                        $("#img").style.left = (parseInt($("#img").style.left) - 442) + "px";
                    }
                    else if ($("#check").checked == true && $("#img").style.left == -1326 + "px") {
                        $("#img").style.left = 0;
                    }
                }
                //����
                else if (select[1].selected == true) {
                    if (parseInt($("#img").style.left) >= (-1326) && parseInt($("#img").style.left) < 0) {
                        $("#img").style.left = (parseInt($("#img").style.left) + 442) + "px";
                    }
                    else if ($("#check").checked == true && $("#img").style.left == 0 + "px") {
                        $("#img").style.left = (-1326) + "px";
                    }
                }
            }
            //�û�δ��ȷ������ֵ��������������
            else {
                clearInterval(int);
                alert("������������ֵ��");
                return arguments.callee(true);
            }
        }, second * 1000);
    }
};