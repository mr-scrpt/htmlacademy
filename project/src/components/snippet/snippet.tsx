import { Link } from 'react-router-dom';
import { OfferType } from '../../types/offers';

type offersProps = {
  offer: OfferType,
  // key: OfferIdType
}
function Snippet({offer}:  offersProps): JSX.Element {

  return (
    <article className='cities__place-card place-card'>
      <div className='place-card__mark'>
        <span>
				Premium
        </span>
      </div>
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <Link to={`/room/${offer.id}`}>

          <img
            className='place-card__image'
            src='img/apartment-01.jpg'
            width='260'
            height='200'
            alt=""
          />
        </Link>

      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>
					&euro;{offer.price}
            </b>
            <span className='place-card__price-text'>
					&#47;&nbsp;night
            </span>
          </div>
          <button
            className='place-card__bookmark-button button'
            type='button'
          >
            <svg
              className='place-card__bookmark-icon'
              width='18'
              height='19'
            >
              <use xlinkHref='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>
					To bookmarks
            </span>
          </button>
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span
              style={{
                width:
						'80%',
              }}
            >
            </span>
            <span className='visually-hidden'>
					Rating
            </span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <a href='#'>
            {offer.name}
          </a>
        </h2>
        <p className='place-card__type'>
          {offer.type}
        </p>
      </div>
    </article>
  );
}

export default Snippet;
