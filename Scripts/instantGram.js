document.addEventListener("DOMContentLoaded", () => {

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
