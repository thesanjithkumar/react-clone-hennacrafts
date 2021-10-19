import classes from "./Blogs.module.css";
import { useHistory} from "react-router-dom";

export default function Blog12() {
    const history=useHistory();
    const handleRoute11=()=>{
      history.push('/Blog11')
    }
    const handleRoute13=()=>{
      history.push('/Blog13')
    }
    const handleRoute0 = () => {
      history.push("/BlogUncat1");
    };

    return(

       <div className={classes.container}>
        <div className={classes.whitecontainer}>
          <div className={classes.border}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/03/word-image-2.jpeg" /> 
          <h1>
          17 Spine Tattoo Designs That Will Chill You To The Bone
          </h1>
          <button className={classes.slip_button} onClick={handleRoute0}>
          Uncategorized / By Murtaza Ali Najmi
        </button>
 
        </div>
        </div>
        <button className={classes.slip_button1} onClick={handleRoute11}>
        ← Previous Post
      </button>
      <button className={classes.slip_button2} onClick={handleRoute13}>
        Next Post →
      </button>
        </div>
    );
}


    
