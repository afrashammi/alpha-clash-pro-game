// function play(){
//     // step 1 ; hide home screen, to hide the add screen ,class hidden  to the home section
//     const homeSection= document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     // show the playground

//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');}




function handleKeyboardKeyUpEvent(event){
const playerPressed=event.key;
console.log('player pressed',playerPressed)
// stop the game if press esc
if (playerPressed==='Escape'){
    gameOver();
}
// key player is expected to press
const currentAlphabetElement=document.getElementById('current-alphabet');
const currentAlphabet=currentAlphabetElement.innerText;
const expectedAlphabet=currentAlphabet.toLowerCase();

// check right or wrong pressed
if (playerPressed===expectedAlphabet){
    console.log('You get a point');
    // update score
    const currentScoreElement=document.getElementById('current-score');
    const currentScoreText=currentScoreElement.innerText;
    const currentScore=parseInt(currentScoreText);
    console.log(currentScore);
    // console.log('You have pressed correctly', expectedAlphabet);

    // increase the score by 1
    const newScore=currentScore+1;
    // show the update score
    currentScoreElement.innerText=newScore;

    // start a new round
    removeBackgroundColorById(expectedAlphabet)
    continueGame();
}
else {
    console.log('You missed. You lost a life!!!');
    // get the current life number
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    // reduce the life count
    const newLife = currentLife - 1;
    // display the updated lifecount
    currentLifeElement.innerText = newLife;
    if (newLife === 0) {
        gameOver();
    }  
}


 
//     console.log('player pressed', playerPressed);

// get the expected to press
// const currentAlphabetElement=document.getElementById('current-alphabet');
// const currentAlphabet=currentAlphabetElement.innerText;
// const expectedAlphabet=currentAlphabet.toLowerCase();
// console.log(playerPressed, expectedAlphabet);


// console.log(currentAlphabetElement.innerText);



}

// keyboard press
document.addEventListener('keyup',handleKeyboardKeyUpEvent );
 function continueGame(){
        // generate a random alphabet
        const alphabet=getARandomAlphabet();
        // console.log('your random alphabet',alphabet);

// // generate alphbet on screen
const currentAlphabetElement=document.getElementById('current-alphabet')
currentAlphabetElement.innerText=alphabet;

// set background color
setBackgroundcolorbyId(alphabet);
 }

   
    function play() {
        // hide everything show only playground
        hideElementById('home-screen');
        hideElementById('final-score');
        showElementById('play-ground');
    
        // reset life score to 5
        setTextElementValueById('current-life', 5);
        setTextElementValueById('current-score', 0);
        continueGame();
    }
    function gameOver(){
        hideElementById('play-ground');
        showElementById('final-score');
    //     update final score
    const lastScore=getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);
    
    
    // clear last highlight alphabet
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
    }