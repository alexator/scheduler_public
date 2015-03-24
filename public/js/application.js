'use strict';
$(document).ready(function() {
  $.material.init();

  var multipleSubjectRequests = false;
  
	var allowedPhonesPerStudent = 0;
  var allowedParentsPerStudent = 0;
  var allowedPhonesPerParentOne = 0;
  var allowedPhonesPerParentTwo = 0;
  var requestNumber = 3;
  var d_0_requestNumber = 1;
  var d_1_requestNumber = 1;
  var d_2_requestNumber = 1;
  var d_3_requestNumber = 1;
  var d_4_requestNumber = 1;
  var d_5_requestNumber = 1;
  var d_6_requestNumber = 1;

  // Variables for daily requests
  var d_0_r0_availabl = 1; // Variable for multiple availabilities on day 0 request 0
  var d_0_r1_availabl = 1; // Variable for multiple availabilities on day 0 request 0
  var d_0_r2_availabl = 1; // Variable for multiple availabilities on day 0 request 0
  var d_0_r3_availabl = 1; // Variable for multiple availabilities on day 0 request 0
  var d_0_r4_availabl = 1; // Variable for multiple availabilities on day 0 request 0
  var d_0_r5_availabl = 1; // Variable for multiple availabilities on day 0 request 0
  var d_0_r0_backupday = 1;
  var d_0_r1_backupday = 1;
  var d_0_r2_backupday = 1;
  var d_0_r3_backupday = 1;
  var d_0_r4_backupday = 1;
  var d_0_r5_backupday = 1;
  var d_1_r0_availabl = 1; // Variable for multiple availabilities on day 1 request 0
  var d_2_r0_availabl = 1; // Variable for multiple availabilities on day 2 request 0
  var d_3_r0_availabl = 1; // Variable for multiple availabilities on day 3 request 0
  var d_4_r0_availabl = 1; // Variable for multiple availabilities on day 4 request 0
  var d_5_r0_availabl = 1; // Variable for multiple availabilities on day 5 request 0
  var d_6_r0_availabl = 1; // Variable for multiple availabilities on day 6 request 0
  var d_0_bd0_r0_availabl = 1; // Variable for multiple availabilities on day 0 request 0 backup day 0

  var daily0_subjects = 0;
  var daily1_subjects = 0;
  var daily2_subjects = 0;
  var daily3_subjects = 0;
  var daily4_subjects = 0;
  var daily5_subjects = 0;
  var daily6_subjects = 0;

  var daily0_availabilities = 0;
  var daily1_availabilities = 0;
  var daily2_availabilities = 0;
  var daily3_availabilities = 0;
  var daily4_availabilities = 0;
  var daily5_availabilities = 0;
  var daily6_availabilities = 0;

  var selectedSubjects = [];

  var newPhonediv_student = "<div class=\"form-group\" id=\"secondPhone\"><div class=\"row\"><div class=\"col-md-5\"><label for=\"phone_one_number\">Number</label><input type=\"text\" id=\"phone_one_number\" class=\"form-control\" placeholder=\"e.g. 2109238456\" name=\"phones[1][number]\" required></div><div class=\"col-md-5\"><label for=\"phone_one_type\">Type</label><select class=\"form-control\" id=\"phone_one_type\" name=\"phones[1][type]\"><option>Please select a phone type</option><option>home</option><option>cell</option></select></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-raised mdi-content-clear\" id=\"delete_phone\"></a></div></div></div>";
  
  var newPhonediv_parentOne_SecondPhone = "<div class=\"form-group\" id=\"parentOneSecondPhone\"><div class=\"row\"><div class=\"col-md-5\"><label for=\"first_parent_phone_two_number\">Number</label><input type=\"text\" id=\"first_parent_phone_two_number\" class=\"form-control\" placeholder=\"e.g. 2109238456\" name=\"parents[0][phone][1][number]\" required></div><div class=\"col-md-5\"><label for=\"first_parent_phone_two_type\">Type</label><select id=\"first_parent_phone_two_type\" class=\"form-control\" name=\"parents[0][phone][1][type]\" ><option value=\"\">Please select a phone type</option><option>home</option><option>work</option><option>cell</option></select></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-raised mdi-content-clear\" id=\"parent_one_delete_phone_two\"></a></div></div></div>";

  var newPhonediv_parentOne_ThirdPhone = "<div class=\"form-group\" id=\"parentOneThirdPhone\"><div class=\"row\"><div class=\"col-md-5\"><label for=\"first_parent_phone_three_number\">Number</label><input type=\"text\" id=\"first_parent_phone_three_number\" class=\"form-control\" placeholder=\"e.g. 2109238456\" name=\"parents[0][phone][2][number]\" required></div><div class=\"col-md-5\"><label for=\"first_parent_phone_three_type\">Type</label><select id=\"first_parent_phone_three_type\" class=\"form-control\" name=\"parents[0][phone][2][type]\" ><option value=\"\">Please select a phone type</option><option>home</option><option>work</option><option>cell</option></select></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-raised mdi-content-clear\" id=\"parent_one_delete_phone_three\"></a></div></div></div>";

  var newPhonediv_parentTwo_SecondPhone = "<div class=\"form-group\" id=\"parentTwoSecondPhone\"><div class=\"row\"><div class=\"col-md-5\"><label for=\"second_parent_phone_two_number\">Number</label><input type=\"text\" id=\"second_parent_phone_two_number\" class=\"form-control\" placeholder=\"e.g. 2109238456\" name=\"parents[1][phone][1][number]\" required></div><div class=\"col-md-5\"><label for=\"second_parent_phone_two_type\">Type</label><select id=\"second_parent_phone_two_type\" class=\"form-control\" name=\"parents[1][phone][1][type]\"><option>Please select a phone type</option><option>home</option><option>work</option><option>cell</option></select></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-raised mdi-content-clear\" id=\"parent_two_delete_phone_two\"></a></div></div></div>";

  var newPhonediv_parentTwo_ThirdPhone = "<div class=\"form-group\" id=\"parentTwoThirdPhone\"><div class=\"row\"><div class=\"col-md-5\"><label for=\"second_parent_phone_three_number\">Number</label><input type=\"text\" id=\"second_parent_phone_three_number\" class=\"form-control\" placeholder=\"e.g. 2109238456\" name=\"parents[1][phone][2][number]\" required></div><div class=\"col-md-5\"><label for=\"second_parent_phone_three_type\">Type</label><select id=\"second_parent_phone_three_type\" class=\"form-control\" name=\"parents[1][phone][2][type]\" ><option>Please select a phone type</option><option>home</option><option>work</option><option>cell</option></select></div><div class=\"col-md-1\"><a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-raised mdi-content-clear\" id=\"parent_two_delete_phone_three\"></a></div></div></div>";

  var newParentdiv = "<div id=\"second_parent\"><br><div class=\"form-group\"><div class=\"row\"><div class=\"col-md-1 col-md-offset-11\"><a href=\"javascript:void(0)\" class=\"btn btn-danger btn-fab btn-raised mdi-content-clear\" id=\"parent_two_delete\"></a></div></div></div><div class=\"form-group\"><h4>Parent Two</h4></div><div class=\"form-group\"><div class=\"row\"><div class=\"col-md-4\"><label for=\"parent_two_first_name\">First Name</label><input type=\"text\" id=\"parent_two_first_name\" class=\"form-control\" placeholder=\"e.g. John\" name=\"parents[1][firstName]\" required></div><div class=\"col-md-4\"><label for=\"parent_two_last_name\">Last Name</label><input type=\"text\" id=\"parent_two_last_name\" class=\"form-control\" placeholder=\"e.g. Smith\" name=\"parents[1][lastName]\" required></div><div class=\"col-md-4\"><label for=\"parent_two_email\">Email</label><input type=\"text\" id=\"parent_two_email\" class=\"form-control\" placeholder=\"e.g. jsmith@example.com\" name=\"parents[1][email]\" required></div></div></div><div id=\"second_parent_phone_section\"><div id=\"second_parent_phone_numbers\"><div class=\"form-group\"><div class=\"row\"><div class=\"col-md-2\"><h4>Phones</h4></div><div class=\"col-md-5\"><div class=\"vmidlle\"><a class=\"btn btn-flat btn-primary\" id=\"second_parent_add_phone\"><span class=\"mdi-content-add\" aria-hidden=\"true\"></span> Add another phone</a></div></div></div></div><div class=\"form-group\"><div class=\"row\"><div class=\"col-md-5\"><label for=\"second_parent_phone_one_number\">Number</label><input type=\"text\" id=\"second_parent_phone_one_number\" class=\"form-control\" placeholder=\"e.g. 2109238456\" name=\"parents[1][phone][0][number]\" required></div><div class=\"col-md-5\"><label for=\"second_parent_phone_one_type\">Type</label><select id=\"second_parent_phone_one_type\" class=\"form-control\" name=\"parents[1][phone][0][type]\"><option>Please select a phone type</option><option>home</option><option>work</option><option>cell</option></select></div></div></div></div></div></div>";


// Parent section
// 
// 
  if($('#first_parent_add_phone').is("[disabled]")) {
    $('#first_parent_add_phone').removeAttr("disabled");
  }

  if($('#second_parent_add_phone').is("[disabled]")) {
    $('#second_parent_add_phone').removeAttr("disabled");
  }

  if($('#add_parent').is("[disabled]")) {
    $('#add_parent').removeAttr("disabled");
  }

// ADD PARENT SECTION
  $('#add_parent').on('click', function() {
    if (allowedParentsPerStudent < 1) {
      $('#parents').append($(newParentdiv).fadeIn());
      allowedParentsPerStudent++;
      $('#add_parent').attr( "disabled", "disabled");
    } else {
      alert('A student could declare only two parents');
    }
  });
// #############################################
  

  $('#add_request').on('click', function() {
      addRequest(requestNumber);
      requestNumber++;
  });

  

// ADD PHONES FOR PARENT ONE
  $('#first_parent_add_phone').on('click', function() {
    if (allowedPhonesPerParentOne === 0) {
      $('#first_parent_phone_numbers').append($(newPhonediv_parentOne_SecondPhone).fadeIn());
      allowedPhonesPerParentOne++;
    } else if(allowedPhonesPerParentOne == 1) {
      $('#first_parent_phone_numbers').append($(newPhonediv_parentOne_ThirdPhone).fadeIn());
      allowedPhonesPerParentOne++;
      $('#first_parent_add_phone').attr( "disabled", "disabled");
    }
  });
  // ########################################

$('#parents').on('click', '#second_parent_add_phone', function() {
    if (allowedPhonesPerParentTwo === 0) {
      $('#second_parent_phone_numbers').append($(newPhonediv_parentTwo_SecondPhone).fadeIn());
      allowedPhonesPerParentTwo++;
    } else if(allowedPhonesPerParentTwo == 1) {
      $('#second_parent_phone_numbers').append($(newPhonediv_parentTwo_ThirdPhone).fadeIn());
      allowedPhonesPerParentTwo++;
      $('#second_parent_add_phone').attr( "disabled", "disabled");
    }
  });

// DELETE PARENT ONE PHONES
  $('#first_parent_phone_section').on('click', '#parent_one_delete_phone_two', function(){
    $('#parentOneSecondPhone').fadeOut('fast', function() {
      $(this).remove();
    });

    allowedPhonesPerParentOne--;
    
    if(allowedPhonesPerParentOne < 2) {
      $('#first_parent_add_phone').removeAttr("disabled");
    }
  });

  $('#first_parent_phone_section').on('click', '#parent_one_delete_phone_three', function(){
    $('#parentOneThirdPhone').fadeOut('fast', function() {
      $(this).remove();
    });

    allowedPhonesPerParentOne--;
    
    if(allowedPhonesPerParentOne < 2) {
      $('#first_parent_add_phone').removeAttr("disabled");
    }
  });

// #######################################################

 // DELETE PARENT TWO PHONES
  $('#parents').on('click', '#parent_two_delete_phone_two', function(){
    $('#parentTwoSecondPhone').fadeOut('fast', function() {
      $(this).remove();
    });

    allowedPhonesPerParentTwo--;
    
    if(allowedPhonesPerParentTwo < 2) {
      $('#second_parent_add_phone').removeAttr("disabled");
    }
  });

  $('#parents').on('click', '#parent_two_delete_phone_three', function(){
    $('#parentTwoThirdPhone').fadeOut('fast', function() {
      $(this).remove();
    });

    allowedPhonesPerParentTwo--;
    
    if(allowedPhonesPerParentTwo < 2) {
      $('#second_parent_add_phone').removeAttr("disabled");
    }
  });

// #######################################################

  // DELETE SECOND PARENT
  $('#student_parent_section').on('click', '#parent_two_delete', function(){
    $('#second_parent').fadeOut('fast', function() {
      $(this).remove();
    });

    allowedParentsPerStudent--;
    
    $('#add_parent').removeAttr("disabled");
  });
// ############################


// Student section
// 
// 
  
  if($('#add_phone').is("[disabled]")) {
    $('#add_phone').removeAttr("disabled");
  }


  
  $('#add_phone').on('click', function() {
  	if (allowedPhonesPerStudent < 1) {
  		$('#phone_numbers').append($(newPhonediv_student).fadeIn());
  		allowedPhonesPerStudent++;
      $('#add_phone').attr( "disabled", "disabled");
  	} else {
  	}
  });

  $('#student_phone_section').on('click', '#delete_phone', function(){
    $('#secondPhone').fadeOut('fast', function() {
      $(this).remove();
    });

    allowedPhonesPerStudent--;
    
    $('#add_phone').removeAttr("disabled");
  });

  function deleteRequest() {
    $('#request').on('click', "[id^=delete-req-]", function(){
      var divReq = "#" + $(this).attr('id').slice(7) + "";
     
      $(divReq).fadeOut('fast', function() {
        $(this).remove();
      });
    });
  }

  deleteRequest();
  


function addRequest(reqNum) {

    var newRequestdiv = "<div id=\"req-"+reqNum+"\"><div class=\"col-md-4\"><div id=\"req_section\"><div class=\"form-group\"><div class=\"row\"><div class=\"col-md-2\"><h4>Request</h4></div><div class=\"col-md-5\"><div class=\"vmidlle\"><a class=\"btn btn-flat btn-danger\" id=\"delete-req-" + reqNum+ "\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span> Delete request</a></div></div></div></div><div class=\"form-group\"><label for=\"subjectName-" + reqNum + "\">Subject</label><select class=\"form-control subjectMenu\" id=\"subjectName-" + reqNum + "\" name=\"subjectRequest["+reqNum+"][subject]\" required><option value=\"0\">Please select a subject</option></select></div><div class=\"form-group\"><label for=\"teacherName-" + reqNum + "\">Teacher</label><select class=\"form-control\" id=\"teacherName-" + reqNum+ "\" name=\"subjectRequest["+reqNum+"][teacher]\" required><option value=\"0\">Please select a teacher</option></select></div><div class=\"form-group\"><label for=\"finalDate-" +reqNum+ "\">Date of Final</label><select id=\"finalDate-" +reqNum+ "\" class=\"form-control\"  name=\"subjectRequest["+reqNum+"][examDate]\" ><option>January 19, 2015</option><option>January 20, 2015</option><option>January 21, 2015</option><option>January 22, 2015</option><option>January 23, 2015</option></select></div><div class=\"form-group\"><label for=\"hrsRequ-" +reqNum+ "\">Total # of hrs requested</label><input type=\"number\" id=\"hrsRequ-" +reqNum+ "\" class=\"form-control\" placeholder=\"e.g. 2\" max=9 min=1 name=\"subjectRequest["+reqNum+"][hoursRequested]\" required></div><div class=\"form-group\"><label for=\"requestedTutor-" +reqNum+"\">Tutor</label><select class=\"form-control\" id=\"requestedTutor-" +reqNum+ "\" name=\"subjectRequest["+reqNum+"][requestedTutor]\" required><option>I don't have a regular tutor</option><option>I prefer my regular tutor</option><option>I prefer another tutor</option></select></div></div></div></div>";

    $('#req_container').append($(newRequestdiv).fadeIn());

    var schoolId = $(".school").attr("id");
    
    var element = '#subjectName-' + reqNum + ' option[value!="0"]';
    $(element).remove();

    // Go to server and get the values
    $.ajax({
      // The route param 'json' will call the function that will return the right json object
      url: "/helpers/get_subjects/"+schoolId,
      type: "GET",
      dataType: "json",
      // Data is the school object returned by the read school function in the helper controller
      success: function(data) {
        for(var i=0; i < data.subjects.length; i++){
          // Populate the dropdown for subjects
          var element2 = "#subjectName-" + reqNum;
          $(element2).append("<option>"+data.subjects[i].name+"</option>");
        }
      }
    });

    var identifier = "#subjectName-" + reqNum ;
    $(identifier).change(function() {
      var idNum = $(this).attr('id').split('-')[1];

      var subjectName = $(this).val();

      // Remove other options from dropdown
      var elem1 = '#teacherName-' + idNum + ' option[value!="0"]';
      $(elem1).remove();

      // Get new options for dropdown
      $.ajax({
        // Calls findTeacherBySubjectName and returns readTeachers as 'data'
        url: "/helpers/get_sub_teacher/"+schoolId+"/"+subjectName,
        type: "GET",
        dataType: "json",
        // data is a list of teachers
        success: function(data) {
          for(var i=0; i < data.length; i++){
            var elem2 = "#teacherName-" + idNum;
            $(elem2).append("<option>"+data[i].name+"</option>");
          }
        }
      });
    });
  }


  function rebuildSelectedSubjectsArray() {
    var i = 0;
    var elem = "";
    selectedSubjects = [];

    while (i >= 0) {
      elem = "#subjectName-"+i;
      if ($(elem).length > 0) {
        if ($(elem).val() !== "0") {
          selectedSubjects.push($(elem).val());
        }
        i++;
      } else {
        i = -1;
      }
    }
  }
  
  $(".subjectMenu").change(function(event) {
    event.preventDefault();
    rebuildSelectedSubjectsArray();
    console.log(selectedSubjects);
    $('.daySubjectMenu option[value!="0"]').remove();
    for (var i=0 ; i<selectedSubjects.length ; i++) {
      $('.daySubjectMenu').append("<option>" + selectedSubjects[i] + "</option>");
    }
  });

  $("#subjectName-0").change(function() {
    console.log("subject change");
    // Get selected school and selected subject
    var schoolId = $(".school").attr("id");
    var subjectName = $(this).val();

    // Remove other options from dropdown
    $('#teacherName-0 option[value!="0"]').remove();

    // Get new options for dropdown
    $.ajax({
      // Calls findTeacherBySubjectName and returns readTeachers as 'data'
      url: "/helpers/get_sub_teacher/"+schoolId+"/"+subjectName,
      type: "GET",
      dataType: "json",
      // data is a list of teachers
      success: function(data) {
        for(var i=0; i < data.length; i++){
          $("#teacherName-0").append("<option>"+data[i].name+"</option>");
        }
      }
    });
  });

  $("#subjectName-1").change(function() {
    console.log("subject change");
    // Get selected school and selected subject
    var schoolId = $(".school").attr("id");
    var subjectName = $(this).val();

    // Remove other options from dropdown
    $('#teacherName-1 option[value!="0"]').remove();

    // Get new options for dropdown
    $.ajax({
      // Calls findTeacherBySubjectName and returns readTeachers as 'data'
      url: "/helpers/get_sub_teacher/"+schoolId+"/"+subjectName,
      type: "GET",
      dataType: "json",
      // data is a list of teachers
      success: function(data) {
        for(var i=0; i < data.length; i++){
          $("#teacherName-1").append("<option>"+data[i].name+"</option>");
        }
      }
    });
  });

  $("#subjectName-2").change(function() {
    console.log("subject change");
    // Get selected school and selected subject
    var schoolId = $(".school").attr("id");
    var subjectName = $(this).val();

    // Remove other options from dropdown
    $('#teacherName-2 option[value!="0"]').remove();

    // Get new options for dropdown
    $.ajax({
      // Calls findTeacherBySubjectName and returns readTeachers as 'data'
      url: "/helpers/get_sub_teacher/"+schoolId+"/"+subjectName,
      type: "GET",
      dataType: "json",
      // data is a list of teachers
      success: function(data) {
        for(var i=0; i < data.length; i++){
          $("#teacherName-2").append("<option>"+data[i].name+"</option>");
        }
      }
    });
  });

// Changes for the daily requeset
// 

// Daily requests section
// 
 

  function addSecondSubject(id, dayNum) {
    console.log('adding second subject');

    var secondSubject = "<div class=\"sub\" id=\"second-sub-day"+dayNum+"\"><div class=\"form-group\"><label for=\"subjectName-d"+dayNum+"-r1\">Subject 2</label><select class=\"form-control daySubjectMenu\" id=\"subjectName-d"+dayNum+"-r1\" name=\"dayRequests["+dayNum+"][sub][1][subject]\" ><option value=\"0\">Please select a subject</option></select></div><div class=\"form-group\"><label for=\"hrsNeeded-d"+dayNum+"-r1\">Hours Needed (for subject 2)</label><input type=\"number\" id=\"hrsNeeded-d"+dayNum+"-r1\" class=\"form-control\" placeholder=\"e.g. 2\" name=\"dayRequests["+dayNum+"][sub][1][hoursRequested]\" max=9 min=1 ></div><div class=\"form-group\"><label for=\"session-d"+dayNum+"-r1\">Session</label><select class=\"form-control\" id=\"session-d"+dayNum+"-r1\" name=\"dayRequests["+dayNum+"][sub][1][session]\" ><option>Session 1 only</option><option>Session 2 only</option><option>Either</option><option>Not applicable</option></select></div> <div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDaily\" id=\"deleteSubject-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete Subject</a></div></div></div></div>";

    var element = "#" + id ;
    $(element).append($(secondSubject).fadeIn());
    $(".subjectMenu").trigger("change");
  }

  $(".addDaily").on('click', function() {
      var dayNum = $(this).attr("id").split('-')[1] ;
      var id = "dailySubject-" + dayNum ;
      var numericalDayNum = parseInt(dayNum);
     
      switch(numericalDayNum) {
          case 0:
              daily0_subjects++;
              $('#addDaily-'+dayNum).attr( "disabled", "disabled");
              break;
          case 1:
              daily1_subjects++;
              $('#addDaily-'+dayNum).attr( "disabled", "disabled");
              break;
          case 2:
              daily2_subjects++;
              $('#addDaily-'+dayNum).attr( "disabled", "disabled");
              break;
          case 3:
              daily3_subjects++;
              $('#addDaily-'+dayNum).attr( "disabled", "disabled");
              break;
          case 4:
              daily4_subjects++;
              $('#addDaily-'+dayNum).attr( "disabled", "disabled");
              break;
          case 5:
              daily5_subjects++;
              $('#addDaily-'+dayNum).attr( "disabled", "disabled");
              break;
          case 6:
              daily6_subjects++;
              $('#addDaily-'+dayNum).attr( "disabled", "disabled");
              break;
          default:
              console.log('Problem with second subjects');
              break;
      }

      addSecondSubject(id, dayNum);
  });

  function deleteSecondSubject(dayNum) {
    var element = "#second-sub-day" + dayNum ;
    $(element).fadeOut('fast', function() {
        $(element).remove();
      });
  }

  $("#daily_requests_section").on('click', '.deleteDaily', function() {
      var dayNum = $(this).attr("id").split('-')[1] ;
      var numericalDayNum = parseInt(dayNum);
     
      switch(numericalDayNum) {
          case 0:
              daily0_subjects--;
              $('#addDaily-'+dayNum).removeAttr("disabled");
              break;
          case 1:
              daily1_subjects--;
              $('#addDaily-'+dayNum).removeAttr("disabled");
              break;
          case 2:
              daily2_subjects--;
              $('#addDaily-'+dayNum).removeAttr("disabled");
              break;
          case 3:
              daily3_subjects--;
              $('#addDaily-'+dayNum).removeAttr("disabled");
              break;
          case 4:
              daily4_subjects--;
              $('#addDaily-'+dayNum).removeAttr("disabled");
              break;
          case 5:
              daily5_subjects--;
              $('#addDaily-'+dayNum).removeAttr("disabled");
              break;
          case 6:
              daily6_subjects--;
              $('#addDaily-'+dayNum).removeAttr("disabled");
              break;
          default:
              console.log('Problem with second subjects');
              break;
      }

      console.log(dayNum);

      deleteSecondSubject(dayNum);
  });

  function addSecondAvailability(id, dayNum) {

    var secondAvailability = "";

    switch (dayNum) {
      case "0":
        secondAvailability = "<div class=\"sub\" id=\"second-avail-day"+dayNum+"\"><div class=\"row\" id=\"d"+dayNum+"-req0-av1\"><div class=\"col-md-2\"><label for=\"startTime-d"+dayNum+"-r0-av1\">Start Time</label><select class=\"form-control\" id=\"startTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][startTime]\"><option value=\"0\">---</option><option value=\"2015,1,16,15,30\">3.30 pm</option><option value=\"2015,1,16,16,00\">4.00 pm</option><option value=\"2015,1,16,16,30\">4.30 pm</option><option value=\"2015,1,16,17,00\">5.00 pm</option><option value=\"2015,1,16,17,30\">5.30 pm</option><option value=\"2015,1,16,18,00\">6.00 pm</option><option value=\"2015,1,16,18,30\">6.30 pm</option><option value=\"2015,1,16,19,00\">7.00 pm</option><option value=\"2015,1,16,19,30\">7.30 pm</option><option value=\"2015,1,16,20,00\">8.00 pm</option><option value=\"2015,1,16,20,30\">8.30 pm</option><option value=\"2015,1,16,21,00\">9.00 pm</option>        </select></div><div class=\"col-md-2\"><label for=\"endTime-d"+dayNum+"-r0-av1\">End Time</label><select class=\"form-control\" id=\"endTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][endTime]\"><option value=\"0\">---</option><option value=\"2015,1,16,16,30\">4.30 pm</option><option value=\"2015,1,16,17,00\">5.00 pm</option><option value=\"2015,1,16,17,30\">5.30 pm</option><option value=\"2015,1,16,18,00\">6.00 pm</option><option value=\"2015,1,16,18,30\">6.30 pm</option><option value=\"2015,1,16,19,00\">7.00 pm</option><option value=\"2015,1,16,19,30\">7.30 pm</option><option value=\"2015,1,16,20,00\">8.00 pm</option><option value=\"2015,1,16,20,30\">8.30 pm</option><option value=\"2015,1,16,21,00\">9.00 pm</option><option value=\"2015,1,16,21,30\">9.30 pm</option><option value=\"2015,1,16,22,00\">10.00 pm</option> </select></div></div><br><div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDailyAvail\" id=\"deleteAvail-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete</a></div></div></div></div>";
        break;

      case "1":
        secondAvailability = "<div class=\"sub\" id=\"second-avail-day"+dayNum+"\"><div class=\"row\" id=\"d"+dayNum+"-req0-av1\"><div class=\"col-md-2\"><label for=\"startTime-d"+dayNum+"-r0-av1\">Start Time</label><select class=\"form-control\" id=\"startTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][startTime]\"><option value=\"0\">  ---  </option><option value=\"2015,1,17,10,00\">10.00 am</option><option value=\"2015,1,17,10,30\">10.30 am</option><option value=\"2015,1,17,11,00\">11.00 am</option><option value=\"2015,1,17,11,30\">11.30 am</option><option value=\"2015,1,17,12,00\">12.00 pm</option><option value=\"2015,1,17,12,30\">12.30 pm</option><option value=\"2015,1,17,13,00\">1.00 pm</option><option value=\"2015,1,17,13,30\">1.30 pm</option><option value=\"2015,1,17,14,00\">2.00 pm</option><option value=\"2015,1,17,14,30\">2.30 pm</option><option value=\"2015,1,17,15,00\">3.00 pm</option><option value=\"2015,1,17,15,30\">3.30 pm</option><option value=\"2015,1,17,16,00\">4.00 pm</option><option value=\"2015,1,17,16,30\">4.30 pm</option><option value=\"2015,1,17,17,00\">5.00 pm</option><option value=\"2015,1,17,17,30\">5.30 pm</option><option value=\"2015,1,17,18,00\">6.00 pm</option><option value=\"2015,1,17,18,30\">6.30 pm</option><option value=\"2015,1,17,19,00\">7.00 pm</option><option value=\"2015,1,17,19,30\">7.30 pm</option><option value=\"2015,1,17,20,00\">8.00 pm</option><option value=\"2015,1,17,20,30\">8.30 pm</option><option value=\"2015,1,17,21,00\">9.00 pm</option> </select></div><div class=\"col-md-2\"><label for=\"endTime-d"+dayNum+"-r0-av1\">End Time</label><select class=\"form-control\" id=\"endTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][endTime]\"><option value=\"0\">  ---  </option><option value=\"2015,1,17,11,00\">11.00 am</option><option value=\"2015,1,17,11,30\">11.30 am</option><option value=\"2015,1,17,12,00\">12.00 pm</option><option value=\"2015,1,17,12,30\">12.30 pm</option><option value=\"2015,1,17,13,00\">1.00 pm</option><option value=\"2015,1,17,13,30\">1.30 pm</option><option value=\"2015,1,17,14,00\">2.00 pm</option><option value=\"2015,1,17,14,30\">2.30 pm</option><option value=\"2015,1,17,15,00\">3.00 pm</option><option value=\"2015,1,17,15,30\">3.30 pm</option><option value=\"2015,1,17,16,00\">4.00 pm</option><option value=\"2015,1,17,16,30\">4.30 pm</option><option value=\"2015,1,17,17,00\">5.00 pm</option><option value=\"2015,1,17,17,30\">5.30 pm</option><option value=\"2015,1,17,18,00\">6.00 pm</option><option value=\"2015,1,17,18,30\">6.30 pm</option><option value=\"2015,1,17,19,00\">7.00 pm</option><option value=\"2015,1,17,19,30\">7.30 pm</option><option value=\"2015,1,17,20,00\">8.00 pm</option><option value=\"2015,1,17,20,30\">8.30 pm</option><option value=\"2015,1,17,21,00\">9.00 pm</option><option value=\"2015,1,17,21,30\">9.30 pm</option><option value=\"2015,1,17,22,00\">10.00 pm</option> </select></div></div><br><div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDailyAvail\" id=\"deleteAvail-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete</a></div></div></div></div>";
        break;

      case "2":
        secondAvailability = "<div class=\"sub\" id=\"second-avail-day"+dayNum+"\"><div class=\"row\" id=\"d"+dayNum+"-req0-av1\"><div class=\"col-md-2\"><label for=\"startTime-d"+dayNum+"-r0-av1\">Start Time</label><select class=\"form-control\" id=\"startTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][startTime]\"><option value=\"0\">  ---  </option><option value=\"2015,1,18,10,00\">10.00 am</option><option value=\"2015,1,18,10,30\">10.30 am</option><option value=\"2015,1,18,11,00\">11.00 am</option><option value=\"2015,1,18,11,30\">11.30 am</option><option value=\"2015,1,18,12,00\">12.00 pm</option><option value=\"2015,1,18,12,30\">12.30 pm</option><option value=\"2015,1,18,13,00\">1.00 pm</option><option value=\"2015,1,18,13,30\">1.30 pm</option><option value=\"2015,1,18,14,00\">2.00 pm</option><option value=\"2015,1,18,14,30\">2.30 pm</option><option value=\"2015,1,18,15,00\">3.00 pm</option><option value=\"2015,1,18,15,30\">3.30 pm</option><option value=\"2015,1,18,16,00\">4.00 pm</option><option value=\"2015,1,18,16,30\">4.30 pm</option><option value=\"2015,1,18,17,00\">5.00 pm</option><option value=\"2015,1,18,17,30\">5.30 pm</option><option value=\"2015,1,18,18,00\">6.00 pm</option><option value=\"2015,1,18,18,30\">6.30 pm</option><option value=\"2015,1,18,19,00\">7.00 pm</option><option value=\"2015,1,18,19,30\">7.30 pm</option><option value=\"2015,1,18,20,00\">8.00 pm</option><option value=\"2015,1,18,20,30\">8.30 pm</option><option value=\"2015,1,18,21,00\">9.00 pm</option> </select></div><div class=\"col-md-2\"><label for=\"endTime-d"+dayNum+"-r0-av1\">End Time</label><select class=\"form-control\" id=\"endTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][endTime]\"><option value=\"0\">  ---  </option><option value=\"2015,1,18,11,00\">11.00 am</option><option value=\"2015,1,18,11,30\">11.30 am</option><option value=\"2015,1,18,12,00\">12.00 pm</option><option value=\"2015,1,18,12,30\">12.30 pm</option><option value=\"2015,1,18,13,00\">1.00 pm</option><option value=\"2015,1,18,13,30\">1.30 pm</option><option value=\"2015,1,18,14,00\">2.00 pm</option><option value=\"2015,1,18,14,30\">2.30 pm</option><option value=\"2015,1,18,15,00\">3.00 pm</option><option value=\"2015,1,18,15,30\">3.30 pm</option><option value=\"2015,1,18,16,00\">4.00 pm</option><option value=\"2015,1,18,16,30\">4.30 pm</option><option value=\"2015,1,18,17,00\">5.00 pm</option><option value=\"2015,1,18,17,30\">5.30 pm</option><option value=\"2015,1,18,18,00\">6.00 pm</option><option value=\"2015,1,18,18,30\">6.30 pm</option><option value=\"2015,1,18,19,00\">7.00 pm</option><option value=\"2015,1,18,19,30\">7.30 pm</option><option value=\"2015,1,18,20,00\">8.00 pm</option><option value=\"2015,1,18,20,30\">8.30 pm</option><option value=\"2015,1,18,21,00\">9.00 pm</option><option value=\"2015,1,18,21,30\">9.30 pm</option><option value=\"2015,1,18,22,00\">10.00 pm</option> </select></div></div><br><div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDailyAvail\" id=\"deleteAvail-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete</a></div></div></div></div>";
        break;

      case "3":
        secondAvailability = "<div class=\"sub\" id=\"second-avail-day"+dayNum+"\"><div class=\"row\" id=\"d"+dayNum+"-req0-av1\"><div class=\"col-md-2\"><label for=\"startTime-d"+dayNum+"-r0-av1\">Start Time</label><select class=\"form-control\" id=\"startTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][startTime]\"><option value=\"0\">---</option><option value=\"2015,1,19,10,00\">10.00 am</option><option value=\"2015,1,19,10,30\">10.30 am</option><option value=\"2015,1,19,11,00\">11.00 am</option><option value=\"2015,1,19,11,30\">11.30 am</option><option value=\"2015,1,19,12,00\">12.00 pm</option><option value=\"2015,1,19,12,30\">12.30 pm</option><option value=\"2015,1,19,13,00\">1.00 pm</option><option value=\"2015,1,19,13,30\">1.30 pm</option><option value=\"2015,1,19,14,00\">2.00 pm</option><option value=\"2015,1,19,14,30\">2.30 pm</option><option value=\"2015,1,19,15,00\">3.00 pm</option><option value=\"2015,1,19,15,30\">3.30 pm</option><option value=\"2015,1,19,16,00\">4.00 pm</option><option value=\"2015,1,19,16,30\">4.30 pm</option><option value=\"2015,1,19,17,00\">5.00 pm</option><option value=\"2015,1,19,17,30\">5.30 pm</option><option value=\"2015,1,19,18,00\">6.00 pm</option><option value=\"2015,1,19,18,30\">6.30 pm</option><option value=\"2015,1,19,19,00\">7.00 pm</option><option value=\"2015,1,19,19,30\">7.30 pm</option><option value=\"2015,1,19,20,00\">8.00 pm</option><option value=\"2015,1,19,20,30\">8.30 pm</option><option value=\"2015,1,19,21,00\">9.00 pm</option> </select></div><div class=\"col-md-2\"><label for=\"endTime-d"+dayNum+"-r0-av1\">End Time</label><select class=\"form-control\" id=\"endTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][endTime]\"><option value=\"0\">---</option><option value=\"2015,1,19,11,00\">11.00 am</option><option value=\"2015,1,19,11,30\">11.30 am</option><option value=\"2015,1,19,12,00\">12.00 pm</option><option value=\"2015,1,19,12,30\">12.30 pm</option><option value=\"2015,1,19,13,00\">1.00 pm</option><option value=\"2015,1,19,13,30\">1.30 pm</option><option value=\"2015,1,19,14,00\">2.00 pm</option><option value=\"2015,1,19,14,30\">2.30 pm</option><option value=\"2015,1,19,15,00\">3.00 pm</option><option value=\"2015,1,19,15,30\">3.30 pm</option><option value=\"2015,1,19,16,00\">4.00 pm</option><option value=\"2015,1,19,16,30\">4.30 pm</option><option value=\"2015,1,19,17,00\">5.00 pm</option><option value=\"2015,1,19,17,30\">5.30 pm</option><option value=\"2015,1,19,18,00\">6.00 pm</option><option value=\"2015,1,19,18,30\">6.30 pm</option><option value=\"2015,1,19,19,00\">7.00 pm</option><option value=\"2015,1,19,19,30\">7.30 pm</option><option value=\"2015,1,19,20,00\">8.00 pm</option><option value=\"2015,1,19,20,30\">8.30 pm</option><option value=\"2015,1,19,21,00\">9.00 pm</option><option value=\"2015,1,19,21,30\">9.30 pm</option><option value=\"2015,1,19,22,00\">10.00 pm</option> </select></div></div><br><div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDailyAvail\" id=\"deleteAvail-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete</a></div></div></div></div>";
        break;

      case "4":
        secondAvailability = "<div class=\"sub\" id=\"second-avail-day"+dayNum+"\"><div class=\"row\" id=\"d"+dayNum+"-req0-av1\"><div class=\"col-md-2\"><label for=\"startTime-d"+dayNum+"-r0-av1\">Start Time</label><select class=\"form-control\" id=\"startTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][startTime]\"><option value=\"0\">---</option><option value=\"2015,1,20,15,30\">3.30 pm</option><option value=\"2015,1,20,16,00\">4.00 pm</option><option value=\"2015,1,20,16,30\">4.30 pm</option><option value=\"2015,1,20,17,00\">5.00 pm</option><option value=\"2015,1,20,17,30\">5.30 pm</option><option value=\"2015,1,20,18,00\">6.00 pm</option><option value=\"2015,1,20,18,30\">6.30 pm</option><option value=\"2015,1,20,19,00\">7.00 pm</option><option value=\"2015,1,20,19,30\">7.30 pm</option><option value=\"2015,1,20,20,00\">8.00 pm</option><option value=\"2015,1,20,20,30\">8.30 pm</option><option value=\"2015,1,20,21,00\">9.00 pm</option> </select></div><div class=\"col-md-2\"><label for=\"endTime-d"+dayNum+"-r0-av1\">End Time</label><select class=\"form-control\" id=\"endTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][endTime]\"><option value=\"0\">---</option><option value=\"2015,1,20,16,30\">4.30 pm</option><option value=\"2015,1,20,17,00\">5.00 pm</option><option value=\"2015,1,20,17,30\">5.30 pm</option><option value=\"2015,1,20,18,00\">6.00 pm</option><option value=\"2015,1,20,18,30\">6.30 pm</option><option value=\"2015,1,20,19,00\">7.00 pm</option><option value=\"2015,1,20,19,30\">7.30 pm</option><option value=\"2015,1,20,20,00\">8.00 pm</option><option value=\"2015,1,20,20,30\">8.30 pm</option><option value=\"2015,1,20,21,00\">9.00 pm</option><option value=\"2015,1,20,21,30\">9.30 pm</option><option value=\"2015,1,20,22,00\">10.00 pm</option></select></div></div><br><div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDailyAvail\" id=\"deleteAvail-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete</a></div></div></div></div>";
        break;

      case "5":
        secondAvailability = "<div class=\"sub\" id=\"second-avail-day"+dayNum+"\"><div class=\"row\" id=\"d"+dayNum+"-req0-av1\"><div class=\"col-md-2\"><label for=\"startTime-d"+dayNum+"-r0-av1\">Start Time</label><select class=\"form-control\" id=\"startTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][startTime]\"><option value=\"0\">---</option><option value=\"2015,1,21,13,30\">1.30 pm</option><option value=\"2015,1,21,14,00\">2.00 pm</option><option value=\"2015,1,21,14,30\">2.30 pm</option><option value=\"2015,1,21,15,00\">3.00 pm</option><option value=\"2015,1,21,15,30\">3.30 pm</option><option value=\"2015,1,21,16,00\">4.00 pm</option><option value=\"2015,1,21,16,30\">4.30 pm</option><option value=\"2015,1,21,17,00\">5.00 pm</option><option value=\"2015,1,21,17,30\">5.30 pm</option><option value=\"2015,1,21,18,00\">6.00 pm</option><option value=\"2015,1,21,18,30\">6.30 pm</option><option value=\"2015,1,21,19,00\">7.00 pm</option><option value=\"2015,1,21,19,30\">7.30 pm</option><option value=\"2015,1,21,20,00\">8.00 pm</option><option value=\"2015,1,21,20,30\">8.30 pm</option><option value=\"2015,1,21,21,00\">9.00 pm</option> </select></div><div class=\"col-md-2\"><label for=\"endTime-d"+dayNum+"-r0-av1\">End Time</label><select class=\"form-control\" id=\"endTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][endTime]\"><option value=\"0\">---</option><option value=\"2015,1,21,14,30\">2.30 pm</option><option value=\"2015,1,21,15,00\">3.00 pm</option><option value=\"2015,1,21,15,30\">3.30 pm</option><option value=\"2015,1,21,16,00\">4.00 pm</option><option value=\"2015,1,21,16,30\">4.30 pm</option><option value=\"2015,1,21,17,00\">5.00 pm</option><option value=\"2015,1,21,17,30\">5.30 pm</option><option value=\"2015,1,21,18,00\">6.00 pm</option><option value=\"2015,1,21,18,30\">6.30 pm</option><option value=\"2015,1,21,19,00\">7.00 pm</option><option value=\"2015,1,21,19,30\">7.30 pm</option><option value=\"2015,1,21,20,00\">8.00 pm</option><option value=\"2015,1,21,20,30\">8.30 pm</option><option value=\"2015,1,21,21,00\">9.00 pm</option><option value=\"2015,1,21,21,30\">9.30 pm</option><option value=\"2015,1,21,22,00\">10.00 pm</option> </select></div></div><br><div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDailyAvail\" id=\"deleteAvail-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete</a></div></div></div></div>";
        break;

      case "6":
        secondAvailability = "<div class=\"sub\" id=\"second-avail-day"+dayNum+"\"><div class=\"row\" id=\"d"+dayNum+"-req0-av1\"><div class=\"col-md-2\"><label for=\"startTime-d"+dayNum+"-r0-av1\">Start Time</label><select class=\"form-control\" id=\"startTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][startTime]\"><option value=\"0\">---</option><option value=\"2015,1,22,13,30\">1.30 pm</option><option value=\"2015,1,22,14,00\">2.00 pm</option><option value=\"2015,1,22,14,30\">2.30 pm</option><option value=\"2015,1,22,15,00\">3.00 pm</option><option value=\"2015,1,22,15,30\">3.30 pm</option><option value=\"2015,1,22,16,00\">4.00 pm</option><option value=\"2015,1,22,16,30\">4.30 pm</option><option value=\"2015,1,22,17,00\">5.00 pm</option><option value=\"2015,1,22,17,30\">5.30 pm</option><option value=\"2015,1,22,18,00\">6.00 pm</option><option value=\"2015,1,22,18,30\">6.30 pm</option><option value=\"2015,1,22,19,00\">7.00 pm</option><option value=\"2015,1,22,19,30\">7.30 pm</option><option value=\"2015,1,22,20,00\">8.00 pm</option><option value=\"2015,1,22,20,30\">8.30 pm</option><option value=\"2015,1,22,21,00\">9.00 pm</option> </select></div><div class=\"col-md-2\"><label for=\"endTime-d"+dayNum+"-r0-av1\">End Time</label><select class=\"form-control\" id=\"endTime-d"+dayNum+"-r0-av1\" name=\"dayRequests["+dayNum+"][availability][1][endTime]\"><option value=\"0\">---</option><option value=\"2015,1,22,14,\">2.30 pm</option><option value=\"2015,1,22,15,\">3.00 pm</option><option value=\"2015,1,22,15,\">3.30 pm</option><option value=\"2015,1,22,16,\">4.00 pm</option><option value=\"2015,1,22,16,\">4.30 pm</option><option value=\"2015,1,22,17,\">5.00 pm</option><option value=\"2015,1,22,17,\">5.30 pm</option><option value=\"2015,1,22,18,\">6.00 pm</option><option value=\"2015,1,22,18,\">6.30 pm</option><option value=\"2015,1,22,19,\">7.00 pm</option><option value=\"2015,1,22,19,\">7.30 pm</option><option value=\"2015,1,22,20,\">8.00 pm</option><option value=\"2015,1,22,20,\">8.30 pm</option><option value=\"2015,1,22,21,\">9.00 pm</option><option value=\"2015,1,22,21,\">9.30 pm</option><option value=\"2015,1,22,22,\">10.00 pm</option></select></div></div><br><div class=\"form-group\"><div class=\"row delete\"><div class=\"col-md-12\"><a class=\"btn btn-flat btn-danger deleteDailyAvail\" id=\"deleteAvail-"+dayNum+"\"><span class=\"mdi-content-clear\" aria-hidden=\"true\"></span>Delete</a></div></div></div></div>";
        break;

      default:
        console.log('There was an error with adding avilability.');
        break;
    }
    
    var element = "#" + id ;
    $(element).append($(secondAvailability).fadeIn());
  }

  $(".addDailyAvail").on('click', function() {
    var dayNum = $(this).attr("id").split('-')[1] ;
    var id = "dailyAvailabilities-" + dayNum ;
    var numericalDayNum = parseInt(dayNum);

    switch(numericalDayNum) {
            case 0:
                daily0_availabilities++;
                $('#addDailyAvail-'+dayNum).attr( "disabled", "disabled");
                break;
            case 1:
                daily1_availabilities++;
                $('#addDailyAvail-'+dayNum).attr( "disabled", "disabled");
                break;
            case 2:
                daily2_availabilities++;
                $('#addDailyAvail-'+dayNum).attr( "disabled", "disabled");
                break;
            case 3:
                daily3_availabilities++;
                $('#addDailyAvail-'+dayNum).attr( "disabled", "disabled");
                break;
            case 4:
                daily4_availabilities++;
                $('#addDailyAvail-'+dayNum).attr( "disabled", "disabled");
                break;
            case 5:
                daily5_availabilities++;
                $('#addDailyAvail-'+dayNum).attr( "disabled", "disabled");
                break;
            case 6:
                daily6_availabilities++;
                $('#addDailyAvail-'+dayNum).attr( "disabled", "disabled");
                break;
            default:
                console.log('Problem with second subjects');
                break;
        }

    addSecondAvailability(id, dayNum);
  });
  
  function deleteSecondAvailability(dayNum) {
    var element = "#second-avail-day" + dayNum ;
    $(element).fadeOut('fast', function() {
        $(element).remove();
      });
  }

  $("#daily_requests_section").on('click', '.deleteDailyAvail', function() {
      var dayNum = $(this).attr("id").split('-')[1] ;
      var numericalDayNum = parseInt(dayNum);
     
      switch(numericalDayNum) {
          case 0:
              daily0_availabilities--;
              $('#addDailyAvail-'+dayNum).removeAttr("disabled");
              break;
          case 1:
              daily1_availabilities--;
              $('#addDailyAvail-'+dayNum).removeAttr("disabled");
              break;
          case 2:
              daily2_availabilities--;
              $('#addDailyAvail-'+dayNum).removeAttr("disabled");
              break;
          case 3:
              daily3_availabilities--;
              $('#addDailyAvail-'+dayNum).removeAttr("disabled");
              break;
          case 4:
              daily4_availabilities--;
              $('#addDailyAvail-'+dayNum).removeAttr("disabled");
              break;
          case 5:
              daily5_availabilities--;
              $('#addDailyAvail-'+dayNum).removeAttr("disabled");
              break;
          case 6:
              daily6_availabilities--;
              $('#addDailyAvail-'+dayNum).removeAttr("disabled");
              break;
          default:
              console.log('Problem with second subjects');
              break;
      }

      console.log(dayNum);

      deleteSecondAvailability(dayNum);
  });

});