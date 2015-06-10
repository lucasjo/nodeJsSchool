function reduce(arr, fn, initial){
    return (function _reduce(index,value){
        if(index > arr.length -1) return value;
        return _reduce(index+1, fn(value,arr[index],index, arr))
    })(0,initial)
}

module.exports = reduce;