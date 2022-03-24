function szyfrCezara(alfabet){
    let tekst = document.getElementById("tekst1").value.toLowerCase();
    let klucz = document.getElementById("klucz1").value.toLowerCase();
    if(tekst == ""){
        alert('Wpisz tekst');
    }
    if(klucz == ""){
        alert('Wpisz klucz');
    }
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
    }
    return false;
}