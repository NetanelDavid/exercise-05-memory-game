var numbers;
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
    indexLatest = -1;
    timer;
    document.getElementById("game").innerHTML=null;
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
            document.getElementById(i).addEventListener("click",userOnClick);
       });
    }
}

function userOnClick(event){

    console.dir(event);

    const i = +event.currentTarget.id;
    
    if(i==indexLatest || timer){
        return;
    }

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
        element.removeEventListener("click",userOnClick);

        elementLatest.classList.add("solved");
        elementLatest.removeEventListener("click",userOnClick);
        indexLatest=-1;
    } else {

        element.classList.add("error"); 
        elementLatest.classList.add("error");     
        element.innerText = num ;
        timer = true;

        setTimeout(() => {
            element.classList.remove("error","text-center");
            elementLatest.classList.remove("error","text-center");
            element.innerText =null;
            elementLatest.innerText=null;
            indexLatest=-1;
            timer =false;
        }, 500);
    }
}