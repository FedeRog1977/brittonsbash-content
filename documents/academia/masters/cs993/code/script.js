/**
 * Login Page
 */

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const chooseAccount = document.querySelector("#chooseAccount");
    const loginFormAdmin = document.querySelector("#loginAdmin");
    const loginFormStaff = document.querySelector("#loginStaff");
    const loginFormBooker = document.querySelector("#loginBooker");
    const createAccountFormBooker = document.querySelector("#createAccountBooker");

    // Declare self as admin/booker:

    document.querySelector("#selectAdmin").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("form--hidden");
        loginFormAdmin.classList.remove("form--hidden");
    });

    document.querySelector("#selectStaff").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("form--hidden");
        loginFormStaff.classList.remove("form--hidden");
    });

    document.querySelector("#selectBooker").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("form--hidden");
        loginFormBooker.classList.remove("form--hidden");
    });

    // Create account link:

    document.querySelector("#linkCreateAccountBooker").addEventListener("click", e => {
        e.preventDefault();
	loginFormBooker.classList.add("form--hidden");
        createAccountFormBooker.classList.remove("form--hidden");
    });

    // Back to select login type:

    document.querySelector("#linkWhoAreYou").addEventListener("click", e => {
        e.preventDefault();
	if (loginFormStaff.classList.contains("form--hidden") && loginFormBooker.classList.contains("form--hidden")) {
	    loginFormAdmin.classList.add("form--hidden");
	} else if (loginFormBooker.classList.contains("form--hidden") && loginFormAdmin.classList.contains("form--hidden")) {
            loginFormStaff.classList.add("form--hidden");
	} else if (loginFormAdmin.classList.contains("form--hidden") && loginFormStaff.classList.contains("form--hidden")) {
	    loginFormBooker.classList.add("form--hidden");
	}
	if (chooseAccount.classList.contains("form--hidden")) {
            chooseAccount.classList.remove("form--hidden");
	}
    });

    // Back to login link:

    document.querySelector("#linkLoginBooker").addEventListener("click", e => {
        e.preventDefault();
	createAccountFormBooker.classList.add("form--hidden");
        loginFormBooker.classList.remove("form--hidden");
    });

    // Login validity:

    loginFormAdmin.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginFormAdmin, "error", "Invalid username/password");
    });

    loginFormBooker.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginFormBooker, "error", "Invalid username/password");
    });

    // Form input:

    document.querySelectorAll(".form__input").forEach(inputElement => {

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Username must be greater than 8 characters");
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPassword" && e.target.value.length > 0 && e.target.value.length < 8) {
                setInputError(inputElement, "Password must be greater than 8 characters");
            }
        });

        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupPasswordConf" && e.target.value != "signupPassword") {
                setInputError(inputElement, "Passwords don't match");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });

    });

});

// Page Drops

document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelector("#pagesDropCont");

    document.querySelector("#pagesDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pages.classList.contains("form--hidden")) {
            pages.classList.remove("form--hidden");
        } else {
            pages.classList.add("form--hidden");
        }
    });

});

/**
 * Administration Page
 */

// Choosing Page Content

document.addEventListener("DOMContentLoaded", () => {
    const addFilm = document.querySelector("#addFilm");
    const assignStaff = document.querySelector("#assignStaff");
    const addStaff = document.querySelector("#addStaff");

    document.querySelector("#addFilmOpt").addEventListener("click", e => {
        e.preventDefault();
        if (addFilm.classList.contains("form--hidden")) {
            addFilm.classList.remove("form--hidden");
        }
	assignStaff.classList.add("form--hidden");
	addStaff.classList.add("form--hidden");
    });

    document.querySelector("#assignStaffOpt").addEventListener("click", e => {
        e.preventDefault();
        if (assignStaff.classList.contains("form--hidden")) {
            assignStaff.classList.remove("form--hidden");
        }
	addFilm.classList.add("form--hidden");
	addStaff.classList.add("form--hidden");
    });

    document.querySelector("#addStaffOpt").addEventListener("click", e => {
        e.preventDefault();
        if (addStaff.classList.contains("form--hidden")) {
            addStaff.classList.remove("form--hidden");
        }
	addFilm.classList.add("form--hidden");
	assignStaff.classList.add("form--hidden");
    });

});

// Adding Film Times

document.addEventListener("DOMContentLoaded", () => {
    const addTimeTheatres = document.querySelector("#addTimeTheatres");
    const addTimeTheatre1 = document.querySelector("#addTimeTheatre1");
    const addTimeTheatre2 = document.querySelector("#addTimeTheatre2");
    const addTimeTheatre3 = document.querySelector("#addTimeTheatre3");
    const addTimeTheatre4 = document.querySelector("#addTimeTheatre4");

    document.querySelector("#addFilmTheatre1").addEventListener("click", e => {
        e.preventDefault();
	if (addTimeTheatre1.classList.contains("form--hidden")) {
            addTimeTheatre1.classList.remove("form--hidden");
	} else {
	    addTimeTheatre1.classList.add("form--hidden");
	}

        if (addTimeTheatre1.className !=("form--hidden")) {
            addTimeTheatres.classList.remove("form--hidden");
        }

    	if (addTimeTheatre1.classList.contains("form--hidden") && addTimeTheatre2.classList.contains("form--hidden") && addTimeTheatre3.classList.contains("form--hidden") && addTimeTheatre4.classList.contains("form--hidden")) {
	    addTimeTheatres.classList.add("form--hidden");
        }
    });

    document.querySelector("#addFilmTheatre2").addEventListener("click", e => {
        e.preventDefault();
	if (addTimeTheatre2.classList.contains("form--hidden")) {
            addTimeTheatre2.classList.remove("form--hidden");
	} else {
	    addTimeTheatre2.classList.add("form--hidden");
	}

        if (addTimeTheatre2.className != ("form--hidden")) {
            addTimeTheatres.classList.remove("form--hidden");
        }

    	if (addTimeTheatre1.classList.contains("form--hidden") && addTimeTheatre2.classList.contains("form--hidden") && addTimeTheatre3.classList.contains("form--hidden") && addTimeTheatre4.classList.contains("form--hidden")) {
	    addTimeTheatres.classList.add("form--hidden");
        }
    });

    document.querySelector("#addFilmTheatre3").addEventListener("click", e => {
        e.preventDefault();
	if (addTimeTheatre3.classList.contains("form--hidden")) {
            addTimeTheatre3.classList.remove("form--hidden");
	} else {
	    addTimeTheatre3.classList.add("form--hidden");
	}

        if (addTimeTheatre3.className != ("form--hidden")) {
            addTimeTheatres.classList.remove("form--hidden");
        }

    	if (addTimeTheatre1.classList.contains("form--hidden") && addTimeTheatre2.classList.contains("form--hidden") && addTimeTheatre3.classList.contains("form--hidden") && addTimeTheatre4.classList.contains("form--hidden")) {
	    addTimeTheatres.classList.add("form--hidden");
        }
    });

    document.querySelector("#addFilmTheatre4").addEventListener("click", e => {
        e.preventDefault();
	if (addTimeTheatre4.classList.contains("form--hidden")) {
            addTimeTheatre4.classList.remove("form--hidden");
	} else {
	    addTimeTheatre4.classList.add("form--hidden");
	}

        if (addTimeTheatre4.className != ("form--hidden")) {
            addTimeTheatres.classList.remove("form--hidden");
        }

    	if (addTimeTheatre1.classList.contains("form--hidden") && addTimeTheatre2.classList.contains("form--hidden") && addTimeTheatre3.classList.contains("form--hidden") && addTimeTheatre4.classList.contains("form--hidden")) {
	    addTimeTheatres.classList.add("form--hidden");
        }
    });

});

// Assign Staff

document.addEventListener("DOMContentLoaded", () => {
    const proj1 = document.querySelector("#proj1");
    const proj2 = document.querySelector("#proj2");
    const proj3 = document.querySelector("#proj3");

    document.querySelector("#proj1Select").addEventListener("click", e => {
        e.preventDefault();
        if (proj1.classList.contains("form--hidden")) {
            proj1.classList.remove("form--hidden");
        } else {
            proj1.classList.add("form--hidden");
        }
    });

    document.querySelector("#proj2Select").addEventListener("click", e => {
        e.preventDefault();
        if (proj2.classList.contains("form--hidden")) {
            proj2.classList.remove("form--hidden");
        } else {
            proj2.classList.add("form--hidden");
        }
    });

    document.querySelector("#proj3Select").addEventListener("click", e => {
        e.preventDefault();
        if (proj3.classList.contains("form--hidden")) {
            proj3.classList.remove("form--hidden");
        } else {
            proj3.classList.add("form--hidden");
        }
    });
});

// Assign Staff Times

document.addEventListener("DOMContentLoaded", () => {
    const addTimeProjs1 = document.querySelector("#addTimeProjs1");
    const addTimeProjs2 = document.querySelector("#addTimeProjs2");
    const addTimeProjs3 = document.querySelector("#addTimeProjs3");
    const addTimeProjs4 = document.querySelector("#addTimeProjs4");

    const addTimeProj11 = document.querySelector("#addTimeProj11");
    const addTimeProj12 = document.querySelector("#addTimeProj12");
    const addTimeProj13 = document.querySelector("#addTimeProj13");
    const addTimeProj14 = document.querySelector("#addTimeProj14");
	
    const addTimeProj21 = document.querySelector("#addTimeProj21");
    const addTimeProj22 = document.querySelector("#addTimeProj22");
    const addTimeProj23 = document.querySelector("#addTimeProj23");
    const addTimeProj24 = document.querySelector("#addTimeProj24");

    const addTimeProj31 = document.querySelector("#addTimeProj31");
    const addTimeProj32 = document.querySelector("#addTimeProj32");
    const addTimeProj33 = document.querySelector("#addTimeProj33");
    const addTimeProj34 = document.querySelector("#addTimeProj34");

    document.querySelector("#addStaffProj11").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj11.classList.contains("form--hidden")) {
            addTimeProj11.classList.remove("form--hidden");
        } else {
            addTimeProj11.classList.add("form--hidden");
        }

        if (addTimeProj11.className !=("form--hidden")) {
            addTimeProjs1.classList.remove("form--hidden");
        }

    	if (addTimeProj11.classList.contains("form--hidden") && addTimeProj12.classList.contains("form--hidden") && addTimeProj13.classList.contains("form--hidden") && addTimeProj14.classList.contains("form--hidden")) {
	    addTimeProjs1.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj12").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj12.classList.contains("form--hidden")) {
            addTimeProj12.classList.remove("form--hidden");
        } else {
            addTimeProj12.classList.add("form--hidden");
        }

        if (addTimeProj12.className !=("form--hidden")) {
            addTimeProjs1.classList.remove("form--hidden");
        }

    	if (addTimeProj11.classList.contains("form--hidden") && addTimeProj12.classList.contains("form--hidden") && addTimeProj13.classList.contains("form--hidden") && addTimeProj14.classList.contains("form--hidden")) {
	    addTimeProjs1.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj13").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj13.classList.contains("form--hidden")) {
            addTimeProj13.classList.remove("form--hidden");
        } else {
            addTimeProj13.classList.add("form--hidden");
        }

        if (addTimeProj13.className !=("form--hidden")) {
            addTimeProjs1.classList.remove("form--hidden");
        }

    	if (addTimeProj11.classList.contains("form--hidden") && addTimeProj12.classList.contains("form--hidden") && addTimeProj13.classList.contains("form--hidden") && addTimeProj14.classList.contains("form--hidden")) {
	    addTimeProjs1.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj14").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj14.classList.contains("form--hidden")) {
            addTimeProj14.classList.remove("form--hidden");
        } else {
            addTimeProj14.classList.add("form--hidden");
        }

        if (addTimeProj14.className !=("form--hidden")) {
            addTimeProjs1.classList.remove("form--hidden");
        }

    	if (addTimeProj11.classList.contains("form--hidden") && addTimeProj12.classList.contains("form--hidden") && addTimeProj13.classList.contains("form--hidden") && addTimeProj14.classList.contains("form--hidden")) {
	    addTimeProjs1.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj21").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj21.classList.contains("form--hidden")) {
            addTimeProj21.classList.remove("form--hidden");
        } else {
            addTimeProj21.classList.add("form--hidden");
        }

        if (addTimeProj21.className !=("form--hidden")) {
            addTimeProjs2.classList.remove("form--hidden");
        }

    	if (addTimeProj21.classList.contains("form--hidden") && addTimeProj22.classList.contains("form--hidden") && addTimeProj23.classList.contains("form--hidden") && addTimeProj24.classList.contains("form--hidden")) {
	    addTimeProjs2.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj22").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj22.classList.contains("form--hidden")) {
            addTimeProj22.classList.remove("form--hidden");
        } else {
            addTimeProj22.classList.add("form--hidden");
        }

        if (addTimeProj22.className !=("form--hidden")) {
            addTimeProjs2.classList.remove("form--hidden");
        }

    	if (addTimeProj21.classList.contains("form--hidden") && addTimeProj22.classList.contains("form--hidden") && addTimeProj23.classList.contains("form--hidden") && addTimeProj24.classList.contains("form--hidden")) {
	    addTimeProjs2.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj23").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj23.classList.contains("form--hidden")) {
            addTimeProj23.classList.remove("form--hidden");
        } else {
            addTimeProj23.classList.add("form--hidden");
        }

        if (addTimeProj23.className !=("form--hidden")) {
            addTimeProjs2.classList.remove("form--hidden");
        }

    	if (addTimeProj21.classList.contains("form--hidden") && addTimeProj22.classList.contains("form--hidden") && addTimeProj23.classList.contains("form--hidden") && addTimeProj24.classList.contains("form--hidden")) {
	    addTimeProjs2.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj24").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj24.classList.contains("form--hidden")) {
            addTimeProj24.classList.remove("form--hidden");
        } else {
            addTimeProj24.classList.add("form--hidden");
        }

        if (addTimeProj24.className !=("form--hidden")) {
            addTimeProjs2.classList.remove("form--hidden");
        }

    	if (addTimeProj21.classList.contains("form--hidden") && addTimeProj22.classList.contains("form--hidden") && addTimeProj23.classList.contains("form--hidden") && addTimeProj24.classList.contains("form--hidden")) {
	    addTimeProjs2.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj31").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj31.classList.contains("form--hidden")) {
            addTimeProj31.classList.remove("form--hidden");
        } else {
            addTimeProj31.classList.add("form--hidden");
        }

        if (addTimeProj31.className !=("form--hidden")) {
            addTimeProjs3.classList.remove("form--hidden");
        }

    	if (addTimeProj31.classList.contains("form--hidden") && addTimeProj32.classList.contains("form--hidden") && addTimeProj33.classList.contains("form--hidden") && addTimeProj34.classList.contains("form--hidden")) {
	    addTimeProjs3.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj32").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj32.classList.contains("form--hidden")) {
            addTimeProj32.classList.remove("form--hidden");
        } else {
            addTimeProj32.classList.add("form--hidden");
        }

        if (addTimeProj32.className !=("form--hidden")) {
            addTimeProjs3.classList.remove("form--hidden");
        }

    	if (addTimeProj31.classList.contains("form--hidden") && addTimeProj32.classList.contains("form--hidden") && addTimeProj33.classList.contains("form--hidden") && addTimeProj34.classList.contains("form--hidden")) {
	    addTimeProjs3.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj33").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj33.classList.contains("form--hidden")) {
            addTimeProj33.classList.remove("form--hidden");
        } else {
            addTimeProj33.classList.add("form--hidden");
        }

        if (addTimeProj33.className !=("form--hidden")) {
            addTimeProjs3.classList.remove("form--hidden");
        }

    	if (addTimeProj31.classList.contains("form--hidden") && addTimeProj32.classList.contains("form--hidden") && addTimeProj33.classList.contains("form--hidden") && addTimeProj34.classList.contains("form--hidden")) {
	    addTimeProjs3.classList.add("form--hidden");
        }
    });

    document.querySelector("#addStaffProj34").addEventListener("click", e => {
        e.preventDefault();
        if (addTimeProj34.classList.contains("form--hidden")) {
            addTimeProj34.classList.remove("form--hidden");
        } else {
            addTimeProj34.classList.add("form--hidden");
        }

        if (addTimeProj34.className !=("form--hidden")) {
            addTimeProjs3.classList.remove("form--hidden");
        }

    	if (addTimeProj31.classList.contains("form--hidden") && addTimeProj32.classList.contains("form--hidden") && addTimeProj33.classList.contains("form--hidden") && addTimeProj34.classList.contains("form--hidden")) {
	    addTimeProjs3.classList.add("form--hidden");
        }
    });

});

/**
 * Staff Page
 */

// Choosing project

document.addEventListener("DOMContentLoaded", () => {
    const projectOneStaff = document.querySelector("#staffProject1");
    const projectTwoStaff = document.querySelector("#staffProject2");
    const filler = document.querySelector("#filler");

    document.querySelector("#proj1Staff").addEventListener("click", e => {
        e.preventDefault();
        if (projectOneStaff.classList.contains("form--hidden")) {
            projectOneStaff.classList.remove("form--hidden");
	    filler.classList.remove("fill");
        } else {
            projectOneStaff.classList.add("form--hidden");
        }
    });

    document.querySelector("#proj2Staff").addEventListener("click", e => {
        e.preventDefault();
        if (projectTwoStaff.classList.contains("form--hidden")) {
            projectTwoStaff.classList.remove("form--hidden");
	    filler.classList.remove("fill");
        } else {
            projectTwoStaff.classList.add("form--hidden");
        }
    });

});

/**
 * Booking Page
 */

// Choosing Page Content

document.addEventListener("DOMContentLoaded", () => {
    const theatreOne = document.querySelector("#theatreOne");
    const theatreTwo = document.querySelector("#theatreTwo");
    const theatreThree = document.querySelector("#theatreThree");
    const theatreFour = document.querySelector("#theatreFour");

    document.querySelector("#theatreOneOpt").addEventListener("click", e => {
        e.preventDefault();
        if (theatreOne.classList.contains("form--hidden")) {
            theatreOne.classList.remove("form--hidden");
        }
	theatreTwo.classList.add("form--hidden");
	theatreThree.classList.add("form--hidden");
	theatreFour.classList.add("form--hidden");
    });

    document.querySelector("#theatreTwoOpt").addEventListener("click", e => {
        e.preventDefault();
        if (theatreTwo.classList.contains("form--hidden")) {
            theatreTwo.classList.remove("form--hidden");
        }
	theatreOne.classList.add("form--hidden");
	theatreThree.classList.add("form--hidden");
	theatreFour.classList.add("form--hidden");
    });

    document.querySelector("#theatreThreeOpt").addEventListener("click", e => {
        e.preventDefault();
        if (theatreThree.classList.contains("form--hidden")) {
            theatreThree.classList.remove("form--hidden");
        }
	theatreOne.classList.add("form--hidden");
	theatreTwo.classList.add("form--hidden");
	theatreFour.classList.add("form--hidden");
    });

    document.querySelector("#theatreFourOpt").addEventListener("click", e => {
        e.preventDefault();
        if (theatreFour.classList.contains("form--hidden")) {
            theatreFour.classList.remove("form--hidden");
        }
	theatreOne.classList.add("form--hidden");
	theatreTwo.classList.add("form--hidden");
	theatreThree.classList.add("form--hidden");
    });

});

// Film Booking

const screenOne = document.querySelector('.screen-container1');
const screenTwo = document.querySelector('.screen-container2');
const screenThree = document.querySelector('.screen-container3');
const screenFour = document.querySelector('.screen-container4');

const seatsOne = document.querySelectorAll('.row1 .seat:not(.occupied)');
const seatsTwo = document.querySelectorAll('.row2 .seat:not(.occupied)');
const seatsThree = document.querySelectorAll('.row3 .seat:not(.occupied)');
const seatsFour = document.querySelectorAll('.row4 .seat:not(.occupied)');

const countOne = document.getElementById('count1');
const countTwo = document.getElementById('count2');
const countThree = document.getElementById('count3');
const countFour = document.getElementById('count4');

const totalOne = document.getElementById('total1');
const totalTwo = document.getElementById('total2');
const totalThree = document.getElementById('total3');
const totalFour = document.getElementById('total4');

const showingOne = document.getElementById('showing1');
const showingTwo = document.getElementById('showing2');
const showingThree = document.getElementById('showing3');
const showingFour = document.getElementById('showing4');

const movieOne = document.getElementById('movie1');
const movieTwo = document.getElementById('movie2');
const movieThree = document.getElementById('movie3');
const movieFour = document.getElementById('movie4');

const timeOne = document.getElementById('time1');
const timeTwo = document.getElementById('time2');
const timeThree = document.getElementById('time3');
const timeFour = document.getElementById('time4');

populateUIOne();
let ticketPriceOne = +movieOne.value;
let ticketTimeOne = +timeOne.value;

populateUITwo();
let ticketPriceTwo = +movieTwo.value;
let ticketTimeTwo = +timeTwo.value;

populateUIThree();
let ticketPriceThree = +movieThree.value;
let ticketTimeThree = +timeThree.value;

populateUIFour();
let ticketPriceFour = +movieFour.value;
let ticketTimeFour = +timeFour.value;

// Save movie, price and time
function setMovieData(movieIndex, moviePrice, movieTime) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
    localStorage.setItem('selectedMovieTime', movieTime);
}

// Update price and time (screen 1)
function updateSelectedCountOne() {
    const selectedSeatsOne = document.querySelectorAll('.row1 .seat.selected');
    const seatsIndexOne = [...selectedSeatsOne].map((seat) => [...seatsOne].indexOf(seat));

    localStorage.setItem('selectedSeatsOne', JSON.stringify(seatsIndexOne));

    const selectedSeatsCountOne = selectedSeatsOne.length;

    countOne.innerText = selectedSeatsCountOne;
    totalOne.innerText = selectedSeatsCountOne * ticketPriceOne;

    showingOne.innerText = ticketTimeOne;
}

// Update price and time (screen 2)
function updateSelectedCountTwo() {
    const selectedSeatsTwo = document.querySelectorAll('.row2 .seat.selected');
    const seatsIndexTwo = [...selectedSeatsTwo].map((seat) => [...seatsTwo].indexOf(seat));

    localStorage.setItem('selectedSeatsTwo', JSON.stringify(seatsIndexTwo));

    const selectedSeatsCountTwo = selectedSeatsTwo.length;

    countTwo.innerText = selectedSeatsCountTwo;
    totalTwo.innerText = selectedSeatsCountTwo * ticketPriceTwo;

    showingTwo.innerText = ticketTimeTwo;
}

// Update price and time (screen 3)
function updateSelectedCountThree() {
    const selectedSeatsThree = document.querySelectorAll('.row3 .seat.selected');
    const seatsIndexThree = [...selectedSeatsThree].map((seat) => [...seatsThree].indexOf(seat));

    localStorage.setItem('selectedSeatsThree', JSON.stringify(seatsIndexThree));

    const selectedSeatsCountThree = selectedSeatsThree.length;

    countThree.innerText = selectedSeatsCountThree;
    totalThree.innerText = selectedSeatsCountThree * ticketPriceThree;

    showingThree.innerText = ticketTimeThree;
}

// Update price and time (screen 4)
function updateSelectedCountFour() {
    const selectedSeatsFour = document.querySelectorAll('.row4 .seat.selected');
    const seatsIndexFour = [...selectedSeatsFour].map((seat) => [...seatsFour].indexOf(seat));

    localStorage.setItem('selectedSeatsFour', JSON.stringify(seatsIndexFour));

    const selectedSeatsCountFour = selectedSeatsFour.length;

    countFour.innerText = selectedSeatsCountFour;
    totalFour.innerText = selectedSeatsCountFour * ticketPriceFour;

    showingFour.innerText = ticketTimeFour;
}

// Pupulate seats (screen 1)
function populateUIOne() {
    const selectedSeatsOne = JSON.parse(localStorage.getItem('selectedSeatsOne'));
  
    if (selectedSeatsOne !== null && selectedSeatsOne.length > 0) {
        seatsOne.forEach((seat, index) => {
            if (selectedSeatsOne.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieOne.selectedIndex = selectedMovieIndex;
    }
}

// Pupulate seats (screen 2)
function populateUITwo() {
    const selectedSeatsTwo = JSON.parse(localStorage.getItem('selectedSeatsTwo'));
  
    if (selectedSeatsTwo !== null && selectedSeatsTwo.length > 0) {
        seatsTwo.forEach((seat, index) => {
            if (selectedSeatsTwo.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieTwo.selectedIndex = selectedMovieIndex;
    }
}

// Pupulate seats (screen 3)
function populateUIThree() {
    const selectedSeatsThree = JSON.parse(localStorage.getItem('selectedSeatsThree'));
  
    if (selectedSeatsThree !== null && selectedSeatsThree.length > 0) {
        seatsThree.forEach((seat, index) => {
            if (selectedSeatsThree.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieThree.selectedIndex = selectedMovieIndex;
    }
}

// Pupulate seats (screen 1)
function populateUIFour() {
    const selectedSeatsFour = JSON.parse(localStorage.getItem('selectedSeatsFour'));
  
    if (selectedSeatsFour !== null && selectedSeatsFour.length > 0) {
        seatsFour.forEach((seat, index) => {
            if (selectedSeatsFour.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex !== null) {
        movieFour.selectedIndex = selectedMovieIndex;
    }
}

// Movie select (screen 1)
movieOne.addEventListener('change', (e) => {
    ticketPriceOne = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountOne();
});

// Movie select (screen 2)
movieTwo.addEventListener('change', (e) => {
    ticketPriceTwo = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountTwo();
});

// Movie select (screen 3)
movieThree.addEventListener('change', (e) => {
    ticketPriceThree = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountThree();
});

// Movie select (screen 4)
movieFour.addEventListener('change', (e) => {
    ticketPriceFour = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountFour();
});

// Time select (screen 1)
timeOne.addEventListener('change', (e) => {
    ticketTimeOne = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountOne();
});

// Time select (screen 2)
timeTwo.addEventListener('change', (e) => {
    ticketTimeTwo = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountTwo();
});

// Time select (screen 3)
timeThree.addEventListener('change', (e) => {
    ticketTimeThree = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountThree();
});

// Time select (screen 4)
timeFour.addEventListener('change', (e) => {
    ticketTimeFour = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCountFour();
});

// Seat reserve (screen 1)
screenOne.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCountOne();
    }
});

// Seat reserve (screen 2)
screenTwo.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCountTwo();
    }
});

// Seat reserve (screen 3)
screenThree.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCountThree();
    }
});

// Seat reserve (screen 4)
screenFour.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCountFour();
    }
});

// Finalize!
updateSelectedCountOne();
updateSelectedCountTwo();
updateSelectedCountThree();
updateSelectedCountFour();
