import './App.css';
import React, {useState} from "react"

function NewBoxForm({func}) {
  const Initial_State = { height: "", width: "", backgroundColor: "" }
  const [info, setInfo] = useState(Initial_State);
  
  const randomNum = () =>{
    return Math.floor(Math.random() * 1000);
  }
  const handelFormSubmition = (e) =>{
    e.preventDefault()
    func({ ...info, id: randomNum});
    
  }

  const handleFormValues = event => {
    const {name, value} = event.target;
    setInfo(formData => ({
      ...formData,
      [name]: value
    }))
  }

  return (
    <div className='NewApp'>
      <form onSubmit={handelFormSubmition}>
        <label>Width</label>
        <input 
        type='text' 
        name='width'
        onChange={handleFormValues}
        value={info.width}
        />
        <label>Height</label>
        <input 
        type='text' 
        name='height'
        onChange={handleFormValues}
        value={info.height}
        />
        <label>Background</label>
        <input 
        type='text'
        name='backgroundColor' 
        onChange={handleFormValues}
        value={info.backgroundColor}
        />
        <input type='submit' />
      </form>
    </div>
  );
}

export default NewBoxForm;