$(document).ready(function() {

	$.material.init();

    var tutorName, scheduleDate;
    var user_timezone = $('.user_timezone').attr('id');

console.log(user_timezone);
	var times1 = ["10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "1:30 pm", "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm", "9:30 pm", "10:00 pm"];
	var times2 = ["3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm", "9:30 pm", "10:00 pm"];
	var times3 = ["1:30 pm", "2:00 pm", "2:30 pm", "3:00 pm", "3:30 pm", "4:00 pm", "4:30 pm", "5:00 pm", "5:30 pm", "6:00 pm", "6:30 pm", "7:00 pm", "7:30 pm", "8:00 pm", "8:30 pm", "9:00 pm", "9:30 pm", "10:00 pm"];

    var times1len = times1.length;
    var times2len = times2.length;
    var times3len = times3.length;
	
	$("#refresh").on('click', function() {

		var dayNum = parseInt($('#date').val().split(',')[0].split(' ')[1]);
		$('tbody').empty();
		
		if((dayNum == 17) || (dayNum == 18) || (dayNum == 19)) {

    		for(var i = 0; i < times1len; i++) {
    			$('tbody').append("<tr id=\"row-" + (i + 1) + "\"><td id=\"hour_fraction-" + (i + 1) + "-0\" class=\"row_num\">" + times1[i] + "</td><td id=\"element-" + (i + 1) + "-1\"></td><td id=\"element-" + (i + 1) + "-2\"></td><td id=\"element-" + (i + 1) + "-3\"></td><td id=\"element-" + (i + 1) + "-4\"></td><td id=\"element-" + (i + 1) + "-5\"></td><td id=\"element-" + (i + 1) + "-6\"></td></tr>");		
            }

    	}

        else if((dayNum == 16) || (dayNum == 20)) {

    		for(var j = 0; j < times2len; j++) {
    			$('tbody').append("<tr id=\"row-" + (j + 1) + "\"><td id=\"hour_fraction-" + (j + 1) + "-0\" class=\"row_num\">" + times2[j] + "</td><td id=\"element-" + (j + 1) + "-1\"></td><td id=\"element-" + (j + 1) + "-2\"></td><td id=\"element-" + (j + 1) + "-3\"></td><td id=\"element-" + (j + 1) + "-4\"></td><td id=\"element-" + (j + 1) + "-5\"></td><td id=\"element-" + (j + 1) + "-6\"></td></tr>");		
            }

    	}

        else if ((dayNum == 21) || (dayNum == 22)) {

    		for(var k = 0; k < times3len; k++) {
    			$('tbody').append("<tr id=\"row-" + (k + 1) + "\"><td id=\"hour_fraction-" + (k + 1) + "-0\" class=\"row_num\">" + times3[k] + "</td><td id=\"element-" + (k + 1) + "-1\"></td><td id=\"element-" + (k + 1) + "-2\"></td><td id=\"element-" + (k + 1) + "-3\"></td><td id=\"element-" + (k + 1) + "-4\"></td><td id=\"element-" + (k + 1) + "-5\"></td><td id=\"element-" + (k + 1) + "-6\"></td></tr>");		
            }

    	}

        else {
    		console.log('No date is selected!');
    	}

        var dataSent = {
            tutor: $("#tutorMenu").val(),
            date: $("#date").val()
        };

        $.ajax({
            url: '/populateProgram',
            type: "POST",
            data: dataSent,
            datatype: "json",

            success : function (dataReturned) {
                createProgram(dataReturned);
            }
        });

		
	});

    function createProgram(assignedRequests) {
        var aReqLen = assignedRequests.length;
        var rowCount = $('table tr').length - 1;
        var hourFractionId = "#hour_fraction-";
        var rowMap = Object.create(null);

        for(var i = 0; i < aReqLen; i++) {

            var timeDiff = (moment(parseDate(assignedRequests[i].endTime)).diff(moment(parseDate(assignedRequests[i].startTime))) / 60000) / 30;

            for(var j = 0; j < rowCount; j++) {
            
                if(parseDate(assignedRequests[i].startTime).valueOf() === parseTime($(hourFractionId + (j + 1) + "-0").text()).valueOf())  {
            
                    if(j+1 in rowMap) {

                        $("#element-" + (j + 1) + "-" + rowMap[j+1]).text(assignedRequests[i].studentName + ", " + assignedRequests[i].subject + ", " + assignedRequests[i].school + ", " + assignedRequests[i].teacher);
                        $("#element-" + (j + 1) + "-" + rowMap[j+1]).addClass('green');
                        fillDuration(j + 1, timeDiff - 1, rowMap[j+1]);
                        rowMap[j+1]++;
                    }

                    else {
                        rowMap[j+1] = 1;
                        $("#element-" + (j + 1) + "-" + rowMap[j+1]).text(assignedRequests[i].studentName + ", " + assignedRequests[i].subject + ", " + assignedRequests[i].school + ", " + assignedRequests[i].teacher);
                        $("#element-" + (j + 1) + "-" + rowMap[j+1]).addClass('green');
                        fillDuration(j + 1, timeDiff - 1, rowMap[j+1]);
                        rowMap[j+1]++;
                    }
                }            
            }
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

        return day.format();
    }

    function parseDate(string_date) {
      if (string_date === '') return null;
      var day = moment.tz(string_date, user_timezone);
      return day.format();
    }

    function fillDuration(current_row, until, current_column) {
        for (var i = (current_row + 1); i < (until + current_row + 1); i++) {
            $("#element-" + i + "-" + current_column).text("\"");
            $("#element-" + i + "-" + current_column).addClass('green');
        }
    }

    $('#pdf').on('click', function(event) {
        event.preventDefault();  //stop the browser from following
        
        // pdf experiment
        tutorName = $('#tutorMenu option:selected').html().trim();
        
        var tempScheduleDate = $('#date option:selected').html().trim();
        var day = tempScheduleDate.split(",")[0];
        var date = tempScheduleDate.split(",")[1].trim();
        
        scheduleDate = day + " " + date;
        
        var html = $('.tutor_schedule').html();
        html = "<h1>" + scheduleDate + ", " + tutorName + "</h1>" + html;
                
        var dd = {
            'html': html,
            'css': "app/views/pdf/style.css",
            'fullName' : tutorName,
            'scheduleDate' : scheduleDate,
            'type' : "tutor"
        };

        alert($('.panel-body').html());
        
        $.ajax({
            url: '/helpers/pdf',
            data: dd,
            dataType: 'json',
            type: 'POST',
            
            success: function(data) {
                window.location.href = "../../" + data;
            }

        });
    });
});