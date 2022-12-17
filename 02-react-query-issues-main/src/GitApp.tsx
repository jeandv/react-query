import { FC } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export const GitApp: FC = () => {

  const location = useLocation();

  return (
    <div className="container mt-3">
      <h1>Git Issues <small>Seguimiento de problemas</small> </h1>
      {
        location.pathname === '/issues/list'
          ? <Link to='/issues/list/infinite'>Ir a modo Infinity Scroll</Link>
          : <Link to='/issues/list'>Volver a modo paginación</Link>
      }
      <Outlet />
    </div>
  )
}