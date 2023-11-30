import styles from './UserCreate.module.scss'
import { Button, Input } from '../../../components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()

    return(
        <div className={styles['Wrapper']}>
            <Input onChange={setName} placeholder='Name'/>
            <Input onChange={setEmail} placeholder='Email'/>
            <Button type={"Create"} onClick={() => navigate("/")}/>
        </div>
    )
}

export default CreateUser