import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog10() {
    const history=useHistory();
    const handleRoute9=()=>{
      history.push('/Blog9')
    }
    const handleRoute11=()=>{
      history.push('/Blog11')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/9-1.jpg" /> 
          <h1>
          Benefits of Henna For Hair Health
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>
 
        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute9}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute11}>
        Next Post →
      </button>
        </div>
    );
}


    
