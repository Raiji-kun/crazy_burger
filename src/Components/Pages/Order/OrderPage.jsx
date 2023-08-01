
import { useParams } from 'react-router-dom';


export default function OrderPage() {

    const text = useParams();
  return (
    <div>
        <h1>Bonjour {text.id}</h1>
        <button>Deconnexion</button>
    </div>
  )
}
