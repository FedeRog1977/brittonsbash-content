/*
 * Choose specialization
 */

selectSubject = document.querySelector("#selectSubject");

selectSubject.addEventListener("click", function() {
    const mathSubsub = document.querySelector("#mathSubsub");
    const sciSubsub = document.querySelector("#sciSubsub");
    const compSubsub = document.querySelector("#compSubsub");
    const enginSubsub = document.querySelector("#enginSubsub");
    const cycleSubsub = document.querySelector("#cycleSubsub");
    const tennisSubsub = document.querySelector("#tennisSubsub");

    if (selectSubject.value === "math") {
        mathSubsub.classList.remove("hidden");
    } else {
        mathSubsub.classList.add("hidden");
    }

    if (selectSubject.value === "sci") {
        sciSubsub.classList.remove("hidden");
    } else {
        sciSubsub.classList.add("hidden");
    }

    if (selectSubject.value === "compsci") {
        compSubsub.classList.remove("hidden");
    } else {
        compSubsub.classList.add("hidden");
    }

    if (selectSubject.value === "engin") {
        enginSubsub.classList.remove("hidden");
    } else {
        enginSubsub.classList.add("hidden");
    }

    if (selectSubject.value === "cycling") {
        cycleSubsub.classList.remove("hidden");
    } else {
        cycleSubsub.classList.add("hidden");
    }

    if (selectSubject.value === "tennis") {
        tennisSubsub.classList.remove("hidden");
    } else {
        tennisSubsub.classList.add("hidden");
    }

});
