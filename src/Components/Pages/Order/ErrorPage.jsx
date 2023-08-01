import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate(`/`)
  }
  return (
    <div>
        <h1>ErrorPage</h1>
        <button onClick={handleButton}>Retourner a la page accueil</button>
    
    </div>
  )
}
