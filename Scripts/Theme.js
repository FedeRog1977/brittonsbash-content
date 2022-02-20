$(".switch-desktop").on("click", function() {
    if( $("*").hasClass("dark")) {
        $("*").removeClass("dark");
        $(".switch-desktop").text("Toggle Night Mode: Disabled");
    } else {
        $("*").addClass("dark");
        $(".switch-desktop").text("Toggle Night Mode: Enabled");
    }
});

$(".switch-mobile").on("click", function() {
    if( $("*").hasClass("dark")) {
        $("*").removeClass("dark");
        $(".switch-mobile").text("🌗");
    } else {
        $("*").addClass("dark");
        $(".switch-mobile").text("🌓");
    }
});
