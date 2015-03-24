$(document).ready(function() {

	$.material.init();

	function times(day, time) {
		if(time == 1) {
			var time1 = "<div class=\"col-md-6\"><label for=\"assign-startTime\">Start Time</label><select class=\"form-control\" id=\"assign-startTime\" name=\"test-assign-startTime\"><option value=\"0\">  ---  </option><option value=\"2015,0," + day + ",10,00\">10.00 am</option><option value=\"2015,0," + day + ",10,30\">10.30 am</option><option value=\"2015,0," + day + ",11,00\">11.00 am</option><option value=\"2015,0," + day + ",11,30\">11.30 am</option><option value=\"2015,0," + day + ",12,00\">12.00 pm</option><option value=\"2015,0," + day + ",12,30\">12.30 pm</option><option value=\"2015,0," + day + ",13,00\">1.00 pm</option><option value=\"2015,0," + day + ",13,30\">1.30 pm</option><option value=\"2015,0," + day + ",14,00\">2.00 pm</option><option value=\"2015,0," + day + ",14,30\">2.30 pm</option><option value=\"2015,0," + day + ",15,00\">3.00 pm</option><option value=\"2015,0," + day + ",15,30\">3.30 pm</option><option value=\"2015,0," + day + ",16,00\">4.00 pm</option><option value=\"2015,0," + day + ",16,30\">4.30 pm</option><option value=\"2015,0," + day + ",17,00\">5.00 pm</option><option value=\"2015,0," + day + ",17,30\">5.30 pm</option><option value=\"2015,0," + day + ",18,00\">6.00 pm</option><option value=\"2015,0," + day + ",18,30\">6.30 pm</option><option value=\"2015,0," + day + ",19,00\">7.00 pm</option><option value=\"2015,0," + day + ",19,30\">7.30 pm</option><option value=\"2015,0," + day + ",20,00\">8.00 pm</option><option value=\"2015,0," + day + ",20,30\">8.30 pm</option><option value=\"2015,0," + day + ",21,00\">9.00 pm</option></select></div><div class=\"col-md-6\"><label for=\"assign-endTime\">End Time</label><select class=\"form-control\" id=\"assign-endTime\" name=\"test-assign-endTime\" ><option value=\"0\">  ---  </option><option value=\"2015,0," + day + ",11,00\">11.00 am</option><option value=\"2015,0," + day + ",11,30\">11.30 am</option><option value=\"2015,0," + day + ",12,00\">12.00 pm</option><option value=\"2015,0," + day + ",12,30\">12.30 pm</option><option value=\"2015,0," + day + ",13,00\">1.00 pm</option><option value=\"2015,0," + day + ",13,30\">1.30 pm</option><option value=\"2015,0," + day + ",14,00\">2.00 pm</option><option value=\"2015,0," + day + ",14,30\">2.30 pm</option><option value=\"2015,0," + day + ",15,00\">3.00 pm</option><option value=\"2015,0," + day + ",15,30\">3.30 pm</option><option value=\"2015,0," + day + ",16,00\">4.00 pm</option><option value=\"2015,0," + day + ",16,30\">4.30 pm</option><option value=\"2015,0," + day + ",17,00\">5.00 pm</option><option value=\"2015,0," + day + ",17,30\">5.30 pm</option><option value=\"2015,0," + day + ",18,00\">6.00 pm</option><option value=\"2015,0," + day + ",18,30\">6.30 pm</option><option value=\"2015,0," + day + ",19,00\">7.00 pm</option><option value=\"2015,0," + day + ",19,30\">7.30 pm</option><option value=\"2015,0," + day + ",20,00\">8.00 pm</option><option value=\"2015,0," + day + ",20,30\">8.30 pm</option><option value=\"2015,0," + day + ",21,00\">9.00 pm</option><option value=\"2015,0," + day + ",21,30\">9.30 pm</option><option value=\"2015,0," + day + ",22,00\">10.00 pm</option></select></div>";
			
			return time1;
		}
		if(time == 2) {
			var time2 = "<div class=\"col-md-6\"><label for=\"assign-startTime\">Start Time</label><select class=\"form-control\" id=\"assign-startTime\" name=\"test-assign-startTime\"><option value=\"0\">  ---  </option><option value=\"2015,0," + day + ",15,30\">3.30 pm</option><option value=\"2015,0," + day + ",16,00\">4.00 pm</option><option value=\"2015,0," + day + ",16,30\">4.30 pm</option><option value=\"2015,0," + day + ",17,00\">5.00 pm</option><option value=\"2015,0," + day + ",17,30\">5.30 pm</option><option value=\"2015,0," + day + ",18,00\">6.00 pm</option><option value=\"2015,0," + day + ",18,30\">6.30 pm</option><option value=\"2015,0," + day + ",19,00\">7.00 pm</option><option value=\"2015,0," + day + ",19,30\">7.30 pm</option><option value=\"2015,0," + day + ",20,00\">8.00 pm</option><option value=\"2015,0," + day + ",20,30\">8.30 pm</option><option value=\"2015,0," + day + ",21,00\">9.00 pm</option></select></div><div class=\"col-md-6\"><label for=\"assign-endTime\">End Time</label><select class=\"form-control\" id=\"assign-endTime\" name=\"test-assign-endTime\"><option value=\"0\">  ---  </option><option value=\"2015,0," + day + ",16,30\">4.30 pm</option><option value=\"2015,0," + day + ",17,00\">5.00 pm</option><option value=\"2015,0," + day + ",17,30\">5.30 pm</option><option value=\"2015,0," + day + ",18,00\">6.00 pm</option><option value=\"2015,0," + day + ",18,30\">6.30 pm</option><option value=\"2015,0," + day + ",19,00\">7.00 pm</option><option value=\"2015,0," + day + ",19,30\">7.30 pm</option><option value=\"2015,0," + day + ",20,00\">8.00 pm</option><option value=\"2015,0," + day + ",20,30\">8.30 pm</option><option value=\"2015,0," + day + ",21,00\">9.00 pm</option><option value=\"2015,0," + day + ",21,30\">9.30 pm</option><option value=\"2015,0," + day + ",22,00\">10.00 pm</option></select></div>";
			
			return time2;
		}
		if(time ==3) {
	    	var time3 = "<div class=\"col-md-6\"><label for=\"assign-startTime\">Start Time</label><select class=\"form-control\" id=\"assign-startTime\" name=\"test-assign-startTime\"><option value=\"0\">  ---  </option><option value=\"2015,0," + day + ",13,30\">1.30 pm</option><option value=\"2015,0," + day + ",14,00\">2.00 pm</option><option value=\"2015,0," + day + ",14,30\">2.30 pm</option><option value=\"2015,0," + day + ",15,00\">3.00 pm</option><option value=\"2015,0," + day + ",15,30\">3.30 pm</option><option value=\"2015,0," + day + ",16,00\">4.00 pm</option><option value=\"2015,0," + day + ",16,30\">4.30 pm</option><option value=\"2015,0," + day + ",17,00\">5.00 pm</option><option value=\"2015,0," + day + ",17,30\">5.30 pm</option><option value=\"2015,0," + day + ",18,00\">6.00 pm</option><option value=\"2015,0," + day + ",18,30\">6.30 pm</option><option value=\"2015,0," + day + ",19,00\">7.00 pm</option><option value=\"2015,0," + day + ",19,30\">7.30 pm</option><option value=\"2015,0," + day + ",20,00\">8.00 pm</option><option value=\"2015,0," + day + ",20,30\">8.30 pm</option><option value=\"2015,0," + day + ",21,00\">9.00 pm</option></select></div><div class=\"col-md-6\"><label for=\"assign-endTime\">End Time</label><select class=\"form-control\" id=\"assign-endTime\" name=\"test-assign-endTime\"><option value=\"0\">  ---  </option><option value=\"2015,0," + day + ",14,30\">2.30 pm</option><option value=\"2015,0," + day + ",15,00\">3.00 pm</option><option value=\"2015,0," + day + ",15,30\">3.30 pm</option><option value=\"2015,0," + day + ",16,00\">4.00 pm</option><option value=\"2015,0," + day + ",16,30\">4.30 pm</option><option value=\"2015,0," + day + ",17,00\">5.00 pm</option><option value=\"2015,0," + day + ",17,30\">5.30 pm</option><option value=\"2015,0," + day + ",18,00\">6.00 pm</option><option value=\"2015,0," + day + ",18,30\">6.30 pm</option><option value=\"2015,0," + day + ",19,00\">7.00 pm</option><option value=\"2015,0," + day + ",19,30\">7.30 pm</option><option value=\"2015,0," + day + ",20,00\">8.00 pm</option><option value=\"2015,0," + day + ",20,30\">8.30 pm</option><option value=\"2015,0," + day + ",21,00\">9.00 pm</option><option value=\"2015,0," + day + ",21,30\">9.30 pm</option><option value=\"2015,0," + day + ",22,00\">10.00 pm</option></select></div>";

	    	return time3;
		}
	}

	var totalNumberOfCheckboxes = 0;
	var user_timezone = $('.user_timezone').attr('id');


	// Change list of subjects according to selected school
	$("#schoolMenu").change(function() {
		var schoolId = $(this).val();

		$('#subjectMenu option[value!="0"]').remove();

		if (schoolId == '0') {
			$.ajax({
				url: "/helpers/get_all_subjects/"+schoolId,
				type: "GET",
				dataType: "json",
		
				success: function(data) {
					for(var i=0; i < data.subjects.length; i++){
						$("#subjectMenu").append("<option>"+data.subjects[i]+"</option>");
					}
				}
			});
		}

		else {
			$.ajax({
				url: "/helpers/get_subjects/"+schoolId,
				type: "GET",
				dataType: "json",

				success: function(data) {
					for(var i=0; i < data.subjects.length; i++){
						$("#subjectMenu").append("<option>"+data.subjects[i].name+"</option>");
					}
				}
			});
		}
	}).trigger("change");	// This trigger is to populate "All schools" on page load


	// http://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
	function formatAMPM(dateString) {
		var date = moment.tz(dateString, user_timezone);
		var hours = date.hours();
		var minutes = date.minute();
		var ampm = hours >= 12 ? 'pm' : 'am';

		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime;
	}

	function formatFinalDate(dateString) {
		var date = moment.tz(dateString, user_timezone);
		var month = date.month() + 1;
		var days = date.date();
		var output = month + " / " + days;

		return output;
	}

	$("#refresh").on('click', function() {

		var date = $("#date").val();
		var schoolId = $("#schoolMenu").val();
		var subjectName = $("#subjectMenu").val();

		if (date === "0") { alert('Please choose a day.'); }
		else if(subjectName === "0") { alert('Please choose a subject.'); }

		else {
			var combo = date + "-" + schoolId + "-" + subjectName ;

			$('tbody').remove();
			$.ajax({
				url: "/helpers/get_students_scheduling/"+combo,
				type: "GET",
				dataType: "json",

				success: function(data) {
					var j = 0;
					var avail = "";
					var tbody = "<tbody>";

					function group() {
						if (data[i].length === 9) { return "<div class=\"grouping\"><img src=\"../img/Colors/"+data[i][8]+".png \"></div>"; } else {
							return "";
						}
					}

					for (var i=0 ; i<data.length ; i++) {
						tbody += "<tr id=\"row-" + (i+1) + "\">";

						j = 0 ;
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + (i+1) + "</td>";
						j ++;

						if (data[i].length === 9) {

						}

						tbody += "<td id=\"element-" + (i+1) + "-g\">" + group() +"</td>";
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + data[i][5] +"</td>";
						j ++;
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + data[i][0] + "</td>";
						j ++;
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + data[i][1] + "</td>";
						j ++;
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + data[i][7] + "</td>";
						j ++;
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + data[i][4].session + "</td>";
						j ++;
						
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + formatFinalDate(data[i][6]) + "</td>";
						j ++;

						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + data[i][4].hoursRequested + "</td>";
						j ++;

						avail = "";
						for (var k=0 ; k<data[i][4].availability.length ; k++) {
							console.log(data[i][4].availability[k].startTime);
							console.log(data[i][4].availability[k].endTime);
							avail += formatAMPM(data[i][4].availability[k].startTime) + " to " + formatAMPM(data[i][4].availability[k].endTime) ;
							if (k !== (data[i][4].availability.length - 1) ) { avail += ", " ;}
						}
						tbody += "<td id=\"element-" + (i+1) + "-" + j + "\">" + avail + "</td>";
						j ++;

						tbody += "<td id=\"edit-row-" + (i+1) + "\"><a id=\"edit-" + (i+1) + "\" class=\"btn btn-flat btn-warning row_button edit\"><span aria-hidden=\"true\" class=\"mdi-editor-mode-edit\"> Edit</a></td>";
						tbody += "<td id=\"select-row-" + (i+1) + "\" class=\"centralise\"><div class=\"checkbox select_row\"><label><input id=\"checkbox-row-" + (i+1) + "\" type=\"checkbox\"></label></div></td>";
						
						tbody += "</tr>";
					}

					tbody += "</tbody>";

					$(".table").append(tbody);
					
					totalNumberOfCheckboxes = $('input:checkbox').length;

					for(var p = 1; p < totalNumberOfCheckboxes; p++) {
						if(!$("#checkbox-row-" + p).is(':checked')) {
							$("row-" + p).removeClass("success");
						}
					}
				}
			});
		}
	});

	//Modal trigger
	$('#myModal').on('shown.bs.modal', function () {
    	
    	if($('#assign_header').hasClass('no_display')) {
    		$('#assign_header').removeClass("no_display");
			$('#assign_body').removeClass("no_display");
			$('#assign_footer').removeClass("no_display");
			$('#confirm_header').addClass("no_display");
			$('#confirm_body').addClass("no_display");
			$('#confirm_footer').addClass("no_display");	
    	}
    	
    	$('#day').empty();
    	$('#day').append($('#date').val());
    	
    	var dayNum = parseInt($('#date').val().split(',')[0].split(' ')[1]);
    	$('#assign-time').empty();
    	$('#checked_students').empty();
    	
    	if((dayNum == 17) || (dayNum == 18) || (dayNum == 19)) {
    		$('#assign-time').append(times(dayNum, 1));
    	} else if((dayNum == 16) || (dayNum == 20)) {
    		$('#assign-time').append(times(dayNum, 2));
    	} else if ((dayNum == 21) || (dayNum == 22)) {
    		$('#assign-time').append(times(dayNum, 3));
    	} else {
    		console.log('No date is selected!');
    	}


    	//This function will create an array with the ids of each checked row
    	//so we can continue from here for populating sudent names etc to the massive assignment modal
    	var checked = $('input:checkbox').filter(':checked').map(function () {
    		return this.id.split('-')[2];
		}).get();

		var students = checked.length;

		for(var i = 0, len = checked.length; i < len; i++) {
			var student = $('#element-' + checked[i] + '-1').text();
			$('#checked_students').append("<div class=\"row\"><div class=\"col-md-1\">" + (i + 1) + "</div><div class=\"col-md-11\" id=\"checked_student" + i + "\">" + student + "</div></div>");
		}

  	});

	//Edit functionality
	$('#schedule_table').on('click', '.edit', function(event) {
		event.preventDefault();

		var rowNum = $(this).attr('id').split('-')[1],
		row = "#row-"+rowNum+" td",
		columnsNum = 0,
		editElem = "#edit-row-"+rowNum;

		$(row).each(function() {
		  columnsNum++;
		});

		//Exclude the action buttons
		columnsNum = columnsNum - 2;

		var preEditValues = [];
		var current, content, options, str;
		var tutorOptions = ["I don't have a regular tutor", "I prefer my regular tutor", "I prefer another tutor"];
		var sessionOptions = ["Session 1 only", "Session 2 only", "Either", "Not applicable"];
		var testDateOptions = ["1 / 19", "1 / 20", "1 / 21", "1 / 22", "1 / 23"];

		var startHoursOne = [
			"<option value=\"2015,0,,15,30\">3:30 pm</option>",
			"<option value=\"2015,0,,16,00\">4:00 pm</option>",
			"<option value=\"2015,0,,16,30\">4:30 pm</option>",
			"<option value=\"2015,0,,17,00\">5:00 pm</option>",
			"<option value=\"2015,0,,17,30\">5:30 pm</option>",
			"<option value=\"2015,0,,18,00\">6:00 pm</option>",
			"<option value=\"2015,0,,18,30\">6:30 pm</option>",
			"<option value=\"2015,0,,19,00\">7:00 pm</option>",
			"<option value=\"2015,0,,19,30\">7:30 pm</option>",
			"<option value=\"2015,0,,20,00\">8:00 pm</option>",
			"<option value=\"2015,0,,20,30\">8:30 pm</option>",
			"<option value=\"2015,0,,21,00\">9:00 pm</option>"
		];

		var endHoursOne = [
			"<option value=\"2015,0,,16,30\">4:30 pm</option>",
			"<option value=\"2015,0,,17,00\">5:00 pm</option>",
			"<option value=\"2015,0,,17,30\">5:30 pm</option>",
			"<option value=\"2015,0,,18,00\">6:00 pm</option>",
			"<option value=\"2015,0,,18,30\">6:30 pm</option>",
			"<option value=\"2015,0,,19,00\">7:00 pm</option>",
			"<option value=\"2015,0,,19,30\">7:30 pm</option>",
			"<option value=\"2015,0,,20,00\">8:00 pm</option>",
			"<option value=\"2015,0,,20,30\">8:30 pm</option>",
			"<option value=\"2015,0,,21,00\">9:00 pm</option>",
			"<option value=\"2015,0,,21,30\">9:30 pm</option>",
			"<option value=\"2015,0,,22,00\">10:00 pm</option>"
		];

		var startHoursTwo = [
			"<option value=\"2015,0,,10,00\">10:00 am</option>",
			"<option value=\"2015,0,,10,30\">10:30 am</option>",
			"<option value=\"2015,0,,11,00\">11:00 am</option>",
			"<option value=\"2015,0,,11,30\">11:30 am</option>",
			"<option value=\"2015,0,,12,00\">12:00 pm</option>",
			"<option value=\"2015,0,,12,30\">12:30 pm</option>",
			"<option value=\"2015,0,,13,00\">1:00 pm</option>",
			"<option value=\"2015,0,,13,30\">1:30 pm</option>",
			"<option value=\"2015,0,,14,00\">2:00 pm</option>",
			"<option value=\"2015,0,,14,30\">2:30 pm</option>",
			"<option value=\"2015,0,,15,00\">3:00 pm</option>",
			"<option value=\"2015,0,,15,30\">3:30 pm</option>",
			"<option value=\"2015,0,,16,00\">4:00 pm</option>",
			"<option value=\"2015,0,,16,30\">4:30 pm</option>",
			"<option value=\"2015,0,,17,00\">5:00 pm</option>",
			"<option value=\"2015,0,,17,30\">5:30 pm</option>",
			"<option value=\"2015,0,,18,00\">6:00 pm</option>",
			"<option value=\"2015,0,,18,30\">6:30 pm</option>",
			"<option value=\"2015,0,,19,00\">7:00 pm</option>",
			"<option value=\"2015,0,,19,30\">7:30 pm</option>",
			"<option value=\"2015,0,,20,00\">8:00 pm</option>",
			"<option value=\"2015,0,,20,30\">8:30 pm</option>",
			"<option value=\"2015,0,,21,00\">9:00 pm</option>"
		];

		var endHoursTwo = [
			"<option value=\"2015,0,,11,00\">11:00 am</option>",
			"<option value=\"2015,0,,11,30\">11:30 am</option>",
			"<option value=\"2015,0,,12,00\">12:00 pm</option>",
			"<option value=\"2015,0,,12,30\">12:30 pm</option>",
			"<option value=\"2015,0,,13,00\">1:00 pm</option>",
			"<option value=\"2015,0,,13,30\">1:30 pm</option>",
			"<option value=\"2015,0,,14,00\">2:00 pm</option>",
			"<option value=\"2015,0,,14,30\">2:30 pm</option>",
			"<option value=\"2015,0,,15,00\">3:00 pm</option>",
			"<option value=\"2015,0,,15,30\">3:30 pm</option>",
			"<option value=\"2015,0,,16,00\">4:00 pm</option>",
			"<option value=\"2015,0,,16,30\">4:30 pm</option>",
			"<option value=\"2015,0,,17,00\">5:00 pm</option>",
			"<option value=\"2015,0,,17,30\">5:30 pm</option>",
			"<option value=\"2015,0,,18,00\">6:00 pm</option>",
			"<option value=\"2015,0,,18,30\">6:30 pm</option>",
			"<option value=\"2015,0,,19,00\">7:00 pm</option>",
			"<option value=\"2015,0,,19,30\">7:30 pm</option>",
			"<option value=\"2015,0,,20,00\">8:00 pm</option>",
			"<option value=\"2015,0,,20,30\">8:30 pm</option>",
			"<option value=\"2015,0,,21,00\">9:00 pm</option>",
			"<option value=\"2015,0,,21,30\">9:30 pm</option>",
			"<option value=\"2015,0,,22,00\">10:00 pm</option>"
		];

		var startHoursThree = [
			"<option value=\"2015,0,,13,30\">1:30 pm</option>",
			"<option value=\"2015,0,,14,00\">2:00 pm</option>",
			"<option value=\"2015,0,,14,30\">2:30 pm</option>",
			"<option value=\"2015,0,,15,00\">3:00 pm</option>",
			"<option value=\"2015,0,,15,30\">3:30 pm</option>",
			"<option value=\"2015,0,,16,00\">4:00 pm</option>",
			"<option value=\"2015,0,,16,30\">4:30 pm</option>",
			"<option value=\"2015,0,,17,00\">5:00 pm</option>",
			"<option value=\"2015,0,,17,30\">5:30 pm</option>",
			"<option value=\"2015,0,,18,00\">6:00 pm</option>",
			"<option value=\"2015,0,,18,30\">6:30 pm</option>",
			"<option value=\"2015,0,,19,00\">7:00 pm</option>",
			"<option value=\"2015,0,,19,30\">7:30 pm</option>",
			"<option value=\"2015,0,,20,00\">8:00 pm</option>",
			"<option value=\"2015,0,,20,30\">8:30 pm</option>",
			"<option value=\"2015,0,,21,00\">9:00 pm</option>"
		];

		var endHoursThree = [
			"<option value=\"2015,0,,14,30\">2:30 pm</option>",
			"<option value=\"2015,0,,15,00\">3:00 pm</option>",
			"<option value=\"2015,0,,15,30\">3:30 pm</option>",
			"<option value=\"2015,0,,16,00\">4:00 pm</option>",
			"<option value=\"2015,0,,16,30\">4:30 pm</option>",
			"<option value=\"2015,0,,17,00\">5:00 pm</option>",
			"<option value=\"2015,0,,17,30\">5:30 pm</option>",
			"<option value=\"2015,0,,18,00\">6:00 pm</option>",
			"<option value=\"2015,0,,18,30\">6:30 pm</option>",
			"<option value=\"2015,0,,19,00\">7:00 pm</option>",
			"<option value=\"2015,0,,19,30\">7:30 pm</option>",
			"<option value=\"2015,0,,20,00\">8:00 pm</option>",
			"<option value=\"2015,0,,20,30\">8:30 pm</option>",
			"<option value=\"2015,0,,21,00\">9:00 pm</option>",
			"<option value=\"2015,0,,21,30\">9:30 pm</option>",
			"<option value=\"2015,0,,22,00\">10:00 pm</option>"
		];

		function makeTimes (startArray, endArray, start, end, id, day) {
			var s;
			str = '';
			str += "<select class=\"form-control\" id=\""+ id + "-edit-start" +"\">";
			for (var i=0 ; i<startArray.length ; i++) {
				s = startArray[i];
				str += s.substring(0,s.indexOf(',,')+1);
				str += day;
				str += s.substring(s.indexOf(',,')+1, s.indexOf('>')) + ' ';
				
				if (s.substring(s.indexOf('>')+1, s.indexOf('m<')+1) == start) {
					str += "selected";
				}

				str += s.substring(s.indexOf('>'));
			}
			str += "</select>";
			str += "to";
			str += "<select class=\"form-control\" id=\""+ id + "-edit-end" +"\">";
			for (var j=0 ; j<endArray.length ; j++) {
				s = endArray[j];
				str += s.substring(0,s.indexOf(',,')+1);
				str += day;
				str += s.substring(s.indexOf(',,')+1, s.indexOf('>')) + ' ';
				
				if (s.substring(s.indexOf('>')+1, s.indexOf('m<')+1) == end) {
					str += "selected";
				}

				str += s.substring(s.indexOf('>'));
			}
			str += "</select>";

			return str;
		}

		function makeOptions (options, content, id) {
			var str = '';
			str += "<select class=\"form-control\" id=\""+ id + "-edit" +"\">";
			for (var m=0 ; m<options.length ; m++) {
				if (content == options[m]) {
					str += '<option selected>' + options[m] + '</option>';
				} else {
					str += '<option>' + options[m] + '</option>';
				}
			}
			str += '</select>';
			return str;
		}

		for(var i = 3; i < columnsNum; i++) {
			current = "#element-"+rowNum+"-"+i;
			content = $(current).text();

			$(current).empty();

			if (i==3) {
				$(current).html("<input type=\"text\" class=\"form-control\" id=\""+ current.substring(1) + "-edit" +"\"  name=\"test\" value=\""+content+"\"/>");
			}
			else if (i==4) {
				str = makeOptions(tutorOptions,content,current.substring(1));
				$(current).html(str);
			}
			else if (i==5) {
				str = makeOptions(sessionOptions,content,current.substring(1));
				$(current).html(str);
			}
			else if (i==6) {
				str = makeOptions(testDateOptions,content,current.substring(1));
				$(current).html(str);
			}
			else if (i==7) {
				str = "<input type=\"number\" class=\"form-control\" id=\""+ current.substring(1) + "-edit" +"\"  name=\"test\" value=\""+content+"\" max=9 min=1/>";
				$(current).html(str);
			}
			else if (i==8) {
				
				var contentStart = content.split('to')[0].trim();
				var contentEnd = content.split('to')[1].trim();
				var day = $("#date").val().split(",")[0].split(" ")[1];
				
				if (day == "16" || day == "20") {
					str = makeTimes(startHoursOne, endHoursOne, contentStart, contentEnd, current.substring(1), day);
					$(current).html(str);
				} 
				else if (day == "17" || day == "18" || day == "19") {
					str = makeTimes(startHoursTwo, endHoursTwo, contentStart, contentEnd, current.substring(1), day);
					$(current).html(str);
				}
				else if (day == "21" || day == "22") {
					str = makeTimes(startHoursThree, endHoursThree, contentStart, contentEnd, current.substring(1), day);
					$(current).html(str);
				}
			}
		}

		$(editElem).empty();
		$(editElem).html("<a id=\"save-"+rowNum+"\" class=\"btn btn-flat btn-info row_button save\"><span aria-hidden=\"true\" class=\"mdi-content-save\"> Save</a>");

	});

	//Save functionality
	$('#schedule_table').on('click', '.save', function(event) {
		event.preventDefault();
		
		var rowNum = $(this).attr('id').split('-')[1],
		row = "#row-"+rowNum+" td",
		columnsNum = 0,
		editElem = "#edit-row-"+rowNum;
		
		$(row).each(function() {
		  columnsNum++;
		});

		//Exclude the action buttons
		columnsNum = columnsNum - 2;
		var current, content, td;
		var toUpdate = [];

		for(var i = 3; i < columnsNum; i++) {
			if (i<8) {
		  		current = "#element-"+rowNum+"-"+i+"-edit";
				content = $(current).val();

				td = "#element-"+rowNum+"-"+i;
				$(td).empty();
				$(td).text(content);

				toUpdate[i] = content;


			} else if(i === 8) {
		  		var currentStart = "#element-"+rowNum+"-"+i+"-edit-start";
		  		var currentEnd = "#element-"+rowNum+"-"+i+"-edit-end";

		  		var contentStart = $(currentStart + " option:selected").text();
		  		var contentEnd = $(currentEnd + " option:selected").text();

		  		toUpdate[8] = [contentStart, contentEnd];

		  		content = contentStart + " to " + contentEnd;

		  		td = "#element-"+rowNum+"-"+i;
		  		$(td).empty();
				$(td).text(content);
			}
		}

		var update = false;
		var updateData = {};
		
		updateData.student = $("#element-"+rowNum+"-1").text();
		updateData.subject = $("#subjectMenu").val();

		for (var j=3 ; j<toUpdate.length ; j++) {
			if (typeof toUpdate[j] !== undefined) {

				update = true;
				
				if 		(j==3) { updateData.teacher  = toUpdate[3] ; }
				else if (j==4) { updateData.tutor    = toUpdate[4] ; }
				else if (j==5) { updateData.session  = toUpdate[5] ; }
				else if (j==6) { updateData.examDate = toUpdate[6] ; }
				else if (j==7) { updateData.hours    = toUpdate[7] ; }
				else if (j==8) {
					updateData.times = toUpdate[8];
					updateData.day = $("#date").val();
				}
			}
		}

		if (update) {
			$.ajax({
				url: '/helpers/saveRowEdit',
				type: "POST",
				data: updateData,
				dataType: "json",

				success: function (data) {
					console.log("returned");
				}
			});
		}

		$(editElem).empty();
		$(editElem).html("<a id=\"edit-"+rowNum+"\" class=\"btn btn-flat btn-warning row_button edit\"><span aria-hidden=\"true\" class=\"mdi-editor-mode-edit\"> Edit</a>");

	});

	// Row Selector
	$('#schedule_table').on('change', '[type=checkbox]', function(event) {
		event.preventDefault();

		var rowNum = $(this).attr('id').split('-')[2];
		var currentRow = "#row-"+rowNum;

		$(currentRow).toggleClass("success");
	});

	// Modal assign button trigger
	$("#assign-button").click(function() {
		var i = 0;
		var go = true;
		var students = [];

		while (go) {
			if ($("#checked_student"+i).length > 0) {
				students.push($("#checked_student"+i).text());
				i++;
			} else {
				go = false;
			}
		}

		var tutor = $("#tutorMenu").val();
		var startTime = $("#assign-startTime").val();
		var endTime = $("#assign-endTime").val();

		var subject = $("#subjectMenu").val();

		dataSent = {
			students: students,
			tutor: tutor,
			subject: subject,
			startTime: startTime,
			endTime: endTime
		};
		console.log(dataSent);
		if (tutor == "0") {
			alert("Please select a tutor");
		} else if (startTime == "0") {
			alert("Please select a starting time");
		} else if (endTime == "0") {
			alert("Please select an ending time");
		} else {
			console.log("sending");
			$.ajax({
				url: "/helpers/assignClass/",
				type: "POST",
				data: dataSent,
				dataType: "json",
				
				success: function(dataReturned) {
					toggleModalClasses(1);
				}
			});
		}
	});
	
	function toggleModalClasses(tog_case) {
		if(tog_case === 1) {
			$('#assign_header').addClass("no_display");
			$('#assign_body').addClass("no_display");
			$('#assign_footer').addClass("no_display");
			$('#confirm_header').removeClass("no_display");
			$('#confirm_body').removeClass("no_display");
			$('#confirm_footer').removeClass("no_display");
		} else if(tog_case === 2) {
			$('#assign_header').removeClass("no_display");
			$('#assign_body').removeClass("no_display");
			$('#assign_footer').removeClass("no_display");
			$('#confirm_header').addClass("no_display");
			$('#confirm_body').addClass("no_display");
			$('#confirm_footer').addClass("no_display");
		}
	}

  	$('#myModal').on('click', '#confirm-button', function (e) {
  		e.preventDefault();

  		var checked = $('input:checkbox').filter(':checked').map(function () {
    		return this.id.split('-')[2];
		}).get();
		var students = checked.length;
		console.log(students);
		for(var i = 0, len = checked.length; i < len; i++) {
			$('#row-' + checked[i]).toggleClass('success');
			$('#row-' + checked[i]).toggleClass('assigned');
			$('#edit-' + checked[i]).toggleClass('disabled');
			$('#checkbox-row-' + checked[i]).attr('disabled', 'disabled');
			$('#checkbox-row-' + checked[i]).attr("checked",false);
			$('#select-row-' + checked[i]).attr('disabled', 'disabled');
			
			for(var j = 0; j < 10 ; j++) {
				$('#element-' + checked[i] + '-'+ j).addClass('strike_through');
			}
		}
		toggleModalClasses(2);
		$('#myModal').modal('toggle');
	});
	
});