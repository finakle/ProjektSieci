function szyfrowanie(alfabet){
    var tekst = document.getElementById("tekst").value.toLowerCase();
    var klucz = document.getElementById("klucz").value.toLowerCase();
    
    if(tekst == ""){
        alert('Tekst nie może byc pusty');
    }
    if(klucz == ""){
        alert('Klucz nie moze byc pusty');
    }
    // \d === [0-9]
    // if(klucz.includes('0') || klucz.includes('1') || klucz.includes('2') || klucz.includes('3') || klucz.includes('4') || klucz.includes('5') || klucz.includes('6') || klucz.includes('7') || klucz.includes('8') || klucz.includes('9')) {
    //     alert("Klucz nie moze zawierac cyrf");
    // }

    function check_num(str){
        var reg = /[0-9]/g;
        var ntab = str.match(reg);
        if(ntab!=null) {
            alert("klucz nie moze zawierac cyfry");
            return false;
        }
    }
    check_num(klucz);


    if(tekst != "" && klucz != ""){
        let wynik = "";
        let idxKlucz = 0;
        for(let i = 0; i < tekst.length; ++i){
            if(tekst[i] == ' '){
                wynik+= ' ';
            }else{
                let pozycja = 0, pozKlucz = 0;
                // let indexPowtarzalny = i % klucz.lenght;
                for(let j = 0; j < 26; ++j){
                    console.log(idxKlucz);
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
        console.log(klucz);
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
    function check_num(str){
        var reg = /[0-9]/g;
        var ntab = str.match(reg);
        if(ntab!=null) {
            alert("klucz nie moze zawierac cyfry");
            return false;
        }
    }
    check_num(klucz);

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