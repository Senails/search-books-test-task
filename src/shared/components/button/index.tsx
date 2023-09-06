import styles from './index.module.css';

type TProps = {
    name: string;
    onClick?: () => void;
}

export function Button({name, onClick}:TProps){
    return <div className={styles.button + " noselect"} 
        style={{cursor:`pointer`}}
        onClick={onClick}>
        {name}
    </div>
}