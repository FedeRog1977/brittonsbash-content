$(".switch2").on("click", function() {
    if( $("*").hasClass("dark")) {
        $("*").removeClass("dark");
        $(".switch2").text("Toggle Night Mode: Disabled");
    } else {
        $("*").addClass("dark");
        $(".switch2").text("Toggle Night Mode: Enabled");
    }
});

$(".switch3").on("click", function() {
    if( $("*").hasClass("miami")) {
        $("*").removeClass("miami");
        $(".switch5").text("Toggle Miami Mode: Disabled");
    } else {
        $("*").addClass("miami");
        $(".switch5").text("Toggle Miami Mode: Enabled");
    }
});
