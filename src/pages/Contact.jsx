import React,{useState} from 'react'
import './style.css'

const Contact = () => {
  const [color,setColor] = useState("blue")

  const colorset = () => {
    setColor("red")
  }
  return (
    <div>
      <h5 className='abt'>This is an about page</h5>
      
    <p>i love {color}</p>
      <button onClick={colorset}>change</button>
    </div>
  )
}

export default Contact
