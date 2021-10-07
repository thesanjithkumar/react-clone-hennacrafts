import { Link } from'react-router-dom';
import classes from './CartPage.module.css'
function CartPage() {
  return (
    <div className={classes.background}>
      <div className={classes.whitebackground}> 
      <div>
      <h1 className={classes.heading}>Cart</h1>
      </div>
      <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDBDOC41MDQwMyAwIDAgOC41MDQwMyAwIDE5QzAgMjkuNDk2IDguNTA0MDMgMzggMTkgMzhDMjkuNDk2IDM4IDM4IDI5LjQ5NiAzOCAxOUMzOCA4LjUwNDAzIDI5LjQ5NiAwIDE5IDBaTTI1LjEyOSAxMi44NzFDMjYuNDg1MSAxMi44NzEgMjcuNTgwNiAxMy45NjY1IDI3LjU4MDYgMTUuMzIyNkMyNy41ODA2IDE2LjY3ODYgMjYuNDg1MSAxNy43NzQyIDI1LjEyOSAxNy43NzQyQzIzLjc3MyAxNy43NzQyIDIyLjY3NzQgMTYuNjc4NiAyMi42Nzc0IDE1LjMyMjZDMjIuNjc3NCAxMy45NjY1IDIzLjc3MyAxMi44NzEgMjUuMTI5IDEyLjg3MVpNMTEuNjQ1MiAzMS4yNTgxQzkuNjE0OTIgMzEuMjU4MSA3Ljk2Nzc0IDI5LjY0OTIgNy45Njc3NCAyNy42NTczQzcuOTY3NzQgMjYuMTI1IDEwLjE1MTIgMjMuMDI5OCAxMS4xNTQ4IDIxLjY5NjhDMTEuNCAyMS4zNjczIDExLjg5MDMgMjEuMzY3MyAxMi4xMzU1IDIxLjY5NjhDMTMuMTM5MSAyMy4wMjk4IDE1LjMyMjYgMjYuMTI1IDE1LjMyMjYgMjcuNjU3M0MxNS4zMjI2IDI5LjY0OTIgMTMuNjc1NCAzMS4yNTgxIDExLjY0NTIgMzEuMjU4MVpNMTIuODcxIDE3Ljc3NDJDMTEuNTE0OSAxNy43NzQyIDEwLjQxOTQgMTYuNjc4NiAxMC40MTk0IDE1LjMyMjZDMTAuNDE5NCAxMy45NjY1IDExLjUxNDkgMTIuODcxIDEyLjg3MSAxMi44NzFDMTQuMjI3IDEyLjg3MSAxNS4zMjI2IDEzLjk2NjUgMTUuMzIyNiAxNS4zMjI2QzE1LjMyMjYgMTYuNjc4NiAxNC4yMjcgMTcuNzc0MiAxMi44NzEgMTcuNzc0MlpNMjUuOTEwNSAyOS41ODc5QzI0LjE5NDQgMjcuNTM0NyAyMS42NzM4IDI2LjM1NDggMTkgMjYuMzU0OEMxNy4zNzU4IDI2LjM1NDggMTcuMzc1OCAyMy45MDMyIDE5IDIzLjkwMzJDMjIuNDAxNiAyMy45MDMyIDI1LjYxMTcgMjUuNDA0OCAyNy43ODc1IDI4LjAyNUMyOC44NDQ4IDI5LjI4MTUgMjYuOTI5NCAzMC44MjE0IDI1LjkxMDUgMjkuNTg3OVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" className={classes.imgcenter} />
        <h1 className={classes.carttext}>Your cart is currently empty!</h1>
        <a href="/" className={classes.browse_style}><p>Browse store.</p></a>
        <h1 className={classes.carttext}>New in store</h1>
      </div>

      {/* Product Description */}
      <div className={classes.product_style}>

        <div className={classes.product_img_style}>
          <Link to="/" className={classes.link_style}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/05/Bundle_700x-600x600.jpg" />
          <p className={classes.text_style}>USDA ORGANIC ESSENTIAL OILS COMBO</p>
          </Link>
          <span className={classes.text_style1}>$29.00</span><span className={classes.text_style2}>-or subscribe and save up to</span><span className={classes.text_style3}> 16%</span>
          <a href="/" className={classes.link_style}><button className={classes.button_style}>Select options</button></a>
        </div>

        <div className={classes.product_img_style}>
          <Link to='/' className={classes.link_style}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/05/daeb6568-bf37-474d-90a8-41905a87d7a0_600x.jpg" />
          <p className={classes.text_style}>HENNA HAIR DYE - RED BUNDLE WITH SHAMPOO & CONDITIONER</p>
          </Link>
          <span className={classes.text_style1}>$53.00</span><span className={classes.text_style2}>-or subscribe and save up to</span><span className={classes.text_style3}> 15%</span>
          <a href="/" className={classes.link_style}><button className={classes.button_style}>Select options</button></a>
        </div>

        <div className={classes.product_img_style}>
          <Link to='/' className={classes.link_style}>
          <img src="https://hennacrafts.com/wp-content/uploads/2021/02/tulsi-600x600.jpg" />
          <p className={classes.text_style}>Tulsi face pack</p>
          </Link>
          <a href="/" className={classes.link_style}><button className={classes.button_style}>Read more</button></a>
        </div>
      
      </div>
      </div>
    </div>
  );
}

export default CartPage;
