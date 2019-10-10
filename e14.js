module.exports = function pairs(obj){
    updated_obj = Object.entries(obj)
    newArr =[]
    for(const item of updated_obj){
        newArr.push(item)
    }
    return newArr
   }