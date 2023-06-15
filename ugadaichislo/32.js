let randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Загадочное число: " + randomNum);
function checkGuess() {
    let guess = document.getElementById ("guess").value;
    if(guess == randomNum) {
        document.getElementById("result").innerHTML = "Вы угадали число!";
} else if (guess < randomNum) {
    document.getElementById("result").innerHTML = "Введите число больше!";
} else if (guess > randomNum){
    document.getElementById("result").innerHTML = "Введите число меньше";
}
}
result.style.color = 'rgb(192, 34, 34)';