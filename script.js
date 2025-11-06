const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

const words = ["code" , "github", "education", "python", "ai", "typing", "speed", "keyboard", "focus", "logic"];
let randomWord;
let score = 0;
let time = 10;

//Pick random word
function getRandomWord()
{
    return words[Math.floor(Math.random() * words.length)];
}

function sartGame()
{
    document.getElementById("start-btn").addEventListener("click", startGame);
    function addWord()
    {
    randomWord = getRandomWord();
    wordEl.innerHTML = randomWord;
    }
    addWord();
    
}
//Add word to DOM

inputEl.addEventListener("input", (e) =>
{
    const typed = e.target.value;
    if(typed == randomWord)
    {
        addWord();
        updateScore();
        e.target.value = "";
        time += 2
    }
});

function updateScore()
{
    score++;
    scoreEl.innerHTML = `Score: ${score}`;
}

// Timer
const timer = setInterval(() =>
{
    time--;
    timeEl.innerHTML = `Time: ${time}`;
    if(time === 0)
    {
        clearInterval(timer);
        gameOver();
    }
}, 1000);

function gameOver()
{
    document.body.innerHTML = `
    <h1>Time's up!</h1>
    <h2>Your score: ${score}</h2>
    <button onclick = "location.reload()" >Play Again</button>
    `;
}


