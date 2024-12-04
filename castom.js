let number =0;
let number2 =0;
let number3 =0;

const button = document.getElementById("button");
const display = document.getElementById("display");
button.addEventListener("click",()=>{
    number ++;
    if(number>33){
        number = 0;
    }
    
    display.innerHTML = number;
    resetDisplay.innerHTML = "";
})

const button2 = document.getElementById("button2");
const display2 = document.getElementById("display2");
button2.addEventListener("click",()=>{
    number2 ++;
    if(number2>33){
        number2 = 0;
    }
    
    display2.innerHTML = number2;
    resetDisplay.innerHTML = "";
})

const button3 = document.getElementById("button3");
const display3 = document.getElementById("display3");
button3.addEventListener("click",()=>{
    number3 ++;
    if(number3>33){
        number3 = 0;
    }
    display3.innerHTML = number3;
    resetDisplay.innerHTML = "";
})


const reset = document.getElementById('reset');
const resetDisplay = document.getElementById("displayReset");
reset.addEventListener('click',()=>{
    number =0;
    number2 =0;
    number3 =0;
    display.innerHTML=number;
    display2.innerHTML=number2;
    display3.innerHTML=number3;

    resetDisplay.innerHTML = " Let's try Again  ";

})

