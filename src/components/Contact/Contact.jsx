import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import DisplayPage from "../DisplayPage";

function Contact() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <DisplayPage data={{ title: "Contact" }} />
      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-content">
            <div className=" contact-item-div">
              <div className="contact-header">
                <p className="contact-title">Get in touch</p>
                <p className="contact-description">
                  The contact form is currently inactive. Get a functional and
                  working contact form with Ajax & PHP in a few minutes. Just
                  copy and paste the files, add a little code and you're done.
                  <a className="contact-download-link">Download Now.</a>
                </p>
              </div>
              <div className="contact-map">
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={13}
                  className="contact-map-container "
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
              <div className="contact-form">
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  className="contact-input"
                  placeholder="Enter Your Email"
                />
                <textarea
                  className="contact-textarea"
                  placeholder="Your Message"
                ></textarea>
                <button className="contact-submit-btn">Submit</button>
              </div>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-map-marker-alt fa-2x text-primary  mr-[24px] text-custom-green-500"></i>
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-title">Address</p>
                    <p className="contact-info-text">123 Street New York.USA</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <i className="fas fa-envelope fa-2x text-primary mr-[24px] text-custom-green-500"></i>
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-title">Mail Us</p>
                    <p className="contact-info-text">info@example.com</p>
                  </div>
                </div>
                <div className="contact-info-item-last ">
                  <div className="contact-info-icon">
                    <i className="fa fa-phone-alt fa-2x text-primary  mr-[24px] text-custom-green-700"></i>
                  </div>
                  <div className="contact-info-content">
                    <p className="contact-info-title">Telephone</p>
                    <p className="contact-info-text">(+012) 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
