function tim(){
    var n = 10;
    document.getElementById("result").innerText = `Tong la: ${tongdequi(n)}`
}
function tongdequi(n){
    if(n == 1){
       return 1;
    }else{
        return n + tongdequi(n-1);
    }
}

   