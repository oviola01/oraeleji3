/*
elenítsük JS-ben írjuk meg a következő feladatokat ellátó függvényeket:

Amikor a felhasználó az OK gombra kattint, (eseménykezelő hozzáadása az OK gombhoz)

Gyűjtse össze az adatokat az űrlapról ée azok kerüljenek bele egy objektumba. ( adatgyujt() függvény , a függvénynek legyen visszatérési értéke)

Majd az objektumot minden kulcsához tartozó értéket írja ki a section-be egy  div-en belüli  p tagekbe. (Ehhez hozz létre egy osszeallit metodust, melynek bemeneti paramétere az objektum. osszeallit(obj))
*/

window.addEventListener("load", init);

let parentElem;

function init() {
    document.querySelector("#ok").addEventListener("click", okClick);
    parentElem = document.querySelector("section");
}

function adatgyujt() {
    let ret = {
        nev: document.querySelector("#nev").value,
        cim: document.querySelector("#cim").value,
        tel: document.querySelector("#tel").value,
        email: document.querySelector("#email").value
    };
    return ret;
}

function okClick() {
    let object = adatgyujt();
    osszeallit(object, parent);
}

function osszeallit(object) {
    parentElem.innerHTML = "";
    let txt = "<div>";
    for (const key in object) {
        const element = object[key];
        txt += `<p>${element}</p>`;
    }
    txt += "<div>";
    parentElem.innerHTML = txt;
}