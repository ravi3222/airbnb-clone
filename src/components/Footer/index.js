import React from "react";
import "./styles.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <section className="footer__infoSection">
          <h4>About</h4>
          <ul>
            <li>
              <a href="/#">How Airbnb Works</a>
            </li>
            <li>
              <a href="/#">Newsroom</a>
            </li>
            <li>
              <a href="/">Airbnb Plus</a>
            </li>
            <li>
              <a href="/">Airbnb Luxe</a>
            </li>
            <li>
              <a href="/">HotelTonight</a>
            </li>
            <li>
              <a href="/">Airbnb for Work</a>
            </li>
            <li>
              <a href="/">Olympics</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
          </ul>
        </section>

        <section className="footer__infoSection">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="/">Diversity & Belonging</a>
            </li>
            <li>
              <a href="/">Accessibility</a>
            </li>
            <li>
              <a href="/">Airbnb Associates</a>
            </li>
            <li>
              <a href="/">Frontline Stays</a>
            </li>
            <li>
              <a href="/">Invite friends</a>
            </li>
          </ul>
        </section>
        <section className="footer__infoSection">
          <h4>Host</h4>
          <ul>
            <li>
              <a href="/">Host your home</a>
            </li>
            <li>
              <a href="/">Host an Online Experience</a>
            </li>
            <li>
              <a href="/">Host an Experience</a>
            </li>
            <li>
              <a href="/">Responsible hosting</a>
            </li>
            <li>
              <a href="/">Open Homes</a>
            </li>
            <li>
              <a href="/">Resource Centre</a>
            </li>
            <li>
              <a href="/">Community Centre</a>
            </li>
          </ul>
        </section>
        <section className="footer__infoSection">
          <h4>Support</h4>
          <ul>
            <li>
              <a href="/">Our COVID-19 Response</a>
            </li>
            <li>
              <a href="/">Help Centre</a>
            </li>
            <li>
              <a href="/">Cancellation options</a>
            </li>
            <li>
              <a href="/">Neighbourhood Support</a>
            </li>
            <li>
              <a href="/">Trust & Safety</a>
            </li>
          </ul>
        </section>
      </div>

      <div className="footer__copyright">
        <p>© 2020 Airbnb clone! No rights reserved - this is a demo!</p>
        <p>Privacy · Terms · Sitemap · Company Details</p>
      </div>
    </div>
  );
}

export default Footer;
