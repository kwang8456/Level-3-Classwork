const twix = 0, egg = 1, twizzler = 2, airhead = 3, ringpop = 4;

function initialize ()
{
    numberOutput = document.getElementById ("numOutPut");
    number = 0;

    numTwixOutput = document.getElementById ("Twix");
    numEggsOutput = document.getElementById ("Eggs");
    numTwizzlersOutput = document.getElementById ("Twizzlers");
    numAirheadsOutput = document.getElementById ("Airheads");
    numRingPopsOutput = document.getElementById ("RingPops");
    numCandyLogOutput = document.getElementById ("CandyLog");

    numTwixs = parseInt (Math.random () * 11);
    numEggs = parseInt (Math.random () * 11);
    numTwizzlers = parseInt (Math.random () * 11);
    numAirheads = parseInt (Math.random () * 11);
    numRingPops = parseInt (Math.random () * 11);

    candyLog = "";

    inputContainer = document.getElementById ("inputform");
    greetingOutput = document.getElementById ("greeting");

    firstName = "";
    lastName = "";
    eatsPizza = false;
    placeOfOrigin = "";

    diceTable = document.getElementById ("dicetable");
    rollDice ();

    display ();
}

/*
function modifyNumber ()
{
    number += modifier;
    display ();
}
*/

function modifyNumber (modifier)
{
    number += modifier;
    display ();
}

/*
function modifyNumber ()
{
    var modifier = this.getRandomInteger (-10, 10);
    number += modifier;
    display ();
}
*/

function getRandomInteger (min, max)
{
    var multiplier = max - (min - 1);
    var ran = parseInt (Math.random() * multiplier) + min;

    return ran;
}

function giveCandy ()
{
    if (numTwixs + numEggs + numTwizzlers + numAirheads + numRingPops == 0)
    {
        candyLog = "You are all out of candy. <br/>" + candyLog;
    }
    else
    {
        var badSelection = true;
        var candyName = "";

        while (badSelection)
        {
            var selectedCandy = parseInt (Math.random () * 5);

            if (selectedCandy == twix)
            {
                candyName = "Twix";
                if (numTwixs > 0)
                {
                    numTwixs--;
                    badSelection = false;
                }
            }
            else if (selectedCandy == egg)
            {
                candyName = "Scream Egg";
                if (numEggs > 0)
                {
                    numEggs--;
                    badSelection = false;
                }
            }
            else if (selectedCandy == twizzler)
            {
                candyName = "Twizzler";
                if (numTwizzlers > 0)
                {
                    numTwizzlers--;
                    badSelection = false;
                }
            }
            else if (selectedCandy == airhead)
            {
                candyName = "Airhead";
                if (numAirheads > 0)
                {
                    numAirheads--;
                    badSelection = false;
                }
            }
            else
            {
                candyName = "Ring Pop";
                if (numRingPops > 0)
                {
                    numRingPops--;
                    badSelection = false;
                }
            }
            if (badSelection)
                candyLog = "You tried to give out a(n) " + candyName + ", but you have none left. <br/>" + candyLog;
            else
                candyLog = "You gave out a " + candyName + ". <br/>" + candyLog;
        }
    }
    display ();
}

function recordData ()
{
    firstName = inputContainer.fname.value;
    lastName = inputContainer.lname.value;
    eatsPizza = inputContainer.pizza.checked;
    placeOfOrigin = inputContainer.origin.value;

    inputContainer.fname.value = "";
    inputContainer.lname.value = "";

    display2 ();
}

function getRandomInteger (min, max)
{
    var ran = parseInt ((Math.random () * (max - (min - 1))) + 25);
    return ran; 
}

function rollDice ()
{
    var numRolls = getRandomInteger (25, 100);

    for (var i = 0; i < numRolls; i++)
    {
        var die = getRandomInteger (1,6);
        var newRow = diceTable.insertRow ();
        var newCell = newRow.insertCell ();
        newCell.innerHTML = "Roll: " + (i + 1);

        newCell = newRow.insertCell ();
        newCell.innerHTML = die;
    }
}

function display ()
{
    numberOutput.innerHTML = number;

    numTwixOutput.innerHTML = numTwixs;
    numEggsOutput.innerHTML = numEggs;
    numTwizzlersOutput.innerHTML = numTwizzlers;
    numAirheadsOutput.innerHTML = numAirheads;
    numRingPopsOutput.innerHTML = numRingPops;
    
    numCandyLogOutput.innerHTML = candyLog;
}

function display2 ()
{
    greetingOutput.innerHTML = "Hello " + firstName + " " + lastName + " from " + placeOfOrigin + "! Welcome to our page <br/>";

    if (eatsPizza)
        greetingOutput.innerHTML += "It looks like you are a fan of pizza.";
    else
        greetingOutput.innerHTML += "It looks like you are not a fan of pizza.";
}