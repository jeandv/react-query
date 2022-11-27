import { useQuery } from '@tanstack/react-query';
import './App.css';

const API = 'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new';

const getRandomNumberFromApi = async (): Promise<number> => {

  // try {

  const res = await fetch(API);

  const numberString = await res.text();

  return +numberString;

  // } catch (err) {

  // console.log(`Error al obtener el número: ${err}`);
  // throw new Error('Error al obtener el número!');

  // }

}

export const App = () => {

  const query = useQuery(
    ['randomQuery'],
    getRandomNumberFromApi
  );

  return (
    <div className='App'>

      {
        query.isFetching
          ? <h2>Cargando...</h2>
          : <h2>Número aleatorio: {query.data}</h2>
      }

      {!query.isLoading && query.isError && <h2>{`${query.error}`}</h2>}

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {
          query.isFetching ? '...' : 'Nuevo número'
        }
      </button>

    </div>
  )
}