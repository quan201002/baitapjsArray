var a = [];
function themso(){
    var input = document.getElementById("input").value*1;
    a.push(input);
    var res = '| ';
    for(var i = 0 ; i < a.length ; i++){
        res += " " + a[i] + " |";
    }

    document.getElementById("mang").innerText = `Mảng là: ${res}`;
}
function tongduong(){
    if(a.length == 0){
        document.getElementById("result1").innerText ="Mảng không có giá trị vui lòng nhập vào"
    }
    else{
        var tongduong= 0;
        for(i = 0 ; i < a.length ; i++){
        if(a[i] > 0){
        tongduong += a[i];
         }
        }
    document.getElementById("result1").innerText = `tổng các phần tử dương trong mảng: ${tongduong}`;}
}
function demso(){
var tongSoduong= 0;
for(i = 0 ; i < a.length ; i++){
    if(a[i] > 0){
        tongSoduong += 1;
    }
}
document.getElementById("result2").innerText = `tổng các phần tử dương trong mảng: ${tongSoduong}`;
}
function timsonhonhat(){
    
var min = a[0];
for(i = 1 ; i < a.length ; i++){
    if(a[i] < min){
        min = a[i];
    }
}
document.getElementById("result3").innerText = `phần tử nhỏ nhất trong mảng: ${min}`;
}
function timsoduongnhonhat(){
var start = 0;
var startIndex = 0;
var i = 0;
var min = 0;
for(i = 0 ; i < a.length ; i++){
    if(a[i] > 0){
       start = a[i];
        startIndex = i;
        i = a.length;
    }
}
min = a[startIndex];
for(i = startIndex + 1 ; i < a.length ; i++){
    if(a[i] < min && a[i] > 0){
        min = a[i];
    }
}
document.getElementById("result4").innerText = `phần tử dương nhỏ nhất trong mảng: ${min}`; 
}
function timsochancuoicung(){
    var chancuoi = -1;
    for( var i = a.length - 1 ; i >= 0 ; i--){
        if(a[i] % 2 == 0){
            chancuoi = a[i];
            i = -1;
        }
    }
   if(chancuoi == -1){
    document.getElementById("result5").innerText = `mảng không có số chẵn`;
   }else{
    document.getElementById("result5").innerText = `Số chẵn cuối cùng trong mảng là: ${chancuoi}`;
   }
}
function doicho(){
    var vt1 = document.getElementById("vt1").value * 1;
    var vt2 = document.getElementById("vt2").value * 1;
    var temp =  0;
    var b = a;
    temp =b[vt1];
  b[vt1] =b[vt2];
  b[vt2] = temp;
   var res = '';
   for(i = 0 ; i <b.length ; i++){
    res = res + "| " +b[i] + " |";
   }
   document.getElementById("result6").innerText = `Mảng sau khi đổi chỗ hai vị trí là : ${res}`;
  temp = b[tv2];
  b[tv2] = b[tv1];
  b[tv1] = temp;
}
function sapxeptangdan(){
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
document.getElementById("result7").innerText = res;
}
function timsonguyentodautien(){
    for(var i = 0 ; i < a.length ; i++){
       var n = a[i];
       var count = 0;
       for(var j = 1 ; j <= n ; j++){
        if(n == 1){
            count = 3;
        }
        if(n % j == 0){
            count++;
        }
       }
       if(count == 2){
        document.getElementById("result8").innerText =`Số nguyên tố đầu tiên trong mảng là:${a[i]}`;
        break;
       }
    }
    if(i == a.length){
        document.getElementById("result8").innerText =`Mảng không có số nguyên tố`;
    }
}
function demsonguyen(){
    var count = 0;
    for(var i = 0 ; i < a.length ; i++){
        if( a[i] % 1 == 0){
            count++;
        }
    }
    document.getElementById("result9").innerText = `Số lượng số nguyên trong mảng là : ${count}`;
}
function sosanh(){
    var soAm = 0 ;
    var soDuong = 0;
    for(var i = 0 ; i < a.length ; i++){
        if(a[i] > 0){ soDuong++;}
        if(a[i] < 0){ soAm++;}
    }
    if(soDuong < soAm){
        document.getElementById("result10").innerText =" Số lượng số âm nhiều hơn số lượng số dương";
    }
    if(soDuong > soAm){
        document.getElementById("result10").innerText =" Số lượng số dương nhiều hơn số lượng số âm";
    }
    if(soDuong == soAm){
        document.getElementById("result10").innerText ="Số lượng số dương bằng số lượng số âm";
    }
}