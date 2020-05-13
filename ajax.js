
$( document ).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm('ok', 'ajax_form', 'action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(ok, ajax_form, url) {
    $.ajax({
        url:     "action_ajax_form.php", //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#ok').css("display","block");
    	},
    	error: function(response) { // Данные не отправлены
            $('#error').css("display","block");
    	}
 	});
}