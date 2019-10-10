module.exports = function isMatch(object, properties){
    for (property of Object.entries(properties)){
        if(object.hasOwnProperty(property[0])){
            if(object[property[0]] == property[1]){
                return true
            } 
        }
    }
    return false
}