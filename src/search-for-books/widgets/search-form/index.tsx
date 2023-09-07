import styles from "./index.module.css"

import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { Select } from "../../../shared/components/select";
import { updateStore, useFormSelector } from "../../entities/form-state";

export type SearctData = {
    categories: string;
    sorting: string;
    inputtext: string;
}

type props = {
    onClickSubmit: ()=>void
}


export function SeacrhForm({ onClickSubmit }:props){
    const {categories, sorting, inputtext} = useFormSelector((s)=>s);


    async function onClick(){
        onClickSubmit();
    }
    function setCategories(newValue: "all" | "art" | "biography" | "computers" | "history" | "medical" | "poetry"){
        updateStore((s)=>{s.categories = newValue})
    }
    function setSorting(newValue: "relevance" | "newest"){
        updateStore((s)=>{s.sorting = newValue})
    }
    function setInputText(newValue: string){
        updateStore((s)=>{s.inputtext = newValue})
    }


    return <div className={styles.conteiner}>
        {/* input */}
        <div className={styles.searchInput}>
            <Input 
                value={inputtext} 
                placeholder="поиск" 
                onChange={setInputText}
                onEnterPush={onClickSubmit}
            />
            <Button name="seacrh" onClick={onClick}/>
        </div>

        {/* selectors */}
        <div className={styles.selectors}>
            <div style={{width: "240px"}}>
                <h3 style={{color: "white"}}>Categories:</h3>
                <Select 
                value={categories} 
                onChange={(newVal)=>setCategories(newVal as any)}
                options={["all", "art", "biography", "computers", "history", "medical", "poetry"]}/>
            </div>
            <div style={{width: "240px"}}>
                <h3 style={{color: "white"}}>Sorting by:</h3>
                <Select 
                value={sorting} 
                onChange={(newVal)=>setSorting(newVal as any)}
                options={["relevance","newest"]}/>
            </div>
        </div>
    </div>
}