var  number = [1,400,12,34]
var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    i = i + 1;
}
console.log(`배열의 총 합은 ${total}입니다`);