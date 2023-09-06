import { useNavigate } from "react-router-dom";

import styles from "./index.module.css"
import { Button } from '../../shared/components/button/index';

export function ErrorPage(){
    const navigate = useNavigate();
    return <div className={styles.errorPage}>
       <h1>Похоже этой сраницы не существует {":("}</h1>
       <Button name="на главную" onClick={()=>navigate('./')}/>
    </div>
}