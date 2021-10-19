import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog6() {
    const history=useHistory();
    const handleRoute5=()=>{
      history.push('/Blog5')
    }
    const handleRoute7=()=>{
      history.push('/Blog7')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-32.jpeg" /> 
          <h1>
          HOW TO GET THE BEST RESULTS FROM DARK BROWN HENNA HAIR COLOR
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>

        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute5}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute7}>
        Next Post →
      </button>
        </div>
    );
}


    
