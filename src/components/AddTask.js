import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


function AddTask({onAdd}) {
    const [text,setText] = useState('')
    const [isComplete, setIsComplete]= useState(false)

   const onSubmit=(e)=>{
        e.preventDefault()
    if(!text){
        alert('Please add a task')
        return
    } else{
        onAdd({text,isComplete})
        setIsComplete(false)
        setText(text)
    }
    }
  return (
    <form onSubmit={onSubmit}>
        <input value={text} onChange={(e)=>setText(e.target.value)}/>
        <button  className='btn btn-primary'>Add</button>
    </form>
  )
}

export default AddTask