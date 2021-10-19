import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog15() {
    const history=useHistory();
    const handleRoute14=()=>{
      history.push('/Blog14')
    }
    const handleRoute16=()=>{
      history.push('/Blog16')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/indigo-plants-wholesale-price-and-mandi-rate-for-i.jpeg" /> 
          <h1>
          8 Brilliant Benefits Of Using Indigo Powder For Hair
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>
  
        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute14}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute16}>
        Next Post →
      </button>
        </div>
    );
}


    
