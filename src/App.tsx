import React from 'react'
import Input from './components/Input'
import {IformValue , Iuser} from './components/Interface'
import Table from './components/DataTable'
function App() {
  const [formValue, setFormValue] = React.useState<IformValue>()
  const [storage,setStorage] = React.useState<Iuser[]>([])
  const [editMode, setEditMode] = React.useState<boolean>(false)
  const [editId,setEditId] = React.useState<number>(0)

  const handleAdd = (fname:string,lname:string,age:string,id?:number) =>{
    setStorage([
      ...storage,
      {firstname:fname,lastname:lname,age:age,id:Date.now()}
    ])
  }
  const handleClick = ()=>{
    formValue && handleAdd(formValue!.firstname,formValue!.lastname,formValue!.age)
    setFormValue(undefined)
  }
  React.useEffect(() => {
    console.log(storage)
  }, [storage])
  const removeItem = (id:number) =>{
    setStorage([...storage.filter(item=> item.id !== id)])
  }
  const handleInitEdit = (id:number)=>{
    setEditId(id)
  }
  const handleEdit = () =>{
    let oldStorge = storage
    oldStorge = oldStorge.filter(item=> item.id !== editId)
    let newValue = formValue as Iuser
    newValue.id = Date.now()
    oldStorge.push(newValue)
    setStorage(oldStorge)
    setEditMode(false)
    setFormValue(undefined)
  }
  return ( 
    <div className={'d-flex'}>
        <div className="w-50 bg-dark px-3 pb-2 text-white">
          <div className="mb-3">
            <Input name={'firstname'} lable={'firstname'} formValue={formValue} setFormValue={setFormValue} />
          </div>
          <div className="mb-3">
            <Input name={'lastname'} lable={'lastname'} formValue={formValue} setFormValue={setFormValue} />
          
          </div>
          <div className="mb-3">
            <Input name={'age'} lable={'age'} formValue={formValue} setFormValue={setFormValue} />
          
          </div>
          <div className="mt-3 mb-3">
            <button onClick={()=>{editMode ? handleEdit():handleClick()}} className={`btn ${editMode ? 'btn-success':'btn-info'} btn-block`}>
              {editMode ? 'save':'add'}
            </button>
          </div>
        </div>
        <div className="w-50 bg-dark px-3">
          <Table 
            handleInitEdit={handleInitEdit} 
            data={storage} 
            removeItem={removeItem} 
            setEditMode={setEditMode} 
            editMode={editMode}
          />
        </div>
    </div>
  )
}

export default App;
