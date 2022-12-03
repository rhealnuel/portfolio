import React from "react"; 
import logo from '../images/logo2.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/in.png';
import internet from '../images/internet.png';
import './footer.css';



function Footer() {
    return(
        <div className='mainfooter'>
            <div className='footer'>
                <div className='footerlogo1'>
                    <img src={logo} alt='logo' className='footerlogo'/>
                </div>
                 <div className='footertext1'>
                    <p className='footerp'>Living, learning, & leveling up<br/> one day at a time</p>
                    
                </div>
                 <div className='footersocial'>
                    <img src={twitter} alt='twitter' className='social'/>
                    <img src={facebook} alt='facebook' className='social'/>
                    <img src={linkedin} alt='linkedin' className='social'/>
                    <img src={internet} alt='internet' className='social'/>
                </div>
                 <div className='footertex2'>
                    <p className='finalp'>Handcrafted by me 2022</p> 
                    
                </div>
                
            </div>
        </div>
    )
}
export default Footer;