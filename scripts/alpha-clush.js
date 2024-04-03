// function play(){
//     // step 1 ; hide home screen, to hide the add screen ,class hidden  to the home section
//     const homeSection= document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     // show the playground

//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');}


    function continueGame(){
        // generate a random alphabet
        const alphabet=getARandomAlphabet();
        console.log('your random alphabet',alphabet);

// // generate alphbet on screen
const currentAlphabetElement=document.getElementById('current-alphabet')
currentAlphabetElement.innerText=alphabet;

// set background color
setBackgroundcolorbyId(alphabet)
 }

    function play(){
        hideElementById('home-screen');
        showElementById('play-ground');
        continueGame();
    }