document.addEventListener("DOMContentLoaded", () => {
    const inst2022 = document.querySelector("#inst2022");
    const inst2021 = document.querySelector("#inst2021");
    const inst2020 = document.querySelector("#inst2020");
    const proj = document.querySelector(".proj");

    document.querySelector("#active2022").addEventListener("click", e => {
        e.preventDefault();
        if (inst2022.classList.contains("hidden")) {
            inst2022.classList.remove("hidden");
        }
        inst2021.classList.add("hidden");
        inst2020.classList.add("hidden");
    });

    document.querySelector("#active2021").addEventListener("click", e => {
        e.preventDefault();
        if (inst2021.classList.contains("hidden")) {
            inst2021.classList.remove("hidden");
        }
        inst2022.classList.add("hidden");
        inst2020.classList.add("hidden");
    });

    document.querySelector("#active2020").addEventListener("click", e => {
        e.preventDefault();
        if (inst2020.classList.contains("hidden")) {
            inst2020.classList.remove("hidden");
        }
        inst2022.classList.add("hidden");
        inst2021.classList.add("hidden");
    });

    document.querySelector("#allShow").addEventListener("click", e => {
        e.preventDefault();
        $(".proj").show();
        $(".non-proj").show();
    });

    document.querySelector("#onlyProjs").addEventListener("click", e => {
        e.preventDefault();
        $(".proj").show();
        $(".non-proj").hide();
    });

    document.querySelector("#nonProjs").addEventListener("click", e => {
        e.preventDefault();
        $(".proj").hide();
        $(".non-proj").show();
    });

});
