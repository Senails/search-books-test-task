// Create Store for React     
import { CreateStore, Selector, Store } from "./store";
import { useEffect, useState } from "react";

export function CreateReactStore<T extends Store>(initialStore: T){
    const {subscribe, updateStore, getStore} = CreateStore<T>(initialStore);

    return {
        useSelector(selectorCallback: Selector<T>){
            const [state,setState] = useState<boolean>(false);
            const forceRender = ()=>{setState(!state)};
            const { unSubscribe, getStore } = subscribe(selectorCallback,forceRender);
            useEffect(()=>()=>unSubscribe());
            return getStore(selectorCallback);
        },
        subscribe,
        updateStore,
        getStore,
    }
}
// Create Store for React  


// Create Store For Vue
// import { computed, onUnmounted, ref } from "vue";
// import { CreateStore, type Selector, type Store } from "./store";

// export function CreateVueStore<T extends Store>(initialStore: T){
//     const {subscribe, updateStore, getStore} = CreateStore<T>(initialStore);

//     return {
//         useSelector(selectorCallback: Selector<T>){
//             const retrt = ref(false);
//             const forceRender = ()=>{retrt.value = !retrt.value;};
//             const { unSubscribe, getStore } = subscribe(selectorCallback, forceRender);
//             onUnmounted(()=>{unSubscribe()});
        
//             return computed<T>(()=>retrt.value?getStore(selectorCallback):getStore(selectorCallback));
//         },
//         updateStore,
//         getStore,
//     }
// }
// Create Store For Vue