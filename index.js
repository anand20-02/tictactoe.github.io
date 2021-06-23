let sign = "X";




audiogo=new Audio("bass.mp3");
setTimeout(() => {
    // audiogo.play(); 
}, 500);

setInterval(() => {
    // audiogo.play(); 
}, 500);


function printx(number) 
{
    let isko = document.getElementById('r' + number)
    // console.log(isko)
    if (isko.innerHTML == "") {
        isko.innerHTML = sign;
        bro();
        checksign();
    }

    tie();

}



function checksign() {
    if (sign == "X") {
        sign = "O";
        disp = document.getElementById("h2");
        disp.innerHTML = sign +
            " Its your Turn ";
    }
    else {
        sign = "X";
        disp = document.getElementById("h2");
        disp.innerHTML = sign + " Its your Turn ";
    }
}

function getbox(no) {
    return document.getElementById("r" + no).innerHTML;

}

function checkmove(a, b, c, m) {
    if (
        getbox(a) == m && getbox(b) == m && getbox(c) == m
    ) {
        return true;
    }

    else {
        return false;
    }
}


function bro() {
    if
        (checkmove(1, 2, 3, sign) || checkmove(4, 5, 6, sign) || checkmove(7, 8, 9, sign) || checkmove(1, 4, 7, sign) || checkmove(2, 5, 8, sign) || checkmove(3, 6, 9, sign) || checkmove(1, 5, 9, sign) || checkmove(3, 5, 7, sign)) {
        disp = document.getElementById("h2");
        setTimeout(() => {
            audiogo.pause();
        }, 1000);
        

        disp.innerHTML =  "CONGRAJULATIONS  " + sign + " jit gaya";
        
        
        for (i = 1; i <= 9; i++) {
            document.getElementById('r' + i).innerHTML = "";
        }
        
        throw "game end"

    }
}

function tie() {
    let v = 0;
    for (i = 1; i <= 9; i++) {

        fir = document.getElementById('r' + i).innerHTML;

        if (fir == "X" || fir == "O") {
            v++;
        }

    }
    if (v == 9) {
        disp = document.getElementById("h2");

        disp.innerHTML = " MATCH TIED. BOTH OF YOU PLAYED WELL";
        for (i = 1; i <= 9; i++) {
            document.getElementById('r' + i).innerHTML = "";
        }

        throw "GAME END";
    }

}
