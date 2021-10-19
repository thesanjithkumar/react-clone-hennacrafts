import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog14() {
    const history=useHistory();
    const handleRoute13=()=>{
      history.push('/Blog13')
    }
    const handleRoute15=()=>{
      history.push('/Blog15')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-6.jpeg" /> 
          <h1>
          20 Uses for Lavender Essential Oil
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>
  
        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute13}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute15}>
        Next Post →
      </button>
        </div>
    );
}


    
