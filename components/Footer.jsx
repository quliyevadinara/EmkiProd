"use client";
import "../components/footer.scss";
const Footer = () => {
  return (
    <>
      <footer id="heroFooter">
        <div className="footerContainer">
          <div className="footerImg">
            <img src="https://www.emkiproduction.com/static/media/emkiLogoLight.3e1d4008f4a308141d1bca2d89ecd4d6.svg" alt="" />
          </div>
          <div className="footerItems">
            <h1>Social</h1>
            <p><i class="fa-brands fa-square-instagram"></i>Facebook</p>
            <span><i class="fa-brands fa-facebook"></i>Instagram</span>
          </div>
          
          <div className="footerItems">
            <h1>Information</h1>
            <p>About us</p>
            <span>Sponsor</span>
          </div>
          <div className="footerItems">
            <h1>Contact</h1>
            <span><i class="fa-solid fa-envelope"></i>office@emki.az</span>
           
          </div>
        </div>
        <div className="footerLine" >
          <div className="footerItem">© emkiproduction.com 2023</div> 
       
        </div>
      </footer>
    </>
  );
};

export default Footer;
