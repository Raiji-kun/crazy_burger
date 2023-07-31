import { useState } from 'react'

export default function LoginForm() {
    //state
    const [text, setText] = useState("")
  
    //comportements
    const handleButton = (event) => {
      event.preventDefault()
      alert("Bonjour " + text   )
      setText("")
    }
  
    const handleText = (event) => {
      setText(event.currentTarget.value)
    }

     //print
  return (
    <form onSubmit={handleButton}>
    <h1>Bienvenue chez nous</h1>
    <br />
    <h2>Connectez vous</h2>
        <input type='text' value={text} onChange={handleText} placeholder='entrez votre nom'  required />
        <button  >Accedez a votre espace</button>
    </form>
  )
}
