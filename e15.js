module.exports = function invert(obj){
    const tab = Object.entries(obj)
    const newObj ={}
    for(const [key,value] of tab){
        newObj[value]=key
    }
    return newObj
   }