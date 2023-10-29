import styles from "./Button.module.scss"


type ButtonProps = {
    type: "Edit" | "Delete" | "Create",
    onClick?: (...args: any) => void
}

const Button = (props: ButtonProps) => {

    const Style = {
        "Create": "#00a752",
        "Edit": "#686e87",
        "Delete": "#dc3545"
    }

    return(
        <div className={styles['Button']}>
            <button style={{backgroundColor: Style[props.type]}} onClick={props.onClick}>{props.type}</button>
        </div>
    )
}

export default Button