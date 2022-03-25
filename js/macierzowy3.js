const szyfrowanie = (text, klucz) => {
    let textString = text.replace(/ /g,'')
    klucz = klucz.toLowerCase();
    let N = 0;
    let tmp = 1;
    let zaszyfrowany="";
    // if(textString.length % klucz.length === 0){
    //     N = Math.floor(textString.length / klucz.length)
    // }
    // else N = Math.floor(textString.length / klucz.length) + 1
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
 
var slowo = document.getElementById("slowo");
var klucz = document.getElementById("klucz");

document.getElementById("myButton2").addEventListener("click", function() {
  szyfrowanie(slowo.value, klucz.value);
});