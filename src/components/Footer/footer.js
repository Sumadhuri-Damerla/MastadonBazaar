import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*Column 1 */}
                    <div className="col">
                        <h5><b>INFO</b></h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
                    {/*Column 2 */}
                    <div className="col">
                        <h5><b>HELP</b></h5>
                        <ul className="list-unstyled">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Report incident</a></li>
                        </ul>
                    </div>
                    {/*Column 3 */}
                    <div className="col">
                        <h5><b>POLICY</b></h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Terms of Use</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                    {/*Copyright */}
                    <div class="col-sm-5 copyright">
                        <p>
                            &copy;{new Date().getFullYear()}-2021, MastodonBazaar.com
                            </p>
                    </div>
                    {/*Connect links */}
                    <div class="col-sm-3 social-links">
                        <p>
                            Connect with us on:
                            {/*Facebook*/}
                            <a href="#" className="facebook social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            {/*Twitter*/}
                            <a href="#" className="twitter social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            {/*Linkedin*/}
                            <a href="#" className="linkedin  social">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;

