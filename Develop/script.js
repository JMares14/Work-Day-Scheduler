//Got current date for header with moment.js
var currentDay = moment().format('MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDay;

//Got current hour for use in loop with moment.js
var currentHour = moment().hour();
console.log(currentHour);

// Looped through time-sections to get value of id which equals to timeBlock hour
$(".time-section").each(function () {
    var timeBlock = parseInt($(this).attr("id"));

   //if else statements to determine the color of timeBlocks depending on the time
    if (timeBlock < currentHour){
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (timeBlock === currentHour) {
        $(this).addClass ("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
    else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
})

//on save-btn click add timeBlock data to localStorage
$(".save-btn").on("click", function() {
    var time = $(this).parent().attr("id");
    var scheduledText = $(this).siblings(".scheduled").val();

    localStorage.setItem(time, scheduledText);
})

//Pulls saved data from localStorage if available
$("#9 .scheduled").val(localStorage.getItem("9"));
$("#10 .scheduled").val(localStorage.getItem("10"));
$("#11 .scheduled").val(localStorage.getItem("11"));
$("#12 .scheduled").val(localStorage.getItem("12"));
$("#13 .scheduled").val(localStorage.getItem("13"));
$("#14 .scheduled").val(localStorage.getItem("14"));
$("#15 .scheduled").val(localStorage.getItem("15"));
$("#16 .scheduled").val(localStorage.getItem("16"));
$("#17 .scheduled").val(localStorage.getItem("17"));

