
import { BsCart4 } from "react-icons/bs";
import { RiVisaFill, RiMastercardFill } from "react-icons/ri";

import './DashboardPage.css';
function Dashboard() {
    return (
      <div className='main_class'>
        
        <div className='avatar_styling'>
            <img className='avatar' src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />

            <div className='avatar_info_styling'>
                <h2>Welcome Ram</h2>
                <p>Number of orders : 0</p>
                <p>Number of items in cart : 0</p>
             </div>

             <div>
             <div className='Membership_styling'>
                <h2 className='Ccard_heading'>Membership Details</h2>
                <p className='card_details'>Membership Type: Gold</p>
                <p className='card_details'>Status: Active</p>
                <p className='card_details'>Coins: 200</p>
            </div>

            </div>

        </div>

        <div className='order_styling'>

            <div className='cart_section_styling'>
            <h2 className='order_heading'>Your Cart</h2>
            <BsCart4 size="6em" className="icon_alignment" />
            <p>Your Cart Is Empty</p>
            </div>

            <div className='coupon_section_styling'>
                <h2 className='coupon_heading'>Coupons</h2>
                <p className='coupon'>Flash Sale</p>
                <p className='coupon'>Mega Sale</p>
                <p className='coupon'>Off Sale</p>
            </div>

        </div>

        <div className='card_address'>

            <div className='saved_cards_styling'>
                <h2 className='Ccard_heading'>Saved Cards</h2>
                <p className='card_details'>XXXX XXXX 4568  <RiVisaFill className="icon_resizing" size="25px"/></p>
                <p className='card_details'>XXXX XXXX 2345  <RiMastercardFill className="icon_resizing" size="25px"/></p>
                <p className='card_details'>XXXX XXXX 3890  <RiVisaFill className="icon_resizing" size="25px"/></p>
            </div>

            <div className='saved_address'>
                <h2 className='Ccard_heading'>Saved Address</h2>
                <p className='card_details'>0, MALIYON KA BADA BAS, SOJAT CITY, Pali, Rajasthan</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Dashboard;