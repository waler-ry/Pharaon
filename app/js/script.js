var next = document.querySelector('.slide-next');
var slide = document.querySelectorAll('.slide-container');
var i = 0;

next.onclick = function() {
	slide[i].classList.add('slide-right');
	i--;
	if (i < 0) {
		i = slide.length;
	}
	slide[i].classList.add('slide-left');
};