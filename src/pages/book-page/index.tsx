import styles from "./index.module.css"
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../shared/components/button/index';
import { BookInfo } from "../../search-for-books/widgets/book-info-widget";


export function BookPage(){
    let { bookID } = useParams();

    return <div className={styles.bookPage}>
        <div style={{height: "50px"}}></div>
        <div className={styles.header}>
            <Link to="/">
                <Button name='<= back'/>
            </Link>
            <h1 style={{color: "white"}}>SearchBooks</h1>
        </div>
        
       <BookInfo bookID={bookID}/>
    </div>
}