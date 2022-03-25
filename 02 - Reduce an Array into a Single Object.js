let votes = ["a", "b", "b", "c", "c", "c", "d", "d", "d", "d"]
let initialValue = {}
let reducer = function (tally, vote) {
     if (!tally[vote])
          tally[vote] = 1
     else
          tally[vote]++
     return tally
}
let result = votes.reduce(reducer, initialValue)
console.log(result)