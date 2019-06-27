
var random_result;
var lost = 0;
var win = 0;
var previous = 0;






var resetAndStart = function () {

    $(".crystals").empty();

var images = [
     "data:image/jpeg;base64,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",
     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8lftz4kKo9Zn-Q_hg2poaHfqE48GPieUMr-2aBgtk2-QCRZE",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQoaPuJYEB_aHE-Omh7iJtkMzP0yOwIfwJ8SlhET7Z6Cjq7Rjujw",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7GbvV_X-N5wOQBzNm5t1-uTepi8AMxbmjxBlTv5kehfwfyBH",
    ];

    random_result = Math.floor(Math.random() * 69) + 30;


    $("#result").html("Random Result: " + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random
			});
			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"background-size":"cover"

			});
    
    $(".crystals").append(crystal);
   
    }

    $("#previous").html("Total Score: " + previous);

}

resetAndStart();


$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > random_result){
       
        lost++;

        $("#lost").html("You Lost: " + lost);

        previous = 0;

        resetAndStart();

    }
    else if(previous === random_result){
     
        win++;

        $("#win").html("You Win: " + win);

        previous = 0;

        resetAndStart();
    }
});