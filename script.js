const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const reset = document.querySelector(".reset");
const firstNumber = document.querySelector(".first-number");
const secondNumber = document.querySelector(".second-number");
const input = document.querySelector(".input");

player1.addEventListener("click", () => {
    firstNumber.textContent++;
    if (parseInt(firstNumber.textContent) >= parseInt(input.value)) {
        firstNumber.style.color = "green";
        secondNumber.style.color = "red";
    } 
});

player2.addEventListener("click", () => {
    secondNumber.textContent++;
    if (parseInt(secondNumber.textContent) >= parseInt(input.value)) {
        secondNumber.style.color = "green";
        firstNumber.style.color = "red";
    } 
});

/* input.addEventListener("input", () => {
    firstNumber.style.color = "black";
    secondNumber.style.color = "black";
}); */

reset.addEventListener("click", () => {
    firstNumber.textContent = 0;
    secondNumber.textContent = 0;
    firstNumber.style.color = "black";
    secondNumber.style.color = "black";
    input.value=""
});