AOS.init();
const worldELement = document.getElementById("word");
const wrongLettersdELement = document.getElementById("wrong-letters");
const playAgainBtn = document.getElementById("play-again");
const popUp = document.getElementById("popUp-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-Message");

const figureParts = document.querySelectorAll(".figure-part");
const words = ["napolyon", "frontend", "codingfun", "ferdinand", "magneficent"];
let selectedWord = words[Math.floor(Math.random() * words.length)]; //gives us random word from Words array
console.log(
  selectedWord
    .split("")
    .map((x) => x)
    .join("")
);

const correctLetters = ["n", "a", "p", "o", "l", "y", "o", "n"];
const wrongLetters = [];

//this fn shows hidden word s
function displayWord() {
  worldELement.innerHTML = `
${selectedWord
  .split("")
  .map(
    (letter) => `
<span class="letter">
${correctLetters.includes(letter) ? letter : ""}
</span>
`
  )
  .join("")}
`;

  const innerWord = worldELement.innerText.replace(/\n/g, ""); //we disable newLine character globall
  //   console.log(worldELement.innerText, innerWord);
  if (innerWord === selectedWord) {
    finalMessage.innerText = "Congratulations! You won! 😃";
    popUp.style.display = "flex";
  }
}
displayWord();
