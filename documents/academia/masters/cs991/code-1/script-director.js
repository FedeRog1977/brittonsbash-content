// Choosing Page Content

document.addEventListener("DOMContentLoaded", () => {
    const claims = document.querySelector("#claims");
    const search = document.querySelector("#searchClaims");

    document.querySelector("#claimsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (claims.classList.contains("hidden")) {
            claims.classList.remove("hidden");
        }
	search.classList.add("hidden");
    });

    document.querySelector("#searchClaimsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (search.classList.contains("hidden")) {
            search.classList.remove("hidden");
        }
	claims.classList.add("hidden");
    });

});

// Select Student
    
selectStudent = document.querySelector("#selectStudent");

selectStudent.addEventListener("click", function() {
    const student1Claims = document.querySelector("#student1Claims");
    const student2Claims = document.querySelector("#student2Claims");
    const student3Claims = document.querySelector("#student3Claims");
    const student4Claims = document.querySelector("#student4Claims");
    const filler = document.querySelector("#filler");

    if (selectStudent.value === "selectStudent1") {
        student1Claims.classList.remove("hidden");
	filler.classList.remove("fill");
    }

    if (selectStudent.value === "selectStudent2") {
        student2Claims.classList.remove("hidden");
	filler.classList.remove("fill");
    }

    if (selectStudent.value === "selectStudent3") {
        student3Claims.classList.remove("hidden");
	filler.classList.remove("fill");
    }

    if (selectStudent.value === "selectStudent4") {
        student4Claims.classList.remove("hidden");
	filler.classList.remove("fill");
    }

});

// View claim descriptions

document.addEventListener("DOMContentLoaded", () => {
    const student1Claim1 = document.querySelector("#student1Claim1");
    const student1Claim2 = document.querySelector("#student1Claim2");
    const student2Claim1 = document.querySelector("#student2Claim1");
    const student2Claim2 = document.querySelector("#student2Claim2");
    const student2Claim3 = document.querySelector("#student2Claim3");
    const student3Claim1 = document.querySelector("#student3Claim1");
    const student3Claim2 = document.querySelector("#student3Claim2");
    const student4Claim1 = document.querySelector("#student4Claim1");
    const student4Claim2 = document.querySelector("#student4Claim2");

    document.querySelector("#selectStudent1Claim1").addEventListener("click", e => {
        e.preventDefault();
        if (student1Claim1.classList.contains("hidden")) {
            student1Claim1.classList.remove("hidden");
        } else {
            student1Claim1.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent1Claim2").addEventListener("click", e => {
        e.preventDefault();
        if (student1Claim2.classList.contains("hidden")) {
            student1Claim2.classList.remove("hidden");
        } else {
            student1Claim2.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent2Claim1").addEventListener("click", e => {
        e.preventDefault();
        if (student2Claim1.classList.contains("hidden")) {
            student2Claim1.classList.remove("hidden");
        } else {
            student2Claim1.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent2Claim2").addEventListener("click", e => {
        e.preventDefault();
        if (student2Claim2.classList.contains("hidden")) {
            student2Claim2.classList.remove("hidden");
        } else {
            student2Claim2.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent2Claim3").addEventListener("click", e => {
        e.preventDefault();
        if (student2Claim3.classList.contains("hidden")) {
            student2Claim3.classList.remove("hidden");
        } else {
            student2Claim3.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent3Claim1").addEventListener("click", e => {
        e.preventDefault();
        if (student3Claim1.classList.contains("hidden")) {
            student3Claim1.classList.remove("hidden");
        } else {
            student3Claim1.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent3Claim2").addEventListener("click", e => {
        e.preventDefault();
        if (student3Claim2.classList.contains("hidden")) {
            student3Claim2.classList.remove("hidden");
        } else {
            student3Claim2.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent4Claim1").addEventListener("click", e => {
        e.preventDefault();
        if (student4Claim1.classList.contains("hidden")) {
            student4Claim1.classList.remove("hidden");
        } else {
            student4Claim1.classList.add("hidden");
        }
    });

    document.querySelector("#selectStudent4Claim2").addEventListener("click", e => {
        e.preventDefault();
        if (student4Claim2.classList.contains("hidden")) {
            student4Claim2.classList.remove("hidden");
        } else {
            student4Claim2.classList.add("hidden");
        }
    });

});

// Faking Search Results

document.addEventListener("DOMContentLoaded", () => {
    const results = document.querySelector("#searchResults");
    const resultsNull = document.querySelector("#searchResultsNull");

    document.querySelector("#searchStudentSubmit").addEventListener("click", e => {
        e.preventDefault();
        if (results.classList.contains("hidden")) {
            results.classList.remove("hidden");
            resultsNull.classList.add("hidden");
        }
    });

});

searchStudentOrder = document.querySelector("#searchStudentOrder");

searchStudentOrder.addEventListener("click", function() {
    const fake = document.querySelector("#fakeResults");
    const fakeOrder1 = document.querySelector("#fakeResultsOrder1");
    const fakeOrder2 = document.querySelector("#fakeResultsOrder2");

    if (searchStudentOrder.value === "orderMostLeast") {
        fakeOrder1.classList.remove("hidden");
	fake.classList.add("hidden");
	fakeOrder2.classList.add("hidden");
    }

    if (searchStudentOrder.value === "orderLeastMost") {
        fakeOrder2.classList.remove("hidden");
	fake.classList.add("hidden");
	fakeOrder1.classList.add("hidden");
    }

});
