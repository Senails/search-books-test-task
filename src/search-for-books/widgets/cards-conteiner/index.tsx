import styles from "./index.module.css"
import { Link } from "react-router-dom";
import { BookCard } from '../../components/book-card/index';
import { useAppSelector } from "../../../redux/hooks";
import { Loader } from '../../../shared/components/loader/index';


export function CardsConteiner(){
    const isLoading = useAppSelector((s)=>s.books.isLoading);
    const isFirstLoading = useAppSelector((s)=>s.books.isFirstLoading);
    const booksList = useAppSelector((s)=>s.books.booksList);

    if (isLoading && isFirstLoading){
        return <div className={styles.messageConteiner}>
            <Loader color="white"/>
            <div style={{height: "20px"}}></div>
            <span>Загружаем...</span>
        </div>

    }else if (booksList.length===0 && isFirstLoading){
        return <div className={styles.messageConteiner}>
            <span>Давайте найдем какую-нибудь книжку {":)"}</span>
        </div>

    }else if (booksList.length===0 && !isFirstLoading){
        return <div className={styles.messageConteiner}>
            <span>Почему-то ничего не нашлось {":("}</span>
        </div>

    }else{
        return <div className={styles.cardsConteiner}>
            {booksList.map((e,i)=>{
                return <div className={styles.card} key={i}>
                    <Link to={e.linkURL}>
                        <BookCard {...e} />
                    </Link>
                </div>
            })}
        </div>
    }
}