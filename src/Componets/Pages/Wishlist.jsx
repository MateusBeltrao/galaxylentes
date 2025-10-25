import React, { useContext } from "react";
import { WishlistContext } from "../WishlistContextProvider";
import { CartContext } from "../CartContextProvider";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="Page-section mb-5 text-center">
        <p className="text-muted">
          <Link to="/">Home</Link> / Wishlist
        </p>
        <h2 className="fw-bold">My Wishlist</h2>
      </div>

      <div className="container">
        {wishlistItems.length === 0 ? (
          <div className="alert alert-danger text-center">No items in Wishlist</div>
        ) : (
          <div className="table-responsive">
            <table className="table align-middle text-center">
              <thead className="bg-light">
                <tr>
                  <th className="product-name wl-text fw-normal">Product</th>
                  <th className="product-name wl-text fw-normal">Price</th>
                  <th className="product-name wl-text fw-normal hide-element">Stock Status</th>
                  <th className="product-name wl-text fw-normal">Action</th>
                  <th className="product-name wl-text fw-normal">Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlistItems.map((product) => (
                  <tr key={product.id}>
                    <td className="d-flex align-items-center gap-3 text-start">
                      <img
                        src={product.image}
                        alt={product.name}
                        width="80"
                        height="80"
                        className="border rounded"
                      />
                      <div>
                        <p className="product-name wl-name m-0">{product.name}</p>
                        <p className="mb-0 text-muted wl-name" style={{ fontSize: "14px" }}>
                          {product.description || "Short description here"}
                        </p>
                      </div>
                    </td>
                    <td className="product-name fs-6">${product.price}</td>
                    <td className="text-success hide-element">In Stock</td>
                    <td>
                      <button
                        className="btn btn-success wl-btn"
                        onClick={() => {
                          addToCart({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            quantity: 1,
                            image: product.image,
                          });
                          toast.success(`${product.name} added to cart`);
                        }}
                      >
                        <span className="hide-element">
                        <i className="ri-shopping-cart-line me-2"></i> Add to cart
                        </span>
                        <i className="ri-shopping-cart-line me-2 small-screen-icon"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger wl-btn"
                        onClick={() => {
                          removeFromWishlist(product.id);
                          toast.info(`${product.name} removed from wishlist`);
                        }}
                      >
                        <i className="ri-delete-bin-line"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
