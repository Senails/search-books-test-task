export type Trotling = (callback: ()=>void ) => void


export function CreateTrotling(ms: number):Trotling{
    let lastUsed = Date.now();

    return (callback)=>{
        if ((Date.now() - lastUsed) < ms) return;
        lastUsed = Date.now();
        callback();
    }
}