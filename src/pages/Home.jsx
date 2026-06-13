import { useContext } from 'react';
import { CarContext } from '../context/carcontext';

export default function Home() {
  const { addCart } = useContext(CarContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>MercadoFácil</h1>
      <p>Clique abaixo para testar o carrinho:</p>
      <button onClick={() => addCart({ id: Date.now(), nome: 'Produto Exemplo' })}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
