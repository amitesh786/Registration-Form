// Seminar JS
//Whenever keyup from input then addEventListener started
document.addEventListener('keyup', (event) => {
    var val = $("#num_attendees option:selected").text();
    var counter = 0;
    var localArray = [];
    for(var i=1; i<=val; i++) {
        var store = $( "#name_attendee_" +i).val();
        localArray.push(store);
        if(localArray.length != 0 && localArray[i-1] != '') {
            counter++;
            conditionCheck(val, counter);
        }
    }
    if($('#special_accomodations_text').val()){
        companyToggle();
    }
    if ($('#company_name').val()){
        specialAccommodations();
    }
});

// Counter check condition for checkbox
function conditionCheck(val, counter){
    if (val == counter) { checkboxEnable(); }
}

// Count how many number of attendees present
function selectNames(){
    var val = $("#num_attendees option:selected").text();
    var numToString = val.toString();
    switch(numToString){
        case 'Please Choose': { $('#attendee_container').hide(); break; }
        case '1': { hideElement(); $('#attendee_container').show("slide", { direction: "up" }, 500); $('#attendee_1_wrap').show("slide", { direction: "up" }, 500); break; }
        case '2': { hideElement(); $('#attendee_container').show("slide", { direction: "up" }, 500); $('#attendee_1_wrap').show("slide", { direction: "up" }, 500); $('#attendee_2_wrap').show("slide", { direction: "up" }, 500); break; }
        case '3': { hideElement(); elementAttendee(); break; }
        case '4': { hideElement(); elementAttendee(); $('#attendee_4_wrap').show("slide", { direction: "up" }, 500); break; }
        case '5': { showElement(); break; }
        default : { break; }
    }
}

// checkbox and step 2 enable
function checkboxEnable(){
    $('#checkbox1').show("slide", { direction: "up" }, 500);
    $('#step_2').prop('disabled', false);
    $('#step_2').removeClass('bg-disable');
    $('#bg-legend_2').removeClass('bg-legend');
    addClickableClass();
}

// Show only 1, 2 and 3 element attendee
function elementAttendee(){
    $('#attendee_container').show("slide", { direction: "up" }, 500);
    $('#attendee_1_wrap').show("slide", { direction: "up" }, 500);
    $('#attendee_2_wrap').show("slide", { direction: "up" }, 500);
    $('#attendee_3_wrap').show("slide", { direction: "up" }, 500);
}

// Hide element for attendee container
function hideElement(){
    $('#attendee_container').show("slide", { direction: "up" }, 500);
    $('#attendee_1_wrap').hide('Slide');
    $('#attendee_2_wrap').hide('Slide');
    $('#attendee_3_wrap').hide('Slide');
    $('#attendee_4_wrap').hide('Slide');
    $('#attendee_5_wrap').hide('Slide');
}

// Show element one by one for attendee container
function showElement(){
    $('#attendee_container').show("slide", { direction: "up" }, 500);
    $('#attendee_1_wrap').show("slide", { direction: "up" }, 500);
    $('#attendee_2_wrap').show("slide", { direction: "up" }, 500);
    $('#attendee_3_wrap').show("slide", { direction: "up" }, 500);
    $('#attendee_4_wrap').show("slide", { direction: "up" }, 500);
    $('#attendee_5_wrap').show("slide", { direction: "up" }, 500);
}

// Cursor pointer which you can clickable
function addClickableClass(){
    $("#company_name_toggle_on").addClass('clickable');
    $("#company_name_toggle_off").addClass('clickable');
    $("#special_accommodations_toggle_on").addClass('clickable');
    $("#special_accommodations_toggle_off").addClass('clickable');
}

// Toggle Name checked and enable company name wrap fields
function toggleName(){
    if ($("#company_name_toggle_on").is(":checked")) {
        $('#company_name_wrap').show('Slow');
    }else{
        $('#company_name_wrap').hide('Slow');
        specialAccommodations();
    }
}

// Check Special Accommodation both should be enabled then step 3 enabled
function specialAccommodations() {
    if ($("#special_accommodations_toggle_on").is(":checked") || $("#special_accommodations_toggle_off").is(":checked")) {
            $('#checkbox2').show("slide", { direction: "up" }, 500);
            $('#step_3').prop('disabled', false);
            $('#step_3').removeClass('bg-disable');
            $('#bg-legend_3').removeClass('bg-legend');
            $('#step_3').css("background","rgb(237,203,180)");
            $("#rock").addClass('clickable');
        }
}

// Toggle Accommodation for text field and step 3 enabled
function toggleAccommodation(){
    if ($("#special_accommodations_toggle_on").is(":checked")) {
        $('#special_accommodations_wrap').show('Slow');
        if ($('#special_accomodations_text').val().trim().length > 0) {
        }else{
            $('#checkbox2').hide('Slow');
            $('#step_3').prop('disabled', true);
            $('#step_3').addClass('bg-disable');
            $('#bg-legend_3').addClass('bg-legend');
            $('#step_3').css("background","rgb(110,123,127)");
        }
    }else{
        $('#special_accommodations_wrap').hide("slide", { direction: "down" }, 2000);
        companyToggle();
    }
}

// Company Name Toggle check then enable step 3
function companyToggle(){
    if($('#company_name_toggle_on').is(":checked") || $('#company_name_toggle_off').is(":checked")) {
        $('#checkbox2').show("slide", { direction: "up" }, 1000);
        $('#step_3').prop('disabled', false);
        $('#step_3').removeClass('bg-disable');
        $('#bg-legend_3').removeClass('bg-legend');
        $('#step_3').css("background","rgb(237,203,180)");
        $("#rock").addClass('clickable');
    }
}

// Confirm Rock and submit form
function confirmSelect(){
    if ($("#rock").is(":checked")) {
        $('#submit_button').prop('disabled', false);
    }else{
        $('#submit_button').prop('disabled', true);
    }
}
