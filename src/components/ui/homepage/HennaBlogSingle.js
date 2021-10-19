import "./ProductsSection.css";

export default function (props) {
  return (
    <div className="hennablogchild" id="blog">
      <a className="links" href="/blog">
        <img className="hennablog_img" src={props.src} />
        <div className="bloginnerdiv">
          <p className="hennablogchild_heading">{props.blog_title}</p>
        </div>
      </a>
      <p className="bloginnerdiv">{props.blog_body}</p>
      <div className="blogbuttondiv">
        <a href={props.href} className="blogbutton">
          Read More
        </a>
      </div>
    </div>
  );
}
