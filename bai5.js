function doi(){
    var array = [3,-1,5,7,-8,10,23,10,11,16];
    var a = document.getElementById("a").value * 1;
    var b = document.getElementById("b").value * 1;
    var temp =  0;
    temp = array[a];
    array[a] = array[b];
    array[b] = temp;
    console.log(array);
    }