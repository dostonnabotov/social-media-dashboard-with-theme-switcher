import "./Overview.css";

export default function Overview(props) {
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
    <div className="[ card ] [ flow ]">
      <div className="[ card__layout ] [ jc-between ]">
        <p className="text-body">{props.title}</p>
        <img src={props.icon} alt={props.name} title={props.name} />
      </div>
      <div className="[ card__layout ] [ jc-between ]">
        <h2 className="fs-700 text-neutral">{props.number}</h2>
        <div className="rating">
          <img src={rateImg} alt={rate} ariaLabel={rate} />
          <span className={textColor}>{props.rating.number}%</span>
        </div>
      </div>
    </div>
  );
}
