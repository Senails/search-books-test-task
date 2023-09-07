import { useRef, useState } from 'react';
import styles from './index.module.css';

type TProps = {
    value: string;
    options: string[]
    onChange?: (newValue: string) => void;
}

export function Select({value, options, onChange}:TProps){
    const [open,setopen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);


    function clickOnSelect(){
        if (ref.current) ref.current.scrollTop = 0;
        setopen(!open);
    }
    function innerOnChange(index:number){
        if (ref.current) ref.current.scrollTop = 0;
        onChange?.(options[index]);
    }
    function mouseLeave(){
        if (ref.current) ref.current.scrollTop = 0;
        setopen(false);
    }

    return <div className={styles.conteiner}>
        <div ref={ref} className={ styles.select + ` ${open ? styles.open:''}`}
        onClick={ clickOnSelect }
        onMouseLeave={ mouseLeave }>
                
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