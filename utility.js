function hideEle(id){

    const element=document.getElementById(id);
    element.classList.add('hidden');
}

function showEle(id){
    const element=document.getElementById(id);
    element.classList.remove("hidden");
}
function getRandom(){
    //get or create alpha array
    const alphaS= 'abcdefghijklmnopqrstuvwxyz';
    const  alphabets= alphaS.split('');
    // console.log(alphabets);

    //get random index

    const randomN= Math.random()*25;
    const index=Math.round(randomN);
    console.log(index);

    const alphabet =alphaS[index];
    // console.log(index,alphabet);
    return  alphabet;




}