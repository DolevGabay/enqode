const array = [12, 10, 22, 5, 25];
for(let i = 0; i < array.length; i++){
setTimeout(function(){
console.log("The element in position " + i + " is: " + array[i]);
}, 5000);
}