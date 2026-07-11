
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess(){

    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    attempts++;
    document.getElementById("attempts").innerHTML = "Attempts: " + attempts;

    if(guess < 1 || guess > 100){
        message.innerHTML = "Enter a number between 1 and 100";
    }
    else if(guess < randomNumber){
        message.innerHTML = "Too Low!";
    }
    else if(guess > randomNumber){
        message.innerHTML = "Too High!";
    }
    else{
        message.innerHTML = "🎉 Congratulations! You guessed it in " + attempts + " attempts.";
    }
}

function resetGame(){

    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    document.getElementById("guess").value = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("attempts").innerHTML = "Attempts: 0";
}
