import styles from './Table.module.scss'


type TableProps = {
    tableData: Object[]
}

type ButtonProps = {
    type: "Edit" | "Delete"
}

const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1)    
}

const Button = (props: ButtonProps) => {

    const Style = {
        "Edit": "#686e87",
        "Delete": "#dc3545"
    }

    return(
        <div className={styles['Button']}>
            <button style={{backgroundColor: Style[props.type]}}>{props.type}</button>
        </div>
    )
}

const Actions = () => {
    return(
        <div style={{display: 'flex', gap: '7px'}}>
            <Button type='Edit'/>
            <Button type='Delete'/>
        </div>
    )
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
                        values.push(<td><Actions/></td>)
                        return(<tr>{values}</tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table