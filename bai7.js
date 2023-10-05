var a = [];
    function sapxep(){
        var input = document.getElementById("phantu").value * 1;
        a.push(input);
        var i =0;
        var j = 0;
        var mark = 0;
        var temp = 0;
        var min = 0;
        for( i = 0 ; i < a.length - 1 ; i++){
             min = a[i];
            for(j = i+1  ; j < a.length ; j++){
                if(a[j] <= min){
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                    min = a[i];
                }  
            } 
        }
        var res= "";
        for(i = 0 ;i < a.length ; i++){
        res = res + a[i] + " ";
    }
    document.getElementById("result").innerText = res;
    }

