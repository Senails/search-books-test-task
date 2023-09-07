import { useMemo, useRef, useState } from 'react';
import styles from './index.module.css';
import { MouseHoverHint } from '../mouse-hover-hint';

type props = {
    value: string;
    placeholder: string;
    charLimit?: number;
    type?: 'text'|'password';
    name?: string;
    onChange?: (value:string) => void,
}

export function Input(props: props){
    let {type="text", placeholder: pl, charLimit, name, value, onChange} = props;
    let placeholderText = useMemo(()=> pl.length > 13 ? pl.slice(0, 13) + ".." : pl ,[pl])
    
    let [isActive, setState] = useState<boolean>(false);
    let inputElem = useRef<HTMLInputElement>(null);


    function InnerOnChange(event:React.ChangeEvent<HTMLInputElement>){
        let newValue = (charLimit && event.target.value.length > charLimit) ?
        event.target.value.slice(0,charLimit) : event.target.value;

        onChange?.(newValue);
    }
    function OnClick(){
        inputElem.current?.focus()
        setState(true);
    }

    
   return <div onClick={OnClick} className={styles.Conteiner + " " + ((value.length > 0 || isActive) ? styles.active : "")}>
        <div className={styles.Background}></div>
        {/* placeholder */}
        <span className={styles.PlaceholderBackground + " noselect"}>
            {placeholderText}
        </span>
        <span className={styles.PlaceholderText + " noselect"}>
            {pl.length > 13 ? 
                <MouseHoverHint text={pl}>
                    {placeholderText}
                </MouseHoverHint>:<>{placeholderText}</>
            }
        </span>
        

        {/* input */}
        <input ref={inputElem} type={type || "text"} name={name} 
            onFocus={() => setState(true)} 
            onBlur={() => setState(false)}
            onChange={InnerOnChange}

            value={value} 
            className={styles.realInput}
            style={{backgroundColor:"rgba(0, 0, 0, 0) !important"}}
        />
   </div>
}