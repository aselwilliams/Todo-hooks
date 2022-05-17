import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Input, Button} from 'bootstrap'

function AddTask({onAdd}) {
    const [text,setText] = useState('')
    const [isComplete, setIsComplete]= useState(false)

   const onSubmit=(e)=>{
        e.preventDefault()
    if(!text){
        alert('Please add a task')
        return
    }
    onAdd({text,isComplete})
    setText('')
    setIsComplete(false)
    }
  return (
    <form onSubmit={onSubmit}>
        <input />
        <button onChange={(e)=>setText(e.target.value)} className='btn btn-primary'>Add</button>
    </form>
  )
}

export default AddTask