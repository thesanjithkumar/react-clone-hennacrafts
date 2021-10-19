import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog4() {
    const history=useHistory();
    const handleRoute3=()=>{
      history.push('/Blog3')
    }
    const handleRoute5=()=>{
      history.push('/Blog5')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/low-maintenance-hair-color-trends-or-teen-vogue-1536x1536.jpeg" /> 
          <h1>
          NATURAL HAIR COLOR 101 HENNA HAIR DYE TIPS
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>

        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute3}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute5}>
        Next Post →
      </button>
        </div>
    );
}


    
