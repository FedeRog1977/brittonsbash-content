function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");

    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const chooseAccount = document.querySelector("#chooseAccount");
    const loginFormDirector = document.querySelector("#loginDirector");
    const loginFormStudent = document.querySelector("#loginStudent");

    // Declare self as course director / student:

    document.querySelector("#selectDirector").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("hidden");
        loginFormDirector.classList.remove("hidden");
    });

    document.querySelector("#selectStudent").addEventListener("click", e => {
        e.preventDefault();
        chooseAccount.classList.add("hidden");
        loginFormStudent.classList.remove("hidden");
    });

    // Back to select login type:

    document.querySelector("#linkIAm").addEventListener("click", e => {
        e.preventDefault();
        if (loginFormStudent.classList.contains("hidden")) {
            loginFormDirector.classList.add("hidden");
        } else if (loginFormDirector.classList.contains("hidden")) {
            loginFormStudent.classList.add("hidden");
        }
        if (chooseAccount.classList.contains("hidden")) {
            chooseAccount.classList.remove("hidden");
        }
    });

    // Login validity:

    loginFormDirector.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginFormDirector, "error", "Invalid username/password");
    });

    loginFormStudent.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(loginFormStudent, "error", "Invalid username/password");
    });

});

// Page Drops

document.addEventListener("DOMContentLoaded", () => {
    const pages = document.querySelector("#pagesDropCont");

    document.querySelector("#pagesDrop").addEventListener("click", e => {
        e.preventDefault();
        if (pages.classList.contains("hidden")) {
            pages.classList.remove("hidden");
        } else {
            pages.classList.add("hidden");
        }
    });

});
