import { isPriimitive } from "./isPriimitive";


export function isEqual(obj1:any, obj2:any): boolean{
    if (isPriimitive(obj1) && !isPriimitive(obj2)) return false;
    if (!isPriimitive(obj1) && isPriimitive(obj2)) return false;
    if (isPriimitive(obj1) && isPriimitive(obj2)) return obj1 === obj2;
    

    if (!Array.isArray(obj1) && Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && !Array.isArray(obj2)) return false;
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if (obj1.length !== obj2.length) return false;
        for(let i = 0; i< obj1.length;i++){
            if (!isEqual(obj1[i],obj2[i])) return false;
        } 
        return true;
    }

    for(let key in obj1){
        if (!isEqual(obj1[key],obj2[key])) return false;
    }
    for(let key in obj2){
        if (!isEqual(obj1[key],obj2[key])) return false;
    }
    return true;
}