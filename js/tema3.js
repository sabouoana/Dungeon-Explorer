//Exercitiul 1
$(document).ready(function() {
    $("#elementState").click(function() {
        if ($(this).text() == "Hide hero") {
            $(this).text("Show hero");
            $("#adventurer").hide();
        }
        else {
            $(this).text("Hide hero");
            $("#adventurer").show();
        }
    });
});

//Exercitiul 2
$(document).ready(function() {
    $("#changeFont").click(function() {
        $("#column").css( "color", "red");
        $("#row").css( "color", "red");
        $("#stats").css("background-color", "black");
        $("#header").css({"color":"lightblue", "font-weight":"bold"});
    });
});

//Exercitiul 3