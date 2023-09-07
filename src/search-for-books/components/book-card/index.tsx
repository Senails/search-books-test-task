import styles from "./index.module.css"
import { useEffect } from 'react';
import { MouseHoverHint } from '../../../shared/components/mouse-hover-hint/index';

type props = {
    imageURL: string,
    autorName?: string,
    bookName: string,
    categorie?: string,
}


export function BookCard(props: props){
    const {imageURL, autorName, bookName, categorie} = props;

    return <div className={styles.conteiner}>
        {/* bookName */}
        {bookName?<span className={styles.bookName}>
            <MouseHoverHint text={bookName}>
                {bookName}
            </MouseHoverHint>
        </span>:<></>}

        {/* image */}
        <img src={imageURL} style={{maxHeight:"150px"}}/>

        {/* categorie */}
        {categorie?<span className={styles.categorie}>
            <MouseHoverHint text={categorie}>
                {categorie}
            </MouseHoverHint>
        </span>:<></>}

        {/* autorName */}
        {autorName?<span className={styles.autorName}>
            <MouseHoverHint text={autorName}>
                {autorName}
            </MouseHoverHint>
        </span>:<></>}
    </div>
}