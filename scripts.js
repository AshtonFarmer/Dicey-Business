
const DiceContainer = document.querySelector(".Dice-container");
const AddDiceBtn = document.querySelector(".generate-btn");
const ReRollBtn = document.querySelector(".reroll-btn");
const TotalBtn = document.querySelector(".sum-btn");
const DiceTotal = document.querySelector(".Dice-total-num");


class Dice {
    constructor() {


        this.value = this.roll(1, 7);
        this.Dice = document.createElement("div");
        this.Dice.className = "Dice";
        this.Dice.textContent = this.value;
        DiceContainer.appendChild(this.Dice);


        ReRollBtn.addEventListener("click", () => {
            this.Dice.textContent = this.roll(1, 7);
            this.value = Number(this.Dice.textContent);
        });

        this.Dice.addEventListener("dblclick", (e) => {
            const allDice = document.querySelectorAll(".Dice");
            allDice.forEach((all) => {
                if (all === e.target) {
                    e.target.remove();
                }
            });
        });
    }

    roll(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}


AddDiceBtn.addEventListener("click", generateDice);

function generateDice() {
    const newDice = new Dice();
}

TotalBtn.addEventListener("click", sumDice);

// I added a nice alert box with the snake eyes, you should try to get it
function sumDice() {
    let updatedTotal = 0;
    const dice = document.querySelectorAll(".Dice");
    console.log(dice);

    dice.forEach((Dice) => {
        updatedTotal += Number(Dice.textContent);
    });
    if (updatedTotal == 2) {
        swal("SnakeEyes!", "You Rolled a 2 with 1s!", "warning")
    } else if (alert(updatedTotal));
}