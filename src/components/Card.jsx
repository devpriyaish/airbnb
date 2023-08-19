import star from '../assets/star.png'
import './Card.css'

function Card(props) {
  return (
    <div className="card__flex">
    <div className="card">
      <div className="card__image">
        <img src={`../images/${props.coverImg}`} alt={`${props.coverImg.split('.').shift()}`} />
        {props.openSpots === 0 && <label className="card__image-label"> Sold Out </label>}
      </div>
      <div className="card__info">
        <div className='card__intro-info'>
          <img src={star} alt="star" />
          <span className='card__info-rating'> {props.stats.rating} </span>
          <span className='card__info-reviews'> ({props.stats.reviewCount}) </span>
          <span className='card__info-seperator'> • </span>
          <span className='card__info-location'> {props.location} </span>
        </div>
        <div className='card__info-title'>
          {props.title}
        </div>
        <div className='card__info-price-per-person'>
          <span className='card__info-price'> From ${props.price} </span>
          <span className='card__info-person'> / person </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Card