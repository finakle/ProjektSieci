function szyfrowanie(alfabet){
    var tekst = document.getElementById("tekst").value.toLowerCase();
    var klucz = document.getElementById("klucz").value.toLowerCase();
    if(tekst == ""){
        alert('Tekst nie może byc pusty');
    }
    if(klucz == ""){
        alert('Klucz nie moze byc pusty');
    }
    if(tekst != "" && klucz != ""){
        let wynik = "";
        let idxKlucz = 0;
        for(let i = 0; i < tekst.length; ++i){
            if(tekst[i] == ' '){
                wynik+= ' ';
            }else{
                let pozycja = 0, pozKlucz = 0;
                for(let j = 0; j < 26; ++j){
                    if(alfabet[j] == tekst[i]){
                        pozycja = j;
                    }
                    if(alfabet[j] == klucz[idxKlucz]){
                        pozKlucz = j;
                    }
                }
                wynik+= alfabet[(pozycja + pozKlucz) % 26];
                idxKlucz+=1;
                if(idxKlucz > klucz.length - 1){
                    idxKlucz = 0;
                }
            }
        }
        document.getElementById("wynik").value = wynik;
    }
    return false;
}

function deszyfrowanie(alfabet){
    var tekst = document.getElementById("tekst").value.toLowerCase();
    var klucz = document.getElementById("klucz").value.toLowerCase();
    if(tekst == ""){
        alert('Tekst nie może byc pusty');
    }
    if(klucz == ""){
        alert('Klucz nie moze byc pusty');
    }
    if(tekst != "" && klucz != ""){
        let wynik = "";
        let idxKlucz = 0;
        for(let i = 0; i < tekst.length; ++i){
            if(tekst[i] == ' '){
                wynik+= ' ';
            }else{
                let index = (alfabet.indexOf(tekst[i]) - alfabet.indexOf(klucz[idxKlucz])) + 26;
                index%=26;
                wynik+= alfabet[index];
                idxKlucz+=1;
                if(idxKlucz == klucz.length){
                    idxKlucz = 0;
                }
            }
        }
        document.getElementById("wynik").value = wynik;
    }
    return false;
}