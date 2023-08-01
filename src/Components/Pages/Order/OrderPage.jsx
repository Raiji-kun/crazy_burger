import { useLocation } from 'react-router-dom';


export default function OrderPage() {

    const location = useLocation();
    const text = new URLSearchParams(location.search).get('text');
  return (
    <div>
        <h1>Bonjour {text}</h1>
        <button>Deconnexion</button>
    </div>
  )
}
