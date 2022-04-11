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
