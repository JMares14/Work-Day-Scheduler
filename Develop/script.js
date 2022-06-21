var currentDay = moment().format('MMMM Do YYYY');
document.getElementById("currentDay").innerHTML = currentDay;

var currentHour = moment().hour();
console.log(currentHour);

$(".time-section").each(function () {
    var timeBlock = parseInt($(this).attr("id"));

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

$(".save-btn").on("click", function() {
    var time = $(this).parent().attr("id");
    var scheduledText = $(this).siblings(".scheduled").val();

    localStorage.setItem(time, scheduledText);
})

$("#9 .scheduled").val(localStorage.getItem("9"));
$("#10 .scheduled").val(localStorage.getItem("10"));
$("#11 .scheduled").val(localStorage.getItem("11"));
$("#12 .scheduled").val(localStorage.getItem("12"));
$("#13 .scheduled").val(localStorage.getItem("13"));
$("#14 .scheduled").val(localStorage.getItem("14"));
$("#15 .scheduled").val(localStorage.getItem("15"));
$("#16 .scheduled").val(localStorage.getItem("16"));
$("#17 .scheduled").val(localStorage.getItem("17"));

