import HennaBlogSingle from "./HennaBlogSingle";
import "./ProductsSection.css";
const DUMMY_DATA = [
  {
    id: "1",
    src: "https://hennacrafts.com/wp-content/uploads/2021/03/9.jpg",
    blog_title: "The Best of The Best",
    blog_body:
      "The Best Of The Best Bridal Foot Mehendi For Your Inspiration My last post got me thinking, we all have seen amazing bridal mehendi designs for our hands, but what about our feet? Every bride who applies henna for her wedding ceremony does apply henna on her feet too, and",
    herf: "/blog",
  },
  {
    id: "2",
    src: "https://hennacrafts.com/wp-content/uploads/2021/03/word-image-36-1024x725.jpeg",
    blog_title: "How to Use Tea Tree",
    blog_body:
      "How to Use Tea Tree Oil for Hair Growth? By Beatuy Epic on September 21, 2019 on Hair, Hair Growth Tea tree oil has been used from several years but has now started becoming popular. It has been first introduced in Austria. the people of Australia started using tea tree oil as antiseptic. Tea tree oil",
    herf: "/blog",
  },
  {
    id: "3",
    src: "https://hennacrafts.com/wp-content/uploads/2021/03/word-image-6-1024x683.jpeg",
    blog_title: "20 Uses for Lavender Essentials",
    blog_body:
      "Whether you are looking for a way to soothe a bug bite, calm an earache, make some homemade body products, or just unwind at the end of a busy day, Lavender Essential Oil is a must-have! Make sure to save these 20 uses for Lavender Essential Oil for future reference!",
    herf: "/blog",
  },
];

export default function HennaBlog() {
  return (
    <div>
      <div className="hennablog_main">
        {DUMMY_DATA.map((items) => (
          <HennaBlogSingle
            key={items.id}
            src={items.src}
            blog_title={items.blog_title}
            blog_body={items.blog_body}
            href={items.herf}
          />
        ))}
      </div>
      <div className="viewblog_div">
        <a href="/blog" className="viewblog">
          View the Henna Craft Blog
        </a>
      </div>
    </div>
  );
}
