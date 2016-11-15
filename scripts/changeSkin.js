//网站换肤
$(function(){
		var $li =$("#skin li");
		$li.click(function(){
			changeSkin( this.id );
		});
});

function changeSkin(skinName){
		$("#"+skinName).addClass("selected")                //当前<li>元素选中
					   .siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
	    $("#cssfile").attr("href","styles/skin/"+ skinName +".css"); //设置不同皮肤
}