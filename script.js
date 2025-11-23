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
    programming: ["python", "github", "logic", "variable", "algorithm", 
                  "function", "complier", "debug", "syntax", "boolean", "integer",
                  "software", "hardware", "database", "network", "javascript", 
                  "execute", "binary", "encrypt", "machine", "memory", "runtime"],
    animals: ["lion", "tiger", "elephant", "zebra", "giraffe", "cheetah", "panda", 
              "kangaroo", "dolphin", "ostrich", "hippopotamus", "rhinoceros", "eagle",
              "falcon", "wolf", "bear", "rabbit", "octopus", "penguin", "turtle"],
    food: ["burger", "pizza", "sushi", "pasta", "chocolate", "icecream", "sandwich",
           "pancake", "salad", "steak", "noodles", "tacos", "donut", "waffle",
           "bagel", "pie", "popcorn", "curry", "muffin", "omelette"],
    colors: ["red", "blue", "green", "yellow", "oragne", "purple", "pink",
             "brown", "black", "white", "gray", "cyan", "magenta", "indigo", 
             "violet", "turquoise", "beige", "maroon", "teal", "lavender"],
    constellations: ["orion", "UrsaMajor", "UrsaMinor", "cassiopeia", "andromeda", "lyra", 
                     "cygnus", "pegasus", "taurus", "gemini", "leo", "cancer", "aries",
                     "scorpio", "sagittarius", "capricorn", "aquarius", "pices", "hydra", "CanisMajor"],
    sports: ["soccer", "basketball", "tennis", "baseball", "hockey", "golf", "cricket", "swimming",
             "volleyball", "boxing", "rugby", "tabletennis", "badminton", "surfing", "skiing",
             "wrestling", "gymnastics", "karate", "fencing", "archery" ],
    countries: ["usa", "canada", "india", "china", "brazil", "france", "germany", "italy",
                "japan", "mexico", "russia", "australia", "egypt", "spain", "southafrica",
                "argentina", "thailand", "norway", "turkey", "SaudiArabia"],
    capitals: ["washington", "ottawa", "NewDelhi", "beijing", "paris", "berlin", "rome", "tokoyo",
               "MexicoCity", "moscow", "canberra", "cairo", "madrid", "pretoria", "BuenosAires",
               "bangkok", "oslo", "ankara", "riyadh"],
    carnames: ["Tesla", "BMW", "Audi", "Mercedes","Honda", "Toyota", "Ferrari", "Lamborghini", 
               "Porsche", "Ford", "Chevrolet", "Hyundai", "Nissan", "Jaguar", "Kia", "Bugatti", 
               "Volvo", "Lexus", "Subaru", "Dodge" ],
    landmarks: ["EiffelTower", "StatueOfLiberty", "GreatWall", "TajMahal","Pyrmaids", "Colosseum", 
                "BigBen", "MountRushmore", "SydeneyOpera","GoldenGate", "Stonehenge", "MachuPicchu", 
                "ChirstTheRedeemer", "LeaningTower", "BurjKhalifa", "AngkorWat", "Petra", "NiagraFalls",
                 "Acropolis", "MountFuji"], 
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

