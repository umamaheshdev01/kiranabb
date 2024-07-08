// print statement
// console.log("Heloo")

// variable
// let x = 1
// let y = "Kiran"

// console.log(x,y)


// objects
// let z ={
//     name : 'Uma',
//     class : 10,
//     age : 6
// }

// console.log(z)
// console.log(z.name)

// arrays

// let array = [1,2,3,4]
// console.log(array)


//functions

// const addTwoNumber = (x,y)=>{
//    return x+y;
// }

// console.log(addTwoNumber(1,2))


//important

// let arr = [1,2,3,4]
             

// //redcue

// let sum = arr.reduce((a,b)=>{

//      return a+b;

// })

// console.log(sum)

// //map
// arr.map( (element)=>{console.log(element+1)} )

//filter
//without zeroes
// let arr2 = arr.filter( (element)=>{

//     //odd elements
//     if(element%2==0){
//         return false
//     }
//     else{
//         return true
//     }

// } )


// console.log(arr2)


// reduce




// array of objects




// create a new array which contains only the names
// names = ['Shirt','bra']
//map

// cart.map( (e)=>{
//     console.log(e.name)
// } )

// let names = cart.map( (e)=>{
//     return e.name
// })

// console.log(names)


// 

let cart = [
    {
        id : 1, 
        name  : 'Shirt',
        price : 200,
        quantity : 2
    },
    {
        id :2,
        name  : 'Bra',
        price : 300,
        quantity : 3
    },
    {
        id :3,
        name  : 'Frock',
        price : 600,
        quantity : 1
    }
]

// get the ids of all items whose price is less than 500 
// arr = [1,2]

// C R U D
// c - create object 
// r - read 
// u - update
// d - delte

// map
// let items = cart.filter((e)=>{
//     if(e.price<500){
//         return true
//     }

//     return false
// })

// let ids = items.map((e)=>{return e.id})
// console.log(ids)


// find cart value
// reduce

// let sum = cart.reduce((k,e)=>{
//    return k + e.price * e.quantity
// },0)
// console.log(sum)




// read 


// create 

// let x = 'Kurtha'
// let y = 200
// let z = 3
// let pid = 4


// let product = {
//     id : pid,
//     name  : x,
//     price : y,
//     quantity : z
// }

//cart = [...cart,product]
// cart.push(product)
// console.log(cart)



// updation 
// id-2 quan-10

// cart = cart.map((e)=>{
 
//     if(e.id==2){
//         e.quantity = 10
//     }

//    return e
// })

// console.log(cart)

// updaton using filter

//find that element
//filter the array by removing this element
//update the element and push it back


// let element = cart.find(e=>{
//    return e.id==2
// })

// element.quantity = 10
// // console.log(element)

// cart = cart.filter((e)=>{
//     if(e.id==2){
//         return false;
//     }

//     return true;
// })


// cart.push(element)
// console.log(cart)


//delete id - 3

cart = cart.filter(e=>{
    if(e.id==3){
        return false;
    }
    return true;
})

console.log(cart)




