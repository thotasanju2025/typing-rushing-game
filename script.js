const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const topicSelect = document.getElementById("topic-select");
const timeSelect = document.getElementById("time-select");
const startBtn = document.getElementById("start-btn");
let words = []; 

const wordSets =
{
    programming: ["python", "github", "logic", "variable"],
    animals: ["lion", "tiger", "elephant", "zebra"]
};

let randomWord;
let score = 0;
let time;
let timer;

//Pick random word
function getRandomWord(words)
{
    return words[Math.floor(Math.random() * words.length)];
}

function addWord()
    {
    randomWord = getRandomWord(words);
    wordEl.textContent = randomWord;
    }

function startGame()
{
    const selectedTopic = topicSelect.value;
    words = wordSets[selectedTopic];

    time = parseInt(timeSelect.value);
    score =0;

    scoreEl.textContent = `Score: ${score}`;
    timeEl.textContent = `Time: ${time}`;
    addWord();

    inputEl.disabled = false;
    inputEl.value = "";
    inputEl.focus();
    startBtn.disabled = true;

    timer = setInterval(() =>
        {
            time--;
            timeEl.textContent = `Time: ${time}`;
            if(time === 0)
            {
                clearInterval(timer);
                gameOver();
            }
        }, 1000); 
}
    

inputEl.addEventListener("input", (e) =>
    {
        const typed = e.target.value.trim();
        if(typed === randomWord)
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
    scoreEl.textContent = `Score: ${score}`;
}

function gameOver()
{
    document.body.innerHTML = `
    <h1>Time's up!</h1>
    <h2>Your score: ${score}</h2>
    <button onclick = "location.reload()">Play Again</button>
    `;
}

startBtn.addEventListener("click", startGame); 

