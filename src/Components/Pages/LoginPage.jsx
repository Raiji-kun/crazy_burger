import { useState } from "react"

export default function LoginPage() {

    const [text, setText] = useState("")
  
    const handleButton = (event) => {
      event.preventDefault()
      alert("Bonjour " + text   )
      setText("")
    }
  
    const handleText = (event) => {
      setText(event.currentTarget.value)
    }
  return (
    <div>

    <h1>Bienvenue chez nous</h1>
    <h2>Connectez vous</h2>
    <form onSubmit={handleButton}>
        <input type='text' value={text} onChange={handleText} placeholder='entrez votre nom'  required />
        <button  >Accedez a votre espace</button>
    </form>
    </div>
  )
}
