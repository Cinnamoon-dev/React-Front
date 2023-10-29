import styles from './Table.module.scss'


type Data = {
    id: number,
    name: string,
    email: string
}

const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1)    
}

const Table = () => {
    const tableData: Data[] = [
        {id: 1, name: "Pedro", email: "pedro@email.com"},
        {id: 2, name: "Daniel", email: "daniel@email.com"},
        {id: 3, name: "Guilherme", email: "guilherme@email.com"}
    ]
    const titles = Object.keys(tableData[0]).map((e) => capitalize(e))
    
    const lines = Object.values(tableData).map
    
    return(
        <div className={styles['TableContainer']}>
            <table>
                <thead>
                    <tr>
                        {titles.map((e, i) => <th key={i}>{e}</th>)}
                    </tr>
                </thead>
                
                <tbody>
                    {tableData.map((e) => {
                        let values = Object.values(e).map((e) => <td>{e}</td>)
                        return(<tr>{values}</tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table