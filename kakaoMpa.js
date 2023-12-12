function kakaoMap(){
	var contatiner = document.getElementById('map');
var options = {
	center: new kakao.maps.LatLng(33.45 ,126.57),
	level: 3
};

var map = new kakao.maps.Map(container, options);
};

$(function(){
	kakaoMap();
})
	