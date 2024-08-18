import React, { useState, useEffect } from "react";

import DisplayPage from "../DisplayPage";
import "react-slideshow-image/dist/styles.css";
import Main9 from "../Home/Main9";

function Shopdetail() {
  const [active, setActive] = useState("description");
  const handleChange = (e) => {
    setActive(e.target.value);
  };
  const [price, setPrice] = useState(0);

  const [quantity, setQuantity] = useState("");

  const data = {
    name: "Broccoli",
    path: "https://themewagon.github.io/fruitables/img/single-item.jpg",
    type: "vegetable",
    price: "4.99$",
    quantity: quantity,
  };

  const [added, setAdded] = useState(false);

  const addToCart = async (data) => {
    data = { ...data };
    const x = JSON.parse(localStorage.getItem("data"));
    if (x) {
      const f = x?.find((el) => el.name === data.name);
      if (x[1]) {
        if (!f) {
          localStorage.setItem("data", JSON.stringify([data, ...x]));
          setAdded(true);
        }
      } else {
        if (!f) {
          localStorage.setItem("data", JSON.stringify([data, x]));

          setAdded(true);
        }
      }
    } else {
      localStorage.setItem("data", JSON.stringify([data]));
      setAdded(true);
    }
  };
  useEffect(() => {
    const x = JSON.parse(localStorage.getItem("data"));
    const f = x?.find((el) => el.name === data.name);
    if (f) {
      setAdded(true);
    }
  }, []);
  const handleChangex = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else if (type === "minus") {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <DisplayPage data={{ title: "Shop Detail" }} />
      <div className=" shop-detail-wrapper">
        <div className=" shop-detail-container">
          <div className=" shop-detail-item-div ">
            <div className="shop-detail-leftbar">
              <div className="shop-detail-leftbar-item-div">
                <div className="shop-detail-broccoli-card">
                  <div className="border rounded-[10px] overflow-hidden">
                    <a href="#">
                      <img
                        src="https://themewagon.github.io/fruitables/img/single-item.jpg"
                        className="img-fluid rounded"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>
                <div className="shop-detail-broccoli-card-info">
                  <h4 className="">Brocoli</h4>
                  <p className=" shop-detail-category">Category: Vegetables</p>
                  <h5 className="">3,35 $</h5>
                  <div className=" shop-detail-star-div">
                    <i className="fa fa-star text-secondary text-[#ffb524]"></i>
                    <i className="fa fa-star text-secondary text-[#ffb524]"></i>
                    <i className="fa fa-star text-secondary text-[#ffb524]"></i>
                    <i className="fa fa-star text-secondary text-[#ffb524]"></i>
                    <i className="fa fa-star text-[#747d88]"></i>
                  </div>
                  <p className="shop-detail-para">
                    The generated Lorem Ipsum is therefore always free from
                    repetition injected humour, or non-characteristic words etc.
                  </p>
                  <p className="shop-detail-para">
                    Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                    peacock flounder; chain pickerel hatchetfish, pencilfish
                    snailfish
                  </p>
                  <div className="shop-detail-input-group ">
                    <div className="shop-detail-input-group-btn">
                      <button className="">
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                    <input type="text" className="" value="1" />
                    <div className="shop-detail-input-group-btn">
                      <button className="">
                        <i className="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      if (!added) {
                        if (quantity > 0) addToCart(data);
                      }
                    }}
                    className="shop-detail-button "
                    // className=" w-36 h-10 rounded-full border transition delay-0 duration-500   border-custom-orange-500 text-custom-green-500 hover:text-white hover:bg-custom-orange-500 "
                  >
                    <i className="fa fa-shopping-bag  mr-[12px] text-primary text-custom-green-500"></i>
                    {added ? <Link to="/cart">Go to cart</Link> : "Add to cart"}
                  </button>
                </div>{" "}
                <div className="shop-detail-tab-container">
                  <div className="shop-detail-tab-buttons">
                    <button
                      value="description"
                      onClick={handleChange}
                      className={`shop-detail-tab-button ${
                        active === "description"
                          ? "text-[#495057] border-custom-orange-500"
                          : "text-custom-green-500 border-[#dee2e6]"
                      }`}
                    >
                      Description
                    </button>
                    <button
                      value="reviews"
                      onClick={handleChange}
                      className={`shop-detail-tab-button ${
                        active === "reviews"
                          ? "text-[#495057] border-custom-orange-500"
                          : "text-custom-green-500 border-[#dee2e6]"
                      }`}
                    >
                      Reviews
                    </button>
                    <div className="shop-detail-tab-button-filler"></div>
                  </div>
                  {active === "description" ? (
                    <div className="shop-detail-tab-description">
                      <div className="shop-detail-tab-text">
                        The generated Lorem Ipsum is therefore always free from
                        repetition injected humour, or non-characteristic words
                        etc. Susp endisse ultricies nisi vel quam suscipit
                      </div>
                      <div className="shop-detail-tab-text">
                        Sabertooth peacock flounder; chain pickerel hatchetfish,
                        pencilfish snailfish filefish Antarctic icefish goldeye
                        aholehole trumpetfish pilot fish airbreathing catfish,
                        electric ray sweeper.
                      </div>
                      <table className="shop-detail-tab-table">
                        <tr className="shop-detail-tab-table-row-alt">
                          <td>
                            <p>Weight</p>
                          </td>
                          <td>
                            <p>1 Kg</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Country of Origin</p>
                          </td>
                          <td>
                            <p>Agro Farm</p>
                          </td>
                        </tr>
                        <tr className="shop-detail-tab-table-row-alt">
                          <td>
                            <p>Quality</p>
                          </td>
                          <td>
                            <p>Organic</p>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p>Check</p>
                          </td>
                          <td>
                            <p>Healthy</p>
                          </td>
                        </tr>
                        <tr className="shop-detail-tab-table-row-alt">
                          <td>
                            <p>Min Weight</p>
                          </td>
                          <td>
                            <p>250kg</p>
                          </td>
                        </tr>
                      </table>
                    </div>
                  ) : (
                    <>
                      <div className="shop-detail-tab-review">
                        <div className="shop-detail-tab-review-image">
                          <img
                            src="https://themewagon.github.io/fruitables/img/avatar.jpg"
                            alt=""
                          />
                        </div>
                        <div className="shop-detail-tab-review-content">
                          <p className="shop-detail-tab-review-date">
                            April 12, 2024
                          </p>
                          <div className="shop-detail-tab-review-header">
                            <h5 className="shop-detail-tab-review-name">
                              Jason Smith
                            </h5>
                            <div className="shop-detail-tab-review-stars">
                              <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                              <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                              <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                              <i className="fa fa-star text-secondary text-coustom-grey-500"></i>
                              <i className="fa fa-star text-coustom-grey-500"></i>
                            </div>
                          </div>
                          <p className="shop-detail-tab-review-text">
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse ultricies
                            nisi vel quam suscipit
                          </p>
                        </div>
                      </div>
                      <div className="shop-detail-tab-review">
                        <div className="shop-detail-tab-review-image">
                          <img
                            src="https://themewagon.github.io/fruitables/img/avatar.jpg"
                            alt=""
                          />
                        </div>
                        <div className="shop-detail-tab-review-content">
                          <p className="shop-detail-tab-review-date">
                            April 12, 2024
                          </p>
                          <div className="shop-detail-tab-review-header">
                            <h5 className="shop-detail-tab-review-name">
                              Sam Peters
                            </h5>
                            <div className="shop-detail-tab-review-stars">
                              <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                              <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                              <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                              <i className="fa fa-star text-secondary text-coustom-grey-500"></i>
                              <i className="fa fa-star text-coustom-grey-500"></i>
                            </div>
                          </div>
                          <p className="shop-detail-tab-review-text">
                            The generated Lorem Ipsum is therefore always free
                            from repetition injected humour, or
                            non-characteristic words etc. Susp endisse ultricies
                            nisi vel quam suscipit
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className=" shop-detail-form">
                  <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                  <div className="shop-detail-form-div">
                    <div className="shop-detail-input">
                      <div className="shop-detail-input-inner ">
                        <input type="text" placeholder="Your Name *" />
                      </div>
                    </div>
                    <div className="shop-detail-input">
                      <div className="shop-detail-input-inner">
                        <input
                          type="email"
                          className=""
                          placeholder="Your Email *"
                        />
                      </div>
                    </div>
                    <div className="shop-detail-textarea">
                      <div className="my-6">
                        <textarea
                          className="form-control border-0"
                          cols="30"
                          rows="8"
                          placeholder="Your Review *"
                          spellCheck="false"
                        ></textarea>
                      </div>
                    </div>
                    <div className="shop-detail-rate">
                      <div className="flex justify-between  pt-[16px] pb-[16px] mb-[48px]">
                        <div className="flex items-center">
                          <p className="">Please rate:</p>
                          <div
                            className="flex items-center"
                            style={{ fontSize: "12px" }}
                          >
                            <i className="fa fa-star text-muted"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <button className="shop-detail-button-review">
                          {" "}
                          Post Comment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shop-sidebar-x">
              <div className="">
                <div className="shop-search-container-x">
                  <div className="shop-search-container-inner">
                    {" "}
                    <input
                      type="text"
                      className="shop-search-input"
                      placeholder="keywords"
                    />
                    <button type="submit" className="shop-search-button">
                      <i className="fa fa-search text-[#747d88]"></i>
                    </button>
                  </div>
                </div>
                <div className="shop-detail-sidebar-category">
                  <div className="">
                    <div className="shop-categories-title-x">Categories</div>

                    <ul className="list-unstyled fruite-categorie">
                      <li>
                        <div className="justify-content-between fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Apples
                          </a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div className="  fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Apples
                          </a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div className="  fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Apples
                          </a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div className="  fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Apples
                          </a>
                          <span>(3)</span>
                        </div>
                      </li>
                      <li>
                        <div className="  fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>Apples
                          </a>
                          <span>(3)</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="shop-sidebar-featured-x">
                  <h4 className="mb-[24px]">Featured products</h4>
                  <div className="shop-sidebar-featured-item">
                    <div className=" h-[100px] w-[100px] featured-product-image">
                      <img
                        src="https://themewagon.github.io/fruitables/img/featur-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6>Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star  text-[#747d88]"></i>
                      </div>
                      <div className="flex">
                        <h5 className="shop-featured-price">2.99 $</h5>
                        <h5 className="shop-featured-discount">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="shop-sidebar-featured-item">
                    <div className="  h-[100px] w-[100px] featured-product-image">
                      <img
                        src="https://themewagon.github.io/fruitables/img/featur-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6>Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-[#747d88]"></i>
                      </div>
                      <div className="flex">
                        <h5 className="shop-featured-price">2.99 $</h5>
                        <h5 className="shop-featured-discount">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="shop-sidebar-featured-item">
                    <div className="  h-[100px] w-[100px] featured-product-image">
                      <img
                        src="https://themewagon.github.io/fruitables/img/featur-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6>Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-[#747d88]"></i>
                      </div>
                      <div className="flex">
                        <h5 className="shop-featured-price">2.99 $</h5>
                        <h5 className="shop-featured-discount">4.11 $</h5>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="shop-sidebar-featured-item">
                    <div className=" h-[100px] w-[100px] featured-product-image">
                      <img
                        src="https://themewagon.github.io/fruitables/img/featur-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6>Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star  text-[#747d88]"></i>
                      </div>
                      <div className="flex">
                        <h5 className="shop-featured-price">2.99 $</h5>
                        <h5 className="shop-featured-discount">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="shop-sidebar-featured-item">
                    <div className="  h-[100px] w-[100px] featured-product-image">
                      <img
                        src="https://themewagon.github.io/fruitables/img/featur-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6>Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-[#747d88]"></i>
                      </div>
                      <div className="flex">
                        <h5 className="shop-featured-price">2.99 $</h5>
                        <h5 className="shop-featured-discount">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className="shop-sidebar-featured-item">
                    <div className="  h-[100px] w-[100px] featured-product-image">
                      <img
                        src="https://themewagon.github.io/fruitables/img/featur-1.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <h6>Big Banana</h6>
                      <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-secondary text-custom-orange-500"></i>
                        <i className="fa fa-star text-[#747d88]"></i>
                      </div>
                      <div className="flex">
                        <h5 className="shop-featured-price">2.99 $</h5>
                        <h5 className="shop-featured-discount">4.11 $</h5>
                      </div>
                    </div>
                  </div>
                  <div className=" ">
                    <button className="shop-view-more-button ">
                      View More
                    </button>
                  </div>
                </div>
                <div class="shop-sidebar-banner">
                  <div className=" relative">
                    <img
                      src="https://themewagon.github.io/fruitables/img/banner-fruits.jpg"
                      className=" rounded-[10px]"
                      alt=""
                    />
                    <div
                      class=" absolute top-[50%]       right-[10px]     transform translate-y-[-50%]           "
                      // style="top: 50%; right: 10px; transform: translateY(-50%);"
                    >
                      <h3 class="">
                        Fresh <br /> Fruits <br />
                        Banner
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Main9 title="Related products" state={false} />
    </>
  );
}

export default Shopdetail;
