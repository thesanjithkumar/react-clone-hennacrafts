import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog7() {
    const history=useHistory();
    const handleRoute6=()=>{
      history.push('/Blog6')
    }
    const handleRoute8=()=>{
      history.push('/Blog8')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/sally-essential-colour-skills-refresher-course-or-s.jpeg" /> 
          <h1>
          GET THE 6 BEST HAIR COLORS FOR WINTER 2020 FROM HENNA
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>
  
        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute6}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute8}>
        Next Post →
      </button>
        </div>
    );
}


    
