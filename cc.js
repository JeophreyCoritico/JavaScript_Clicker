// var timerId = setTimeout(Tick, 1000);

// function Tick() {
//     console.log("Tick");
//     timerId = setTimeout(Tick, 1000);
// }

// setTimeout(function(){
//     clearInterval(timerId);
// }, 1000)

var pic = document.getElementById("pic");
var NoCounter = document.getElementById("NoCounter");
var audio = document.getElementById("audio");
var RM_Upgrade = document.getElementById("RM Upgrade");
var SPICE_Upgrade = document.getElementById("SPICE Upgrade")
var MPS = document.getElementById("MPS");
var MPC = document.getElementById("MPC");
var RMAmnt = document.getElementById("RMAmnt");
var SPICEAmnt = document.getElementById("SPICEAmnt");
var RMCost = document.getElementById("RMCost");
var SPICECost = document.getElementById("SPICECost");
var SAUCECost = document.getElementById("SAUCECost");
var SAUCEAmnt = document.getElementById("SAUCEAmnt");
var SAUCE_Upgrade = document.getElementById("Sauce Upgrade");

var counter = 0;
var RMlevel = 0;
var SPICElevel = 0;

var MPS_level = 0;
var SAUCElevel = 0;

var RMPrice = 10;
var SPICE_Price = 100;
var SAUCEPRICE = 50;

var ClickLevel = 1;
var auto = 0;

var timer2 = setInterval(myTimer2, 10);

function myTimer2() {
    if(counter >= RMPrice){
        RM_Upgrade.disabled = false;
    }
    if(counter < RMPrice){
        RM_Upgrade.disabled = true;
    }

    if(counter >= SPICE_Price){
        SPICE_Upgrade.disabled = false;
    }
    if(counter < SPICE_Price){
        SPICE_Upgrade.disabled = true;
    }
    
    if(counter >= SAUCEPRICE){
        SAUCE_Upgrade.disabled = false;
    }
    if(counter < SAUCEPRICE){
        SAUCE_Upgrade.disabled = true;
    }
    MPS.innerHTML = "Meat Per Sec: " + MPS_level;
    MPC.innerHTML = "Meat Per Click: " + Math.round(ClickLevel);
    RMAmnt.innerHTML = "You Own: " + RMlevel;
    SPICEAmnt.innerHTML = "You Own: " + SPICElevel;
    RMCost.innerHTML = "Costs: " + Math.round(RMPrice) + " MEAT";
    SPICECost.innerHTML = "Costs: " + Math.round(SPICE_Price) + " MEAT";
    SAUCEAmnt.innerHTML = "You Own: " + SAUCElevel;
    SAUCECost.innerHTML = "Costs: " + Math.round(SAUCEPRICE) + " MEAT";
}

var timer = setInterval(myTimer, 1000);

function myTimer() {
    counter = counter + auto;
    NoCounter.innerHTML = "MEAT: " + counter;
}

pic.onmousedown = mouseDown;

pic.onmouseup = mouseUp;

pic.onclick = play;

function mouseDown(){
pic.src = "http://files.gamebanana.com/img/ico/sprays/558274c583861.png";
}

function mouseUp(){
pic.src = "https://camo.derpicdn.net/db58f006bcb45e247a5c33934fd5617df017121a?url=http%3A%2F%2F31.media.tumblr.com%2F66ff2a23ae802bb1229018595607cf57%2Ftumblr_inline_nl1od3KuZa1t5x71d.png"
}

function play() {
    counter = counter + ClickLevel;
    NoCounter.innerHTML = "MEAT: " + counter;
    audio.src = "AinsleyHarriottYeahBoy.mp3";
    audio.pause();
    audio.currentTime = 0;
    audio.currentTime = 0.55;  
    audio.play();
    
}



RM_Upgrade.addEventListener("click", function() {
    RMlevel = RMlevel + 1;
    auto = auto + 1;
    counter = counter - RMPrice;
    MPS_level = MPS_level + 1;
    RMPrice = Math.round(RMPrice + RMPrice*0.25);
    //NoCounter.innerHTML = "MEAT: " + counter;
})

SPICE_Upgrade.addEventListener("click", function() {
    SPICElevel = SPICElevel + 1;
    auto = auto + 5;
    counter = counter - SPICE_Price;
    MPS_level = MPS_level + 5;
    SPICE_Price = Math.round(SPICE_Price + SPICE_Price*0.25);
    //NoCounter.innerHTML = "MEAT: " + counter;
})

SAUCE_Upgrade.addEventListener("click", function() {
    SAUCElevel = SAUCElevel + 1;
    counter = counter - SAUCEPRICE;
    SAUCEPRICE = Math.round(SAUCEPRICE + SAUCEPRICE*0.25);
    ClickLevel = Math.round(ClickLevel + auto*0.1);
    //---READ--- Does not really add 10% of MPS to CPS, instead adds 10% of the current MPS to the CPS

    // percentage = percentage + 0.1;
    // timer3 = setInterval(myTimer3, 10);
    // function myTimer3(){
    //     ClickLevel = Math.round(ClickLevel + auto*percentage);
    // }
    //NoCounter.innerHTML = "MEAT: " + counter;
})
// function play() {
//     audio.src = "AinsleyHarriottYeahBoy.mp3";
//     audio.pause();
//     audio.currentTime = 0;
//     audio.currentTime = 0.55;
//     audio.play();
//     //stop audio at...
//     setInterval(function() {
//         if(audio.currentTime>0.95){
//             audio.pause();
//         }
//     })
// }

// function audio1(){
//     audio.src = "TheBestofAinsleyHarriott.mp3";
//     audio.pause();
//     audio.currentTime = 0;
//     audio.currentTime = 1.13;
//     audio.play();
//     setInterval(function() {
//         if(audio.currentTime>1.16){
//             audio.pause();
//         }
//     })
// }
// function audio2(){
//     audio.src = "TheBestofAinsleyHarriott.mp3";
//     audio.pause();
//     audio.currentTime = 0;
//     audio.currentTime = 0.17;
//     audio.play();
//     setInterval(function() {
//         if(audio.currentTime>0.20){
//             audio.pause();
//         }
//     })
// }
// function audio3(){
//     audio.src = "TheBestofAinsleyHarriott.mp3";
//     audio.pause();
//     audio.currentTime = 0;
//     audio.currentTime = 0.37;
//     audio.play();
//     setInterval(function() {
//         if(audio.currentTime>0.38){
//             audio.pause();
//         }
//     })
// }

// function play() {
//     var rand = Math.floor(Math.random() *( 3 - 1)) + 1;
//     switch(rand){
//         case 1:
//         audio1();
//         break;
        
//         case 2:
//         audio2();
//         break;

//         case 3:
//         audio3();
//         break;
//     }
// }

// function random(){
//     var i = Math.floor(Math.random()*20)%4;
//     if (i<=0) return random();
//     return i;
// }

// function play(){
//     var i = random();
// }


