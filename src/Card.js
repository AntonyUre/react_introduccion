import "./Card.css";

function Card(props) {
  console.log(props)
  return (
    <div class="card__item">
      <div class="card__img-container">
        <img class="card__background" src={props.course.background} alt="Logo LarnU" />
        <img class="card__logo" src={props.course.icon} alt="Logo LarnU" />
      </div>
      <div class="card__text-container">
        <div>
          <h2>{props.course.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default Card;