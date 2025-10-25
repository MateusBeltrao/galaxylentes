import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './../CartContextProvider';
import { WishlistContext } from './../WishlistContextProvider';
// Produtos
import Products from './../../Product.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
    const { cartItems } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext);

    const wishlistCount = wishlistItems.length;
    const cartCount = cartItems.length;

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (value.trim() === '') {
            setFilteredProducts([]);
        } else {
            const filtered = Products.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        const modal = new window.bootstrap.Modal(document.getElementById('productModal'));
        modal.show();
    };

    // Quantidade
    const [quantity, setQuantity] = useState(1);

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(count => count - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(count => count + 1);
    };

    // Adicionar ao carrinho
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (product) => {
        const productWithNumbers = {
            ...product,
            price: parseFloat(product.price),
            offerPrice: parseFloat(product.offerPrice),
            quantity: quantity
        };
        addToCart(productWithNumbers);
    };

    return (
        <>
            {/* Navegação */}
            <div className="nav w-100 fixed-top top-0 start-0 bg-light shadow-sm">
                <nav className='navbar navbar-expand-lg w-100'>
                    <div className="logo navbar-brand">
                        <Link to="/" className="text-decoration-none">Galaxy<span>Lentes</span></Link>
                    </div>

                    <div className="nav-icons d-flex d-lg-none d-flex justify-content-center align-items-center gap-3">
                        <a href="#"><i className="bi bi-search"></i></a>
                        <a href="#"><i className="bi bi-person"></i></a>

                        <Link to="/wishlist" className='position-relative'>
                            <i className="bi bi-heart"></i>
                            {wishlistCount > 1 && (
                                <span className='wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2'>
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        <Link to="/carts" className='position-relative'>
                            <i className="bi bi-bag"></i>
                            {cartCount > 1 && (
                                <span className='cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2'>
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Alternar navegação"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="menu navbar-nav d-flex justify-content-center gap-3 align-items-center">
                            <li className="nav-item"><Link to="/">Início</Link></li>
                            <li className="nav-item"><Link to='/about'>Sobre</Link></li>
                            <li className="nav-item"><Link to="/shop">Loja</Link></li>
                            <li className="nav-item"><Link to="/blog">Blog</Link></li>
                            <li className="nav-item"><Link to="/contact">Contato</Link></li>
                            <li className='nav-item ms-4 menu-nav-icon'>
                                <div className="nav-icons d-flex justify-content-center align-items-center gap-3">
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal">
                                        <i className="bi bi-search"></i>
                                    </a>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                                        <i className="bi bi-person"></i>
                                    </a>
                                    <Link to="/wishlist" className='position-relative'>
                                        <i className="bi bi-heart"></i>
                                        {wishlistCount > 0 && (
                                            <span className='wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2'>
                                                {wishlistCount}
                                            </span>
                                        )}
                                    </Link>
                                    <Link to="/carts" className='position-relative'>
                                        <i className="bi bi-bag"></i>
                                        {cartCount > 0 && (
                                            <span className='cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill p-2'>
                                                {cartCount}
                                            </span>
                                        )}
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Modal de Cadastro */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title sign-up-title fw-bold" id="signupModalLabel">Cadastre-se</h5>
                            <button type="button" className="btn-close close-model" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div className="modal-body">
                            {/* Formulário de Cadastro */}
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Nome</label>
                                    <input type="text" className="form-control border shadow-sm" placeholder="Digite seu nome" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">E-mail</label>
                                    <input type="email" className="form-control border shadow-sm" placeholder="Digite seu e-mail" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Senha</label>
                                    <input type="password" className="form-control border shadow-sm" placeholder="Digite sua senha" required />
                                </div>

                                <p className="terms text-muted">
                                    Ao se cadastrar, você concorda com nossos <a href="#">Termos de Serviço</a> e <a href="#">Política de Privacidade</a>
                                </p>
                                <button type="submit" className="btn text-white btn-signup w-100">Cadastrar</button>
                            </form>
                            <div className="text-center mt-3">
                                <p className="mb-0 terms">Já tem uma conta? <a href="sign-in.html" className="fw-bold">Entrar</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Busca */}
            <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title search-title fw-bold" id="searchModalLabel">Buscar</h5>
                            <button type="button" className="btn-close close-model search-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control shadow-sm"
                                        placeholder="Busque por produtos..."
                                        autoFocus
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="show-search-product-wrap row">
                                    {searchTerm.trim() !== '' ? (
                                        filteredProducts.length > 0 ? (
                                            filteredProducts.map((product) => (
                                                <div key={product.id} className="ssp-wrap border mb-2 col-lg-6"
                                                    onClick={() => handleProductClick(product)}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <div className="ssp-img">
                                                        <img src={product.image} className='img-fluid' alt={product.name} />
                                                    </div>
                                                    <div className="ssp-info p-2">
                                                        <h6>{product.name}</h6>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-muted">Nenhum produto encontrado.</p>
                                        )
                                    ) : (
                                        <p className="text-muted">Nenhum produto encontrado.</p>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal do Produto */}
            <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content p-3">
                        {selectedProduct && (
                            <>
                                <div className="modal-body d-flex flex-column flex-md-row gap-1">
                                    <div className="col-md-6">
                                        <img src={selectedProduct.image} className="img-fluid rounded border" alt={selectedProduct.name} />
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
                                            R${selectedProduct.price}{" "}
                                            <span className="text-muted text-decoration-line-through fs-6 fw-normal">
                                                R${selectedProduct.offerPrice}
                                            </span>
                                        </h4>
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="d-flex align-items-center border rounded" style={{ width: "100px", height: "40px" }}>
                                                <span className="px-2" style={{ cursor: "pointer" }} onClick={handleDecrease}>-</span>
                                                <span className="flex-grow-1 text-center border-start border-end">{quantity}</span>
                                                <span className="px-2" style={{ cursor: "pointer" }} onClick={handleIncrease}>+</span>
                                            </div>
                                            <button className="btn btn-success d-flex align-items-center gap-2 custom-z"
                                                onClick={() => handleAddToCart(selectedProduct,
                                                    toast.success(`${selectedProduct.name} foi adicionado ao carrinho!`)
                                                )}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <i className="bi bi-basket"></i> Adicionar ao Carrinho
                                            </button>
                                        </div>
                                        <p className='mt-4 prodct-des'>
                                            Este produto de alta qualidade combina durabilidade e estilo. Perfeito para uso diário,
                                            oferece excelente custo-benefício, conforto e design moderno.
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
