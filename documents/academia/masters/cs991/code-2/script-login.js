/*
 * Declare Validation Error Message
 */

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message--${type}`);
}

/*
 * Set Validation Error
 */

function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

/*
 * Clear Validation Error
 */

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}

/*
 * Select Account Type and Display Relevant Form
 */

document.addEventListener("DOMContentLoaded", () => {
    const chooseAccount = document.querySelector("#chooseAccount");
    const loginFormTutor = document.querySelector("#loginTutor");
    const loginFormLearner = document.querySelector("#loginLearner");
    const createAccount = document.querySelector("#createAccount");

    // Declare self as tutor
    document.querySelector("#selectTutor").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("hidden");
        loginFormTutor.classList.remove("hidden");
    });

    // Declare self as learner
    document.querySelector("#selectLearner").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("hidden");
        loginFormLearner.classList.remove("hidden");
    });

    // Back to select login type:
    document.querySelector("#linkIAm").addEventListener("click", e => {
        e.preventDefault();
        if (loginFormLearner.classList.contains("hidden")) {
            loginFormTutor.classList.add("hidden");
        } else if (loginFormTutor.classList.contains("hidden")) {
            loginFormLearner.classList.add("hidden");
        }
        if (chooseAccount.classList.contains("hidden")) {
            chooseAccount.classList.remove("hidden");
        }
    });

    // Login validity - tutor
    loginFormTutor.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginFormTutor, "error", "Invalid username/password");
    });

    // Login validity - learner
    loginFormLearner.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginFormLearner, "error", "Invalid username/password");
    });

    // Create Account
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("hidden");
        createAccount.classList.remove("hidden");
    });

});

/*
 * Submit Log-in Attempt - Tutor
 */

function loginAttemptTutor() {
    // Simplified dictionary storage of tutor usernames and passwords
    let usernamesPasswordsTutors = {
	usernames: [
	    "Federer1981",
	    "123"
	],
        passwords: [
	    "jonlajoie6911",
	    "abc"
	]
    };

    var usernameTutor = document.getElementById("loginUsernameTutor").value;
    var passwordTutor = document.getElementById("loginPasswordTutor").value;

    // Loop through tutor username-password dictionary
    // Only contains one possibility and no rear-end, so retrieve first items [0]
    for (var i in usernamesPasswordsTutors) {
	// Loop through tutor username list, within username-password dictionary
	for (var k in usernamesPasswordsTutors.usernames) {
            if (usernameTutor === usernamesPasswordsTutors.usernames[k] && 
                passwordTutor === usernamesPasswordsTutors.passwords[k]) {
		// Simplified: one page for one result, so no need to align result k with tutor profile k
                window.location.href="./Tutor.html";
            }
	}
    }
}

/*
 * Submit Log-in Attempt - Learner
 */

function loginAttemptLearner() {
    // Simplified dictionary storage of learner usernames and passwords
    let usernamesPasswordsLearners = {
	usernames: [
	    "Davis1982",
	    "123"
	],
        passwords: [
	    "jonlajoie6911",
	    "abc"
	]
    };

    var usernameLearner = document.getElementById("loginUsernameLearner").value;
    var passwordLearner = document.getElementById("loginPasswordLearner").value;

    // Loop through learner username-password dictionary
    // Only contains one possibility and no rear-end, so retrieve first items [0]
    for (var i in usernamesPasswordsLearners) {
	// Loop through learner username list, within username-password dictionary
	for (var k in usernamesPasswordsLearners.usernames) {
            if (usernameLearner === usernamesPasswordsLearners.usernames[k] && 
                passwordLearner === usernamesPasswordsLearners.passwords[k]) {
	        // Simplified: one page for one result, so no need to align result k with learner profile k
                window.location.href="./Learner.html";
            }
	}
    }
}

const accounts = {
    0001: {
	username: "",
	password: "",
	email: "",
	purpose: "",
	subject: ""
    },
    0002: {
	username: "",
	password: "",
	email: "",
	purpose: "",
	subject: ""
    }
};

/*
 * Would have been a create account input and storage function
 */

function createAccountAttempt() {
    var purposeCreate = document.getElementById("selectPurpose").value;
    var subjectCreate = document.getElementById("selectSubject").value;
    var usernameCreate = document.getElementById("signupUsername").value;
    var emailCreate = document.getElementById("signupEmail").value;
    var passwordCreate = document.getElementById("signupPassword").value;
    var passwordConfCreate = document.getElementById("signupPasswordConf").value;
}
