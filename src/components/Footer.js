import React from 'react'
import '../scss/footer.scss'
import { ReactComponent as AmericanExpressIcon } from '../static/image/american-express.svg'
import { ReactComponent as ApplePayIcon } from '../static/image/apple-pay.svg'
import { ReactComponent as DinersClubIcon } from '../static/image/diners-club.svg'
import { ReactComponent as DiscoverIcon } from '../static/image/discover.svg'
import { ReactComponent as EloIcon } from '../static/image/elo.svg'
import { ReactComponent as GooglePayIcon } from '../static/image/google-pay.svg'
import { ReactComponent as JCBIcon } from '../static/image/jcb.svg'
import { ReactComponent as MastercardIcon } from '../static/image/mastercard.svg'
import { ReactComponent as PaypalIcon } from '../static/image/paypal.svg'
import { ReactComponent as ShopPayIcon } from '../static/image/shop-pay.svg'
import { ReactComponent as VenmoIcon } from '../static/image/venmo.svg'
import { ReactComponent as VisaIcon } from '../static/image/visa.svg'

const Footer = () => {

  return (
    <>
    <div className='help'>
      <div className='title'>Help</div>
      <ul>
        <li><a href="https://superfruit.formstack.com/forms/support">Customer Support</a></li>
        <li><a href="https://superfruit.app">Join Superfruit</a></li>
        <li><a href="https://superfruit.formstack.com/forms/business">Get your product featured</a></li>
      </ul>
    </div>
  
    <div className='footer'>
        <p>&copy; Superfruit</p>
        <div>
            <AmericanExpressIcon/>
            <ApplePayIcon/>
            <DinersClubIcon/>
            <DiscoverIcon/>
            <EloIcon/>
            <GooglePayIcon/>
            <JCBIcon/>
            <MastercardIcon/>
            <PaypalIcon/>
            <ShopPayIcon/>
            <VenmoIcon/>
            <VisaIcon/>
        </div>
      </div>
    </> 
  );
}

export default Footer;