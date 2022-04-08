import { OffersType } from '../../types/offers';
import Snippet from '../snippet/snippet';

type PropsType = {
  offersList: OffersType
}
function SnippetList({offersList}: PropsType): JSX.Element{

  return (
    <>
      {offersList.map((offer)=> <Snippet offer={offer} key={offer.id}/>)}
    </>
  );
}

export default SnippetList;
