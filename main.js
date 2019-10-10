const first = require('./e01')
const  initial = require('./e02')
const  last = require('./e03')
const  rest = require('./e04')
const  flatten = require('./e05')
const  without = require('./e06')
const  union = require('./e07')
const  intersection = require('./e08')
const  difference = require('./e09')
const  indexOf = require('./e10')
const  lastIndexOf = require('./e11')
const  keys = require('./e12')
const values = require('./e13')
const pairs = require('./e14')
const invert = require('./e15')
const pick = require ('./e16')
const omit = require ('./e17')
const has = require ('./e18')
const size = require ('./e19')
const sample = require ('./e20')
const map = require ('./e21')
const pluck = require('./e22')
const isArray = require('./e23')
const isObject = require('./e24')
const isMatch = require('./e25')




/*console.log(first([4,8,1]))
console.log(initial([4,8,1],2))
console.log(last([4,8,1],2))
console.log(rest([5,4,3,2,1],2))
console.log(flatten([1,[2],[3,[4]]]))
console.log(rest([5,4,3,2,1]))
console.log(without([1,2,1,0,3,1,4],0))
console.log(union([1,2,3],[5,8,1],[2,1]))
console.log(intersection([1,4,3],[1,50,4],[4,81,1]))
console.log(difference([1,2,3],[2,5],[2]))
console.log(indexOf([1,2,3],2))
console.log(lastIndexOf([1,2,3,1,2,3],2))
console.log(keys({one:1,two:2,three:3}))
console.log(values({one:1,two:2,three:3}))
console.log(pairs({one:1,two:2,three:3}))
console.log(invert({Moe:"Moses",Larry:"Louis",Curly:"Jerome"}))
console.log(pick({name:"Joker",age:18,userId:1337},'name','age'))
console.log(pick({name:"Joker",age:18,userId:1337},function(value,key,object){
    return Number.isInteger(value)
    }))
console.log(omit({name:'moe',age:50,userid:'moe1'}, 'userid'))
console.log(omit({name:'moe',age:50,userid:'moe1'},function(value,key,object){
    return !Number.isInteger(value)
    }))
console.log(has({a:1,b:2,c:3},"b"))
console.log(size([1,2,3,4,5]))
console.log(size({one : 1 ,two:2,three:3}))
console.log(sample([1,2,3,4,5,6],3))
console.log(map([1,2,3],function(num){
    return num * 3 
}))
console.log(map({one:1,two:2,three:3},function(num){
    return num * 3 
}))
const stooges = [{name:'moe', age:40},{name:'larry', age:50},{name:'curly', age:60}]
console.log(pluck(stooges,'name'))
console.log(isArray([1,2,3]))
console.log(isObject({}))
console.log(isObject(1))*/
const stooges = {name:'moe', age:32}
console.log(isMatch(stooges, {age:32}))

















