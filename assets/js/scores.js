//The variables specific to js on the scores.html page
const highScoresList = document.getElementById('highScoresList');
const highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

highScoresList.innerHTML = highscores
.map (score=> {
    return ('<li class="high-score">${initials}-${time}</li>');
})
.join("");

var reset = document.querySelector("#reset");
var back = document.querySelector("#back");
// Function call and storage of the resetting of scores
reset.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

// Return to the original page to begin quiz again
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});