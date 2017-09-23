
// ready the vars

var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";
var number = "";
var total = 0;
var wins = 0;
var losses = 0;

// parse the "total" var to change the empty string to a numeral (7+1=8 instead of =71)

total = parseInt(0);


// <!-- create a random number 19-120 and apply it to randomNumber -->

    for (var i=0; i<1; i++) {
        var number = Math.floor(Math.random() *((120-19) + 1) +19);
        $(".randomNumber").append("<h1>" + number + "</h1>");
    }
    
// generate a random number betweem 1 & 12 and apply that value to each button when the page loads

var crystal1 = Math.floor(Math.random() * (11 + 1) +1);
var crystal2 = Math.floor(Math.random() * (11 + 1) +1);
var crystal3 = Math.floor(Math.random() * (11 + 1) +1);
var crystal4 = Math.floor(Math.random() * (11 + 1) +1);

// Each time you click a button, add that value to total and print to screen

$(".crystalOne").on("click", function() {
    total = crystal1 + total;
    $(".total").html("Total Score: " + total)
    checkWins();
})
$(".crystalTwo").on("click", function() {
    total = crystal2 + total;
    $(".total").html("Total Score: " + total)
    checkWins();
})
$(".crystalThree").on("click", function() {
    total = crystal3 + total;
    $(".total").html("Total Score: " + total)    
    checkWins();
})
$(".crystalFour").on("click", function() {
    total = crystal4 + total;
    $(".total").html("Total Score: " + total)    
    checkWins();
})

//  If you win or lose, reset total score & random numbers.
function reset(){
      number=Math.floor(Math.random()*101+19);
      $(".randomNumber").html("<h1>" + number + "</h1>");
      crystal1= Math.floor(Math.random()*11+1);
      crystal2= Math.floor(Math.random()*11+1);
      crystal3= Math.floor(Math.random()*11+1);
      crystal4= Math.floor(Math.random()*11+1);
      total= 0;
      $(".total").text("Total Score: " + total);
} 

//track wins & losses

var checkWins = function() {
// flag = false;    
        if (total === number) {
            wins++;
            alert("YOU WIN!")
            reset();
            $(".wins").text("Wins: " + wins);
        }
                else if (total >= number) {
                    alert("Today just isn't your day! You Lose.")
                    losses++;
                    reset();
                    $(".losses").text("Losses: " + losses);
                }
}
