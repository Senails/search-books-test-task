import { CreateReactStore } from "../../shared/simple-state-meneger";


const localStorageKey = "formDataStoragekey";
function saveStore(){
    localStorage.setItem(localStorageKey, JSON.stringify(getFormStore()));
}
function loadStore(){
    let json = localStorage.getItem(localStorageKey);
    if (!json) return undefined;
    return JSON.parse(json);
}


type FormState = {
    categories: "all"|"art"|"biography"|"computers"|"history"|"medical"|"poetry",
    sorting: "relevance"|"newest",
    inputtext: string,
}
const initState: FormState = loadStore()||{
    categories: "all",
    sorting: "sorting",
    inputtext: "",
}

// простейший стор, для сохранения состояния формы 
// позволит удобно сохранять значения формы при переходе
// между страницами, и при перезапуске приложения
export const { useSelector: useFormSelector, updateStore, subscribe, getStore: getFormStore } = CreateReactStore(initState);
subscribe((s)=>s, saveStore);