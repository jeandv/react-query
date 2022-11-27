import { useEffect, useReducer, useState } from 'react';
import './App.css';

const API = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

const getRandomNumberFromApi = async (): Promise<number> => {

  try {

    const res = await fetch(API);

    const numberString = await res.text();

    return +numberString;

  } catch (err) {

    console.log(`Error al obtener el número: ${err}`);
    throw new Error('Error al obtener el número!');

  }

}

export const App = () => {
  const [number, setNumber] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [key, forceRefetch] = useReducer((x) => x + 1, 0);

  useEffect(() => {

    setIsLoading(true);

    getRandomNumberFromApi()
      .then(numApi => setNumber(numApi))
      .catch(err => setError(err.message));

  }, [key]);

  useEffect(() => { if (number) setIsLoading(false); }, [number]);

  useEffect(() => { if (error) setIsLoading(false); }, [error]);

  return (
    <div className='App'>

      {
        isLoading
          ? <h2>Cargando...</h2>
          : <h2>Número aleatorio: {number}</h2>
      }

      {!isLoading && error && <h2>{error}</h2>}

      <button onClick={forceRefetch} disabled={isLoading}>
        {
          isLoading ? '...' : 'Nuevo número'
        }
      </button>

    </div>
  )
}