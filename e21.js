module.exports = function map(list, iterateCb){
    const converted_list = (typeof list === "object") ? Object.values(list) : list
    newArr = []
    for(elt of converted_list)
        newArr.push(iterateCb(elt))
    return newArr
}

