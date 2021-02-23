var elementGame = document.getElementById('game');
for(let i=0; i<10; i++){
    elementGame.innerHTML += this.addTb(i);
}

function addTb(i){
    let ret =''
    if(i%3==0){
        console.log(i%3);
        ret += '<tr>'
    }
    
    ret += `<tb>${i}</tb>`

    if(i%3==2 || i==9){
        console.log(i%3);
        ret += '</tr>'
    }
    return ret;
}


//elementLength = document.addEventListener('click',setLength);
/*function setLength() {
    console.log(document.getElementById('length').innerHTML);
  console.log(this.length);
}*/