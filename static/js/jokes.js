/*Making the joke buttons work*/
/*hide punchline*/
$('.punchLine').hide();
/*create button*/
$('.spoiler').append('<button>Click for Punchline!</button>');
/* when button clicked */
$('button').click(function(){
/* show punchline */
	$(this).prev().show();
/* remove button */
	$(this).remove();
	});

