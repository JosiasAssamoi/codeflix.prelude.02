module.exports = function omit(object, ...keys){

    //recuperation du premier element des keys 
    const [FirstOpt] = keys
    const newObj = {}
    // sans la callback
    if(typeof FirstOpt !=='function' ){
        for (const [object_key,value] of Object.entries(object)){
            let present = false
            for(const keyname of keys)
                if(object_key === keyname){
                    present = true
                }
            if(!present)
                newObj[object_key]=value
        }
    }
    //sinon on est dans le cas d'une callback
    else {
        // on accede a la callback
        const cb = FirstOpt
        for (const [key,value] of Object.entries(object)){
            //si le calback renvoie true c'est que la value est un integer
            if(cb(value,key,object)){
                // on affecte a la cle de
                newObj[key]=value
            }
        }
    }
    return newObj
    

   }