    const PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34,
            26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63,
            55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53,
            45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ];

    const PC2 = [ 14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10,
            23, 19, 12, 4, 26, 8, 16, 7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55,
            30, 40, 51, 45, 33, 48, 44, 49, 39, 56, 34, 53, 46, 42, 50, 36, 29,
            32]
    
    const poczatkowaPermutacja = [ 58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36,
            28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32,
            24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19,
            11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7 ]
    
    const shift = [ 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2,
            2, 1 ]
    
    const tablicaRozszerzenia = [ 32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8,
    9, 10, 11, 12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 21,
    20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 28, 29, 30, 31, 32,
    1 ]

    const funkcjaPermutacji = [ 16, 7, 20, 21, 29, 12, 28, 17, 1, 15, 23, 26, 5,
    18, 31, 10, 2, 8, 24, 14, 32, 27, 3, 9, 19, 13, 30, 6, 22, 11, 4,
    25]

    const ostatniaPermutacja = [ 40, 8, 48, 16, 56, 24, 64, 32, 39, 7, 47,
    15, 55, 23, 63, 31, 38, 6, 46, 14, 54, 22, 62, 30, 37, 5, 45, 13,
    53, 21, 61, 29, 36, 4, 44, 12, 52, 20, 60, 28, 35, 3, 43, 11, 51,
    19, 59, 27, 34, 2, 42, 10, 50, 18, 58, 26, 33, 1, 41, 9, 49, 17,
    57, 25 ]
    
     const tablicaS = [
        [ 		[ 14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7 ],
                [ 0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8 ],
                [ 4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0 ],
                [ 15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13 ]
        ],
        [ 		[ 15, 1, 8, 14, 6, 11, 3, 2, 9, 7, 2, 13, 12, 0, 5, 10 ],
                [ 3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5 ],
                [ 0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15 ],
                [ 13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9 ]
        ],
        [ 		[ 10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 8 ],
                [ 13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1 ],
                [ 13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7 ],
                [ 1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12 ]
        ],
        [ 		[ 7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 15 ],
                [ 13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9 ],
                [ 10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4 ],
                [ 3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14 ]
        ],
        [ 		[ 2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9 ],
                [ 14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6 ],
                [ 4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14 ],
                [ 11, 8, 12, 7, 1, 14, 2, 12, 6, 15, 0, 9, 10, 4, 5, 3 ]
        ],
        [ 		[ 12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11 ],
                [ 10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8 ],
                [ 9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6 ],
                [ 4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13 ]

        ],
        [ 		[ 4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1 ],
                [ 13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6 ],
                [ 1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2 ],
                [ 6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12 ]

        ],
        [ 		[ 13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7 ],
                [ 1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2 ],
                [ 7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8 ],
                [ 2, 1, 14, 7, 4, 10, 18, 13, 15, 12, 9, 0, 3, 5, 6, 11 ]

        ] ]


        const permutacja = (key, matrix, size) => {
            let kluczeWyjsciowe="";
            for(let x = 0; x < size; x++){
                let pozycja = matrix[x];
                kluczeWyjsciowe+=key.charAt(pozycja-1);
            }
            return kluczeWyjsciowe;
           }


           const przesuniecieWlewo = (polowa) => {
               let tempChar = polowa.charAt(0);
               let reszta = polowa.substring(1);
               let wynik = reszta + tempChar;
               return wynik;
           }
        
        const wygenerujKluczePolaczen = (lewaPolowa, prawaPolowa, przesuniecia) => {
           var klucze = new Array();
            for(let i = 0; i < 16; i++){
                for(let j = 0; j < przesuniecia[i]; j++){
                    lewaPolowa = przesuniecieWlewo(lewaPolowa);
                    prawaPolowa = przesuniecieWlewo(prawaPolowa);
                }
                klucze.push(lewaPolowa + prawaPolowa);
            }
            return klucze;
        }
        
        const XOR = (a, b) => {
            let wynik = ""
            for (let i = 0; i < a.length; i++){
               wynik+= a[i]^b[i]
            }
            return wynik
        }

        function decNaBinarny(dec) {
            return (dec >>> 0).toString(2);
          }
        
        const TablicaS = (nowaPrawa) => {
            let budowniczy = ""
            
            for (let i = 0; i < 48; i +=6){
                let suma = nowaPrawa.substring(i,i+6);
                let pierwszy = suma.charAt(0);
                let drugi = suma.charAt(5);
                let sb = ""
                sb+=pierwszy
                sb+=drugi
                let wiersz = parseInt(sb, 2)
                let kolumna = suma.substring(1,5);
                let kol = parseInt(kolumna, 2)
                let wartosc = tablicaS[i/6][wiersz][kol];
                let x = decNaBinarny(wartosc);
                while(x.length < 4){
                    x = "0"+x;
                }
                budowniczy+=x;
            }
            return budowniczy
       }


   const zakoduj = (text, key) => {
         let textPrzedPoczatkowaPermutacja = permutacja(text, poczatkowaPermutacja, 64);
         let lewaStrona = textPrzedPoczatkowaPermutacja.substring(0,32); //PL
         let prawaStrona = textPrzedPoczatkowaPermutacja.substring(32);  //Pr

         let kluczPrzedPC1 = permutacja(key, PC1, 56);
         let C0 = kluczPrzedPC1.substring(0,28);
         let D0 = kluczPrzedPC1.substring(28);
         
         let kluczePolaczen = wygenerujKluczePolaczen(C0, D0,shift);
         var ostateczneKlucze = new Array();
         for(let x = 0; x < 16; x++){
            let kluczPermutacji = permutacja(kluczePolaczen[x], PC2, 48);
             ostateczneKlucze.push(kluczPermutacji);
         }
         for(let i = 0; i < 16; i++){
            let nastepnaLewa = prawaStrona;
             let rozszerzonaPrawa = permutacja(prawaStrona, tablicaRozszerzenia, 48);
             let WynikXORzKluczami = XOR(rozszerzonaPrawa, ostateczneKlucze[i]);
             
             let reducedOutput = TablicaS(WynikXORzKluczami);
             let spermutowane = permutacja(reducedOutput, funkcjaPermutacji, 32);
             let poprzedniOstatni = XOR(spermutowane, lewaStrona);
             
             lewaStrona = nastepnaLewa;
             prawaStrona = poprzedniOstatni;
             
         }
         
         let outputPrzedOstatecznaPermutacja = prawaStrona + lewaStrona;
         let wynik = permutacja(outputPrzedOstatecznaPermutacja,ostatniaPermutacja,64);
         
         return wynik;
             }

     
    const odszyfruj = (text, key) => {
         let textPrzedPoczatkowaPermutacja = permutacja(text, poczatkowaPermutacja, 64);
         let lewaStrona = textPrzedPoczatkowaPermutacja.substring(0,32); //PL
         let prawaStrona = textPrzedPoczatkowaPermutacja.substring(32);  //Pr
         
         let kluczPrzedPC1 = permutacja(key, PC1, 56);
         let C0 = kluczPrzedPC1.substring(0,28);
         let D0 = kluczPrzedPC1.substring(28);
         
         let kluczePolaczen = wygenerujKluczePolaczen(C0, D0,shift);
         var ostateczneKlucze = new Array();
         for(let x = 15; x >= 0; x--){
            let kluczPermutacji = permutacja(kluczePolaczen[x], PC2, 48);
             ostateczneKlucze.push(kluczPermutacji);
         }
         
         for(let i = 0; i < 16; i++){
            let nastepnaLewa = prawaStrona;
            let rozszerzonaPrawa = permutacja(prawaStrona, tablicaRozszerzenia, 48);
            let WynikXORzKluczami = XOR(rozszerzonaPrawa, ostateczneKlucze[i]);
             
            let reducedOutput = TablicaS(WynikXORzKluczami);
             let spermutowane = permutacja(reducedOutput, funkcjaPermutacji, 32);
             let poprzedniOstatni = XOR(spermutowane, lewaStrona);
             
             lewaStrona = nastepnaLewa;
             prawaStrona = poprzedniOstatni;
             
         }
         
         let outputPrzedOstatecznaPermutacja = prawaStrona + lewaStrona;
         let wynik = permutacja(outputPrzedOstatecznaPermutacja,ostatniaPermutacja,64);
         
         return wynik;
         
             } 
     

const textNaBinarny = (str = '') => {
    let wynik = '';
    wynik = str.split('').map(char => {
        let a = char.charCodeAt(0).toString(2);
        while(a.length<8){
            a="0"+a;
          }
       return a
    }).join('');
    return wynik;
 };

//dzielenie na 64bitowe bloki
const rozdzielDoZakodowania = (text) => {
    let wyniki = text.match(/.{1,8}/g)
    if (wyniki[wyniki.length-1].length != 8) {
        let zeros = 8 - wyniki[wyniki.length-1].length;
        for (let i = 0; i < zeros-1; i++)
            wyniki[wyniki.length-1] += "0";
        wyniki[wyniki.length-1] += zeros;
        return wyniki;
    }
    else {
        wyniki[wyniki.length] = "0000000~";
        return wyniki
    }
}


const rozdzielDoRozszyfrowania = (text) => {
    let wyniki = text.match(/.{1,64}/g)
    return wyniki;
}

//
export const takeIn = (text, key) => {
    let slowa = rozdzielDoZakodowania(text);
    console.log(slowa)
    let wynik = "";
    for (let i = 0; i < slowa.length; i++) {
         let str = textNaBinarny(slowa[i]);
         let zakodowane = zakoduj(str,key);
         wynik += zakodowane;
    }
    return wynik;
}


function binarnyNaText(str) {

    var nowyBinarny = []

    for (var i = 0, charsLength = str.length; i < charsLength; i += 8) {
        nowyBinarny.push(str.substring(i, i + 8));
    }

    var kodBinarnie = [];
    
    for (i = 0; i < nowyBinarny.length; i++) {
        kodBinarnie.push(String.fromCharCode(parseInt(nowyBinarny[i], 2)));
      }
    return kodBinarnie.join("");
    }

export const takeOut = (text, key) => {
    let slowa = rozdzielDoRozszyfrowania(text);
    let wynik = "";
    for (let i = 0; i < slowa.length; i++) {
        let odszyfrowane = odszyfruj(slowa[i],key);
        let str = binarnyNaText(odszyfrowane);
        if (slowa.indexOf(slowa[i]) == slowa.length - 1) {
            if ( str==="0000000~")
                break;
            let bity = str[str.length - 1];
            str = str.substring(0, str.length-bity);
        }
        wynik += str;
    }
    return wynik;
}