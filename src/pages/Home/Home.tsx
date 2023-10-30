import { Table } from '../../components'
import styles from './Home.module.scss'

const Home = () => {
    const data = [
        {id: 1, name: "Pedro", email: "pedro@email.com"},
        {id: 2, name: "Daniel", email: "daniel@email.com"},
        {id: 3, name: "Guilherme", email: "guilherme@email.com"}
    ]

    const actions = {
        create: () => console.log("create"),
        edit: (id: number) => console.log("edit-" + id),
        delete: (id: number) => console.log("delete-" + id),
    }

    return(
        <div className={styles['App']}>
            <Table tableData={data} actions={actions} renderActions/>
        </div>
    )
}

export default Home