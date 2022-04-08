/* eslint-disable no-console */
import PageMain from '../page-main/page-main';
import PageSing from '../page-sing/sing';
import PageFavorites from '../page-favorites/page-favorites';
import PageRoom from '../page-room/page-room';
import Page404 from '../page-404/page-404';
import { appPropType } from '../..';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { AppRoute, AuthStatus } from '../../configApp';
import RoutePrivate from '../route-private/route-private';

function App({countSnippet, offers}: appPropType): JSX.Element {


  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <PageMain countSnippet={countSnippet} offers={offers}/>
        </Route>
        <Route path={AppRoute.Login} exact>
          <PageSing />
        </Route>
        <RoutePrivate path={AppRoute.Fav} exact authStatus={AuthStatus.Auth} render={()=> <PageFavorites />} >

        </RoutePrivate>


        <Route path={AppRoute.Room} exact>
          <PageRoom />
        </Route>
        <Route >
          <Page404 />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
