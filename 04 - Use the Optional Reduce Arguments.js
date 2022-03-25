let data = [1, 2, 3, 4, 5]
let initialValue = 0
let reducer = function (accumulator, item, index, array) {
     if (index == array.length - 1)
          return (accumulator + item) / array.length
     return accumulator + item
}
let average = data.reduce(reducer, initialValue)
console.log(average)