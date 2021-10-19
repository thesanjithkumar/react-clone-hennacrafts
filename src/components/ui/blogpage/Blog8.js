import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog8() {
    const history=useHistory();
    const handleRoute7=()=>{
      history.push('/Blog7')
    }
    const handleRoute9=()=>{
      history.push('/Blog9')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/51-beautiful-designs-for-hands-or-mahndi-desgins.jpeg" /> 
          <h1>
          51 Beautiful Mylanchi designs for hands Kerala mehndi designs
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>
      
        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute7}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute9}>
        Next Post →
      </button>
        </div>
    );
}


    
