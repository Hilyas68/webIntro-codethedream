const arr = [];
const arr1 = new Array("1", "2", 3, 4);
const arr2 = Array.of("1", "2", 3, 4)a;
arr.push("1", "2", 12, 4);

console.log("arr1=" + arr1);
console.log("arr=" + arr);
console.log("arr=" + arr2);
console.log("arr1=" + arr1.pop());
console.log("arr1=" + arr1);
console.log(arr.sort())
function sortCriteria(a, b){
return a - b;
}
console.log(arr.sort((a,b) => (a - b)));
console.log(arr.sort(sortCriteria));
console.log(arr.slice(0, 2 ));
console.log("arr=" + arr);
console.log(arr[10]);
console.log(arr.splice(1, 0, 20));
console.log("arr=" + arr);
console.log(arr.splice(1, 1, 0));
console.log("arr=" + arr);

console.log("mapped:" + arr1.map((a) => a * 2));
console.log("filtered:" + arr1.filter((a) => a >= 1));

arr1.forEach((item) => {
    console.log(item * 3);
});

console.log("found?:" + arr1.find((a) => a >= 2));