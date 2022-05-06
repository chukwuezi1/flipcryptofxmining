// alert('a');

$(document).ready(function(){
	$.post('../../php/nav.php',null,
	function(data,status){
			$('.nav-tabs').html(data);
			// alert(data);
	});
});
