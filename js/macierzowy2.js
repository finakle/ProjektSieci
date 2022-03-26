const Szyfrowanie = (text, klucz) => {
  
    let tekst = text.replace(/ /g,'')
    klucz = klucz.toLowerCase();
    let N = 0;
    let tmp = 1;
    let zaszyfrowane="";
    if(tekst.length % klucz.length === 0){
        N = Math.floor(tekst.length / klucz.length)
    }
    else N = Math.floor(tekst.length / klucz.length) + 1
  
    const tablica = [...Array(klucz.length)].map(() => Array(N + 1).fill("")); 
    
    for(let x = 0; x < N; x ++) {
      for (i = 97; i < 123; i++){ 
        for (j = 0; j < klucz.length; j++){
          if(x === 0 ) {
            if (klucz.charAt(j) == String.fromCharCode(i)){ // podstawiamy za 1 rzad kolejnosc w cyfrachtablica[j][x] = tmp;
              tmp++;
            }
          }
          else break;
        } 
      }
    }
    console.log(tablica)
    tmp = 0;
    for (i = 1; i <= N; i++){ 
      for (j = 0; j < klucz.length; j++){
        tablica[j][i] = tekst.charAt(tmp);
        tmp++;
      }
    }
    for (j = 1; j <= klucz.length; j++){
      for (i = 0; i < klucz.length; i++) {
        if(tablica[i][0] === j){ // postawiamy pod stringa ciag we wlasciwej kolejosci
          zaszyfrowane = zaszyfrowane + tablica[i].join('') + " "
        }
      }
    }
    var wynik = zaszyfrowane.replace(/[0-9]/g, '');//usuwamy cyferki z stringa
    document.getElementById("wynik").value = wynik;
}

const Deszyfrowanie = (text, klucz) => {
  let tekst = text.replace(/ /g,'')
  klucz = klucz.toLowerCase();
  let N = 0;
  let tmp = 1;
  let rozszyfrowane="";
  // let liczba = tekst.length%klucz.length;
  
  if(tekst.length % klucz.length === 0){
    N = Math.floor(tekst.length / klucz.length)
  }
  else N = Math.floor(tekst.length / klucz.length) + 1

  const tablica = [...Array(klucz.length)].map(() => Array(N).fill("")); 
  console.log(N)
   for(let x = 0; x < N; x ++) {
    for (i = 97; i < 123; i++){ 
      for (j = 0; j < klucz.length; j++){
        if(x === 0 ) {
          if (klucz.charAt(j) == String.fromCharCode(i)){ // podstawiamy za 1 rzad kolejnosc w cyfrach
            tablica[j][x] = tmp;
            tmp++;
          }
        }
        else break;
      } 
    }
  }
  tmp = 0;
      
  for(let z = 0; z <=klucz.length; z++){
    for (j = 0; j < klucz.length; j++){ 
      for (i = 1; i <= N ; i++){
        if(tablica[j][0]==z ){
          tablica[j][i] = tekst.charAt(tmp);
          tmp++;             
        }
      }
    }
  }
  
  for (i = 0; i < N+1; i++){
    for (j = 0; j < klucz.length; j++) {
      rozszyfrowane = rozszyfrowane + tablica[j][i]
    }
  }
  rozszyfrowane= rozszyfrowane.replace(/[0-9]/g, '');//usuwamy cyferki z stringa
  rozszyfrowane = rozszyfrowane.replace(/undefined/g, '');
  rozszyfrowane = rozszyfrowane.replace(/-/g, '');
  document.getElementById("wynik").value = rozszyfrowane;
  document.getElementById("wynik2").value = N;
}
  

  
  //HECRNCEYI-ISEP-SGDI-RNTO-AAES-RMPN-SSRO-EEBT-ETIASEEHS-

var klucz = document.getElementById("klucz");
var tekst = document.getElementById("tekst");
  
document.getElementById("myButton2").addEventListener("click", function() {
  Szyfrowanie(tekst.value, klucz2.value);
});
document.getElementById("myButton1").addEventListener("click", function() {
  Deszyfrowanie(tekst.value, klucz2.value);
});