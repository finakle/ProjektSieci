const macierzowyA = (tekst, klucz) => {
  if(tekst == ""){
    alert('Tekst nie moze byc pusty');
  }
  else if(klucz == ""){
    alert('Klucz nie moze byc pusty');
  }
  else if(klucz == null || klucz <= 0) {
    alert('Klucz powinien byc wartoscia dodatnia!!!')
  }
  else if(!klucz.includes('-')){
    alert("klucz powinien oddzielac liczby znakiem - ");
  }
  else{
    let slowoKlucz = klucz.replace(/-/g,'') //usuwamy - z klucza
    console.log(typeof(slowoKlucz));
    console.log(slowoKlucz);
    const N = slowoKlucz.length;
    console.log(klucz)
    console.log(tekst)
    const tablica = [...Array(N)].map(() => Array(N).fill("")); 
    let tmp = 0;
    var i = 0;
    var j = 0;
    let zaszyfrowane="";
    for (i = 0; i < N; i++){ //podstawiamy literki pod tablice
      for (j = 0; j < N; j++){
        tablica[i][j] = tekst.charAt(tmp);
        tmp++;
      }
    }

    for (i = 0; i < N; i++){ 
      for (j = 0; j < N; j++){
        if(tablica[i][j] == ''){
          tablica[i][j] = " ";
          tmp++;
        }
      }
    }

    for (i = 0; i < N; i++){
      for (j = 0; j < N; j++){  // slowoKlucz to string klucza bez - czyli np 3142 a -1 bo iteracja od 0 
      zaszyfrowane = zaszyfrowane + tablica[i][slowoKlucz[j]-1];
    //   console.log(zaszyfrowane);
    //   console.log(tablica[i][slowoKlucz[j]]);
      }
    }
    document.getElementById("wynik").value = zaszyfrowane;
  } 
}
  
  //funkcja odwracajaca liczby
const odwrocKlucz = (doOdwrocenia) => {
  return doOdwrocenia.split("").reverse().join("");
}
  
const macierzowyAdesz = (tekst,klucz) => {
  if(klucz == null || klucz <= 0) {
    alert('Klucz powinien byc wartoscia dodatnia!!!')
  }
  if(tekst == ""){
    alert('Tekst nie moze byc pusty');
  }
  if(!klucz.includes('-')){
    alert("klucz powinien oddzielac liczby znakiem - ");
  }
  else{
    let slowoKlucz1 = klucz.replace(/-/g,'') //usuwamy - z klucza
    const N = slowoKlucz1.length;
    let slowoKlucz = odwrocKlucz(slowoKlucz1)
    const tablica = [...Array(N)].map(() => Array(N).fill("")); 
    let tmp = 0;
    var i = 0;
    var j = 0;
    let odszyfrowane="";
    for (i = 0; i < N; i++){ //podstawiamy literki pod tablice
      for (j = 0; j < N; j++){
        tablica[i][j] = tekst.charAt(tmp);
        tmp++;
          // console.log(tablica[i][j]);
      }
    }
      // console.log(tablica);
    
    for (i = 0; i < N; i++){
      for (j = 0; j < N; j++){  // slowoKlucz to string klucza bez - czyli np 3142 a -1 bo iteracja od 0 
        odszyfrowane = odszyfrowane + tablica[i][slowoKlucz[j]-1];
          //   console.log(odszyfrowane);
      }
    }
    document.getElementById("wynik").value = odszyfrowane;
  }
}

var slowo = document.getElementById("slowo");
var klucz = document.getElementById("klucz");

document.getElementById("przycisk1").addEventListener("click", function() {
  macierzowyA(slowo.value, klucz.value);
});
document.getElementById("przycisk2").addEventListener("click", function() {
  macierzowyAdesz(slowo.value, klucz.value);
});