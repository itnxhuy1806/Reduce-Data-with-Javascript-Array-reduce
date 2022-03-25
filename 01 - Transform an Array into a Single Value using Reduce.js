let data =[1,2,3,4,5,6,7,8,9,10]
let reducer = function(accumulator, item){
     return accumulator + item
}
let initialValue = 0 ;
let sum = data.reduce(reducer, initialValue)
console.log(sum)