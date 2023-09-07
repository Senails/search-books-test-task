import { isPriimitive } from "./isPriimitive";


export function getCopy<T>(obj:T):T{
    if (isPriimitive(obj)) return obj;
    if (Array.isArray(obj)) return obj.map((elem)=>getCopy(elem)) as T;

    const copy: {[key:string]: any} = {};
    for(const key in obj){copy[key] = getCopy(obj[key]);}

    return copy as T;
}