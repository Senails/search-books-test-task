import styles from "./index.module.css"
import { Loader } from "../../shared/components/loader";
import { MouseHoverHint } from '../../shared/components/mouse-hover-hint/index';
import { SeacrhForm } from '../../search-for-books/widgets/search-form/index';
import { CardsConteiner } from '../../search-for-books/widgets/cards-conteiner/index';
import { Button } from '../../shared/components/button/index';
import { useAppSelector } from "../../redux/hooks";
import { LoadMore, onClickSubmit } from "../../search-for-books/entities/actions";


export function MainPage(){
    const {isLoading, isFirstLoading, countResults} = useAppSelector((s)=>s.books);

    return <div className={styles.mainPage}>
        <div style={{height: "50px"}}></div>
        <MouseHoverHint text="Этот поиск работает с google api книг и получает их по параметрам">
            <h1 style={{color: "white"}}>SearchBooks</h1>
        </MouseHoverHint>

        {/* форма */}
        <SeacrhForm onClickSubmit={onClickSubmit}/>

        {/* countResults */}
        {countResults?<p className={styles.countResults}>Count Results: {countResults}</p>:<></>}

        {/* карточки */}
        <CardsConteiner/>

        {/* load more */}
        {!isLoading && !isFirstLoading?<Button name="load more" onClick={LoadMore}/>:<></>}
        {isLoading && !isFirstLoading?<Loader color="white"/>:<></>}
        <div style={{height: "50px"}}></div>
    </div>
}