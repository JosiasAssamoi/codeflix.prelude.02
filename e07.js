module.exports = function union(...arrays){
    let union = [].concat(...arrays)
    return union
}