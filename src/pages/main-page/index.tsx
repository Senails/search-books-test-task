import styles from "./index.module.css"

import { Loader } from "../../shared/components/loader";
import { MouseHoverHint } from '../../shared/components/mouse-hover-hint/index';

export function MainPage(){
    return <div className={styles.mainPage}>
        <MouseHoverHint text="loader">
            <Loader color="white"/>
        </MouseHoverHint>
    </div>
}