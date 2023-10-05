
var min= array[0];
for(i = 1 ; i < array.length ; i++){
    if(array[i] < min){
        min = array[i];
    }
}
document.getElementById("result").innerText = `phần tử nhỏ nhất trong mảng: ${min}`;