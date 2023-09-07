import { getCopy } from "./utils/getCopy";
import { isEqual } from "./utils/isEqual";


export type  Store = {
    [key: string]: any
}
export type Subscriber<T> = {
    id: number,
    onChangeCallback: ()=>void,
    selector: (state: T)=> any,
    isCanceled: boolean,
}
export type Selector<T> = (store: T)=> any;


export function CreateStore<T extends Store>(initialStore: T){
    let state: T = initialStore;
    let subscribersList: Array<Subscriber<T>> = [];
    let unSubCountInList = 0;

    const CleanCancelSibscribers = (forceClean = false)=>{
        if (unSubCountInList>100 || forceClean){
            subscribersList = subscribersList.filter((e)=>!e.isCanceled);
            unSubCountInList = 0;
        }
    };

    return {
        subscribe(selectorCallback: Selector<T>, onChangeCallback: ()=>void ){
            const ID = Date.now();
            subscribersList.push({
                id: ID,
                onChangeCallback,
                selector: selectorCallback,
                isCanceled: false,
            })

            CleanCancelSibscribers();

            return {
                unSubscribe(){
                    const obj = subscribersList.find(({id})=>id === ID);
                    if (!obj) return;
                    obj.isCanceled = true;
                    unSubCountInList++;
                },
                getStore:(selectorCallback: Selector<T>) => selectorCallback(state),
            }
        },
        updateStore(mutateCallback: (copy:T)=> void){
            const prevState = state;
            const newState = getCopy(state);
            mutateCallback(newState);
            state = newState;
    
            subscribersList.forEach((e)=>{
                if (e.isCanceled) return;
                if (!isEqual(e.selector(prevState),e.selector(newState))){
                    e.onChangeCallback();
                }
            });
            CleanCancelSibscribers(true);
        },
        getStore(){
            return state;
        },
    }
}