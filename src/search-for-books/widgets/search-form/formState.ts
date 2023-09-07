import { CreateReactStore } from "../../../shared/simple-state-meneger";

//для сохранения значений при перезапуске
const localStorageKey = "formDataStoragekey";
function saveStore(){
    localStorage.setItem(localStorageKey, JSON.stringify(getStore()));
}
function loadStore(){
    let json = localStorage.getItem(localStorageKey);
    if (!json) return undefined;
    return JSON.parse(json);
}
//для сохранения значений при перезапуске


type FormState = {
    categories: string,
    sorting: string,
    inputtext: string,
}
const initState: FormState = loadStore()||{
    categories: "all",
    sorting: "sorting",
    inputtext: "",
}


export const { useSelector, updateStore, subscribe, getStore } = CreateReactStore(initState);
subscribe((s)=>s, saveStore);