var next = document.querySelector('.slide-next');
var prev = document.querySelector('.slide-prev');
var slide = document.querySelectorAll('.slide-container');
var i = 0;

next.onclick = function() {
	slide[i].style.display="none";
	i++;
	if(i > 3) {
		i=0;
	}	
	slide[i].style.display="flex";
};


prev.onclick = function() {
	slide[i].style.display="none";
	i--;
	if(i < 0) {
		i = 3;
	}
	slide[i].style.display="flex";
};

var next1 = document.querySelector('.next');
var prev1 = document.querySelector('.prev');
var slide = document.querySelectorAll('.slide-container');
var i = 0;

next.onclick = function() {
	slide[i].style.display="none";
	i++;
	if(i > 3) {
		i=0;
	}	
	slide[i].style.display="flex";
};


prev.onclick = function() {
	slide[i].style.display="none";
	i--;
	if(i < 0) {
		i = 3;
	}
	slide[i].style.display="flex";
};