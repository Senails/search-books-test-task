import styles from "./index.module.css"
import { MouseHoverHint } from '../../../shared/components/mouse-hover-hint/index';

type props = {
    imageURL?: string,
    autorsNames?: string[],
    bookName: string,
    categorie?: string,
}


export function BookCard(props: props){
    const {imageURL, autorsNames, bookName, categorie} = props;

    return <div className={styles.conteiner}>
        {/* bookName */}
        {bookName?<span className={styles.bookName}>
            <MouseHoverHint text={bookName}>
                {bookName}
            </MouseHoverHint>
        </span>:<></>}

        {/* image */}
        <img src={imageURL} style={{maxHeight:"150px"}} alt="book cover"/>

        {/* categorie */}
        {categorie?<span className={styles.categorie}>
            <MouseHoverHint text={categorie}>
                {categorie}
            </MouseHoverHint>
        </span>:<></>}

        {/* autorName */}
        {autorsNames?.length!>0?<span className={styles.autorName}>
            <MouseHoverHint text={autorsNames?.join(', ')!}>
                {autorsNames?.join(', ')}
            </MouseHoverHint>
        </span>:<></>}
    </div>
}