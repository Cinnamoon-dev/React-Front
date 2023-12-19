import styles from './Input.module.scss'

type InputProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onClick?: React.MouseEventHandler<HTMLInputElement>
    placeholder?: string
}

const Input = (props: InputProps) => {
    return(
        <div className={styles['InputContainer']}>
            <input type="text" placeholder={props.placeholder} onChange={props.onChange} onClick={props.onClick}/>
        </div>
    )
}

export default Input