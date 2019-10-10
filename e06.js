module.exports = function without(array,...values){
    newArray = []
    for (const arr of array){
        if(!values.includes(arr))
            newArray.push(arr)
    }
    return newArray
}