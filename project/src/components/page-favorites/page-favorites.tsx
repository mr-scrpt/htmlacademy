import { useState } from 'react';
import { offers } from '../../mocks/offers';
import { OffersType } from '../../types/offers';
import SnippetListFav from '../snippet-list-fav/snippet-list-fav';

function PageFavorites(): JSX.Element {
  const [offersList] = useState<OffersType>(offers);
  return(
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">

            {<SnippetListFav offersList={offersList}/>}


          </ul>
        </section>
      </div>
    </main>
  );
}

export default PageFavorites;
