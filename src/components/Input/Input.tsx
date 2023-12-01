import styles from './Input.module.scss'

type InputProps = {
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    placeholder?: string
}

const Input = (props: InputProps) => {
    return(
        <div className={styles['InputContainer']}>
            <input type="text" placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    )
}

export default Input