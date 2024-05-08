import Logo from '../assets/Logo.png'
import "../components/header.scss"
import Img1 from '../assets/img1.png'
import arof from '../assets/erof.png'

function Header() {
    return(
      <div className="container">
        <div className="header-box">
        <img className='header-img' src={Logo} alt="" />
        <h2 className='header-text'>Features</h2>
        <h2 className='header-text1'>About us</h2>
        <h2 className='header-text2'>Pricing</h2>
        <h2 className='header-text3'>Feedback</h2>
        <button className='header-btn'>Request a demo</button>
        </div>
        <div className="header-box1">
            <div className="header-box1-box">
            <h1 className='header-box1-text'>Track your Expenses & Save Money</h1>
            <p className='header-box1-text1'>Helps you to organize your income and expenses</p>
            <div className="header-box1-box-box">
                <button className='header-box1-box-box-btn'>Try free demo <img src={arof} alt="" /></button>
                <p className='header-box1-box-box-text'>— Web, iOS and Android</p>
            </div>
            </div>
            
                <img className='header-box1-img' src={Img1} alt="" />
            
        </div>
      </div>
    )
}

export default Header;