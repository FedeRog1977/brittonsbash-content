$(".switch2").on("click", function() {
    if( $("*").hasClass("dark")) {
        $("*").removeClass("dark");
        $(".switch2").text("Toggle Night Mode: Disabled");
    } else {
        $("*").addClass("dark");
        $(".switch2").text("Toggle Night Mode: Enabled");
    }
});

$(".switch4").on("click", function() {
    if( $("*").hasClass("dark")) {
        $("*").removeClass("dark");
        $(".switch4").text("Toggle Night Mode: Disabled");
    } else {
        $("*").addClass("dark");
        $(".switch4").text("Toggle Night Mode: Enabled");
    }
});

$(".switch5").on("click", function() {
    if( $("*").hasClass("miami")) {
        $("*").removeClass("miami");
        $(".switch5").text("Toggle Miami Mode: Disabled");
    } else {
        $("*").addClass("miami");
        $(".switch5").text("Toggle Miami Mode: Enabled");
    }
});
