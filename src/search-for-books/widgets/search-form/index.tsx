import styles from "./index.module.css"

import { Button } from "../../../shared/components/button";
import { Input } from "../../../shared/components/input";
import { Select } from "../../../shared/components/select";
import { updateStore, useSelector } from "./formState";

export type SearctData = {
    categories: string;
    sorting: string;
    inputtext: string;
}

type props = {
    onSubmit: (data: SearctData )=>Promise<void>
}


export function SeacrhForm({ onSubmit }:props){
    const {categories, sorting, inputtext} = useSelector((s)=>s);


    async function onClick(){
        onSubmit({
            categories,
            sorting,
            inputtext,
        });
    }
    function setCategories(newValue: string){
        updateStore((s)=>{s.categories = newValue})
    }
    function setSorting(newValue: string){
        updateStore((s)=>{s.sorting = newValue})
    }
    function setInputText(newValue: string){
        updateStore((s)=>{s.inputtext = newValue})
    }


    return <div className={styles.conteiner}>
        {/* input */}
        <div className={styles.searchInput}>
            <Input value={inputtext} placeholder="поиск" onChange={setInputText}/>
            <Button name="искать" onClick={onClick}/>
        </div>

        {/* selectors */}
        <div className={styles.selectors}>
            <div style={{width: "240px"}}>
                <h3 style={{color: "white"}}>Categories:</h3>
                <Select 
                value={categories} 
                onChange={setCategories}
                options={["all", "art", "biography", "computers", "history", "medical", "poetry"]}/>
            </div>
            <div style={{width: "240px"}}>
                <h3 style={{color: "white"}}>Sorting by:</h3>
                <Select 
                value={sorting} 
                onChange={setSorting}
                options={["relevance","newest"]}/>
            </div>
        </div>
    </div>
}