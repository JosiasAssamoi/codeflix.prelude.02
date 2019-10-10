module.exports = function pluck(list, propertyName){
    newArr = []
    for (obj of Object.values(list)){
            newArr.push(obj[propertyName])
        }
    return newArr
}
