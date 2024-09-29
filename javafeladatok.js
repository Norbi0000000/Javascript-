// Első feladat: Téglatest felszíne és térfogata
function szamitas() {
    var oldal1 = parseFloat(document.getElementById("oldal1").value);
    var oldal2 = parseFloat(document.getElementById("oldal2").value);
    var oldal3 = parseFloat(document.getElementById("oldal3").value);

    var felszin = 2 * (oldal1 * oldal2 + oldal2 * oldal3 + oldal1 * oldal3);
    var terfogat = oldal1 * oldal2 * oldal3;

    document.getElementById("felszin").textContent = felszin.toFixed(2);
    document.getElementById("terfogat").textContent = terfogat.toFixed(2);
}

// Második feladat: BMI számítása
function bmiSzamitas() {
    var tomeg = parseFloat(document.getElementById("tomeg").value);
    var magassag = parseFloat(document.getElementById("magassag").value);

    var bmi = tomeg / (magassag * magassag);
    document.getElementById("bmi").textContent = bmi.toFixed(2);
}

// Harmadik feladat: Szökőév ellenőrzése
function szokoevEllenorzes() {
    var ev = parseInt(document.getElementById("ev").value);
    var szokoev = (ev % 4 === 0 && ev % 100 !== 0) || (ev % 400 === 0);

    document.getElementById("szokoev").textContent = szokoev ? ev + " szökőév." : ev + " nem szökőév.";
}

// Negyedik feladat: String karakterek kiírása
function stringKarakterek() {
    var sztring = document.getElementById("sztring").value;
    var karakterek = "";

    for (var i = 0; i < sztring.length; i++) {
        karakterek += sztring[i] + "<br>";
    }

    document.getElementById("karakterek").innerHTML = karakterek;
}

// Ötödik feladat: Számjegyek átlaga
function szamjegyekAtlaga() {
    var szam = document.getElementById("szam").value;
    var osszeg = 0;
    var szamjegyekSzama = szam.length;

    for (var i = 0; i < szamjegyekSzama; i++) {
        osszeg += parseInt(szam[i]);
    }

    var atlag = osszeg / szamjegyekSzama;
    document.getElementById("atlag").textContent = atlag.toFixed(12);
}

// Hatodik feladat: Betűk megállítása nem betű esetén
function betuEllenorzes() {
    var sztring = document.getElementById("betuSztring").value;
    var betuk = "";

    for (var i = 0; i < sztring.length; i++) {
        if (!isNaN(sztring[i])) break;
        betuk += sztring[i] + "<br>";
    }

    document.getElementById("betuk").innerHTML = betuk;
}

// Hetedik feladat: Osztók kiírása 10-től 30-ig
function osztokKiirasa() {
    var eredmeny = "";

    for (var i = 10; i <= 30; i++) {
        eredmeny += i + ": ";
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                eredmeny += j + ", ";
            }
        }
        eredmeny += "<br>";
    }

    document.getElementById("osztok").innerHTML = eredmeny;
}

// Nyolcadik feladat: Maradék másodpercek a napból
function maradekMasodpercek() {
    const currentHours = 14;
    const currentMinutes = 34;
    const currentSeconds = 42;

    const totalSecondsInDay = 24 * 60 * 60;
    const passedSeconds = currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;
    const remainingSeconds = totalSecondsInDay - passedSeconds;

    document.getElementById("masodpercek").textContent = remainingSeconds;
}

// Kilencedik feladat: Érdemjegy meghatározása
function erdemjegy() {
    const pontszam = parseInt(document.getElementById("pontszam").value);
    let jegy;

    if (pontszam >= 90) {
        jegy = "A";
    } else if (pontszam >= 80) {
        jegy = "B";
    } else if (pontszam >= 70) {
        jegy = "C";
    } else if (pontszam >= 60) {
        jegy = "D";
    } else {
        jegy = "F";
    }

    document.getElementById("jegy").textContent = jegy;
}

// Tizedik feladat: Kő-papír-olló játék
function koPapirOllo() {
    const jatek1 = parseInt(document.getElementById("jatek1").value);
    const jatek2 = parseInt(document.getElementById("jatek2").value);

    let eredmeny;
    if (jatek1 === jatek2) {
        eredmeny = "A játék döntetlen.";
    } else if (
        (jatek1 === 1 && jatek2 === 3) ||
        (jatek1 === 2 && jatek2 === 1) ||
        (jatek1 === 3 && jatek2 === 2)
    ) {
        eredmeny = "Az első játékos nyert.";
    } else {
        eredmeny = "A második játékos nyert.";
    }

    document.getElementById("jatekEredmeny").textContent = eredmeny;
}

// Tizenegyedik feladat: Faktoriális számítása
function faktorialis() {
    const szam = parseInt(document.getElementById("faktSzam").value);
    let faktorialis = 1;

    for (let i = 1; i <= szam; i++) {
        faktorialis *= i;
    }

    document.getElementById("faktorialisEredmeny").textContent = faktorialis;
}

// Tizenkettedik feladat: Négyszög rajzolása főátlóval
function negyzetRajz() {
    const meret = parseInt(document.getElementById("meret").value);
    let rajz = "";

    for (let i = 0; i < meret; i++) {
        for (let j = 0; j < meret; j++) {
            if (i === j || i === 0 || i === meret - 1 || j === 0 || j === meret - 1) {
                rajz += "%";
            } else {
                rajz += " ";
            }
        }
        rajz += "\n";
    }

    document.getElementById("negyzet").textContent = rajz;
}

// Tizenharmadik feladat: Számok kiírása oszthatók kihagyásával
function szamokKihagyassal() {
    let skipCount = 1;
    let output = "";
    let count = 1;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (count === skipCount) {
                skipCount++;
                count = 1;
                continue;
            }
            count++;
        }
        output += i + ", ";
    }

    document.getElementById("szamok").textContent = output.slice(0, -2) + "...";
}

// Tizennegyedik feladat: FizzBuzz játék
function fizzBuzz() {
    let output = "";

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += "fizzbuzz, ";
        } else if (i % 3 === 0) {
            output += "fizz, ";
        } else if (i % 5 === 0) {
            output += "buzz, ";
        } else {
            output += i + ", ";
        }
    }

    document.getElementById("fizzbuzz").textContent = output.slice(0, -2) + "...";
}

