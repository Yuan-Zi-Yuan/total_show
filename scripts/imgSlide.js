/* 品牌活动模块横向滚动 */
$(function(){
	$(".active span a").click(function(){
		$(this).parent().addClass("select").siblings().removeClass("select");
		var idx = $(".active span a").index(this);
		showImg(idx);
		return false;
	}).eq(0).click();
});
//显示不同的模块
function showImg(index){
	var $img = $(".img");
	var rollWidth = $img.find("li").outerWidth();
	rollWidth = rollWidth * 4; //一个版面的宽度
	$img.stop(true,false).animate({ left : -rollWidth*index},1000);
}