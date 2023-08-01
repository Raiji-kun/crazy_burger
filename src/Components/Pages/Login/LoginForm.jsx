import { useState } from 'react'
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
    //state
    const [text, setText] = useState("")
    const navigate = useNavigate();
  
    //comportements
    const handleButton = (event) => {
      event.preventDefault()
      navigate(`/order/${text}`)
    }
  
    const handleText = (event) => {
      setText(event.currentTarget.value)
    }

     //print
  return (
    <form onSubmit={handleButton}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez vous</h2>
        <input type='text' value={text} onChange={handleText} placeholder='entrez votre nom'  required />
        <button  >Accedez a votre espace</button>
    </form>
  )
}
