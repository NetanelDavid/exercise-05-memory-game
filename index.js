var numbers;
var shsoes = [];
var indexLatest = -1;
var elementLatest;
var timer;

var inputLength = document.getElementById('length');

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
    addhtml += `<div onclick="userOnClick(${i})" id="${i}" class="background-card"></div>`;
    return addhtml;
}

function userOnClick(i){

    if(shsoes[i] || timer){
        return;
    }

    shsoes[i]=true;

    let num = numbers[i];
    let element = document.getElementById(i);
    elementLatest = document.getElementById(indexLatest);
    
    element.classList.add("text-center");
    if(indexLatest==-1){
        element.innerText = num ;
        indexLatest = i;
        element.classList.add("temp");
        return;
    } 

    elementLatest.classList.remove("temp");
    
    if(numbers[indexLatest] == num){
        element.classList.add("solved");
        element.innerText = num;
        elementLatest.classList.add("solved");
        indexLatest=-1;
    } else {

        element.classList.add("error"); 
        elementLatest.classList.add("error");     
        element.innerText = num ;
        shsoes[i]=false;
        shsoes[indexLatest]=false;
        timer = true;

        setTimeout(() => {
            element.classList.remove("error");
            elementLatest.classList.remove("error");
            element.innerText =null;
            elementLatest.innerText=null;
            indexLatest=-1;
            timer =false;
        }, 500);
    }
}