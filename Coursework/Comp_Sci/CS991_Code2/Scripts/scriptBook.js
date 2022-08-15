/*
 * Display Notification for Tutor Booking
 */

function bookTutor() {
    var isBookedOut = document.getElementById("isBooked");

    // Example using two available Monday times, should be upgraded to for-loop
    var chosen1 = document.getElementById("availMonTime1").checked;
    var chosen2 = document.getElementById("availMonTime2").checked;
    var chosenOut = document.getElementById("chosenMonTime");

    if (chosen1 === true && chosen2 === false) {
	isBookedOut.innerHTML = "Booked";
        var chosenVal1 = document.getElementById("availMonTime1");
        chosenOut.innerHTML = chosenVal1.value;
    } else if (chosen2 === true && chosen1 === false) {
	isBookedOut.innerHTML = "Booked";
        var chosenVal2 = document.getElementById("availMonTime2");
        chosenOut.innerHTML = chosenVal2.value;
    } else if (chosen1 === true && chosen2 === true) {
	isBookedOut.innerHTML = "Booked";
        var chosenVal1 = document.getElementById("availMonTime1");
        var chosenVal2 = document.getElementById("availMonTime2");
        chosenOut.innerHTML = chosenVal1.value + " and " + chosenVal2.value;
    } else {
	isBookedOut.innerHTML = "Not Booked";
    }

    var recurTypePrefix = document.getElementById("chosenRecurTypeP");
    var recurTypeSuffix = document.getElementById("chosenRecurTypeS");
    var recurDaily = document.getElementById("recurDaily").checked;
    var recurWeekly = document.getElementById("recurWeekly").checked;
    var recurOut = document.getElementById("chosenRecur");

    // Check daily recurrence radio
    if (recurDaily === true) {
        var recurDailyVal = document.getElementById("recurDailyDays");
	recurTypePrefix.innerHTML = "daily for";
	recurTypeSuffix.innerHTML = "days";
        recurOut.innerHTML = recurDailyVal.value;
    }

    // Check weekly recurrence radio
    if (recurWeekly === true) {
        var recurWeeklyVal = document.getElementById("recurWeeklyWeeks");
	recurTypePrefix.innerHTML = "weekly for";
	recurTypeSuffix.innerHTML = "weeks";
        recurOut.innerHTML = recurWeeklyVal.value;
    }

    var bookTutorPopup = document.getElementById("bookTutorPopup");
    bookTutorPopup.classList.toggle("show");
}
