import PageMain from '../page-main/page-main';
import { appPropType } from '../..';

function App({countSnippet}: appPropType): JSX.Element {
  return <PageMain countSnippet={countSnippet}/>;
}

export default App;
