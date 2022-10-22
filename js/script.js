// *************** Assignment (Mathematical Shapes): a) **********************
//////////////////////////////////////////////////////////////////////////////
// Define Pythagorean theory
function calculatePythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
// Get the diagonal for the sizes
const diagonal = calculatePythagorean(9, 9);
const ans1 = document.getElementById("ans1");

// Append to the answer
ans1.innerHTML = "<pre>" + "The diagonal of a square is: " + diagonal + "</pre>";
//////////////////////////////////////////////////////////////////////////////




// *************** Assignment (Mathematical Shapes): b) **********************
//////////////////////////////////////////////////////////////////////////////
const side1 = 5;
const side2 = 6;
const side3 = 7;
const ans2 = document.getElementById("ans2");

// Calculate the perimiter
const s = (side1 + side2 + side3) / 2;

// Calculate the area of triangle
const areaValue = Math.sqrt( s * (s - side1) * (s - side2) * (s - side3));

// Append to the answer
ans2.innerHTML = "<pre>" + "The area of a triangle is: " + areaValue + "</pre>";
//////////////////////////////////////////////////////////////////////////////




// *************** Assignment (Mathematical Shapes): c) **********************
//////////////////////////////////////////////////////////////////////////////
const pi = Math.PI;
const r = 4;
const ans3 = document.getElementById("ans3");

function getCircumference(radius) { return 2 * pi * radius; }
function getArea(radius) { return radius * radius * pi; }

var circumference = getCircumference(r);
var circArea = getArea(r);

// Append to the answer
ans3.innerHTML = "<pre>" + "The circumference of a circle is: " + circumference +  "\n" + "The area of a circle is: " + circArea + "</pre>";
//////////////////////////////////////////////////////////////////////////////




// ********** Assignment (Conditional Statements & Loops): a) ****************
//////////////////////////////////////////////////////////////////////////////

// Define answer field
var ans4 = document.getElementById("ans4");

// Once the button is clicked
function goCompare(){
    // Get the first int
    var int1 = document.getElementById("a2a1").value ;

    // Get the second int 
    var int2 = document.getElementById("a2a2").value ;

    // Compare the ints and show answer
    if(int1 > int2) {
        ans4.innerHTML = "Answer: The first integer is greater than the second";
    } else if (int2 > int1) {
        ans4.innerHTML = "Answer: The second integer is greater than the first";
    } else {
        ans4.innerHTML = "Answer: Both integers are equal";
    }
}
//////////////////////////////////////////////////////////////////////////////





// ********** Assignment (Conditional Statements & Loops): a) ****************
//////////////////////////////////////////////////////////////////////////////

// Define answer field
var ans5 = document.getElementById("ans5");

// Once the button is clicked
function evenOrOdd(){
    var checkBox = document.getElementById("methodType");

    // Get the first int
    var int1 = document.getElementById("a2b1").value ;

    if (checkBox.checked == true) { 
        // Lambda for simplification 
        const isEvenOrOdd = int1 => ((int1 % 2) == 0);
        ans5.innerHTML = "Answer: The integer is even: " + isEvenOrOdd(int1);
    } else {
        // Long method
        if(int1 % 2 == 0 ) {
            ans5.innerHTML = "Answer: The integer is even";
        } else if (Math.abs(int1 % 2) == 1) {
            ans5.innerHTML = "Answer: The integer is odd";
        } else {
            ans5.innerHTML = "Answer: Nan";
        }
    }
}
//////////////////////////////////////////////////////////////////////////////






// *************** Assignment (Main JavaScript Project):**********************
//////////////////////////////////////////////////////////////////////////////

// Hide selection at first
var pHidden = document.getElementById("pSelection");

// Set player values 
var playerSelection;
var defaultValue;
var compChoice ;
var playerScore = 0;
var computerScore = 0;

// Handle checkbox changes hide / unhide
function handleChange(checkbox) {
    if(checkbox.checked == true){
        document.querySelector("#pSelection").style.display = "none";
        defaultValue = true;
    }else{
        document.querySelector("#pSelection").style.display = "block";
        defaultValue = false;
   }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function computerPickOption() {
    switch(getRandomInt(3)) {
        case 0:
            compChoice = "rock";
        break;
        case 1:
            compChoice = "paper";
        break;
        case 2:
            compChoice = "scissors";
            break; 
    }     
}

function playerPickOption() {
    if(defaultValue) {
        playerSelection = "rock" ;
    } else {
        var def = document.getElementById("selection").value;
        def = def.toLowerCase();
        console.log(def);
        if(def === "rock" || def === "paper" || def === "scissors") {
            playerSelection = def;
        } else {
            alert("Incorrect choice, try again");
        }
    }
}

function beginGame() {
    console.clear();
    var finalScore = document.getElementById("finalwinner");
    playerScore = 0;
    computerScore = 0;
    finalScore.innerHTML = "";


    for(let i = 0; i < 5; i++) {
        playerPickOption();
        computerPickOption();

        console.log("Player choice: " + playerSelection);
        console.log("Computer choice: " + compChoice);

        playRound();
    }

    if (playerScore > computerScore) {
        finalScore.innerHTML = "Player wins!!!!";
    } else if (computerScore > playerScore) {
        finalScore.innerHTML = "Computer wins!!!!";
    } else {
        finalScore.innerHTML = "It's a tie!!!!";
    }

}

function computerWon() {
    computerScore++;
    var computerScoreShown = document.getElementById("computerWon");
    computerScoreShown.innerHTML = "Computer won: " + computerScore + " times";
}

function playerWon() {
    playerScore++;
    var playerScoreShown = document.getElementById("playerWon");
    playerScoreShown.innerHTML = "Player won: " + playerScore + " times";
}


function playRound() {
    if (playerSelection === "rock" && compChoice === "paper") {
        console.log("--- Computer wins!");
        computerWon();
    } else if (playerSelection === "rock" && compChoice === "scissors") {
        console.log("--- Player wins!");
        playerWon();
    } else if (playerSelection === "paper" && compChoice === "scissors") {
        console.log("--- Computer wins!");
        computerWon();
    } else if (playerSelection === "paper" && compChoice === "rock") {
        console.log("--- Player wins!");
        playerWon();
    } else if (playerSelection === "scissors" && compChoice === "rock") {
        console.log("--- Computer wins!");
        computerWon();
    } else if (playerSelection === "scissors" && compChoice === "paper") {
        console.log("--- Player wins!");
        playerWon();
    } else if (JSON.stringify(playerSelection) === JSON.stringify(compChoice)) {
        console.log("--- Tie!");
    } else {
        console.log("Error");
    }
}




