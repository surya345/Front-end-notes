console.log('Hello world');

let username: string;
let age: number;
let taskCompleted: boolean;
let hobbies: Array<string>;
// let hobbies: string[];
// username = 'John';
// age = 25;
// taskCompleted = true;
// hobbies = ['Singing', 'Dancing', 'Watching TV'];
// console.log(hobbies);

enum fruits{
    Mango,
    banana,
    Strawberry
}

// console.log(fruits);
//  let c: string = fruits[-1];
//  console.log(c);

//  let variable:any='hello';  // any does not folow strict type casting
// but unknown does
//  let variable1:number=variable;
//  console.log(variable);

// const show=():void =>{

// }

// const show1=():any =>{

// }

// const show2=():string =>{
//     return 'hello';
// }

// function saysurya(username:string):string{
//     return ` hello ${username}`;
// }
// console.log(saysurya('Peter'));

// let person:object;
// person={
//     fname:'suryansh',
//     age:24
// }

// console.log(person);
interface person{
    fname:string,
    lname:string
}
let p: person = {
    fname:'surya',
    lname:'asbjhas'
}

console.log(p.fname);