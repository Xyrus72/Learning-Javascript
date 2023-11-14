//task-1
// function processInput(num1) {
   
//     var result = num1 ** 3;
//     return result;
// }
// console.log(processInput(4)); 

//task-2
// function matchFinder(string1, string2) {
//     if (string1.includes(string2)) {
//         return true;
//     } else if (string2.includes(string1)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// var a = prompt();
// var [b, c] = a.split(',');
// console.log(matchFinder(b, c));

//task-3
// function sortMaker(arr){ 
// if (arr[0]<arr[1]){
//     [arr[0],arr[1]]=[arr[1],arr[0]];
//     return arr;
    
// }
// else if (arr[0]==arr[1]){
//     return 'equal'
// }
// else if(arr[0]<0 || arr[1]<0){
//     return 'Invalid Input'
// }
// else{
//     return arr;
// }
// }
// var arr=[4,4];
// console.log(sortMaker(arr));

// task-4

// function findAddress(obj) {
//     var st=''

//     for (var key in obj ){
//          st+=obj[key]+',';


//     }
// st = st.substring(0, st.length - 1);
// return st

// }
// var a={street:10,house:'15A',society:'EarthPerfect'}
// console.log(findAddress(a))

//task-5
// function canPay(changeArray, totalDue) {
//     var a=changeArray.length;
//     var c=0

//     for (var i=0; i<a; i++){
//         c+=changeArray[i];
//     }
//     if (c<totalDue){
//         return false;
//     }else
//     {
//         return true;
//     }
// }
// console.log(canPay([11,2,5],10))