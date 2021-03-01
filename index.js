var numbers;
var indexLatest;
var elementLatest;
var timer;
var steps;
var couples;
var inputLength;

function start(){
    reset();
    constArrayes();
    constHtml();
}

function reset(){
    numbers;
    indexLatest = -1;
    timer;
    steps=0;
    couples=0;
    document.getElementById("game").innerHTML=null;
    inputLength = document.getElementById('length');
    document.getElementById("won").innerText = null;
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
    for(let i=0; i<inputLength.value*2; i++){
        gameElement.innerHTML += `<div id="${i}" class="background-card"></div>`;
       setTimeout(() => {
            document.getElementById(i+'').addEventListener("click",userOnClick);
       });
    }
}

function userOnClick(event){

    const i = +event.currentTarget.id;

    if(i==indexLatest || timer){
        return;
    }
    
    let num = numbers[i];
    let element = document.getElementById(i+'');
    elementLatest = document.getElementById(indexLatest+'');
    steps++;
    
    element.classList.add("text-center");

    if(indexLatest==-1){
        element.classList.add("temp");
        element.innerText = num ;
        indexLatest = i;
        return;
    } 
    
    elementLatest.classList.remove("temp");
    
    if(numbers[indexLatest] == num){
        element.classList.add("solved");
        element.innerText = num;
        element.removeEventListener("click",userOnClick);
        
        elementLatest.classList.add("solved");
        elementLatest.removeEventListener("click",userOnClick);
        indexLatest=-1;
        couples++;
        if(couples==inputLength.value){
            document.getElementById("won").innerText = `you won In ${steps} steps!`;
        }
    } else {
        
        element.classList.add("error"); 
        elementLatest.classList.add("error");     
        element.innerText = num ;
        timer = true;
        
        setTimeout(() => {

            element.classList.remove("error","text-center");
            element.innerText = null;

            elementLatest.classList.remove("error","text-center");
            elementLatest.innerText=null;

            indexLatest=-1;
            timer =false;
        }, 500);
    }
}