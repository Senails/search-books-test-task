import { Loader } from "../../../shared/components/loader"
import { useLoading } from "../../../shared/hooks/useLoading";
import { getBook } from "../../api/getBooks";
import { getBookResponse, getBooksRequestError } from "../../api/types";
import styles from "./index.module.css";

type props = {
    bookID?:string,
}

export function BookInfo({ bookID }: props){
    const {Data, IsLoading, IsError} = useLoading(async()=>{
        if (!bookID) return;
        const res = await getBook(bookID);

        console.log(res)

        if ((res as getBooksRequestError).error) return;
        return res as getBookResponse;
    });

    return <div className={styles.conteiner}>
        {/* loader */}
        {IsLoading && <div style={{display: "inline-block"}}>
            <Loader color="white"/>
            <div style={{height: "20px"}}></div>
            <span style={{color: "white"}}>Загружаем...</span>
        </div>}

        {/* Error */}
        {IsError && <div className={styles.errorMessage}>
            <span style={{color: "white"}}>
                Не загрузилось  {":("}
            </span>
        </div>}

        {/* Data */}
        {Data && <div className={styles.bookInfo}>
            {Data.volumeInfo.imageLinks?.thumbnail && <div 
                style={{backgroundImage: `url(${Data.volumeInfo.imageLinks.thumbnail})`}}
                className={styles.bookCover}>
            </div>}

            <div className={styles.bookInformation}>
                {/* title */}
                <div className={styles.contentPart}>
                    <h1 style={{color:'#ecdf7f'}}>{Data.volumeInfo.title}</h1>
                </div>

                {/* Authtors */}
                {Data.volumeInfo.authors && <div className={styles.contentPart}>
                    <p style={{color:'#ecdf7f'}}>Authtors:</p>
                    <p>{Data.volumeInfo.authors?.join(", ")}</p>
                </div>}

                {/* Categories */}
                {Data.volumeInfo.categories && <div className={styles.contentPart}>
                    <p style={{color:'#ecdf7f'}}>Categories:</p>
                    <p>{Data.volumeInfo.categories?.join(", ")}</p>
                </div>}
                
                {/* description */}
                {Data.volumeInfo.description && <div className={styles.contentPart}>
                <p style={{color:'#ecdf7f'}}>Description:</p>
                    <p>{Data.volumeInfo.description}</p>
                </div>}
            </div>
        </div>}
    </div>
}