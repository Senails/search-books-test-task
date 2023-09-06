import styles from "./index.module.css"


type props={
    children?: React.ReactNode,
}

export function MainTamplate({ children }: props){
    return <div className={styles.screen}>
        {children}
    </div>
}