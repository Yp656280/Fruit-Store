import React from "react";
import { Link } from "react-router-dom";
import paymentImg from "../../assets/payment.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          {" "}
          <div className="footer-top">
            <div className=" footer-top-item-div">
              {" "}
              <div className="footer-brand">
                <h1>Fruit Store</h1>
                <p>Fresh products</p>
              </div>
              <div className="footer-subscribe">
                <div className=" footer-subscribe-item-div">
                  {" "}
                  <input type="number" placeholder="Your Email" />
                  <button>Subscribe Now</button>
                </div>
              </div>
              <div className="footer-social">
                <div className=" footer-social-item-div">
                  {" "}
                  <button>
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button>
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button>
                    <i className="fab fa-youtube"></i>
                  </button>
                  <button>
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-section-content">
                <h1 className="footer-section-title">Why People Like us!</h1>
                <p className=" first-para">
                  typesetting, remaining essentially unchanged. It was
                  popularised in the 1960s with the like Aldus PageMaker
                  including of Lorem Ipsum.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-section-content">
                <h1 className="footer-section-title">Shop Info</h1>
                <Link>About Us</Link>
                <Link>Contact us</Link>
                <Link>Privacy Policy</Link>
                <Link>Terms & Condition</Link>
                <Link>Return Policy</Link>
                <Link>FAQs & Help</Link>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-section-content">
                <h1 className="footer-section-title">Account</h1>
                <Link>My Account</Link>
                <Link>Shop Details</Link>
                <Link>Shopping Cart</Link>
                <Link>Wishlist</Link>
                <Link>Order History</Link>
                <Link>International Orders</Link>
              </div>
            </div>
            <div className="footer-section">
              <div className="footer-section-content">
                <h1 className="footer-section-title">Contact</h1>
                <p className="last-section">Address: 1429 Netus Rd, NY 48247</p>
                <p className="last-section">Email: Example@gmail.com</p>
                <p className="last-section">Phone: +0123 4567 8910</p>
                <p className="last-section">Payment Accepted</p>
                <img src={paymentImg} alt="" className=" max-w-full h-auto " />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copyright">
              <i className="fas fa-copyright text-light me-2"></i>
              <Link>Your Site Name</Link>
              <p>, All right reserved.</p>
            </div>
            <p className="footer-designer">
              Designed By <span>Yogesh Prajapati</span> Distributed By{" "}
              <span>Yogesh</span>
            </p>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

export default Footer;
