var numbers;
var shsoes = [];
var indexLatest = -1;
var elementLatest;
var timer;

var inputLength = document.getElementById('length');
document.getElementById('srarter').addEventListener('click',start);

function start(){
    reset();
    constArrayes();
    constHtml();
}

function reset(){
    numbers;
    shsoes = [];
    indexLatest = -1;
    timer;
}

function constArrayes(){

    numbers = new Array(inputLength.value*2);

    for(let num = 1; num<=inputLength.value; num++){
        
        for(let counter = 0 ; counter<2;){

            let indexRandom= Math.floor(Math.random() * numbers.length);

            if(!numbers[indexRandom]){
                numbers[indexRandom]=num;
                counter++;
            }
            
        }
    }    
}

function constHtml(){
    let gameElement = document.getElementById('game');
    let html = '';
    for(let i=0; i<inputLength.value*2; i++){
        html += addCard(i);
    }
    gameElement.innerHTML = html;
}

    
function addCard(i){
    let addhtml ='';
    addhtml += `<div onclick="userOnClick(${i})" id="${i}" class="text-center background-card"></div>`;
    return addhtml;
}

function userOnClick(i){

    if(shsoes[i] || timer){
        return;
    }

    shsoes[i]=true;

    let num = numbers[i];
    let elenent = document.getElementById(i);
    elenentLatest = document.getElementById(indexLatest);

    if(indexLatest==-1){
        elenent.innerText = num ;
        indexLatest = i;
        return;
    } 

    if(numbers[indexLatest] == num){
        elenent.classList.add("solved");
        elenent.innerText = num;
        elenentLatest.classList.add("solved");
        indexLatest=-1;
    } else {
        
        elenent.innerText = num ;
        shsoes[i]=false;
        shsoes[indexLatest]=false;
        timer =true;

        setTimeout(() => {
            elenent.innerText =null;
            elenentLatest.innerText=null;
            indexLatest=-1;
            timer =false;
        }, 500);
    }
}