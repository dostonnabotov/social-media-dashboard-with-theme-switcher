import "./Card.css";

export default function Card(props) {
  let textColor, rateImg, rate;
  if (props.rating.rate === "up") {
    textColor = "text-success";
    rateImg = "/assets/icon-up.svg";
    rate = "increase";
  } else if (props.rating.rate === "down") {
    textColor = "text-danger";
    rateImg = "/assets/icon-down.svg";
    rate = "decrease";
  }

  return (
    <div className={`[ ${props.name} border-top ] [ card flow ]`}>
      <div className="[ card__layout ] [ jc-center ]">
        <img src={props.icon} alt={props.name} title={props.name} />
        <span className="text-body">{props.username}</span>
      </div>
      <div className="card__body">
        <h2 className="fs-900 text-neutral">{props.number}</h2>
        <h3 className="fs-500 uppercase text-body">Followers</h3>
      </div>
      <div className="rating">
        <img src={rateImg} alt={rate} ariaLabel={rate}></img>
        <span className={textColor}>{props.rating.number} Today</span>
      </div>
    </div>
  );
}
