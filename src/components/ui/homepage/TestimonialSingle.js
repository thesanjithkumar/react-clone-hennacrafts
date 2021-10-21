import "./Products.module.css";
import quote_icon from "../img/quotes_icon.png";

export default function TestimonialSingle(props) {
  return (
    <div className="testimonial_child">
      <img src={quote_icon} className="quotes" />
      <img className="testimonial_img" src={props.src} />
      <p className="testimonialscontent">{props.body}</p>
      <hr className="br" />
      <p className="testimonial_name">{props.name}</p>
    </div>
  );
}
