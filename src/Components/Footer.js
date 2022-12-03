import React from "react";
import "./Style/Footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return <div>
        <section className="footer">
            <div className="footer-text">

                <h1>Reach us On Social Media</h1>

                <div className="icons">
                    <FacebookIcon className="icon" />
                    <TwitterIcon  className="icon" />
                    <LinkedInIcon  className="icon" />
                    <InstagramIcon  className="icon" />
                </div>
               
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.intimade lern  © All rights reserved</p>

            </div>

        </section>
  </div>;
};

export default Footer;
