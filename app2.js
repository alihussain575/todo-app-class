// // console.log(1)

// // // setTimeout(()=>{
// // //     console.log(2)
// // // }, 2000)

// // console.log(2)

// // console.log(3)

// // new Promise((resolveOuter , reject) => {
// //    resolveOuter('');
// // });

// const item = new Promise((resolve , reject)=>{
//     reject('error here')
// })

// item.then((res)=>{
//   console.log(res , 'res')
// }).catch((err)=>{
//   console.log(err)
// })

// function changeTitle () {
//     alert(1)
// }

// document.getElementById('test').addEventListener('dblclick' , (event)=>{
//   event.target.innerHTML = Math.random()
// })

// prompt('get item')

// try {
//   const res = fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//     });
// } catch (err) {
//   console.log(err);
// } finally {

// }

// function myFunction() {
//   const message = document.getElementById("p01");
//   message.innerHTML = "";
//   let x = document.getElementById("demo").value;
//   try {
//     if(x.trim() == "") throw "empty";
//     if(isNaN(x)) throw "not a number";
//     x = Number(x);
//     if(x < 5) throw "too low";
//     if(x > 10) throw "too high";
//   }
//   catch(err) {
//     message.innerHTML = "Input is " + err;
//   }
// }

// throw new Error('some error here')

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   changeName(name) {
//     this.name = name;
//   }

// }

// const person = new Person('ali');

// person.changeName('shahir')

// console.log(person);

// const obj = {
//   name : 'ali',
//   age : 21
// }

// const obj2 = {
//   ...obj,
//   canRun : true
// }

// const arr1 = [1,2,3]

// const arr2 = [...arr1 , 4]

// console.log(arr2)

// const name = obj.name

// const {name: name2 , age} = obj

// console.log(name)

// const [one , first , three] = arr1

// console.log(first)

// function changeName(...rest){
//   const [name] = rest
//   console.log(rest)
// }

// changeName('shahir' , 'ali' , 'asif' , {
//   name : 'nouman'
// })

// const template = `<div>

// </div>`

// const time = '2000ms'
// const newName = 'nouman'

// const obj3 = {
//   time,
//   newName
// }

// console.log(obj3)

// const item = require('./name')

// item()

// const arr = [1 ,2 ,3, 4]
// const str = 'hello world'

// const arrItrator = arr[Symbol.iterator]()
// const strItrator = str[Symbol.iterator]()

// console.log(strItrator.next().value)
// console.log(strItrator.next())
// console.log(strItrator.next())
// console.log(strItrator.next())
// console.log(strItrator.next())
// strItrator.throw()
// console.log(strItrator.next())
// console.log(strItrator.next())
// console.log(strItrator.next())
// console.log(strItrator.next())
// console.log(strItrator.next().value)
// console.log(strItrator.next())
// console.log(strItrator.next())
// console.log(arrItrator , strItrator)

// for(let n of strItrator) {
//   console.log(n)
// }

// const posts = async () =>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json()
//   console.log(data)
// }

// posts()

// function* idGenerator() {
//   let number = 1;

//   // while (true) {
//   //   let incerement = yield number;
//   //   console.log(incerement)
//   //   if (incerement) {
//   //     yield incerement + number;
//   //   } else {
//   //     number++;
//   //   }
//   // }

//   yield function* () {

//   }
// }

// const id = idGenerator();

// console.log(id.next())
// console.log(id.next(2))
// console.log(id.next(4))


