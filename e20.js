module.exports = function sample(list, n=1){
    return (n===1) ? item = list[Math.floor(Math.random()*list.length)] : multipleSample(list,n)
    

}

function multipleSample(list,n){
    newArr=[]
    for(i=1;i<=n;i++)
        newArr.push(list[Math.floor(Math.random()*list.length)])

    return newArr
}