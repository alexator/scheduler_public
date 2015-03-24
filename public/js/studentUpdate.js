$(document).ready(function() {
	$.material.init();

	var schoolId = $(".schoolId").attr('id');

	$.ajax({

		url: "/schools/getSchools",
		type: "GET",
		datatype: "json",

		success: function(dataReceived) {

			var html = "";

			for (var i=0 ; i<dataReceived.length ; i++) {
				
				if (dataReceived[i]._id === schoolId) {
					html += "<option value=\""+ dataReceived[i]._id + "\" selected>";
				}

				else {
					html += "<option value=\""+ dataReceived[i]._id + "\">";
				}
				
				html += dataReceived[i].name;
				html += "</option>";
			}

			$("#schools").append(html);

			$.ajax({
				url: '/helpers/get_subjects/' + $("#schools").val() ,
				datatype: 'json',
				type: 'GET',

				success: function(dataReceived) {
					
					var go = true;
					var num = 0;

					while (go) {

						if ($("#subject-"+num).length === 0) {
							go = false;
						}

						else {
							var len = dataReceived.subjects.length ;

							for (var i=0 ; i<len ; i++) {
								var subj = dataReceived.subjects[i];

								if (subj.name === $("#subject-"+num).val()) {
									
									for (var j = 0 ; j<subj.teacher.length ; j++) {
										
										if ($("#teacher-"+num).val() === subj.teacher[j].name) {
											// do nothing
										}

										else {
											$("#teacher-"+num).append("<option>" + subj.teacher[j].name + "</option>");
										}
									}
									
								}

								else {
									$("#subject-"+num).append("<option>" + subj.name + "</option>");
								}
							}

							num ++;
							
						}
					}
				}
			});
		}
	});

	
});