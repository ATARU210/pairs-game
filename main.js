function randomPairs (allnumbers, newNumber){
    allnumbers = shuffle(allnumbers.concat(allnumbers))
    for(let i=0;i<16;i++){
        newNumber[i].innerHTML = allnumbers[i]
    }
    return allnumbers
}
    
function shuffle(array){
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}
function Pairs(allNumbers, index){
    let verification = true
    console.log(firts)
    console.log(second)
    for(let i;i<=pairs.length;i++){
        if(pairs[i]==index){
            verification = false
        }
    }
    if(!verification){
        if(firts == undefined){
            firts = index
            console.log(firts)
            screen[firts].setAttribute("style","height: 0px; transition: 0.5s")
        }
        if(index!=firts){
            if(second == undefined){
                second = index
                screen[second].setAttribute("style","height: 0px; transition: 0.5s")
                console.log(second)
            }
        }
    }
    if(firts!=undefined && second!=undefined){
        trys = trys+1
        console.log(trys)
        if(allNumbers[firts]!=allNumbers[second]){
            setTimeout(()=>{
                screen[firts].setAttribute("style","height: 100%; transition: 0.5s")
                screen[second].setAttribute("style","height: 100%; transition: 0.5s")
                firts = undefined
                second = undefined
            },500)
        }
        else{
            pair = pair+1
            pairs.push(firts)
            firts = undefined
            second = undefined
        }
        console.log(pair)
    }
}
var trys = 0
var pair = 0
var firts
var second
var arrayNumbers = [1,2,3,4,5,6,7,8]
var pairs = [13]
var number = document.getElementsByClassName("number")
var screen = document.getElementsByClassName("screen")
arrayNumbers = randomPairs(arrayNumbers,number)
var box = document.querySelectorAll(".box")
box.forEach((boxScreen,index)=>{
    boxScreen.addEventListener("click",()=>{
        if(pair<=8){
            Pairs(arrayNumbers, index)
            document.getElementById("trys").innerHTML = trys
            document.getElementById("pairs").innerHTML = pair
            if(pair==8){
                document.getElementsByClassName("text")[0].innerHTML = ""
                document.getElementsByClassName("text")[1].innerHTML = "ganaste"
            }
        }
    })
})

