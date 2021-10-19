import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog13() {
    const history=useHistory();
    const handleRoute12=()=>{
      history.push('/Blog12')
    }
    const handleRoute14=()=>{
      history.push('/Blog14')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/oral-health-systems-in-portugal-sweden-and-roman.png" /> 
          <h1>
          13 USES FOR TEA TREE OIL THAT WILL CHANGE YOUR LIFE
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>

        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute12}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute14}>
        Next Post →
      </button>
        </div>
    );
}


    
