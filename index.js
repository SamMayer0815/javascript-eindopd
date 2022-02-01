const randomNum = [0,0,0,0,0];
const total = [0,0,0,0,0,0]
const count = [0,0,0,0,0,0]
var tel = 0;
var totaal = 0;
var totaalVD5 = 0;
var totaalDeel1 = 0;
var totaalDeel2 = 0;
var target = 0;
var isRolling = false;
const chosen = [false,false,false,false,false];
const pressed = [false,false,false,false,false,false,false,false,false,false,false,false,false];
const chosenValue = [0,0,0,0,0];
const dobbelsteenen = ["dobbelsteen-1","dobbelsteen-2","dobbelsteen-3","dobbelsteen-4","dobbelsteen-5" ]
const chosenRed = [false,false,false,false,false,false,false,]
let modal = document.querySelector("#myModal");

function randomNumbers(){  // zet random dobbelsteen
  for(let i = 0;i <= 4;i++){
    randomNum[i] = Math.floor(Math.random() * 6 + 1)
    if(chosen[i] == false){
      chosenValue[i] = randomNum[i]
    }
    dobbel = i + 1 + "";
    if(chosen[i] == false){
      document.getElementById("dobbelsteen-" + dobbel).style.backgroundImage = "url('dice" + (randomNum[i] - 1)+ ".png')"  
    }
  }
}

document.getElementsByClassName("rol")[0].onclick = function(){    // rolt de dobbelsteenen 3X max
  tel ++
  if(tel == 1){
    document.getElementsByClassName("rol")[0].innerHTML = "NOG 2 KEER ROLLEN"
  }
  if(tel == 2){
    document.getElementsByClassName("rol")[0].innerHTML = "NOG 1 KEER ROLLEN"
  }
  if(tel == 3){
    document.getElementsByClassName("rol")[0].innerHTML = "KIES"
  }
  if(tel <= 3){
    isRolling = true;
    randomNumbers()
  }
  showsRed()
}

document.addEventListener("click", function Numbers(event){  // zet dobbelsteenen als gekozen.
  for(let i = 0;i <=4;i++){
    dobbel = i + 1 + "";
    if(event.target.id == "dobbelsteen-" + dobbel && isRolling == true){
      if( chosen[i] == false){  
        chosen[i] = true
      } 
    }
  }
})
 
document.addEventListener("click", function (event){     //checkt of je de punten kan zetten voor 1 tot 6
  for(let j = 1;j <= 6;j++){
    target = "punten-" + j 
    if(event.target.id == target && pressed[(j - 1)] == false && isRolling == true){ 
      for(let i = 0;i <= 5;i++){ // telt punten
        if(chosenValue[i] == j){
          totaal += j
          totaalDeel1 += j
        }
      }
      document.getElementById(target).innerHTML = totaal
      document.getElementById(target).style.color = 'black';
      pressed[(j -1)] = true
      reset()
      if(pressed[0] == true && pressed[1] == true && pressed[2] == true && pressed[3] == true && pressed[4] == true && pressed[5] == true){
        document.getElementById("totaal-1").innerHTML = totaalDeel1
        if(totaalDeel1 >= 63){
          document.getElementById("totaalpunten-1").innerHTML = 35
          totaalDeel1 += 35
        }else{
          document.getElementById("totaalpunten-1").innerHTML = 0
        }
        document.getElementById("totaal-2").innerHTML = totaalDeel1
        document.getElementById("totaal-3").innerHTML = totaalDeel1
      }
    }
  }
})

document.addEventListener("click", function (event){ 
  for(i = 0;i <= 5;i++){// doet de punten van 3 dezelfde
    if(event.target.id == "punten-7" && isRolling == true && pressed[6] == false && count[i] == 3){
      document.getElementById("punten-7").innerHTML = totaalVD5
      document.getElementById("punten-7").style.color = 'black';
      totaalDeel2 += totaalVD5
      pressed[6] = true
      reset()
    }
  }
  if(event.target.id == "punten-7" && pressed[6] == false && isRolling == true){
    document.getElementById("punten-7").innerHTML = 0
    document.getElementById("punten-7").style.color = 'black';
    pressed[6] = true
    reset()
  }
  for(i = 0;i <= 5;i++){// doet de punten van 4 dezelfde
    if(event.target.id == "punten-8" && isRolling == true && pressed[7] == false && count[i] == 4){
      document.getElementById("punten-8").innerHTML = totaalVD5
      document.getElementById("punten-8").style.color = 'black';
      totaalDeel2 += totaalVD5
      pressed[7] = true
      reset()
    }
  }
  if(event.target.id == "punten-8" && pressed[7] == false && isRolling == true){
    document.getElementById("punten-8").innerHTML = 0
    document.getElementById("punten-8").style.color = 'black';
    pressed[7] = true
    reset()
  }
  for(i = 0;i <= 5;i++){// doet de punten van 3+2 dezelfde
    if(event.target.id == "punten-9" && isRolling == true && pressed[8] == false && count[i] == 3){
      for(j = 0;j <= 5;j++){
        if(count[j] == 2){
          document.getElementById("punten-9").innerHTML = 25
          document.getElementById("punten-9").style.color = 'black';
          totaalDeel2 += 25
          pressed[8] = true
          reset()
        }
      }
    }
  }
  if(event.target.id == "punten-9" && pressed[8] == false && isRolling == true){
    document.getElementById("punten-9").innerHTML = 0
    document.getElementById("punten-9").style.color = 'black';
    pressed[8] = true
    reset()
  }
  for(i = 0; i <= 2;i++){  //punten voor 4 opvolgende cijfers
    if(event.target.id == "punten-10" && count[i] == 1 && count[i+1] == 1 && count[i+2] == 1 && count[i+3] == 1 && pressed[9] == false && isRolling == true){
      document.getElementById("punten-10").innerHTML = 30
      document.getElementById("punten-10").style.color = 'black';
      totaalDeel2 += 30
      pressed[9] = true
      reset()
    }
  }
  if(event.target.id == "punten-10" && pressed[9] == false && isRolling == true){
    document.getElementById("punten-10").innerHTML = 0
    document.getElementById("punten-10").style.color = 'black';
    pressed[9] = true
    reset()
  }
  for(i = 0; i <= 1;i++){  //punten voor 5 opvolgende cijfers
    if(event.target.id == "punten-11" && count[i] == 1 && count[i+1] == 1 && count[i+2] == 1 && count[i+3] == 1 && count[i+4] == 1 && pressed[10] == false && isRolling == true){
      document.getElementById("punten-11").innerHTML = 40
      document.getElementById("punten-11").style.color = 'black';
      totaalDeel2 += 30
      pressed[10] = true
      reset()
    }
  }
  if(event.target.id == "punten-11" && pressed[10] == false && isRolling == true){
    document.getElementById("punten-11").innerHTML = 0
    document.getElementById("punten-11").style.color = 'black';
    pressed[10] = true
    reset()
  }
  for(i = 0;i <= 5;i++){// doet de punten van 5 dezelfde
    if(event.target.id == "punten-12" && isRolling == true && pressed[11] == false && count[i] == 5){
      document.getElementById("punten-12").innerHTML = 50
      document.getElementById("punten-12").style.color = 'black';
      totaalDeel2 += 50
      pressed[11] = true
      reset()
    }
  }
  if(event.target.id == "punten-12" && pressed[11] == false && isRolling == true){
    document.getElementById("punten-12").innerHTML = 0
    document.getElementById("punten-12").style.color = 'black';
    pressed[11] = true
    reset()
  }
  if(event.target.id == "punten-13" && pressed[12] == false && isRolling == true){ // doet punten van totaal
    document.getElementById("punten-13").innerHTML = totaalVD5
    document.getElementById("punten-13").style.color = 'black';
    totaalDeel2 += totaalVD5
    pressed[12] = true
    reset()
  }
  if(event.target.id == "punten-13" && pressed[12] == false && isRolling == true){
    document.getElementById("punten-13").innerHTML = 0
    document.getElementById("punten-13").style.color = 'black';
    pressed[12] = true
    reset()
  }
  if(pressed[6] == true && pressed[7] == true && pressed[8] == true && pressed[9] == true && pressed[10] == true && pressed[11] == true && pressed[12] == true){
    document.getElementById("totaal-4").innerHTML = totaalDeel2
  }
})

function showsRed(){
  for(let i = 0;i <= 6;i++){
    chosenRed[i] = false
  }

  for(let i = 0;i <= 5;i++){// kijkt of 1 tot 6 kan in rood 
    total[i] = 0;
    for(let j = 0;j <= 4;j++){ 
      if(chosenValue[j] == (i+1)){
        total[i] += chosenValue[j]
      }
    }
  }
  for(let i = 0;i <= 5;i++){
  if(pressed[i] == false){
    document.getElementById("punten-" + (i + 1)).innerHTML = total[i]
    document.getElementById("punten-" + (i + 1)).style.color = 'red';
    }
  }

  for(let i = 0;i <= 5;i++){  // telt hoeveel X elk getal
    count[i] = 0
  } 
  for(let i = 0;i <= 5;i++){
    for(let j = 1;j <= 6;j++){
      if(chosenValue[i] == j){
        count[j - 1] += 1
      }
    }
  }

  totaalVD5 = 0;    //Krijgt het totaal van de 5 getallen
  for(let i = 0;i <= 4;i++){
    totaalVD5 += chosenValue[i]
  }

  for(i = 0;i <= 5;i++){// kijkt of je 3 dezelfe kan
    if(pressed[6] == false && count[i] == 3){
      document.getElementById("punten-7").innerHTML = totaalVD5
      document.getElementById("punten-7").style.color = 'red';
      chosenRed[0] = true
    }
  }
  if(pressed[6] == false && chosenRed[0] == false){
    document.getElementById("punten-7").innerHTML = 0
    document.getElementById("punten-7").style.color = 'red';
  }

  for(i = 0;i <= 5;i++){// kijkt of je 4 dezelfe kan
    if(pressed[7] == false && count[i] == 4){
      document.getElementById("punten-8").innerHTML = totaalVD5
      document.getElementById("punten-8").style.color = 'red';
      chosenRed[1] = true
    }
  }
  if(pressed[7] == false && chosenRed[1] == false){
    document.getElementById("punten-8").innerHTML = 0
    document.getElementById("punten-8").style.color = 'red';
  }

  for(i = 0;i <= 5;i++){// kijkt of 3+2 dezelfe kan
    if(pressed[8] == false && count[i] == 3){
      for(j = 0;j <= 5;j++){
        if(count[j] == 2){
          document.getElementById("punten-9").innerHTML = 25
          document.getElementById("punten-9").style.color = 'red';
          chosenRed[2] = true
        }
      }
    }
  }
  if(pressed[8] == false && chosenRed[2] == false){
    document.getElementById("punten-9").innerHTML = 0
    document.getElementById("punten-9").style.color = 'red';
  }
  for(i = 0; i <= 2;i++){  //kijkt of 4 opvolgende cijfers kan
    if(count[i] == 1 && count[i+1] == 1 && count[i+2] == 1 && count[i+3] == 1 && pressed[9] == false){
      document.getElementById("punten-10").innerHTML = 30
      document.getElementById("punten-10").style.color = 'red';
      chosenRed[3] = true;
    }
  }
  if(pressed[9] == false && chosenRed[3] == false){
    document.getElementById("punten-10").innerHTML = 0
    document.getElementById("punten-10").style.color = 'red';
  }
  for(i = 0; i <= 1;i++){  //kijkt of 5 opvolgende cijfers kan
    if(count[i] == 1 && count[i+1] == 1 && count[i+2] == 1 && count[i+3] == 1 && count[i+4] == 1 && pressed[10] == false){
      document.getElementById("punten-11").innerHTML = 40
      document.getElementById("punten-11").style.color = 'red';
      chosenRed[4] = true;
    }
  }
  if(pressed[10] == false && chosenRed[4] == false){
    document.getElementById("punten-11").innerHTML = 0
    document.getElementById("punten-11").style.color = 'red';
  }
  for(i = 0;i <= 5;i++){// kijkt of 5 dezelfde
    if(pressed[11] == false && count[i] == 5){
      document.getElementById("punten-12").innerHTML = 50
      document.getElementById("punten-11").style.color = 'red';
      chosenRed[5] = true
    }
  }
  if(pressed[11] == false && chosenRed[5] == false){
    document.getElementById("punten-12").innerHTML = 0
    document.getElementById("punten-12").style.color = 'red';
  }
  if(pressed[12] == false){ // doet punten van totaal
    document.getElementById("punten-13").innerHTML = totaalVD5
    document.getElementById("punten-13").style.color = 'red';
  }

}

function reset(){  // reset als je hebt gekozen
  document.getElementsByClassName("rol")[0].innerHTML = "KLIK OM TE ROLLEN"
  for(let i = 0; i <= 4;i++){
    document.getElementsByClassName("dobbelsteen")[i].style.backgroundImage = "url('dice6.png')"
    chosen[i] = false
  }
  tel = 0;
  totaal = 0;
  target = 0;
  isRolling = false;
  for(let i = 0; i <= 12;i++){
    if(pressed[i] == false){
      document.getElementById("punten-" + (i+1)).textContent = ""
    }
  }
}

document.addEventListener("click", function (){ // Als je wint
  if(pressed[0] == true && pressed[1] == true && pressed[2] == true && pressed[3] == true && pressed[4] == true && pressed[5] == true && pressed[6] == true && pressed[7] == true && pressed[8] == true && pressed[9] == true && pressed[10] == true && pressed[11] == true && pressed[12] == true){
    modal.style.display = "block";
    document.getElementsByClassName("rol")[0].innerHTML = "AF. Klik om weer te spelen";
    document.querySelector(".endScore").innerHTML = "Je hebt " + (totaalDeel2 + totaalDeel1) + " punten gehaald";
    document.getElementById("totaal-5").innerHTML = (totaalDeel1 + totaalDeel2)
  }
})

document.querySelectorAll(".playAgain")[0].onclick, modal.onclick = function () {
  modal.style.display = "none";
  tel = 0;
  totaal = 0;
  for(let i = 0;i <= 12;i++){
  pressed[i] = false;
  chosen[i] = false;
  chosenRed[i] = false;
  randomNum[i] = 0;
  total[i] = 0;
  count[i] = 0;
  chosenValue[i] = 0;
  }
  tel = 0;
  totaal = 0;
  totaalVD5 = 0;
  totaalDeel1 = 0;
  totaalDeel2 = 0;
  target = 0;
  isRolling = false;
  document.getElementsByClassName("rol")[0].innerHTML = "KLIK OM TE ROLLEN"
  document.getElementById("totaalpunten-1").innerHTML = ""
  for(i = 1;i <= 13;i++){
    document.getElementById("punten-" + i).innerHTML = ""
  }
  for(i = 1;i <= 5;i++){
    document.getElementById("totaal-" + i).innerHTML = ""
  }
};
