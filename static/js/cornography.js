$(document).ready(function(){
	/*hiding cornography image until clicked*/
	/*hide image*/
	$('.image').hide();
	///*create button*/
	$('.censor').append('<button></button>');

	function hideBtn() {
			/* show image */
			$(this).prev().show();
			/* remove button */
			$(this).remove();

	}

	$('.image').click(function () {
		/*create button*/
		$(this).parent().append("<button></button>");
		$('button').on("click", hideBtn);
		$(this).hide();
	});

	/*hiding Shy Corn cornography image until clicked*/
	/*hide image*/
	$('#image-long').hide();
	/*create button*/
	$('#censor-long').append('<button id = "button-long"></button>');


	$('#image-long').click(function () {
		/*create button*/
		$(this).parent().append('<button id ="button-long"></button>');
		$('#button-long').on("click", hideBtn);
		$(this).hide();
	});

/* when button clicked */
	$('button').on("click", hideBtn);
	$('#button-long').on("click", hideBtn);

});