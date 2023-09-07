import styles from "./index.module.css"
import { useEffect } from 'react';

type props = {
    imageURL: string,
    autorName: string,
    bookName: string,
    categorie: string,
}


export function BookCard(props: props){
    const {imageURL, autorName, bookName, categorie} = props;

    return <div className={styles.conteiner}>
        <span className={styles.bookName}>{bookName}</span>
        <img src={imageURL} style={{maxHeight:"150px"}}/>
        <span className={styles.categorie}>{categorie}</span>
        <span className={styles.autorName}>{autorName}</span>
    </div>
}