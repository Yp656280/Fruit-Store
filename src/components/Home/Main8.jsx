import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { useMediaQuery } from "react-responsive";

function Main8() {
  const isNarrow = useMediaQuery({ query: "(max-width: 992px)" });
  const [narrow, setnarrow] = useState(2);

  const properties = {
    prevArrow: (
      <button
        className=" flex justify-center items-center main8-button-Style left-button "
        style={{ left: "87.2%" }}
      >
        <i class="bi bi-arrow-right"></i>
      </button>
    ),
    nextArrow: (
      <button
        className=" flex justify-center items-center mr-3 main8-button-Style"
        style={{ right: "0px" }}
      >
        <i class="bi bi-arrow-left"></i>
      </button>
    ),
  };
  useEffect(() => {
    if (isNarrow) {
      setnarrow(1);
    } else {
      setnarrow(2);
    }
  }, [isNarrow]);
  return (
    <div className="main8-wrapper ">
      <div className=" main8-container ">
        <div className="main8-header">
          <div className="main8-title">Our Testimonial</div>
          <div className="main8-subtitle">Our Client Saying!</div>
        </div>
        <Slide
          cssClass="main8-slide"
          slidesToScroll={1}
          slidesToShow={narrow}
          {...properties}
        >
          <div className="main8-testimonial-container">
            <div className="main8-testimonial">
              <p className="main8-testimonial-text">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="main8-client-info">
                <img
                  src="https://themewagon.github.io/fruitables/img/testimonial-1.jpg"
                  alt=""
                  className=" "
                />
                <div className="main8-client-details">
                  <div className="main8-client-text">
                    <div className="main8-client-name">Client Name</div>
                    <div className="main8-client-profession">Profession</div>
                    <div className="main8-client-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>

                  <i className="fa fa-quote-right fa-2x main8-quote-icon"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="main8-testimonial-container">
            <div className="main8-testimonial">
              <p className="main8-testimonial-text">
                Lorem Ipsum is simply dummy text of the printing Ipsum has been
                the industry's standard dummy text ever since the 1500s,
              </p>
              <div className="main8-client-info">
                <img
                  src="https://themewagon.github.io/fruitables/img/testimonial-1.jpg"
                  alt=""
                />
                <div className="main8-client-details">
                  <div className="main8-client-text">
                    <div className="main8-client-name">Client Name</div>
                    <div className="main8-client-profession">Profession</div>
                    <div className="main8-client-rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>

                  <i className="fa fa-quote-right fa-2x main8-quote-icon "></i>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Main8;
