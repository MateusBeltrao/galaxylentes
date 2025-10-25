import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from "swiper/modules"
import { CartContext } from './../CartContextProvider';


import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/effect-fade";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { WishlistContext } from './../WishlistContextProvider';

// Products
import Products from './../../Product.json'

import service1 from './../../assets/service-icon1.svg'
import service2 from './../../assets/service-icon2.svg'
import service3 from './../../assets/service-icon3.svg'
import service4 from './../../assets/service-icon4.svg'
import subBanner1 from "./../../assets/sub-banner-1-1.jpg";
import subBanner2 from "./../../assets/sub-banner-2-1.jpg";
import about_hero from "./../../assets/about-img-1.jpg"
import about1 from "./../../assets/about-svg-1.svg"
import about2 from "./../../assets/about-svg-2.svg"
import about3 from "./../../assets/about-svg-3.svg"
import user1 from "./../../assets/user1.jpg"
import user2 from "./../../assets/user2.jpg"
import user3 from "./../../assets/user3.jpg"
import cmsBanner1 from "./../../assets/cms-banner-1.jpg"
import cmsBanner2 from "./../../assets/cms-banner-2.jpg"
import blog1 from "./../../assets/blog-1.jpeg"
import blog2 from "./../../assets/blog-2.jpeg"
import blog3 from "./../../assets/blog-3.jpeg"
import blog4 from "./../../assets/blog-4.jpeg"
import blog5 from "./../../assets/blog-5.jpeg"
import blog6 from "./../../assets/blog-6.jpeg"
import brand1 from "./../../assets/brand-1.png"
import brand2 from "./../../assets/brand-2.png"
import brand3 from "./../../assets/brand-3.png"
import brand4 from "./../../assets/brand-4.png"
import brand5 from "./../../assets/brand-5.png"


const Index = () => {
  // Add TO Cart
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const handleAddToCart = (product) => {
    const productWithNumbers = {
      ...product,
      price: parseFloat(product.price),
      offerPrice: parseFloat(product.offerPrice),
    };
    addToCart(productWithNumbers);
  };
  // Product detail 
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    const modal = new window.bootstrap.Modal(document.getElementById("productModal"));
    modal.show();
  };

  // Count Countity

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(count => count - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(count => count + 1);
  };

  return (
    <>
      {/* Hero (Banner Principal) */}
      <div className="hero">
        <Swiper
          modules={[Navigation, EffectFade]}
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          effect="fade"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1 position-relative">
              <div className="hero-content position-absolute">
                <h3>Promoção Exclusiva — 50% OFF</h3>
                <h1>Lentes Coloridas <br /> Que Realçam o Seu Olhar</h1>
                <p className='my-3'>
                  Transforme seu visual em segundos.
                  Lentes confortáveis, seguras e com cores incríveis — aproveite os descontos de lançamento!
                </p>
                <a href="#" className='btn hero-btn mt-3'>Ver Cores</a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-wrap hero-wrap2 position-relative">
              <div className="hero-content position-absolute">
                <h3>Nova Coleção — 40% de Desconto</h3>
                <h1>Descubra Novas  <br /> Cores e Realce Seu Olhar</h1>
                <p className='my-3'>
                  Azul, mel, cinza ou verde — escolha a cor que combina com você.
                  Lentes de alta qualidade para um olhar natural e marcante.
                </p>
                <a href="#" className='btn hero-btn mt-3'>Explorar Agora</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-button-prev swiper-btn swiper-prev">
          <i className="ri-arrow-left-long-line"></i>
        </div>
        <div className="swiper-button-next swiper-btn swiper-next">
          <i className="ri-arrow-right-long-line"></i>
        </div>
      </div>


      {/* Serviços */}
      <div className="services py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="section-title d-flex flex-column justify-content-center align-items-center">
              <h2>O Que Fazemos</h2>
              <h1>Nossos Serviços</h1>
            </div>
          </div>
          <div className="row mt-5">
            {/* col 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img">
                  <img src={service1} className='img-fluid' alt="Escolha sua lente" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>Escolha Sua Lente</h3>
                  <p>Selecione lentes coloridas naturais ou vibrantes para realçar seu olhar.</p>
                </div>
              </div>
            </div>
            {/* col 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img service-img2">
                  <img src={service2} className='img-fluid' alt="Escolha a cor" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>Escolha a Cor</h3>
                  <p>Opte pela cor que combina melhor com seu estilo ou ocasião.</p>
                </div>
              </div>
            </div>
            {/* col 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img service-img3">
                  <img src={service3} className='img-fluid' alt="Receba em casa" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>Entrega Rápida</h3>
                  <p>Receba suas lentes diretamente na sua casa com segurança e rapidez.</p>
                </div>
              </div>
            </div>
            {/* col 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="service-box d-flex flex-column justify-content-center align-items-center">
                <div className="service-img service-img4">
                  <img src={service4} className='img-fluid' alt="Cuidados e uso" />
                </div>
                <div className="service-box-info text-center mt-4">
                  <h3>Cuidados e Uso</h3>
                  <p>Dicas e orientações para usar suas lentes de contato com conforto e segurança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* banners */}
      <div className="banners py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <img src={subBanner1} className='img-fluid rounded banner-img' alt="" />
              <div className="banner-content position-absolute">
                <h3>farm Snake Plant</h3>
                <h1>Greenery Nursery
                  <br />Snake Plant</h1>
                <button className='btn banner-btn mt-2'>SHOP NOW</button>
              </div>
            </div>
            <div className="col-lg-6 position-relative banner-mt">
              <img src={subBanner2} className='img-fluid rounded banner-img' alt="" />
              <div className="banner-content banner-content2 position-absolute">
                <h3>Up To 25% Discount</h3>
                <h1>Buy Zamioculcas
                  <br />Zamiifolia</h1>
                <button className='btn banner-btn mt-2'>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Swiper Slider */}
      <div className="container my-5 pb-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>New Products</h2>
            <h1>LATEST PRODUCTS</h1>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-swiper-next",
            prevEl: ".product-swiper-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-4 swiper"
        >
          {Products.filter(product => product.id >= 5 && product.id <= 10).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card text-center border rounded">
                <div className="position-relative product-img-container">
                  <img src={product.image} className="img-fluid product-img main-img" alt={product.name} />
                  <img src={product.secondImage} className="img-fluid product-img hover-img" alt={product.name} />
                  <div className="product-option position-absolute">
                    <i
                      className="bi bi-heart"
                      role="button"
                      onClick={() => {
                        addToWishlist({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          description: product.description || "",
                          inStock: true
                        });
                        toast.success(`${product.name} added to wishlist!`);
                      }}
                    ></i>
                  </div>
                  <button
                    className='btn add-card-btn position-absolute'
                    onClick={() => {
                      addToCart({

                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        image: product.image
                      });
                      toast.success(`${product.name} added to cart!`);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="product-info mt-4 p-3"
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: "pointer" }}
                >
                  <h5 className="mt-3">{product.name}</h5>
                  <div className="text-warning mb-2 stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <p className="mb-1 product-price">
                    <span className="text-muted text-decoration-line-through">${product.offerPrice}</span>
                    <span className="text-success fw-bold ms-2">${product.price}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev prodct-swiper-btn product-swiper-prev"><i className="ri-arrow-left-s-line"></i></div>
        <div className="swiper-button-next prodct-swiper-btn product-swiper-next"><i className="ri-arrow-right-s-line"></i></div>
      </div>

      {/* Product Popup Modal */}
      <div
        className="modal fade"
        id="productModal"
        tabIndex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content p-3">
            {selectedProduct && (
              <>

                <div className="modal-body d-flex flex-column flex-md-row gap-1">
                  <div className="col-md-6">
                    <img
                      src={selectedProduct.image}
                      className="img-fluid rounded border"
                      alt={selectedProduct.name}
                    />
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="modal-header border-0 p-0">
                      <h5 className="modal-title product-title" id="productModalLabel">{selectedProduct.name}</h5>
                    </div>
                    <div className="d-flex gap-1 text-warning mb-2">
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-fill"></i>
                      <i className="bi bi-star-half"></i>
                    </div>
                    <p className="text-muted small">{selectedProduct.description}</p>
                    <h4 className="text-success fw-bold">
                      ${selectedProduct.price}{" "}
                      <span className="text-muted text-decoration-line-through fs-6 fw-normal">
                        ${selectedProduct.offerPrice}
                      </span>
                    </h4>
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="d-flex align-items-center border rounded"
                        style={{ width: "100px", height: "40px" }}
                      >
                        <span className="px-2" style={{ cursor: "pointer" }} onClick={handleDecrease}>-</span>
                        <span className="flex-grow-1 text-center border-start border-end">{quantity}</span>
                        <span className="px-2" style={{ cursor: "pointer" }} onClick={handleIncrease}>+</span>
                      </div>
                      <button className="btn btn-success d-flex align-items-center gap-2 custom-z">
                        <i className="bi bi-basket"></i> Add to Cart
                      </button>
                    </div>
                    <p className='mt-4 prodct-des'>This high-quality product combines durability. Perfect for daily use, it offers exceptional value and design to enhance your lifestyle with comfort, performance, and modern appeal.</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* About  */}
      < div className="container my-5 py-5" >
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img src={about_hero} className='img-fluid' alt="Plantation" />
          </div>
          <div className="col-lg-6 about-content">
            <div className="section-title about-title">
              <h2>About Plants</h2>
              <h1>WE OFFER LANDSCAPE AND TREE PLANTATION</h1>
            </div>
            <p className="text-muted">
              There are many variations of passages lorem Ipsum available but the
              majority which don't look even more then slightly believable.
            </p>
            <div className="row mt-4">
              <div className="col-sm-4 text-center d-flex align-items-center flex-column">
                <div className="about-svg">
                  <img src={about1} className='img-fluid' alt=" " />
                </div>
                <h5 className="mt-2 fw-bold about-text" >PLANT WATERING</h5>
                <p className="text-muted about-pere">Lorem Ipsum is simply dummy text</p>
              </div>
              <div className="col-sm-4 text-center d-flex align-items-center flex-column">
                <div className="about-svg about-svg2">
                  <img src={about2} className='img-fluid' alt="Potted Plant" />
                </div>
                <h5 className="mt-2 fw-bold about-text">POTTED PLANT</h5>
                <p className="text-muted about-pere">Lorem Ipsum is simply dummy text</p>
              </div>
              <div className="col-sm-4 text-center d-flex align-items-center flex-column">
                <div className="about-svg about-svg3">
                  <img src={about3} className='img-fluid' alt="Plant Ecology" />
                </div>
                <h5 className="mt-2 fw-bold about-text">PLANT ECOLOGY</h5>
                <p className="text-muted about-pere">Lorem Ipsum is simply dummy text</p>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Parallax Banner */}
      < div className="parallax-banner d-flex align-items-center justify-content-center" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column align-items-start">
              <div className="section-title d-flex flex-column justify-content-center align-items-start">
                <h2>Hot Sale 30% Discount</h2>
                <h1>Potted Plant With <br />
                  Pot Grey 6cm</h1>
              </div>
              <p className='my-3 mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting which don't look even slightly believable.</p>
              <button className="btn">SHOP NOW</button>
            </div>
          </div>
        </div>
      </div >

      {/* Popular Products Slider */}
      <div className="container my-5 pb-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>Popular Products</h2>
            <h1>FEATURED PRODUCTS</h1>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-swiper-next",
            prevEl: ".product-swiper-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-4 swiper"
        >
          {Products.filter(product => product.id >= 2 && product.id <= 8).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card text-center border rounded">
                <div className="position-relative product-img-container">
                  <img src={product.image} className="img-fluid product-img main-img" alt={product.name} />
                  <img src={product.secondImage} className="img-fluid product-img hover-img" alt={product.name} />
                  <div className="product-option position-absolute">
                    <i
                      className="bi bi-heart"
                      role="button"
                      onClick={() => {
                        addToWishlist({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          description: product.description || "",
                          inStock: true
                        });
                        toast.success(`${product.name} added to wishlist!`);
                      }}
                    ></i>
                  </div>
                  <button
                    className='btn add-card-btn position-absolute'
                    onClick={() => {
                      addToCart({

                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        image: product.image
                      });
                      toast.success(`${product.name} added to cart!`);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="product-info mt-4 p-3">
                  <h5 className="mt-3">{product.name}</h5>
                  <div className="text-warning mb-2 stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <p className="mb-1 product-price">
                    <span className="text-muted text-decoration-line-through">${product.offerPrice}</span>
                    <span className="text-success fw-bold ms-2">${product.price}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-prev prodct-swiper-btn product-swiper-prev">
          <i className="ri-arrow-left-s-line"></i>
        </div>
        <div className="swiper-button-next prodct-swiper-btn product-swiper-next">
          <i className="ri-arrow-right-s-line"></i>
        </div>
      </div>

      {/* banners */}
      < div className="banners py-5" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 position-relative">
              <img src={cmsBanner1} className='img-fluid rounded banner-img' alt="" />
              <div className="banner-content position-absolute">
                <h3>Flat 20% Discount</h3>
                <h1>The Elliot Modular
                  <br />Planters</h1>
                <button className='btn banner-btn mt-2'>SHOP NOW</button>
              </div>
            </div>
            <div className="col-lg-6 position-relative banner-mt">
              <img src={cmsBanner2} className='img-fluid rounded banner-img' alt="" />
              <div className="banner-content banner-content2 position-absolute">
                <h3>We're Spring Plant</h3>
                <h1>Cloud Farm Peace
                  <br />Lily Plant</h1>
                <button className='btn banner-btn mt-2'>SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Top Rated Products Slider */}
      <div className="container my-5 pb-5 position-relative">
        <div className="row">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>Top Rated Products</h2>
            <h1>POPULAR PRODUCTS</h1>
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{
            nextEl: ".product-swiper-next",
            prevEl: ".product-swiper-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 4 },
          }}
          className="mt-4 swiper"
        >
          {Products.filter(product => product.id >= 8 && product.id <= 16).map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product-card text-center border rounded">
                <div className="position-relative product-img-container">
                  <img src={product.image} className="img-fluid product-img main-img" alt={product.name} />
                  <img src={product.secondImage} className="img-fluid product-img hover-img" alt={product.name} />
                  <div className="product-option position-absolute">
                    <i
                      className="bi bi-heart"
                      role="button"
                      onClick={() => {
                        addToWishlist({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          description: product.description || "",
                          inStock: true
                        });
                        toast.success(`${product.name} added to wishlist!`);
                      }}
                    ></i>
                  </div>
                  <button
                    className='btn add-card-btn position-absolute'
                    onClick={() => {
                      addToCart({

                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        image: product.image
                      });
                      toast.success(`${product.name} added to cart!`);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
                <div className="product-info mt-4 p-3">
                  <h5 className="mt-3">{product.name}</h5>
                  <div className="text-warning mb-2 stars">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                  <p className="mb-1 product-price">
                    <span className="text-muted text-decoration-line-through">${product.offerPrice}</span>
                    <span className="text-success fw-bold ms-2">${product.price}</span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-prev prodct-swiper-btn product-swiper-prev"><i className="ri-arrow-left-s-line"></i></div>
        <div className="swiper-button-next prodct-swiper-btn product-swiper-next"><i className="ri-arrow-right-s-line"></i></div>
      </div>

      {/* Testinomalis */}
      < div className="testimonials d-flex align-items-center" >
        < div className="my-5 text-center container testimonial-wrap">
          < div className="text-success mb-3" />

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <i className="ri-double-quotes-l"></i>
              <p className="text-muted px-md-5">
                There are many variations of passages of Lorem Ipsum available but the
                majority have suffered form by injected humour randomised words which
                don't look even slightly combined with a handful of model sentence
                structures to be believable.
              </p>
              <div className="test-card d-flex justify-content-center my-4">
                <img
                  src={user1}
                  roundedCircle
                  width={80}
                  height={80}
                  className="shadow-sm"
                />
              </div>
              <h5 className="fw-bold">STEFANIE RASHFORD</h5>
              <p className="text-muted">CEO</p>
            </SwiperSlide>
            <SwiperSlide>
              <i className="ri-double-quotes-l"></i>
              <p className="text-muted px-md-5 ">
                There are many variations of passages of Lorem Ipsum available but the
                majority have suffered form by injected humour randomised words which
                don't look even slightly combined with a handful of model sentence
                structures to be believable.
              </p>
              <div className=" test-card d-flex justify-content-center my-4 ">
                <img
                  src={user2}
                  roundedCircle
                  width={80}
                  height={80}
                  className=" shadow-sm"
                />
              </div>
              <h5 className="fw-bold">JOHN DOE</h5>
              <p className="text-muted">Manager</p>
            </SwiperSlide>
            <SwiperSlide>
              <i className="ri-double-quotes-l"></i>
              <p className="text-muted px-md-5">
                There are many variations of passages of Lorem Ipsum available but the
                majority have suffered form by injected humour randomised words which
                don't look even slightly combined with a handful of model sentence
                structures to be believable.
              </p>
              <div className=" test-card d-flex justify-content-center my-4">
                <img
                  src={user3}
                  roundedCircle
                  width={80}
                  height={80}
                  className=" shadow-sm"
                />
              </div>
              <h5 className="fw-bold">JANE SMITH</h5>
              <p className="text-muted">Designer</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div >

      {/* Blog Section */}
      < div className="blog py-5 my-5" >
        <div className="container">
          <div className="section-title d-flex flex-column justify-content-center align-items-center">
            <h2>From The Blog</h2>
            <h1>OUR LATEST BLOG</h1>
          </div>
          <div className="row mt-5 position-relative">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={20}
              navigation={{
                nextEl: ".blog-swiper-btn-next",
                prevEl: ".blog-swiper-btn-prev",
              }}
              breakpoints={{
                1399: { slidesPerView: 3 },
                991: { slidesPerView: 2 },
                767: { slidesPerView: 1 },
                0: { slidesPerView: 1 },
              }}
              className='blog-swiper'
            >
              {/* slide 1 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog1} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      February 9, 2025 <span className="dot">•</span> <span>by Editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      How to Write a Blog Post Your Readers Will Love in 5 Steps
                    </h1>
                    <p className="blog-desc">
                      Why the world would end without travel coupons. The 16 worst songs about spa deals. How daily…
                    </p>
                    <a href="#" className="blog-btn">Read More</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 2 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog2} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      February 7, 2025 <span className="dot">•</span> <span>by Editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      9 Content Marketing Trends and Ideas to Increase Traffic
                    </h1>
                    <p className="blog-desc">
                      Why do people think wholesale accessories are a good idea? Unbelievable cool tech gadget success stories. How…
                    </p>
                    <a href="#" className="blog-btn">Read More</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 3 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog3} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      February 5, 2025 <span className="dot">•</span> <span>by Editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      The Ultimate Guide to Marketing Strategies to Improve Sales
                    </h1>
                    <p className="blog-desc">
                      Many things about electronic devices your kids don't want you to know How storage devices can help…
                    </p>
                    <a href="#" className="blog-btn">Read More</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 4 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog4} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      February 3, 2025 <span className="dot">•</span> <span>by Editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      50 Best Sales Questions to Determine Your Customer's Needs
                    </h1>
                    <p className="blog-desc">
                      The unconventional guide to the software applications. Why do people think business software is a good idea?…
                    </p>
                    <a href="#" className="blog-btn">Read More</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 5 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog5} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      February 1, 2025 <span className="dot">•</span> <span>by Editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      6 Simple Ways To Boost Your Ecommerce Conversion Rate
                    </h1>
                    <p className="blog-desc">
                      The best ways to utilize interview techniques. 18 things your boss expects you know about famous entrepreneurs.…
                    </p>
                    <a href="#" className="blog-btn">Read More</a>
                  </div>
                </div>
              </SwiperSlide>
              {/* slide 6 */}
              <SwiperSlide>
                <div className="blog-card overflow-hidden">
                  <div className="blog-img overflow-hidden rounded">
                    <img src={blog6} className="img-fluid rounded" alt="" />
                  </div>
                  <div className="blog-content mt-3">
                    <h5 className="blog-meta">
                      January 29, 2025 <span className="dot">•</span> <span>by Editor</span>
                    </h5>
                    <h1 className="blog-title mt-2 mb-3">
                      9 Customer Experience Trends That'll Define the Next Year
                    </h1>
                    <p className="blog-desc">
                      The oddest place you will find financial reports. Will businesses ever rule the world That insane but…
                    </p>
                    <a href="#" className="blog-btn">Read More</a>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-button-prev blog-swiper-btn blog-swiper-btn-prev swiper-btn swiper-prev"><i className="ri-arrow-left-s-line"></i></div>
            <div className="swiper-button-next blog-swiper-btn blog-swiper-btn-next swiper-btn swiper-next"><i className="ri-arrow-right-s-line"></i></div>
          </div>
        </div>
      </div >

      {/* Brands */}
      < div className="brands py-5 my-5" >
        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                1399: { slidesPerView: 5 },
                991: { slidesPerView: 4 },
                767: { slidesPerView: 3 },
                0: { slidesPerView: 3 },
              }}
              className='brand-swiper'
            >
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand1} className='img-fluid' alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand2} className='img-fluid' alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand3} className='img-fluid' alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand4} className='img-fluid' alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand5} className='img-fluid' alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brand-img">
                  <img src={brand3} className='img-fluid' alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div >
    </>

  )
}

export default Index