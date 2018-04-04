import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
        <footer id="myFooter">
          <div className="container">
            <div className="row justify-content-between">
              <div>
                <ul className="MainFooterLinks list-inline">
                  <li className="list-inline-item"><a href="javascript:void(0)">About</a> <span> | </span> </li>
                  <li className="list-inline-item"><a href="https://venturecaferotterdam.org/">Venture Cafe</a><span> | </span></li>
                  <li className="list-inline-item"><a href="https://venturecaferotterdam.org/sponsor/">Volunteer</a><span> | </span></li>
                  <li className="list-inline-item"><a href="https://venturecaferotterdam.org/contact/">Contact Us</a></li>
                </ul>
              </div>

              <div>
                <div className="social-networks">
                  <a href="https://www.facebook.com/VentureCafeRotterdam" className="facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://twitter.com/VentureCafeRdam" className="twitter"><i className="fab fa-twitter"></i></a>
                  <a href="https://twitter.com/VentureCafeRdam" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                  <a href="https://instagram.com/venturecaferotterdam/" className="instagram"><i className="fab fa-instagram"></i></a>
                </div>
              </div>

            </div>

            <div className="row justify-content-center">
              <div className="footer-copyright">
                <p>
                  Copyright &copy; 2018 Venture Cafe Rotterdam. All rights reserved.
                </p>
              </div>
            </div>
          </div>

        </footer>

        </div>
        )
    }
}

export default Footer;
