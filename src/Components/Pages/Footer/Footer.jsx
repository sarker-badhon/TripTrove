import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-gray-600 text-white">
        <aside>
          <img className="w-60 text-white cursor-pointer" src="https://i.ibb.co/thVTBVc/Capture-removebg-preview.png" alt="" />
          <p className="w-80">
            TripTrove.com
            is a premium online booking portal which allows you to purchase ticket for various bus, launch, airline & hotel room booking services both Internationally & locally across the country.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">About TripTrove</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
       
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
       
        <nav>
          <h6 className="footer-title">Company Info</h6>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">How To Buy Ticket</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-gray-700 text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by Badhon Sarker</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
