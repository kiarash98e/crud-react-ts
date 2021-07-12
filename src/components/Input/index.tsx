import React from 'react'
import { IformValue } from '../Interface'
interface Iinput{
    name:string
    value?:string
    onChange?:Function
    setFormValue:Function
    formValue:IformValue | undefined
    lable:string
}
const Input:React.FC<Iinput> = (props) => {
    const [Value, setValue] = React.useState<string>('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        let inputEl = e.target! as HTMLInputElement
        return setValue(inputEl.value)
    }
    React.useEffect(() => {
        if (props.formValue?.firstname === undefined &&
            props.formValue?.lastname === undefined &&
            props.formValue?.age === undefined) 
        {
            setValue('')    
        }
    }, [props.formValue])

    React.useEffect(() => {
        Value.length > 0 && props.setFormValue({ ...props.formValue, [props.name]: Value });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [Value])
    
    return (
        <>
            <div className="form-group">
                <label htmlFor={props.name}>{props.lable}</label>
                <input 
                    className='form-control bg-white rounded text-dark'
                    type="text"
                    name={props.name}
                    value={Value} 
                    onChange={handleChange} 
                />

            </div>
           
        </>
    )
}

export default Input
