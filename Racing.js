let computerCar = document.getElementById("whiteCar");
let userCar = document.getElementById("redCar");
let result = document.getElementById("result");
let score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;
var clicksound = document.getElementById("clicksound")
var gamroversounnd = document.getElementById("overSound")

//white computer car move
computerCar.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 130)
    computerCar.style.left = random + "px";
    counter++;
})

//red users car move

window.addEventListener("keydown", function (e) {
    if (e.keyCode == "39") {
        var userCarLeft = parseInt(this.window.getComputedStyle(userCar).getPropertyValue("left"))
        if (userCarLeft < 260) {
            userCar.style.left = (userCarLeft + 130) + "px"
        }
        clicksound.play()
    };

    if (e.keyCode == "37") {
        var userCarLeft = parseInt(this.window.getComputedStyle(userCar).getPropertyValue("left"))
        if (userCarLeft > 0) {
            userCar.style.left = (userCarLeft - 130) + "px"
        }
        clicksound.play()
    };
})

//Game over 
setInterval(function Gameover() {
    var computerCarTop = parseInt(window.getComputedStyle(computerCar).getPropertyValue("top"))
    var computerCarLeft = parseInt(window.getComputedStyle(computerCar).getPropertyValue("left"));
    var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if ((computerCarLeft === userCarLeft) && (computerCarTop > 250) && (computerCarTop < 450)) {
        result.style.display = "block";
        game.style.display = "none";
        score.innerHTML = `score: ${counter} `;

        counter = 0;
        clicksound.pause();
        gamroversounnd.play();

    }

}, 10)


