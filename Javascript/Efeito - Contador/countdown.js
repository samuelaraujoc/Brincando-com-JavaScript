var check = false;


function recontar(){
    window.location.reload();
}

function xequeMate(){
    if (check == false){
    var timer1 = setInterval(function() {start()}, 1000);
    var timer2 = setTimeout(function() {end()}, 15000);
    var count = 10;
    function start(){
        soudBeep();
        document.getElementById("time").innerHTML = count; 
        if (count == 0) {
            clearInterval (timer1);
            soudThunder ();
            document.getElementById ("fire").src = "img/explosion.gif";
            document.getElementById("time").innerHTML = "GAMER OVER";
        }
        
        count--;
    }
    check = true;
    }
}

function soudThunder(){
    var beep = new Audio();
    beep.src ="Audio/Thunder_Crack.mp3";
    beep.play();
}

function soudBeep(){
    var beep = new Audio();
    beep.src ="Audio/Beep_Short.mp3";
    beep.play();
}

function end(){
    document.getElementById("fire").src = "img/clean.jpg"
}