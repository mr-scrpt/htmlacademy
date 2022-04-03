/* eslint-disable no-console */
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AppRoute, AuthStatus } from '../../configApp';


type RoutePropsPrivateType = RouteProps & {
	render: ()=> JSX.Element,
	authStatus: AuthStatus
}

function RoutePrivate (props: RoutePropsPrivateType): JSX.Element {
  const {exact, path, render, authStatus} = props;
  return (
    <Route exact={exact} path={path} render={()=>(
      authStatus === AuthStatus.Auth
        ? render()
        : <Redirect to={AppRoute.Login}/>
    )}
    >

    </Route>
  );
}


export default RoutePrivate;
