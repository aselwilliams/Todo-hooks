import React from 'react'

function Form({onSubmit, text, onChange, isEditing}) {
  return (
    <form onSubmit={onSubmit}>
    <input value={text} onChange={onChange} className="add" type='text' />
    <button className="btn btn-primary ms-2">
      {isEditing ? "Edit" : "Add"}{" "}
    </button>
  </form>
  )
}

export default Form