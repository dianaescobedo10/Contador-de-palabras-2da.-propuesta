var texto = document.getElementById("texto");
var num   = document.getElementById("num");


function contar() {
    var words  = texto.value.split(' ');
    num.value = words.length;
    let wordsList = {};

    words.forEach(function(word){
        word = clearString(word);
        if(wordsList[word]) {
            wordsList[word] += 1;
        } else{
            wordsList[word] = 1;
        }
    });

    let wordsListSize = Object.keys(wordsList).length;

    resultados.innerHTML = "</br>En el texto hay " +wordsListSize+ " palabras diferentes. </br>";
    resultados.innerHTML = resultados.innerHTML + "</br>Estas palabras se repiten en el texto: </br>";

    for (var j = 0; j < words.length; j++){
        for (var l = j+1; l < words.length; l++){
            if(words[j] == words[l]){
                resultados.innerHTML = resultados.innerHTML + words[l]+ "</br>";
            }
        }
    }
}

function clearString(string){
    let replace = string.toLowerCase().replace(/[,.!;]/g, '');
    return replace;
}

function restaurar(){
    texto.value = "";
    num.value   = "";
}
