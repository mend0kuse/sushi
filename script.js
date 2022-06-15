$('.slider').slick({
	infinite: true,
	autoplay: true, //АВТОМАТИЧЕСКАЯ ПРОКРУТКА
	autoplaySpeed: 3000, //ВРЕМЯ АВТОМАТИЧЕСКОГО ПЕРЕКЛЮЧЕНИЯ
	speed: 2000, //СКОРОСТЬ ПЕРЕКЛЮЧЕНИЯ
	arrows: false,
	appendDots: $('.dots-slider'),
	dots: true,
});