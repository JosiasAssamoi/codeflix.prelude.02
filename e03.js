module.exports = function last(arr,n=1){
    return (n==1) ? arr[arr.length -1] : arr.splice(-n)
}