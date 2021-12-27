document.querySelector('.btn').addEventListener('click', function(){
	document.querySelector('.popup_bg').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
	document.querySelector('.popup_bg').style.display = 'none';
});