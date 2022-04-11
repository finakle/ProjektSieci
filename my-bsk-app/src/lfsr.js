const wykonajXorslfsr=(wielomian,ziarno)=>{
    let wynik=0
    for(let i=0;i<wielomian.length;i++){
        if(wielomian[i]==1){
            wynik = wynik ^ parseInt(ziarno[i]);
        }
    }
    return wynik;
}

const przesunBity = (ziarno) => {
    for(let i = ziarno.length-1; i>0; i--){
        ziarno[i]=ziarno[i-1]
    }
    return ziarno
}

export function lfsr(ziarno, wielomian, length){
    if(wielomian.includes(",")){
    wielomian = wielomianToBit(wielomian)
    }
    var arr = Array.from(ziarno.toString().split(''));
    let klucz = new Array(length)
    let xor;
    for (let i = 0; i < length ; i++) {
        klucz[i] = arr[arr.length-1]
        xor = wykonajXorslfsr(wielomian,arr)
        arr = przesunBity(arr)
        arr[0]=xor
    }
    return  klucz; 
}

export const wielomianToBit = (wielomian) =>{
    wielomian = wielomian.replace(/\s/g, '');
    let tab = wielomian.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    const max = Math.max(...tab);
    let wynik=""
    for(let i=1;i<=max;i++){
        if(tab.includes(i)){
            wynik+=1
        }
        else{
            wynik+=0
        }
    }
    return wynik
}


const textNaBinarny = (str = '') => {
    let res = '';
    res = str.split('').map(char => {
        let a = char.charCodeAt(0).toString(2);
        while(a.length<7){
            a="0"+a;
          }
       return a
    }).join('');
    return res;
 };

export const szyfrowanie=(text,ziarno,wielomian)=>{
    wielomian = wielomianToBit(wielomian)
    let binaryText = textNaBinarny(text)
    let klucz = lfsr(ziarno,wielomian, binaryText.length)
    let wynik = performXors(binaryText,klucz)
    return wynik
}

const performXors=(text,klucz)=>{
    let wynik=""
    for(let i=0;i<text.length;i++){
        wynik+= text[i]^klucz[i]
    }
    return wynik;
}

export const deszyfrowanie=(text,ziarno,wielomian)=>{
    wielomian = wielomianToBit(wielomian)
    let klucz = lfsr(ziarno,wielomian, parseInt(text.length))
    let wynik = performXors(text,klucz)
    let textWynik = binarnyNaText(wynik)
    return textWynik
}

 function binarnyNaText(str) {

    var nowyBin = []

    for (var i = 0, charsLength = str.length; i < charsLength; i += 7) {
        nowyBin.push(str.substring(i, i + 7));
    }

    var binKod = [];
    
    for (i = 0; i < nowyBin.length; i++) {
        binKod.push(String.fromCharCode(parseInt(nowyBin[i], 2)));
      }
    return binKod.join("");
    }