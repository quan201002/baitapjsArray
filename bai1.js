var array = [3,-1,5,7,-8,10,23,10,11,16];
var tongduong= 0;
for(i = 0 ; i < array.length ; i++){
    if(array[i] > 0){
        tongduong += array[i];
    }
}
document.getElementById("result").innerText = `tổng các phần tử dương trong mảng: ${tongduong}`;