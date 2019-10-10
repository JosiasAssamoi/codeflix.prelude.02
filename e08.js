module.exports = function intersection(...arrays){
    let newArr = []
    let [first, ...rest] = arrays
    console.log(first)

    for(let elt of first){
        let present = true
        for(const other of rest){
            if(!other.includes(elt)){
                present=false
            }     
        }
        if(present){
            newArr.push(elt)
        }

    }
    return newArr
}