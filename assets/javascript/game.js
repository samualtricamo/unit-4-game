
var random_result;
var win;
var lost;
var previous;






var resetAndStart = function () {

    $(".crystals").empty();

    random_result = Math.floor(Math.random() * 69) + 30;


    $("#result").html("Random Result: " + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal', 
                "data-random": random
        });

        crystal.html(random);

    $(".crystals").append(crystal);
   
    }
}

resetAndStart();



$(".crystal").on("click", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    console.log(previous);


    if(previous > random_result){
       
        lost--;

        $("#lost").html(win);

        previous = 0;

        resetAndStart();

    }
    else if(previous > random_result){
     
        win++;

        $("#win").html(win);

        previous = 0;

        resetAndStart();
    }

    console.log($(previous));
})