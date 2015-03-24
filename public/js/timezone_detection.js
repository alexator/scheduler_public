$(document).ready(function() {
	$('input#timezone').val(jstz.determine().name());
});