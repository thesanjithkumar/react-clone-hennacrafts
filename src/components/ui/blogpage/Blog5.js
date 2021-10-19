import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog5() {
    const history=useHistory();
    const handleRoute4=()=>{
      history.push('/Blog4')
    }
    const handleRoute6=()=>{
      history.push('/Blog6')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-36.jpeg" /> 
          <h1>
          How to Use Tea Tree Oil for Hair Growth
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>

        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute4}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute6}>
        Next Post →
      </button>
        </div>
    );
}


    
