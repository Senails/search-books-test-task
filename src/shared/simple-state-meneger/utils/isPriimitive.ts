export function isPriimitive(test:any):boolean {
    return test !== Object(test);
}