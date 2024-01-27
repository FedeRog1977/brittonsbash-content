/*
 * Choose Page Content
 */

document.addEventListener("DOMContentLoaded", () => {
    const profile = document.querySelector("#profile");
    const editProfile = document.querySelector("#editProfile");
    const search = document.querySelector("#search");
    const messages = document.getElementById("messages");
    const searchResults = document.querySelector("#searchResults");

    document.querySelector("#profileOpt").addEventListener("click", e => {
        e.preventDefault();
        if (profile.classList.contains("hidden")) {
            profile.classList.remove("hidden");
        }
        editProfile.classList.add("hidden");
        search.classList.add("hidden");
        messages.classList.add("hidden");
        searchResults.classList.add("hidden");
    });

    document.querySelector("#editProfileOpt").addEventListener("click", e => {
        e.preventDefault();
        editProfile.classList.remove("hidden");
        profile.classList.add("hidden");
    });

    document.querySelector("#doneProfileOpt").addEventListener("click", e => {
        e.preventDefault();
        editProfile.classList.add("hidden");
        profile.classList.remove("hidden");
    });

    document.querySelector("#searchOpt").addEventListener("click", e => {
        e.preventDefault();
        if (search.classList.contains("hidden")) {
            search.classList.remove("hidden");
        }
        profile.classList.add("hidden");
        editProfile.classList.add("hidden");
        messages.classList.add("hidden");
        searchResults.classList.add("hidden");
    });

    document.querySelector("#messagesOpt").addEventListener("click", e => {
        e.preventDefault();
        if (messages.classList.contains("hidden")) {
            messages.classList.remove("hidden");
        }
        profile.classList.add("hidden");
        editProfile.classList.add("hidden");
        search.classList.add("hidden");
        searchResults.classList.add("hidden");
    });

});

/*
 * Edit Account Details
 */

function updateAccountLearner() {
    var nameLearner = document.getElementById("nameLearner");
    var emailLearner = document.getElementById("emailLearner");

    var editNameLearner = document.getElementById("editNameLearner").value;
    var editEmailLearner = document.getElementById("editEmailLearner").value;

    nameLearner.innerHTML = editNameLearner;
    emailLearner.innerHTML = editEmailLearner;
}

/*
 * Enable Block Tutor Content
 */

document.addEventListener("DOMContentLoaded", () => {
    const tutor = document.querySelector("#resultTutor");
    const block = document.querySelector("#blockTutor");

    document.querySelector("#blockTutorOpt").addEventListener("click", e => {
        e.preventDefault();
        block.classList.remove("hidden");
        tutor.classList.add("hidden");
    });

    document.querySelector("#submitBlockTutor").addEventListener("click", e => {
        e.preventDefault();
        block.classList.add("hidden");
        tutor.classList.remove("hidden");
    });

});

/*
 * Price Choice Slider
 */

var slider = document.getElementById("pricePref");
var output = document.getElementById("pricePrefOut");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
};

/* 
 * Search Function
 *
 * Ideally would for-loop through each division of tutor results however,
 * to save time only one set of tutor results was implemented as knowledge
 * wasn't good enough for the optimal for-loop in allocated time
 */

document.querySelector("#submitSearchOpt").addEventListener("click", e => {
    e.preventDefault();
    const noResults = document.querySelector("#noResult");
    const tutorResult = document.querySelector("#tutorResult");

    var subOpt = document.getElementById("selectSubject").value;
    var subsubOpt = "";
    var radiusOpt = document.getElementById("searchRadius").value;
    var isPersonOpt = document.getElementById("inPerson").checked;
    var isOnlineOpt = document.getElementById("onLine").checked;
    var isPersonOnlineOpt = "";
    var payOpt = document.getElementById("pricePref").value;

    var sub = document.querySelector("#subjectTutor").value;
    var subsub = document.querySelector("#specializationTutor").value;
    var radius = document.querySelector("#distanceTutorLearner").value;
    var isPersonOnline = document.querySelector("#conditionsTutor").value;
    var pay = document.querySelector("#priceTutor").value;

    if (subOpt === "math") {
        subsubOpt = document.querySelectorAll("#selectSubsub")[0].value;
    } else if (subOpt === "sci") {
        subsubOpt = document.querySelectorAll("#selectSubsub")[1].value;
    } else if (subOpt === "compsci") {
        subsubOpt = document.querySelectorAll("#selectSubsub")[2].value;
    } else if (subOpt === "engin") {
        subsubOpt = document.querySelectorAll("#selectSubsub")[3].value;
    } else if (subOpt === "cycling") {
        subsubOpt = document.querySelectorAll("#selectSubsub")[4].value;
    } else if (subOpt === "tennis") {
        subsubOpt = document.querySelectorAll("#selectSubsub")[5].value;
    }

    if (isPersonOpt === true && isOnlineOpt === false) {
        isPersonOnlineOpt = "inPerson";
    } else if (isPersonOpt === false && isOnlineOpt === true) {
	isPersonOnlineOpt = "onLine";
    }

    if (subOpt === sub && 
	subsubOpt === subsub && 
	radiusOpt >= radius && 
	isPersonOnline === isPersonOnline && 
	payOpt >= pay) {
        searchResults.classList.remove("hidden");
        search.classList.add("hidden");
	noResults.classList.add("hidden");
	tutorResult.classList.remove("hidden");
    } else {
        searchResults.classList.remove("hidden");
        search.classList.add("hidden");
        noResults.classList.remove("hidden");
	tutorResult.classList.add("hidden");
    }

});
	    
// Return to search (after failed result)
document.querySelector("#searchReturnOpt").addEventListener("click", e => {
    e.preventDefault();
    searchResults.classList.add("hidden");
    search.classList.remove("hidden");
});
