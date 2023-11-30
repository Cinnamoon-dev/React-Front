import styles from './Home.module.scss'
import { useNavigate } from 'react-router-dom'
import { Table, Input } from '../../components'

const Home = () => {
    const navigate = useNavigate()

    const data = [
        {id: 1, name: "Pedro", email: "pedro@email.com"},
        {id: 2, name: "Daniel", email: "daniel@email.com"},
        {id: 3, name: "Guilherme", email: "guilherme@email.com"}
    ]

    const columns = ["id", "name", "email"]

    const actions = {
        create: () => navigate("/user/add"),
        edit: (id: number) => console.log("edit-" + id),
        delete: (id: number) => console.log("delete-" + id),
    }

    return(
        <div className={styles['App']}>
            <Input/>
            <Table tableData={data} tableColumns={columns} actions={actions} renderActions/>
        </div>
    )
}

export default Home