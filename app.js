$(document).ready(function(){

	var color = 'white';

	$('#white').on('click',function(){
		color = 'white';
	});
	$('#green').on('click',function(){
		color = 'green';
	});
	$('#yellow').on('click',function(){
		color = 'yellow';
	});
	$('#red').on('click',function(){
		color = 'red';
	});
	$('#blue').on('click',function(){
		color = 'blue';
	});

	$('div.box').on('click',function(){
		$(this).removeClass('white green red blue yellow').addClass(color);
	});
	$('div.box').on('dblclick',function(){
		$(this).removeClass('white green red blue yellow');
	});
	$('#reset').on('click',function(){
		$('div.box').removeClass('white green red blue yellow');
	});
});