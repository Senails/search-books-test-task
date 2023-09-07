import styles from "./index.module.css"

import { Loader } from "../../shared/components/loader";
import { MouseHoverHint } from '../../shared/components/mouse-hover-hint/index';
import { SeacrhForm, SearctData } from '../../search-for-books/widgets/search-form/index';


export function MainPage(){
    async function onsubmitform({categories, sorting, inputtext}:SearctData){
        // const json = await getBooks({
        //     searchText: "harry",
        //     sortingMethod: "newest",
        //     indexStart: "0",
        //     categories: "history"
        // });

        // console.log(json);

        // const json2 = await getBook("VvOxEAAAQBAJ");

        // console.log(json2.volumeInfo.imageLinks.thumbnail);
    }


    return <div className={styles.mainPage}>
        {/* форма */}
        <MouseHoverHint text="Этот поиск работает с google api книг и получает их по параметрам">
            <h1 style={{color: "white"}}>SearchBooks</h1>
        </MouseHoverHint>
        <SeacrhForm onSubmit={onsubmitform}/>

        {/* карточки */}
        <MouseHoverHint text="загружаем...">
            <Loader color="white"/>
        </MouseHoverHint>

        <div style={{height:"300px"}}></div>
    </div>
}