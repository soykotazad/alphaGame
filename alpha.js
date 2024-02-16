// function play(){
// console.log("play start now");
//     const homeS= document.getElementById('homeSec');
//     homeS.classList.add('hidden');

//     const PlayG= document.getElementById('play');
//     PlayG.classList.remove('hidden')


// }

function play(){
    hideEle("homeSec");
    showEle('play');
    continueGame()
}

function continueGame(){
    const alphabet = getRandom();
    console.log('Your Random alphabet', alphabet);
    //random alphabet
    const currentAlphabetElement= document.getElementById('ca');
    currentAlphabetElement.innerText=alphabet;
    //set bg color
    addBgC(alphabet);

}