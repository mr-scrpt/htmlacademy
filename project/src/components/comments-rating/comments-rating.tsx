import { ChangeEvent, useState } from 'react';

function CommentsRating (): JSX.Element {
  const [rating, setRating] = useState ([false, false, false, false, false]);
  // eslint-disable-next-line no-console
  console.log(rating);
  return(
    <>
      {rating.map((item, id)=> (
        <>
          <input
            key={`${rating[id]}-item`}
            className="form__rating-input visually-hidden"
            name="rating"
            value={`${id}`}
            id={`${id}-stars`}
            type="radio"
            checked={rating[id]}
            onChange={({target}: ChangeEvent<HTMLInputElement>)=>{

              setRating(()=> {
                const newState = [false, false, false, false, false];
                newState[id] = true;
                return newState;
              });

            }}
          />
          <label htmlFor={`${id}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </>
      ))}
    </>
  );
}
export default CommentsRating;
