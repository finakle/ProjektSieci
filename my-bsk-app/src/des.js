const PC1 = [57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34,
        26, 18, 10, 2, 59, 51, 43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63,
        55, 47, 39, 31, 23, 15, 7, 62, 54, 46, 38, 30, 22, 14, 6, 61, 53,
        45, 37, 29, 21, 13, 5, 28, 20, 12, 4 ];

 
const poczatkowaPermutacja = [ 58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36,
        28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 64, 56, 48, 40, 32,
        24, 16, 8, 57, 49, 41, 33, 25, 17, 9, 1, 59, 51, 43, 35, 27, 19,
        11, 3, 61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 31, 23, 15, 7 ]

        const permutacja = (key, matrix, size) => {
            let kluczeWyjsciowe="";
            for(let x = 0; x < size; x++){
                let pozycja = matrix[x];
                kluczeWyjsciowe+=key.charAt(pozycja-1);
            }
            return kluczeWyjsciowe;
           }      

   const zakoduj = (text, key) => {
         let textPrzedPoczatkowaPermutacja = permutacja(text, poczatkowaPermutacja, 64);
         let lewaStrona = textPrzedPoczatkowaPermutacja.substring(0,32); //PL
         let prawaStrona = textPrzedPoczatkowaPermutacja.substring(32);  //Pr

         let kluczPrzedPC1 = permutacja(key, PC1, 56);
         let C0 = kluczPrzedPC1.substring(0,28);
         let D0 = kluczPrzedPC1.substring(28);
         
         return ;
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
