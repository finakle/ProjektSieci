function szyfrCezara(alfabet){
    let tekst = document.getElementById("tekst1").value.toLowerCase();
    let klucz = document.getElementById("klucz1").value.toLowerCase();
    if(tekst == ""){
        alert('Tekst nie moze byc pusty');
    }
    else if(klucz == ""){
        alert('Klucz nie moze byc pusty');
    }
    else if(klucz == null || klucz <= 0) {
        alert('Klucz powinien byc wartoscia dodatnia!')
    }

    else if(tekst.includes('0') || tekst.includes('1') || tekst.includes('2') || tekst.includes('3') || tekst.includes('4') || tekst.includes('5') || tekst.includes('6') || tekst.includes('7') || tekst.includes('8') || tekst.includes('9')) {
        alert("Tekst nie moze zawierac cyrf");
    }
    else{
        if(tekst != "" && klucz != ""){
            let wynik = "";
            klucz = parseInt(klucz);
            for(let i = 0; i < tekst.length; ++i){
                if(tekst[i] == ' '){
                    wynik+= ' ';
                }else{
                    let pozycja = 0;
                    for(let j = 0; j < 26; ++j){
                        if(alfabet[j] == tekst[i]){
                            pozycja = j;
                        }
                    }
                    wynik+= alfabet[(pozycja + klucz) % 26];
                }
            }
            document.getElementById("wynik").value = wynik;
            console.log(klucz);
        }
        console.log(klucz);
        return false;
    }
}