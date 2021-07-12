import React from 'react'

interface ITable{
    data:{
        firstname:string
        lastname:string
        age:string
        id:number
    }[]
    removeItem:(id:number) => void
    setEditMode:(mode:boolean) => void
    editMode:boolean
    handleInitEdit:(id:number)=> void
}
const Table:React.FC<ITable> = (props) => {
    const handleClick = (id:number)=>{
        props.setEditMode(true)
        props.handleInitEdit(id)
        
    }
    return (
        <>
           <div className="table w-100">
                <thead className="table-warning text-dark">
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>firstname</th>
                        <th scope='col'>lastname</th>
                        <th scope='col'>age</th>
                        <th scope='col'>action</th>
                    </tr>
                </thead>   
                <tbody className='bg-white text-dark'>
                    {
                        props.data.length > 0 ?(
                            props.data.map((item,index) => 
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.age}</td>
                                    {
                                        props.editMode ? " ":
                                        <td>
                                            <button className='bg-danger btn text-white' onClick={()=>props.removeItem(item.id)}>Delet</button>
                                            <button className='bg-success btn ml-2 text-white' onClick={()=> handleClick(item.id)}>Edit</button>
                              
                                        </td>
                                    }
                                </tr>
                            )
                        ):(
                            <tr>
                                <td className="text-center" colSpan={5}>no users</td>
                            </tr>
                        )
                    }
                </tbody>
            </div> 
        </>
    )
}
export default Table
