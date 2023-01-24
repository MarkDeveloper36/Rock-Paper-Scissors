/* 
1. Understand the problem
        Er moet backendcode geschreven worden voor het spel.


2. plan
    a. user interface?
            Komt later.

    b. input?
            De input moet van de user komen. dit kan in het in het
            begin met een alert maar hier moet later een mooie UI voor
            komen. 

    c. desired output?
            de backend code voor het spel. de user heeft 3 keuzes 
            rock, paper en scissors. deze keuze moet vergeleken worden
            met de keuze van de pc. zo wordt er bepaald wie deze ronde
            heeft gewonnen. er komen 3 rondes? best of 3?

    d. necessary steps to get output?
            1. mannier voor user om input te geven.
            2. mannier voor pc om optie te kiezen. 
            3. mannier om de opties te vergelijken en winnen voor ronde kiezen
            4. mannier om user te laten zien wie de ronde gewonnen heeft
            5. mannier om rondes bij te houden. en de winnaar uit 3 te kiezen
            6. mannier om winnaar te laten zien. 
            7. mannier om spel opnieuw te spelen.
3. psudocode


button voor het starten van een game
bericht ronde 1
get user imput en sla op in variable
*functie voor het keuze pc, sla op in variable
functie voor het vergelijken van keuze user en keuze pc
bepaal winnaar
winnaar krijg punt bij score 
er wordt punt opgeteld bij aantal rondes. 
bepaal wie meeste punten en sla op in variable
if (meeste punten < 5) {nieuwe ronden}
esle bericht winnaar, en geef optie voor nieuw spel. 

*/

//get user input 

let playerSelection = "rock";
playerSelection = playerSelection.toLocaleLowerCase();

function playRound(playerSelection, computerSelection) {
        switch (playerSelection, computerSelection){
                case (playerSelection === 0 && computerSelection === 0):
                        return 'Its a tie! You both picked rock, seems like you\'re both rock-solid.';
                        break;
                case (playerSelection === 0 && computerSelection === 1):
                        return 'You lose! A rock ain\'t always a hard place, sometimes paper can cover it!';
                        break;
                case (playerSelection === 0 && computerSelection === 2):
                        return 'You win! Rock and roll baby!';
                        break;
                case (playerSelection === 1 && computerSelection === 0):
                        return 'You win! Looks like the computer just got schooled, paper always wins.';
                        break;
                case (playerSelection === 1 && computerSelection === 1):
                        return 'It\'s a tie! You both picked paper, but let\'s be real, paper is the best choice anyway.';
                        break;
                case (playerSelection === 1 && computerSelection === 2):
                        return 'You lose! Looks like paper just met its mortal enemy, scissors always wins!';
                        break;
                case (playerSelection === 2 && computerSelection === 0):
                        return 'You lose! But I bet the rock band next door is loving this!';
                        break;
                case (playerSelection === 2 && computerSelection === 1):
                        return 'You win! Looks like the computer got cut down to size!';
                        break;
                case (playerSelection === 2 && computerSelection === 2):
                        return 'It\'s a tie! You both picked scissorts, seems like you both have a sharp mind and cutting edge strategy!';
                        break;
}}


//functie voor het maken van de computer's keuze
let randomChoice = Math.floor((Math.random() * 3));

function getComputerChoice(randomChoice) {
        if (randomChoice === 0) {
                return "Rock";
        } 
        else if(randomChoice === 1) {
                return "Paper";
        }
        else if (randomChoice === 2) {
                return "Scissors";
        }
}

console.log(getComputerChoice(randomChoice));