module.exports = function difference(array,...arrays){
    newArr = []
    for(elt of array){
        let present = false
        for(other of arrays){
            if(other.includes(elt)){
                present =true
            }
        }
        if(!present)
            newArr.push(elt)
    }
 return newArr  
}