import styles from "./index.module.css"
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../shared/components/button/index';
import { Loader } from "../../shared/components/loader";


export function BookPage(){
    let { bookID } = useParams();
    console.log(bookID);
    // const json2 = await getBook("VvOxEAAAQBAJ");
    // console.log(json2.volumeInfo);


    return <div className={styles.bookPage}>
        <div style={{height: "50px"}}></div>
        <div className={styles.header}>
            <Link to="/">
                <Button name='<= back'/>
            </Link>
            <h1 style={{color: "white"}}>SearchBooks</h1>
        </div>
        
        <Loader color="white"/>
        <div style={{height: "20px"}}></div>
        <span style={{color: "white"}}>Загружаем...</span>
    </div>
}