import styles from "./index.module.css"
import { Loader } from "../../shared/components/loader";
import { MouseHoverHint } from '../../shared/components/mouse-hover-hint/index';
import { SeacrhForm } from '../../search-for-books/widgets/search-form/index';
import { CardsConteiner } from '../../search-for-books/widgets/cards-conteiner/index';
import { Button } from '../../shared/components/button/index';
import { useAppSelector } from "../../redux/hooks";
import { LoadMore, FirstLoading } from "../../search-for-books/entities/actions";
import { useState, useEffect, useRef } from 'react';
import { getMainPageStore, updateMainPageStore } from "./state";


export function MainPage(){
    const {isLoading, isFirstLoading, countResults, booksList} = useAppSelector((s)=>s.books);
    const [showUpButton, setUpButton] = useState(false);

    const conteinerRef = useRef<HTMLDivElement>(null);


    function onScroll(){
        const target = conteinerRef.current!;
        if (target.scrollTop > target.clientHeight*1.5){
            if (!showUpButton) setUpButton(true);
        }else{
            if (showUpButton) setUpButton(false);
        }

        updateMainPageStore((s)=>{
            s.scrollTop = target.scrollTop;
            s.scrollHeight = target.scrollHeight;
        });
    }
    function upButtonClick(){
        if (conteinerRef.current) conteinerRef.current.scrollTop = 0;
    }


    useEffect(()=>{
        const { scrollTop, scrollHeight } = getMainPageStore();

        if (conteinerRef.current?.scrollHeight === scrollHeight){
            if (scrollHeight > document.body.clientHeight*1.5){
                conteinerRef.current.scrollTop = scrollTop;
            }
        }

        onScroll();
    },[]);


    return <div ref={conteinerRef} className={styles.conteiner} onScroll={onScroll}>
        <div className={styles.mainPage}>
            {/* titel */}
            <div style={{height: "50px"}}></div>
            <MouseHoverHint text="Этот поиск работает с google api книг и получает их по параметрам">
                <h1 style={{color: "white"}}>SearchBooks</h1>
            </MouseHoverHint>

            {/* search form */}
            <SeacrhForm onClickSubmit={FirstLoading}/>

            {/* countResults */}
            {countResults?<p className={styles.countResults}>Count Results: {countResults}</p>:<></>}

            {/* cards */}
            <CardsConteiner/>

            {/* load more */}
            {!isLoading 
            && !isFirstLoading 
            && countResults > booksList.length?<Button name="load more" onClick={LoadMore}/>:<></>}

            {/* Loader */}
            {isLoading && !isFirstLoading?<Loader color="white"/>:<></>}
            <div style={{height: "50px"}}></div>
        </div>

        {/* scroll Top */}
        {showUpButton?<span className={styles.upButton}>
            <Button name="^ Up ^" onClick={upButtonClick}/>
        </span>:<></>}
    </div>
}