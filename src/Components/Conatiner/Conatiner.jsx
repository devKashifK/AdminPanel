import styles from "./Conatiner.module.css"


export default function Conatiner(props){
    return <div className={`${styles.container} ${props.className}`}>{props.children}</div>
}

export function Box(props){
    return <div className={`${styles.box} ${props.className}`}>{props.children}</div>
}

export function Button(props){
    return <button className={`${styles.dynamicButton} ${props.className}`} onClick={props.eventListener}>{props.children}</button>
}