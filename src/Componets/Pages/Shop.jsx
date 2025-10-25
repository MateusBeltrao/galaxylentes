import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from './../CartContextProvider';
import { WishlistContext } from './../WishlistContextProvider';
// Products 
import Products from './../../Product.json'


const Shop = () => {

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
    const [visibleCount, setVisibleCount] = useState(12);
    const initialCount = 12;

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        const modal = new window.bootstrap.Modal(document.getElementById("productModal"));
        modal.show();
    };

    // Count Countity

    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    return (
        <>
            <div className="Page-section mb-5 text-center">
                <p className="text-muted"> <Link to='/'>Home</Link> / Shop</p>
                <h2 className="fw-bold">Shop</h2>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="product-head d-flex align-items-center justify-content-between">
                            <div class="shop-product-fillter">
                                <div class="total-product">
                                    <p> Showing All <strong>Product</strong> for you!</p>
                                </div>
                            </div>
                            <div class="sort-by-product">
                                <div class="sort-by-cover d-flex gap-3">
                                    <div class="sort-by-product-wrap position-relative">
                                        <div class="sort-by">
                                            <span class="toggleDropdown">
                                                <i class="ri-apps-line"></i> Show: 50
                                            </span>
                                        </div>
                                    </div>

                                    <div class="sort-by-product-wrap position-relative">
                                        <div class="sort-by">
                                            <span class="toggleDropdown">
                                                <i class="ri-apps-line"></i> Sort by: Featured
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* All Product  */}
                <div class="row mt-5">
                    {Products.slice(0, visibleCount).map((product) => (
                        <div className="col-lg-3 col-md-6 mb-4 product-card text-center rounded">
                            <div className="position-relative product-img-container">
                                <img src={product.image} className="img-fluid product-img border main-img" alt={product.name} />
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
                            <div className="product-info p-3 border border-top-0"
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
                    ))}
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
                                                <button className="btn btn-success d-flex align-items-center gap-2">
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
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center py-5">
                        {visibleCount < Products.length ? (
                            <button
                                className="btn load-more-product"
                                onClick={() => setVisibleCount(Products.length)}
                            >
                                LOAD MORE
                            </button>
                        ) : (
                            <button
                                className="btn load-more-product"
                                onClick={() => setVisibleCount(initialCount)}
                            >
                                LOAD LESS
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop