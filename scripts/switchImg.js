/* 大屏广告自动切换与点击切换 */
	$(document).ready(function(){
		var it=self.setInterval(switchImg,2000);
		var i=0;
		function switchImg(){
			if(i<4){
				i++;
			}
			else {i=0;}
			$(".center_l_bd img").hide();
			$(".center_l_bd img").eq(i).show();
		}
		$(".num>a").click(function(){
			$(".center_l_bd img").hide();
			var idx=$(this).index();
			$(".center_l_bd img").eq(idx).show();
			return false;
		})
	});