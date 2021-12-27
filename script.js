// document.querySelector('.btn').addEventListener('click', function(){
// 	document.querySelector('.popup_bg').style.display = 'flex';
// });

// document.querySelector('.close').addEventListener('click', function(){
// 	document.querySelector('.popup_bg').style.display = 'none';
// });


$(document).ready(function(){

$( ".btn" ).click(function() {
  $( ".full_pop" ).fadeIn( "slow", function() {
  });
});

$( ".close" ).click(function() {
  $( ".full_pop" ).fadeOut( "slow", function() {
  });
});

});
