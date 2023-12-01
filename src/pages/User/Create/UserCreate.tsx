import { useState } from 'react'
import styles from './UserCreate.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '../../../components'

const CreateUser = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()

    const submit = () => {
        console.log("name: " + name)
        console.log("email: " + email)
        navigate("/")
    }

    return(
        <div className={styles['Wrapper']}>
            <Input onChange={(e) => {setName(e.currentTarget.value)}} placeholder='Name'/>
            <Input onChange={(e) => {setEmail(e.currentTarget.value)}} placeholder='Email'/>
            <Button type={"Create"} onClick={() => submit()}/>
        </div>
    )
}

export default CreateUser