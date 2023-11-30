import styles from './Input.module.scss'

interface InputProps {
    onChange?: React.Dispatch<React.SetStateAction<string | undefined>>
    placeholder?: string
}

const Input = (props: InputProps) => {
    return(
        <div className={styles['InputContainer']}>
            <input type="text" placeholder={props.placeholder} onChange={(e) => {props.onChange ? props.onChange(e.currentTarget.value) : console.log("")}}/>
        </div>
    )
}

export default Input