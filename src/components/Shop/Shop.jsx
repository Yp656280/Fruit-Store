import React, { useEffect, useState } from "react";

import DisplayPage from "../DisplayPage";
// import { useId } from "react";
import Card from "../Card";

function Shop() {
  // const id = useId();
  const [data, setData] = useState([
    {
      name: "Banana",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
    {
      name: "Apricots",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Grapes",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Raspberries",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
      type: "bread",
      price: "4.99$",
    },
    {
      name: "Banana",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
    {
      name: "Apricots",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
  ]);
  let Maindata = [
    {
      name: "Banana",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
    {
      name: "Apricots",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Grapes",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Raspberries",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
      type: "bread",
      price: "4.99$",
    },
    {
      name: "Banana",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
    {
      name: "Apricots",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
  ];
  const filterData = (type) => {
    console.log("in");
    if (type === "all") {
      setData(Maindata);
    } else {
      setData(Maindata.filter((cur) => cur.type === type));
      console.log(data);
    }
  };
  const [price, setPrice] = useState(0);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <DisplayPage data={{ title: "Shop" }} />
      <div className="shop-wrapper">
        <div className="shop-container">
          <h1 className="shop-title">Fresh fruits shop</h1>
          <div className="shop-item-div">
            <div className="shop-content">
              <div className="shop-header">
                <div className="shop-search-container">
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
                <div className="w-[50%]"></div>
                <div className="shop-sorting-container">
                  <div className=" shop-sorting-container-inner">
                    <label htmlFor=""> Default Sorting:</label>{" "}
                    <div className="shop-sorting-select">
                      <select
                        onChange={(e) =>
                          filterData(e.target.value.toLowerCase())
                        }
                      >
                        <option>All</option>
                        <option>Fruit</option>
                        <option>Bread</option>
                        <option>Meat</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-main-content">
                <div className="shop-sidebar">
                  <div className="">
                    <div className="shop-sidebar-category">
                      <div className="">
                        <div className="shop-categories-title">Categories</div>

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
                    <div className="shop-sidebar-price">
                      <div className=" flex flex-col justify-between h-full">
                        <h4 className="">Price</h4>{" "}
                        <input
                          type="range"
                          onChange={(e) => setPrice(e.target.value)}
                          min="0"
                          max="500"
                          defaultValue="0"
                        />
                        <label>{price}</label>
                      </div>
                    </div>
                    <div className="shop-sidebar-additional">
                      <div className=" ">
                        <h4>Additional</h4>
                        <div className="shop-sidebar-additional-type">
                          <input
                            type="radio"
                            id="organic"
                            name="additional"
                            value="organic"
                          />
                          <label htmlFor="organic">Organic</label>
                        </div>
                        <div className="shop-sidebar-additional-type">
                          <input
                            type="radio"
                            id="organic"
                            name="additional"
                            value="organic"
                          />
                          <label htmlFor="organic">Fresh</label>
                        </div>{" "}
                        <div className="shop-sidebar-additional-type">
                          <input
                            type="radio"
                            id="organic"
                            name="additional"
                            value="organic"
                          />
                          <label htmlFor="organic">Sales</label>
                        </div>{" "}
                        <div className="shop-sidebar-additional-type">
                          <input
                            type="radio"
                            id="organic"
                            name="additional"
                            value="organic"
                          />
                          <label htmlFor="organic">Discount</label>
                        </div>{" "}
                        <div className="shop-sidebar-additional-type">
                          <input
                            type="radio"
                            id="organic"
                            name="additional"
                            value="organic"
                          />
                          <label htmlFor="organic">Expired</label>
                        </div>
                        {/* Repeat for other options */}
                      </div>
                    </div>
                    <div className="shop-sidebar-featured">
                      <h4 className="mb-[16px]">Featured products</h4>
                      <div className="shop-sidebar-featured-item">
                        <div className=" mr-[24px] h-[100px] w-[100px] featured-product-image">
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
                        <div className=" mr-[24px] h-[100px] w-[100px] featured-product-image">
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
                        <div className=" mr-[24px] h-[100px] w-[100px] featured-product-image">
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
                <div className="shop-products-grid-container">
                  <div className="shop-products-grid">
                    {data?.map((cur) => (
                      <div
                        key={cur.path}
                        className="shop-product-card-container"
                      >
                        <Card data={cur} type={false} />
                      </div>
                    ))}
                    {/* Repeat for other fruit items */}
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

export default Shop;
