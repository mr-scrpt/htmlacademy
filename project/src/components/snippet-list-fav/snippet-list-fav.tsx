import { OffersType } from '../../types/offers';
import SnippetFav from '../snippet-fav/snippet-fav';

type PropsType = {
  offersList: OffersType
}
function SnippetListFav({offersList}: PropsType): JSX.Element{

  return (
    <>
      {offersList.map((offer)=> <SnippetFav offer={offer} key={offer.id}/>)}
    </>
  );
}

export default SnippetListFav;
