import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog9() {
    const history=useHistory();
    const handleRoute8=()=>{
      history.push('/Blog8')
    }
    const handleRoute10=()=>{
      history.push('/Blog10')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-24.jpeg" /> 
          <h1>
          Eucalyptus Oil A Natural Wake-me-up
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>
 
        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute8}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute10}>
        Next Post →
      </button>
        </div>
    );
}


    
