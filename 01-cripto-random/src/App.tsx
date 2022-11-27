import { useRandom } from './hooks/useRandom';
import './App.css';

export const App = () => {

  const query = useRandom();

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