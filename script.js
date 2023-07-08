//task 1

// function min(a,b){
//     if(typeof (a) === 'number'){
//         return Math.min(a,b)
//     }else if(Array.isArray(a)){
//         return Math.min(...a)
//     }else if(typeof (a) === 'object' && typeof (b) === 'object'){
//         let arr = Object.values(a)
//         let arr2 = Object.values(b)
//         return Math.min(...arr, ...arr2)
//     }
//     else if(typeof (a) === 'object'){
//         let arr = Object.values(a)
//         let ar = Math.min(...arr)
//         return ar
//     }
// }

// console.log(
//     min(1,2),
//     min([1,2]),
//     min({a: 21, b:55}),
//     min({a: 10, b: 12}, {a: 3, b:22})
// );

// task 2

// let arrey = [
// [{a: {price:20}}],
// [{a: {price: 35}}],
// [{a: {price: 44}}]
// ]

// let total = arrey[0][0].a.price + arrey[1][0].a.price +arrey[2][0].a.price  

//task 3

// console.log(total);

// let user ={
//     name: 'Aziz',
//     age: 16,
//     study:'OIS',
//     car: 'jentra',
// }
// let pasport = {
//     serries:'AC',
//     number: 2323232323,
//     data: 2023-11-11,
//     dataexp: 2033-11-11,
// }

// let newObj = Object.assign({}, user,{pasport})
// let key = Object.keys(newObj)
// let value = Object.values(newObj)

// let arr = [...value, ...key]

// console.log(
//     arr
// );

//task 4

// let arr = [1,2,false,'hello',24,'world', undefined, null,'error',22 ]

// let string = 0
// let number = 0
// let boolean = 0
// let object = 0
// let others = 0

// arr.filter(item => {
//     if(typeof (item) === 'string'){
//         string++
//     }else if(typeof (item) === 'number'){
//         number++
//     }else if(typeof (item) === 'boolean'){
//         boolean++
//     }else if(typeof (item) === 'object'){
//         object++
//     }else{
//         others++
//     }
// })

// console.log({
//     string,
//     number,
//     boolean,
//     object,
//     others});
//

// task 5

// let cars = [17000,37000,13000,12000,14000,5000,10000,43000,80000,2000,2000]

// let from = prompt('from')
// let up = prompt('up')

// let carprice = cars.filter(item => item >= from && item <= up)

// console.log(carprice);

// task 6

// let name = 'Alex'
// let money = 10000
// let account = 7777

// let names = prompt('What is your name')
// if(name === names){
//     let number = prompt('Your number Shoud be 7777')
//     if(number === '7777'){
//         let mine = prompt('How mush your money')
//         if(mine <= money){
//             alert(
//                 `
//                 succsesful
//                 Your balance was: ${money}
//                 Your balance now: ${money - mine}
//                 How mush cashed out: ${mine}  
//                 `
//             )
//         } else{
//             console.log('Рудостотачно средство');
//         }
//     }else{
//         console.log('Ползовател не Найден');
//     }
// } else{
//     console.log('go home');
// }

// task 7

// let number = ''
// let limit = 0

// do{
//     number = prompt('write your number ')
//     if(number === '7777'){
//         break;
//     }
//     limit++
// }
// while(
//     limit !== 3
// )

// Сегодняшная ДЗ

let arr = ['maxrshox',['mexdi','farrux'],[[['emin','samir'], 'jafar']]]

function AArray(arr) {
    let IntheArey = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        IntheArey = IntheArey.concat(AArray(arr[i]));
      } else {
        IntheArey.push(arr[i]);
      }
    }
    return IntheArey;
    }
    let flattened = AArray(arr);
  console.log(flattened);