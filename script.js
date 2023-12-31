var texto1 = document.getElementById("crypt");
var texto2 = document.getElementById("decrypt");
var buttonCrypt = document.getElementById("buttonCrypt");
var buttonDecrypt = document.getElementById("buttonDecrypt");
function encriptar(stringInicial){
    // De x ->x'
    vocales=["a","e","i","o","u"];
    string="";
    subCadena="";
    for (let i = 0; i < stringInicial.length; i++) {
        if(vocales.includes(stringInicial[i])){
            string +=subCadena.split("").reverse().join("") + stringInicial[i];
            subCadena="";
        }else{
            subCadena+=stringInicial[i];
        }
    }
    if(subCadena.length !=0){
        string +=subCadena.split("").reverse().join("");
    }
    // De x'->x''
    var y = string.length -1;
    var res='';
    for (let i = 0; i < string.length/2; i++) {
        res +=string[i];
        if(y!=0){
            res +=string[y];
            y--;
        }
    }
    if(string.length%2 !=0){
        res = res.substring(0,res.length -1)
    }
    document.getElementById("cryptRes").innerText =res;
}
function desencriptar(stringInicial){
    // De x''->x'
    if(stringInicial.length %2 == 0){
        var y = stringInicial.length -1;
    }else{
        var y = stringInicial.length -2;
    }
    var string='';
    for (let i = 0; i < stringInicial.length; i+=2) {
        string+=stringInicial[i];
    }
    for (let i = y; i >= 0; i-=2) {
        string+=stringInicial[i];
    }
    // De x'->x
    vocales=["a","e","i","o","u"];
    res="";
    subCadena="";
    for (let i = 0; i < string.length; i++) {
        if(vocales.includes(string[i])){
            res +=subCadena.split("").reverse().join("") + string[i];
            subCadena="";
        }else{
            subCadena+=string[i];
        }
    }
    if(subCadena.length !=0){
        res +=subCadena.split("").reverse().join("");
    }
    document.getElementById("decryptRes").innerText = res;
}
buttonCrypt.addEventListener("click",() => {encriptar(texto1.value)});
buttonDecrypt.addEventListener("click",() => {desencriptar(texto2.value)});


