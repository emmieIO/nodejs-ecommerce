import PropTypes from 'prop-types'



// eslint-disable-next-line react/prop-types
const Rating = ({text, value, color}) => {
  return (
    <div className="rating">
      <span>
        <i style={{color}} 
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i style={{color}}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
      &nbsp;&nbsp;
      <span>{text && text} Reviews</span>
    </div>
  );

}
Rating.defaultProps = {
  color : "yellow"
}

Rating.PropTypes = {
  value: PropTypes.number.isRequired,
  text : PropTypes.string.isRequired,
  color : PropTypes.string
}
export default Rating