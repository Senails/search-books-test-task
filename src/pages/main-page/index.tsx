import styles from "./index.module.css"

import { Loader } from "../../shared/components/loader";
import { MouseHoverHint } from '../../shared/components/mouse-hover-hint/index';
import { Input } from '../../shared/components/input/index';
import { Button } from '../../shared/components/button/index';
import { useState } from "react";
import { getBook, getBooks } from "../../search-for-books/api/getBooks";
import { Select } from '../../shared/components/select/index';


export function MainPage(){
    const [inputtext, setInputText] = useState("");

    async function onClick(){
        const json = await getBooks({
            searchText: "harry",
            sortingMethod: "newest",
            indexStart: "0",
            categories: "history"
        });

        console.log(json);

        const json2 = await getBook("VvOxEAAAQBAJ");

        console.log(json2.volumeInfo.imageLinks.thumbnail);
    }

    return <div className={styles.mainPage}>
        <MouseHoverHint text="Этот поиск работает с google api книг и получает их по параметрам">
            <h1 style={{color: "white"}}>SearchBooks</h1>
        </MouseHoverHint>

        <div className={styles.searchInput}>
            <Input value={inputtext} placeholder="поиск" onChange={setInputText}/>
            <Button name="искать" onClick={onClick}/>
        </div>

        <div style={{width: "250px"}}>
            <Select value="111" options={["111", "222", "333", "444"]}/>
        </div>
        <div style={{width: "250px"}}>
            <Select value="111" options={["111", "222", "333", "444"]}/>
        </div>

        <MouseHoverHint text="загружаем...">
            <Loader color="white"/>
        </MouseHoverHint>
    </div>
}