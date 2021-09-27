import classes from './AccountPage.module.css';
function AccountPage() {
  return (
    <section>
   <div className={classes.border}>
  <div className={classes.whiteborder}> 
  <div  className={classes.textfield}>
    <h1> My Account </h1>
    <h1> Login </h1>  
    </div>
    <div className={classes.LoginPage}>
        <div className={classes.control}>
        <label htmlFor='username'>Username or Emailaddress*</label>
        <input type='text' required id='title' />
        </div>
        <div className={classes.control}>
        <label htmlFor='password'>Password*</label>
        <input type='password' required id='password' />
        </div>
        <div className={classes.rememberme}>
        <input type="checkbox" name="Rememberme" /> Remember me &nbsp;&nbsp;
        </div>
        <div className={classes.actions}>
        <button >
            Log in
        </button>
        </div>
        <div > 
          <h5 className={classes.lostpassword} >
            Lost your Password?
          </h5>
        </div>
        </div>
       </div>
    </div>
</section>
);
}
export default AccountPage;
