const szyfrowanie = (text, klucz) => {
    if(klucz == "") {
        alert('Klucz nie moze byc pusty')
    }
    if(text == ""){
        alert('Tekst nie moze byc pusty');
    }
    function check_num(str){
        var reg = /[0-9]/g;
        var ntab = str.match(reg);
        if(ntab!=null) {
            alert("klucz oraz tekst nie moga zawierac cyfry");
            return false;
        }
    }
    check_num(klucz);
    check_num(text);

    let textString = text.replace(/ /g,'')
    klucz = klucz.toLowerCase();
    let N = 0;
    let tmp = 1;
    let zaszyfrowany="";

    N = textString.length
    const textArray = [...Array(klucz.length)].map(() => Array(N).fill("")); 
    
     for(let x = 0; x < N; x ++) {
      for (i = 97; i < 123; i++){ 
        for (j = 0; j < klucz.length; j++){
          if(x === 0 ) {
            if (klucz.charAt(j) == String.fromCharCode(i)){ // podstawiamy za 1 rzad kolejnosc w cyfrach
              textArray[j][x] = tmp;
              tmp++;
            }
          }
          else break;
        } 
      }
    }
    console.log(textArray)
    tmp = 0;
    for (i = 1; i <= N ; i++){ 
        for (j = 0; j < klucz.length; j++){
            textArray[j][i] = textString.charAt(tmp);
            tmp++;
            if(textArray[j][0]==i){
                console.log(textString.charAt(tmp))
                break;
            }
        }      
    }
      
    for (j = 1; j <= klucz.length; j++){
        for (i = 0; i < klucz.length; i++) {
            if(textArray[i][0] === j){ // postawiamy pod stringa ciag we wlasciwej kolejosci
                zaszyfrowany = zaszyfrowany + textArray[i].join('') + " "
            }
        }
    }
    var wynik = zaszyfrowany.replace(/[0-9]/g, '');//usuwamy cyferki z stringa
    // alert(wynik);
    document.getElementById("wynik").value = wynik;
}

const deszyfrowanie = (text, klucz) => {

    if(klucz == "") {
        alert('Klucz nie moze byc pusty')
    }
    if(text == ""){
        alert('Tekst nie moze byc pusty');
    }
    function check_num(str){
        var reg = /[0-9]/g;
        var ntab = str.match(reg);
        if(ntab!=null) {
            alert("klucz oraz tekst nie moga zawierac cyfry");
            return false;
        }
    }
    check_num(klucz);
    check_num(text);

    let textStringSpacje = text
    let textString = text.replace(/ /g,'')
    klucz = klucz.toLowerCase();
    let N = 0;
    let tmp = 1;
    let odszyfrowany="";

    for(let y=0; y<textStringSpacje.length; y++){
        if(textStringSpacje.charAt(y) ==  ' '){
            N=y;
            console.log(N)
            break;
        }
    }
    const textArray = [...Array(klucz.length)].map(() => Array(N).fill("")); 
    console.log(N)

    for(let x = 0; x < N; x ++) {
        for (i = 97; i < 123; i++){ 
            for (j = 0; j < klucz.length; j++){
                if(x === 0 ) {
                    if (klucz.charAt(j) == String.fromCharCode(i)){ // podstawiamy za 1 rzad kolejnosc w cyfrach
                        textArray[j][x] = tmp;
                        tmp++;
                    }
                }
                else break;
            } 
        }
    }

    tmp = 0;
    for (i = 1; i <= N ; i++){ 
        for (j = 0; j < klucz.length; j++){              
            textArray[j][i] = '-'
            if(textArray[j][0]==i){
                break;
            }
        }
    }

        
    for(let z = 0; z <=klucz.length; z++){
        for (j = 0; j < klucz.length; j++){ 
            for (i = 1; i <= N ; i++){
                if(textArray[j][i]=='-' && textArray[j][0]==z){
                    textArray[j][i] = textString.charAt(tmp);
                    tmp++;
                }               
            }
        }
    }

    for (i = 0; i < N+1; i++){
        for (j = 0; j < klucz.length; j++) {
            odszyfrowany = odszyfrowany + textArray[j][i]
        }
    }
    odszyfrowany= odszyfrowany.replace(/[0-9]/g, '');//usuwamy cyferki z stringa
    odszyfrowany = odszyfrowany.replace(/undefined/g, '');
    document.getElementById("wynik").value = odszyfrowany;
}

 
var slowo = document.getElementById("slowo");
var klucz = document.getElementById("klucz");

document.getElementById("myButton2").addEventListener("click", function() {
  szyfrowanie(slowo.value, klucz.value);
});
document.getElementById("myButton1").addEventListener("click", function() {
  deszyfrowanie(slowo.value, klucz.value);
});