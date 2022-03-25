let bigData = []
for (let i = 0; i < 1000000; i++) {
     bigData.push(i)
}
console.time('fillter_map')
let filter_map_bigData = bigData.filter(function (value) {
     return value % 2 == 0
}).map(function (value) {
     return value * 2
})
console.timeEnd('fillter_map')
console.time('reduce')
let reduce_bigData = bigData.reduce(function (accumulator, value) {
     if (value % 2 == 0)
          accumulator.push(value * 2)
     return accumulator;
}, [])
console.timeEnd('reduce')

