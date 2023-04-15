import { KUTYALISTA } from "./adatok.js";

window.addEventListener("load", init);

function init() {
    console.log(KUTYALISTA);
    const inputElem = document.getElementById("szurnev");
    inputElem.addEventListener("keyup", function() {
            let szuresiFeltetel = inputElem.value;
            let szurtLista = szuresReszletekre(KUTYALISTA, szuresiFeltetel);
            console.log(szurtLista);
            let szamSzures = szuresKorSzerint(KUTYALISTA, szuresiFeltetel);
        }
    )
}

/*
function szuresNevSzerint(lista) {
    let resultList = lista.filter(
        function(nev){
            console.log(nev);
            return nev=="Dézi";
        }
        );
    console.log(resultList);
}
*/

function szuresReszletekre(lista, keresett) {
    let resultList = lista.filter(
        function(elem){
            return elem.nev.toUpperCase().includes(keresett.toUpperCase());
        }
        );
    return resultList;
}

function szuresKorSzerint(lista, keresett) {
    let resultList = lista.filter(
        function(elem){
            console.log(typeof (elem.kor + keresett));
            return eval(elem.kor + keresett);
        }
        );
    return resultList;
}