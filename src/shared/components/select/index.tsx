import { useState } from 'react';
import styles from './index.module.css';

type TProps = {
    value: string;
    options: string[]
    onChange?: (newValue: string) => void;
}

export function Select({value, options, onChange}:TProps){
    let [open,setopen] = useState(false);


    function clickOnSelect(){
        setopen(!open);
    }
    function innerOnChange(index:number){
        console.log(index)
        onChange?.(options[index]);
    }

    return <div className={styles.conteiner}>
        <div className={ styles.select + ` ${open ? styles.open:''}`}
        onClick={ clickOnSelect }
        onMouseLeave={ ()=>setopen(false) }>
                
            {options.map((text,i)=>
            <div 
            className={` ${text === value ? styles.active:''}`} 
            key={i}
            onClick={()=>innerOnChange(i)}
            >
                <div className={styles.option}>
                    {text}
                </div>
            </div>)}
        </div>
    </div>
}