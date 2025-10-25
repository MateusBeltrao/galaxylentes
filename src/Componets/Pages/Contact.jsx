import React from "react";
import { Link } from 'react-router-dom'


const ContactUs = () => (

  <>
    <div className="Page-section mb-5 text-center">
      <p className="text-muted"> <Link to='/'>Home</Link> / Contact Us</p>
      <h2 className="fw-bold">CONTACT US</h2>
    </div>

    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331656415!2d73.09068430723583!3d22.322240636905985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1743762171329!5m2!1sen!2sin"
            height="650px"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-lg-4 bg-light p-4 conatct-form ">
          <h4 className="fw-bold">GET IN TOUCH WITH US</h4>
          <p className="text-muted">
            If you wish to directly reach us, please fill out the form below -
          </p>
          <form className="mt-5">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder="" />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message (optional)</label>
              <textarea className="form-control" rows="7" placeholder=""></textarea>
            </div>
            <button type="submit" className="btn btn-success w-20">
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      <div className="row mt-5 p-4 contact-info">
        <div className="col-md-6 col-lg-3 contact-icons">
          <i className="bi bi-geo-alt-fill text-success "></i>
          <p>60 29th San Francisco, 507 - Union Center</p>
        </div>
        <div className="col-md-6 col-lg-3 contact-icons">
          <i className="bi bi-telephone-fill text-success "></i>
          <p>Call us: <br /> (+01) 987-654-3210</p>
        </div>
        <div className="col-md-6 col-lg-3 contact-icons">
          <i className="bi bi-envelope-fill text-success "></i>
          <p>Mail us: <br /> demo@example.com</p>
        </div>
        <div className="col-md-6 col-lg-3 contact-icons">
          <i className="bi bi-clock-fill text-success "></i>
          <p>Open Time: <br /> 10:00AM - 6:00PM</p>
        </div>
      </div>
    </div>
  </>
);

export default ContactUs;
