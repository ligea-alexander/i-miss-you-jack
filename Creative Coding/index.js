function saySomething (param) {
    console.log(param);
}

saySomething('hey there');

function add(a,b) {
   return  a+ b;
}

let result = add(5,7);
console.log(result);

let multiply = (a,b) =>{
return a*b;
}
console.log(multiply(5,7));

let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillRect(100, 100, 400, 400);