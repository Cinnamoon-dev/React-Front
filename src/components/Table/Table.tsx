import { Button } from '../../components'
import styles from './Table.module.scss'


type ActionsFunctions = {
    create: () => void,
    edit: (...args: any) => void,
    delete: (...args: any) => void,
}

interface Data extends Object {
    id: number,
    [fields: string]: any
}

type TableProps = {
    tableData: Data[],
    tableColumns: string[]
    renderActions?: boolean,
    actions?: ActionsFunctions 
}

type ActionsProps = {
    id: number,
    edit: (id: number) => void,
    delete: (id: number) => void,
}

const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1)    
}

const Actions = (props: ActionsProps) => {
    return(
        <td>
            <div style={{display: 'flex', gap: '7px'}}>
                <Button type='Edit' onClick={() => props.edit(props.id)}/>
                <Button type='Delete' onClick={() => props.delete(props.id)}/>
            </div>
        </td>
    )
}

const Table = (props: TableProps) => {
    const titles = props.tableColumns.map(e => capitalize(e))
    const data = props.tableData.map(object => {
        const line = props.tableColumns.map(field => <td>{object[field]}</td>)
        if(props.actions) {
            line.push(<Actions id={object.id} edit={props.actions?.edit} delete={props.actions?.delete}/>)
        }
        return(<tr>{line}</tr>) 
    })

    return(
        <div className={styles['TableWrapper']}>
            { props.renderActions &&
                <div className={styles['CreateButtonContainer']}>
                    <Button type='Create' onClick={props.actions?.create}/>
                </div>
            }

            <div className={styles['TableContainer']}>
                <table>
                    <thead>
                        <tr>
                            {titles.map((e, i) => <th key={i}>{e}</th>)}
                            {props.renderActions && <th>Actions</th>}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table