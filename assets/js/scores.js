//The variables specific to js on the scores.html page
var highscores = document.querySelector("#highscores");
var reset = document.querySelector("#reset");
var back = document.querySelector("#back");
// Function call and storage of the resetting of scores
reset.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});
function saveHighscores() {
    //Initials are saved when input by player
    var initials = initialsEl.value;
  
    //Ensure the box contains a value
    if (initials !== "") {
        //Request the saved scores from the local storage
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
        //When new score happens, input initials
        var newScore = {
            score: time,
            initials: initials
        };
  
        //Save to local storage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
        ///When clicked, brought to page of highscores
        window.location.href = "highscores.html"
    }
}
// Return to the original page to begin quiz again
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});