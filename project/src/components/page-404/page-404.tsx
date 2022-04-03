import { Link } from 'react-router-dom';
function Page404(): JSX.Element {
  return(
    <main className="page__main page__main--property">
      <div className="notfound">404 Not Found</div>
      <Link to="/">To Main Page</Link>
    </main>
  );
}

export default Page404;
