module.exports = function pick(object, ...keys){

    //recuperation du premier element des keys 
    const [FirstOpt] = keys
    const newObj = {}

    if(typeof FirstOpt !=='function' ){
        // pour toutes les cles
        for (const key of keys){
            if(key !== 'undefined'){
                // key vaut name puis age
                newObj[key] = object[key]
            }
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