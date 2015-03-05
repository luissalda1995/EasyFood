// JavaScript Document
connect = function(){
	var term = {button:e};
	$.ajax({
		url:'http://192.168.0.11/reply.php',
		type:'POST',
		data:'term',
		dataType:'json',
		error:function(jqXHR,text_status,strError){
			alert('no hay conexión');
		},
		timeout:60000,
		success:function(data){
			$("#results").html("");
			for(var i in data){
				$("$results").append("<li>" + data[i] + "</li>");
			}
		}
	});
};
$("#pastas").addEventListener("click", connect());
$("#carnes").addEventListener("click", connect());