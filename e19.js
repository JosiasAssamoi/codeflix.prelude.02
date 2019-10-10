module.exports = function size(list){
    return (typeof list) ==='object' ? Object.keys(list).length : list.length

}