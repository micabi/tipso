$(document).ready(function(){
	$('.ruby').tipso({
		background: 'rgba(153, 0, 18, 0.6)',
		color: '#fff',
		useTitle: false,
		titleBackground: 'rgba(187, 0, 22, 1)',
		titleContent: 'ルビー',
		ajaxContentUrl: 'gem/ruby.html'
	});

	$('.sapphire').tipso({
		background: 'rgba(26, 13, 162, 0.6)',
		color: '#fff',
		useTitle: false,
		titleBackground: 'rgba(20, 9, 126, 1)',
		titleContent: 'サファイア',
		ajaxContentUrl: 'gem/sapphire.html'
	});

	$('.emerald').tipso({
		background: 'rgba(2, 55, 38, 0.6)',
		color: '#fff',
		useTitle: false,
		titleBackground: 'rgba(0, 31, 21, 1)',
		titleContent: 'エメラルド',
		ajaxContentUrl: 'gem/emerald.html'
	});

});