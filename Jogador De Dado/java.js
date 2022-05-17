var sorteio = Math.floor(Math.random() * 6 + 1);

function atualizar(){
    window.location.reload();
}

switch(sorteio){
    case 1:
        document.getElementById("face").src = "img_dados/dado1.png";
    break;
    case 2:
        document.getElementById("face").src = "img_dados/dado2.png";
    break;
    case 3:
        document.getElementById("face").src = "img_dados/dado3.png";
    break;       
    case 4:
        document.getElementById("face").src = "img_dados/dado4.png";
    break;
    case 5:
        document.getElementById("face").src = "img_dados/dado5.png";
    break;       
    case 6:
        document.getElementById("face").src = "img_dados/dado6.png";
    break;
}