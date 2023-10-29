import styles from './Table.module.scss'


type TableProps = {
    tableData: Object[]
}

const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1)    
}

const Table = (props: TableProps) => {
    const titles = Object.keys(props.tableData[0]).map((e) => capitalize(e))
    
    return(
        <div className={styles['TableContainer']}>
            <table>
                <thead>
                    <tr>
                        {titles.map((e, i) => <th key={i}>{e}</th>)}
                        <th>Actions</th>
                    </tr>
                </thead>
                
                <tbody>
                    {props.tableData.map((e) => {
                        let values = Object.values(e).map((e) => <td>{e}</td>)
                        values.push(<td><button>Edit</button><button>Delete</button></td>)
                        return(<tr>{values}</tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table