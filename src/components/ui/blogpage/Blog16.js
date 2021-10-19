import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog16() {
    const history=useHistory();
    const handleRoute15=()=>{
      history.push('/Blog15')
    }
    const handleRoute1=()=>{
      history.push('/Blog1')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/how-to-use-henna.jpeg" /> 
          <h1>
          5 Basic Steps To Apply Henna For Grey Hair
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>

        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute15}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute1}>
        Next Post →
      </button>
        </div>
    );
}


    
