$(document).ready(function() {

	$.material.init();

	var times1 = ["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm", "9:30 pm", "10:00 pm"];
	
	var times1len = times1.length;
	var user_timezone = $('.user_timezone').attr('id');
	var studentId = $('.student_id').attr('id');
	var dataSent = {"studentId": studentId};
    var studentFullName = $('.student_fullName').attr('id');
    var fullName = studentFullName;
    
    studentFullName = studentFullName.replace(/ +/g, "");
    
	$('tbody').empty();
	
	for(var i = 0; i < times1len; i++) {
		$('tbody').append("<tr id=\"row-" + (i + 1) + "\"><td id=\"hour_fraction-" + (i + 1) + "-0\" class=\"row_num\">" + times1[i] + "</td><td id=\"element-" + (i + 1) + "-1\"></td><td id=\"element-" + (i + 1) + "-2\"></td><td id=\"element-" + (i + 1) + "-3\"></td><td id=\"element-" + (i + 1) + "-4\"></td><td id=\"element-" + (i + 1) + "-5\"></td><td id=\"element-" + (i + 1) + "-6\"></td><td id=\"element-" + (i + 1) + "-7\"></td></tr>");		
	}
	
	$.ajax({
		url: '/populateStudentProgram',
		type: "POST",
		datatype: "json",
		data: dataSent,
	
    	success: function (dataReturned) {
			populateProgram(dataReturned);
		}
	});

	function populateProgram(assignedRequests) {
        var aReqLen = assignedRequests.length;
        var rowCount = $('table tr').length - 1;
        var hourFractionId = "#hour_fraction-";
        
        for(var i = 0; i < aReqLen; i++) {
            
            var timeDiff = (moment(parseDate(assignedRequests[i].endTime)).diff(moment(parseDate(assignedRequests[i].startTime))) / 60000) / 30;
            var dayOfAssignment = parseInt(parseDate(assignedRequests[i].startTime).date());
            
            for(var j = 0; j < rowCount; j++) {
            	
            	var rowTime = parseTime($(hourFractionId + (j + 1) + "-0").text()).hours();
            	var rowMin = parseTime($(hourFractionId + (j + 1) + "-0").text()).minute();
            	var assignTime = parseDate(assignedRequests[i].startTime).hours();
            	var assignMin = parseDate(assignedRequests[i].startTime).minute();

                if(rowTime === assignTime && rowMin === assignMin)  {
                    var column = (dayOfAssignment % 16) + 1;
                    
                    $("#element-" + (j + 1) + "-" + column).text(assignedRequests[i].subject + ", " + assignedRequests[i].tutor.firstName);
                    $("#element-" + (j + 1) + "-" + column).addClass('green');
                    fillDuration(j + 1, timeDiff - 1, column);
                }            
            }
        }
    }

    function fillDuration(current_row, until, current_column) {
        
        for (var i = (current_row + 1); i < (until + current_row + 1); i++) {
            $("#element-" + i + "-" + current_column).text("\"");
            $("#element-" + i + "-" + current_column).addClass('green');
        }
    }

	function parseTime(string_time) {
        
        if (string_time === '') return null;

        var day = moment.tz($("#date").val(), "MMMM DD, YYYY A", user_timezone);
        var time = string_time.match(/(\d+)(:(\d\d))?\s*(p?)/i);

        day.hour(parseInt(time[1],10) + ( ( parseInt(time[1],10) < 12 && time[4] ) ? 12 : 0));
        day.minute(parseInt(time[3],10) || 0 );
        day.second(0);
        day.millisecond(0);

        return day;
    }

    function parseDate(string_date) {
      
		if (string_date === '') return null;

		var day = moment.tz(string_date, user_timezone);

		return day;
    }

    $('#pdf').on('click', function(event) {
        event.preventDefault();  //stop the browser from following

        // PDF EXPERIMENT
        var html = $('.student_schedule').html();
        html = "<h1>" + fullName + "</h1>" + html;
        

        var dd = {
            'html': html ,
            'css': "app/views/pdf/style.css",
            'fullName' : studentFullName,
            'type' : "student"
        };

        $.ajax({
            url: '/helpers/pdf',
            data: dd,
            dataType: 'json',
            type: 'POST',
            success: function(data) {
                console.log("yes!");
                console.log(data);
                window.location.href = "../../" + data;
            }

        });

        // EMAIL EXPERIMENT
        var dddd= {};
        $.ajax({
            url: '/helpers/mail',
            data: dddd,
            dataType: 'json',
            type: 'POST',
            success: function(data) {
                console.log('email sent!');
            }
        });
    
    });
});