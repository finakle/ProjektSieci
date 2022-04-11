// text = CRYPTOGRAPHY , N=3
const szyfrowanie = (text, klucz) => {
  if(text == ""){
    alert('Tekst nie moze byc pusty');
  }
  else if(klucz == null || klucz <= 0) {
    alert('Klucz powinien byc wartoscia dodatnia!!!')
  }

  const N = parseInt(klucz)
  console.log(N);
  const textArray = [...Array(text.length)].map(() => Array(N).fill("")); //tworzenie pustej tablicy | idzie pionowo 
  let zaszyfrowany="";
  var i = 0; // 12 liczba kolumn
  var j = 0; // 3 liczba wierszy
  var stan = false; //stan pozwala nam sprawdzic czy idziemy w gore czy w dol plotka
  //uzupelnianie tablicy 
  while (i < text.length) { //dopoki liczba kolumn < 12
    textArray[i][j] = text.charAt(i);  // dopóki <12 pobieramy znaki 
    if(!stan) j++; //jeżeli false to j++
    else j--;   // inaczej zmiejszamy 
    if (j + 1 >= N || j - 1 < 0) stan = !stan //zmieniamy kierunek jeżeli j dojdzie do wartosci klucza 
    i++; 
  }
  
  console.log(typeof(N));
  
  parseInt(N)

    //wypisywanie z tablicy zaszyfrowanego ciagu 
  for (i = 0; i < N; i++){ // i to liczba kolumn = 3
    for (j = 0; j < text.length; j++){ //j to liczba wierszy = 12
        if (textArray[j][i] == "") continue;
        else zaszyfrowany = zaszyfrowany + textArray[j][i];
      }
  }
    // console.log(textArray);
    // alert(zaszyfrowany);
  document.getElementById("wynik").value = zaszyfrowany;
    //}
}
  
const deszyfrowanie = (text,klucz) => {
  if(klucz == null || klucz <= 0) {
    alert('Klucz powinien byc wartoscia dodatnia!!!')
  }
  if(text == ""){
    alert('Tekst nie moze byc pusty');
  }
  const N = parseInt(klucz)
  const textArray = [...Array(text.length)].map(() => Array(N).fill("")); //tworzymy taka sama tabele jak do szyfrowania
  let odszyfrowany=""; 
  var i = 0;
  var j = 0;
  var tmp = 0; //dodatkowa zmienna zeby wiedziec gdzie w tablicy wstawiac literki
  var stan = false;
  
    //wypelniamy tablice, tam gdzie powinny byc literki wstawiamy "-"
  while (i < text.length){
    textArray[i][j]='-'; //podstawiamy za literki dowolny ktory nie jest pusty
    if(!stan) j++;
    else j--;
    if (j + 1 >= N || j - 1 < 0) stan = !stan;
    i++;
  }
    
    //CTARPORPYYGH
  
    //wypelnianie tablicy znakami 
    //tak jak czytalismy w szyfrowaniu tak tutaj uzupelniamy
  for (i = 0; i < N; i++){
    for (j = 0; j < text.length; j++){
      if (textArray[j][i] == "") continue;
      else textArray[j][i] = text.charAt(tmp);
        tmp++;
    }
  }
  
    // if(N == null || N <= 0) {
    //     alert('Klucz powinien byc wartoscia dodatnia!!!')
    // }
    // if(text == ""){
    //     alert('Tekst nie moze byc pusty');
    // }
    // else{
  for (i = 0; i < text.length; i++){
    for (j = 0; j < N; j++){
      if (textArray[i][j] == "") continue;
      else odszyfrowany = odszyfrowany + textArray[i][j];
    }
  }
    //   alert(odszyfrowany);
      document.getElementById("wynik").value = odszyfrowany;
    //}
}

var klucz = document.getElementById("klucz");  
var wiadomosc = document.getElementById("wiadomosc");

document.getElementById("myButton").addEventListener("click", function() {
  szyfrowanie(wiadomosc.value,klucz.value);
});
  
document.getElementById("myButton2").addEventListener("click", function() {
  deszyfrowanie(wiadomosc.value,klucz.value);
});
  

  