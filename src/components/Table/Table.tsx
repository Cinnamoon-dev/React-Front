import { Button } from '../../components'
import styles from './Table.module.scss'


type ActionsFunctions = {
    create: () => void,
    edit: () => void,
    delete: () => void,
}

interface Data extends Object {
    id: number,
    [fields: string]: any
}

type TableProps = {
    tableData: Data[],
    renderActions?: boolean,
    actions?: ActionsFunctions 
}

type ActionsProps = {
    id: number,
    edit?: (id: number) => void,
    delete?: (id: number) => void,
}

const capitalize = (str: string) => {
    return str[0].toUpperCase() + str.slice(1)    
}

const Actions = (props: ActionsProps) => {
    return(
        <div style={{display: 'flex', gap: '7px'}}>
            <Button type='Edit' onClick={() => props.edit !== undefined ? props.edit(props.id) : undefined}/>
            <Button type='Delete' onClick={() => props.delete !== undefined ? props.delete(props.id) : undefined}/>
        </div>
    )
}

const Table = (props: TableProps) => {
    const titles = Object.keys(props.tableData[0]).map((e) => capitalize(e))
    
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
                            { props.renderActions && <th>Actions</th>}
                        </tr>
                    </thead>
                    
                    <tbody>
                        { props.tableData.map((e) => {
                            const values = Object.values(e).map((e) => <td>{e}</td>)
                            if(props.renderActions) {
                                values.push(<td><Actions id={e.id} edit={props.actions?.edit} delete={props.actions?.delete}/></td>)
                            }
                            return(<tr>{values}</tr>)
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default Table