/*
 * Choose Page Content
 */

document.addEventListener("DOMContentLoaded", () => {
    const profile = document.querySelector("#profile");
    const editProfile = document.querySelector("#editProfile");
    const lessons = document.querySelector("#lessons");
    const courses = document.querySelector("#courses");
    const messages = document.querySelector("#messages");

    document.querySelector("#profileOpt").addEventListener("click", e => {
        e.preventDefault();
        if (profile.classList.contains("hidden")) {
            profile.classList.remove("hidden");
        }
	editProfile.classList.add("hidden");
	lessons.classList.add("hidden");
	courses.classList.add("hidden");
	messages.classList.add("hidden");
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

    document.querySelector("#lessonsOpt").addEventListener("click", e => {
        e.preventDefault();
        if (lessons.classList.contains("hidden")) {
            lessons.classList.remove("hidden");
        }
	profile.classList.add("hidden");
	editProfile.classList.add("hidden");
	courses.classList.add("hidden");
	messages.classList.add("hidden");
    });

    document.querySelector("#coursesOpt").addEventListener("click", e => {
        e.preventDefault();
        if (courses.classList.contains("hidden")) {
            courses.classList.remove("hidden");
        }
	profile.classList.add("hidden");
	editProfile.classList.add("hidden");
	lessons.classList.add("hidden");
	messages.classList.add("hidden");
    });

    document.querySelector("#messagesOpt").addEventListener("click", e => {
        e.preventDefault();
        if (messages.classList.contains("hidden")) {
            messages.classList.remove("hidden");
        }
	profile.classList.add("hidden");
	editProfile.classList.add("hidden");
	lessons.classList.add("hidden");
	courses.classList.add("hidden");
    });

});

/*
 * Edit Account Details
 *
 * To-do: add subsubject (specialization) choice reconfiguration
 */

function updateAccountTutor() {
    var nameTutor = document.getElementById("nameTutor");
    var emailTutor = document.getElementById("emailTutor");
    var ageTutor = document.getElementById("ageTutor");
    var roleTutor = document.getElementById("roleTutor");
    var subjectTutor = document.getElementById("subjectTutor");
    var regionTutor = document.getElementById("regionTutor");
    var radiusTutor = document.getElementById("radiusTutor");
    var monStartTutor = document.getElementById("availMonStartTutor");
    var monEndTutor = document.getElementById("availMonEndTutor");
    var tueStartTutor = document.getElementById("availTueStartTutor");
    var tueEndTutor = document.getElementById("availTueEndTutor");
    var wedStartTutor = document.getElementById("availWedStartTutor");
    var wedEndTutor = document.getElementById("availWedEndTutor");
    var thuStartTutor = document.getElementById("availThuStartTutor");
    var thuEndTutor = document.getElementById("availThuEndTutor");
    var friStartTutor = document.getElementById("availFriStartTutor");
    var friEndTutor = document.getElementById("availFriEndTutor");
    var priceTutor = document.getElementById("priceTutor");
    var inPersonOnlineTutor = document.getElementById("conditionsTutor");
    var degreeTutor = document.getElementById("degreeTutor3");
    var affilYNTutor = document.getElementById("affilYNTutor");
    var affilTutor = document.getElementById("affilTutor");
    var timeTutor = document.getElementById("timeTutor");
    var timeInstitutionTutor = document.getElementById("timeInstitutionTutor");
    var institutionTutor = document.getElementById("institutionTutor");
    var levelTutor = document.getElementById("levelTutor");
    var childrenTutor = document.getElementById("childrenTutor");
    var noTaughtTutor = document.getElementById("noTaughtTutor");
    var noLessonsTutor = document.getElementById("noLessonsTutor");

    var editNameTutor = document.getElementById("editNameTutor").value;
    var editEmailTutor = document.getElementById("editEmailTutor").value;
    var editAgeTutor = document.getElementById("editAgeTutor").value;
    var editRoleTutor = document.getElementById("editRoleTutor").value;
    var editSubjectTutor = document.getElementById("editSubjectTutor").value;
    var editRegionTutor = document.getElementById("editRegionTutor").value;
    var editRadiusTutor = document.getElementById("editRadiusTutor").value;
    var editMonStartTutor = document.getElementById("editMonStart").value;
    var editMonEndTutor = document.getElementById("editMonEnd").value;
    var editTueStartTutor = document.getElementById("editTueStart").value;
    var editTueEndTutor = document.getElementById("editTueEnd").value;
    var editWedStartTutor = document.getElementById("editWedStart").value;
    var editWedEndTutor = document.getElementById("editWedEnd").value;
    var editThuStartTutor = document.getElementById("editThuStart").value;
    var editThuEndTutor = document.getElementById("editThuEnd").value;
    var editFriStartTutor = document.getElementById("editFriStart").value;
    var editFriEndTutor = document.getElementById("editFriEnd").value;
    var editPriceTutor = document.getElementById("editPriceTutor").value;
    var isPersonTutor = document.getElementById("inPerson").checked;
    var isOnlineTutor = document.getElementById("onLine").checked;
    var editDegreeTutor = document.getElementById("editDegreeTutor").value;
    var isAffiliatedY = document.getElementById("editAffilY").checked;
    var isAffiliatedN = document.getElementById("editAffilN").checked;
    var editAffilTutor = document.getElementById("editAffil").value;
    var editTimeTutor = document.getElementById("editTimeTutor").value;
    var editTimeInstitutionsTutor = document.getElementById("editTimeInstitutionsTutor").value;
    var editInstitutionTutor = document.getElementById("editInstitutionTutor").value;
    var editLevelTutor = document.getElementById("editLevelTutor").value;
    var editStudentsTutor = document.getElementById("editStudentsTutor").value;
    var editLessonsTutor = document.getElementById("editLessonsTutor").value;

    if (editNameTutor != "") {
        nameTutor.innerHTML = editNameTutor;
    }

    if (editEmailTutor != "") {
        emailTutor.innerHTML = editEmailTutor;
    }

    if (editAgeTutor != "") {
        ageTutor.innerHTML = editAgeTutor;
    }

    if (editRoleTutor != "") {
        roleTutor.innerHTML = editRoleTutor;
    }

    // Time changes not working properly
    // Too dumb to work it out clearly
    // Will maybe get it after a project in the west highlands
    /*
    if (editSubjectTutor != "") {
        subjectTutor.innerHTML = editSubjectTutor;
    }

    if (editRegionTutor != "") {
        regionTutor.innerHTML = editRegionTutor;
    }

    if (editRadiusTutor != "") {
        radiusTutor.innerHTML = editRadiusTutor;
    }

    if (editMonStart != "") {
        monStartTutor.innerHTML = editMonStartTutor;
    }

    if (editTueStart != "") {
        tueStartTutor.innerHTML = editTueStartTutor;
    }

    if (editWedStart != "") {
        wedStartTutor.innerHTML = editWedStartTutor;
    }

    if (editThuStart != "") {
        thuStartTutor.innerHTML = editThuStartTutor;
    }

    if (editFriStart != "") {
        friStartTutor.innerHTML = editFriStartTutor;
    }

    if (editMonEnd != "") {
        monEndTutor.innerHTML = editMonEndTutor;
    }

    if (editTueEnd != "") {
        tueEndTutor.innerHTML = editTueEndTutor;
    }

    if (editWedEnd != "") {
        wedEndTutor.innerHTML = editWedEndTutor;
    }

    if (editThuEnd != "") {
        thuEndTutor.innerHTML = editThuEndTutor;
    }

    if (editFriEnd != "") {
        friEndTutor.innerHTML = editFriEndTutor;
    }
    */

    if (editPriceTutor != "") {
        priceTutor.innerHTML = editPriceTutor;
    }

    if (isPersonTutor === true) {
	inPersonOnlineTutor.innerHTML = "In-Person";
    } else if (isOnlineTutor === true) {
	inPersonOnlineTutor.innerHTML = "Online";
    }

    // Would add new degree to existing list, and option to add degree suffix w/ more time
    if (editDegreeTutor != "") {
        degreeTutor.innerHTML = editDegreeTutor;
    }

    if (isAffiliatedY === true) {
        affilYNTutor.innerHTML = "Yes, with ";
        affilTutor.innerHTML = editAffilTutor;
    } else if (isAffiliatedN === true) {
        affilYNTutor.innerHTML = "No";
        affilTutor.innerHTML = "";
    }

    if (editTimeTutor != "") {
        timeTutor.innerHTML = editTimeTutor;
    }

    if (editTimeInstitutionsTutor != "") {
        timeInstitutionTutor.innerHTML = editTimeInstitutionsTutor;
    }

    if (editInstitutionTutor != "") {
        institutionTutor.innerHTML = editInstitutionTutor;
    }

    if (editLevelTutor != "") {
        levelTutor.innerHTML = editLevelTutor;
    }

    if (editStudentsTutor === "0") {
        childrenTutor.innerHTML = "without";
	noTaughtTutor.innerHTML = "0";
        noLessonsTutor.innerHTML = "0";
    } else {
        childrenTutor.innerHTML = "with";
	noTaughtTutor.innerHTML = editStudentsTutor;
        if (editLessonsTutor != "") {
            noLessonsTutor.innerHTML = editLessonsTutor;
        } else {
            noLessonsTutor.innerHTML = noLessonsTutor.innerHTML;
	}
    }
}
