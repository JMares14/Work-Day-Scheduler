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