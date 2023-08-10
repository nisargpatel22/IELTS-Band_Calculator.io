function calcBand() {
    l = document.getElementById('i1').value;
    rA = document.getElementById('i2').value;

    listening(l);
    readingA(rA);
}

function listening(l) {
    if (l < 0) {
        document.getElementById('p1').innerHTML = "Enter Valid Marks";
    }

    else if (l >= 10 && l <= 12) {
        document.getElementById('p1').innerHTML = 4;
    }

    else if (l >= 13 && l <= 15) {
        document.getElementById('p1').innerHTML = 4.5;
    }

    else if (l >= 16 && l <= 17) {
        document.getElementById('p1').innerHTML = 5;
    }

    else if (l >= 18 && l <= 22) {
        document.getElementById('p1').innerHTML = 5.5;
    }

    else if (l >= 23 && l <= 25) {
        document.getElementById('p1').innerHTML = 6;
    }

    else if (l >= 26 && l <= 29) {
        document.getElementById('p1').innerHTML = 6.5;
    }

    else if (l >= 30 && l <= 31) {
        document.getElementById('p1').innerHTML = 7;
    }

    else if (l >= 32 && l <= 34) {
        document.getElementById('p1').innerHTML = 7.5;
    }

    else if (l >= 35 && l <= 36) {
        document.getElementById('p1').innerHTML = 8;
    }

    else if (l >= 37 && l <= 38) {
        document.getElementById('p1').innerHTML = 8.5;
    }

    else if (l >= 39 && l <= 40) {
        document.getElementById('p1').innerHTML = 9;
    }
    else {
        document.getElementById('p1').innerHTML = "ERROR";
    }
}

function readingA(rA) {
    if (rA < 0) {
        document.getElementById('p2').innerHTML = "Enter Valid Marks";
    }

    else if (rA >= 10 && rA <= 12) {
        document.getElementById('p2').innerHTML = 4;
    }

    else if (rA >= 13 && rA <= 14) {
        document.getElementById('p2').innerHTML = 4.5;
    }

    else if (rA >= 15 && rA <= 18) {
        document.getElementById('p2').innerHTML = 5;
    }

    else if (rA >= 19 && rA <= 22) {
        document.getElementById('p2').innerHTML = 5.5;
    }

    else if (rA >= 23 && rA <= 26) {
        document.getElementById('p2').innerHTML = 6;
    }

    else if (rA >= 27 && rA <= 29) {
        document.getElementById('p2').innerHTML = 6.5;
    }

    else if (rA >= 30 && rA <= 32) {
        document.getElementById('p2').innerHTML = 7;
    }

    else if (rA >= 33 && rA <= 34) {
        document.getElementById('p2').innerHTML = 7.5;
    }

    else if (rA >= 35 && rA <= 36) {
        document.getElementById('p2').innerHTML = 8;
    }

    else if (rA >= 37 && rA <= 38) {
        document.getElementById('p2').innerHTML = 8.5;
    }

    else if (rA >= 39 && rA <= 40) {
        document.getElementById('p2').innerHTML = 9;
    }
    else {
        document.getElementById('p2').innerHTML = "ERROR";
    }
}