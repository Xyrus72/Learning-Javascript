//                   Variable
var a= 'st' #var can be changed

let b='str' #let cannot be changed in same blck{} .to use the same variable u gotta have use another block{ }.then u can use the same variable.

const c='me' #this cant change.



//    If ,else, else if

if (condition){
    statement;
}
else if (another condition){
    statement;
}
else{
    statement;
}


//        and ,or 

and = &&
or = ||



//         LOOPS
// 1
for (let i=0'loop starting', i<5 'condition',i++ 'increment'){
    statement;
}

// 2
let obj={
    a : 90,
    b : 10,
    c : 20,
}
for (let a in obj) {//#its more like ((for i in a:)

    console.log(obj[a]) //#it will print 90,10,20
    console.log(a) //#irt will print a,b,c
}

// 3 while loop
// while (condition){
//     statement;
//     i++
// }
let i=0

while (i<5){
    console.log(i);
    i++;
}



//      function
function func_name(para1,para2){
    statement'
}
console.log(func_name(1,2))



//     type check

let s='sdsdsd'
console.log(typeof s)


//            take user input

//for stirng
let a=prompt()

//for int

let a=parseInt(prompt())

//for float
let a=parseFloat(prompt())


// V.V note
//if anyone use those on vs code or any ide then the gotta import
const prompt = require('prompt-sync')();
