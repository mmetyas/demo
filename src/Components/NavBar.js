import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

function NavBar() {
    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));

    useEffect(() => {
        const handleStorageChange = () => {
            setIsLoggedIn(localStorage.getItem('isLoggedIn'));
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        history.push('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 position-fixed w-100">
            <div className="container-fluid">
                <Link className="navbar-brand p-2" to="/products">ShopFree</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active fs-5" aria-current="page" to="/favourie">Favourites</Link>
                        </li>
                    </ul>
                    <h4 className="italic bold text-center mx-auto my-2 my-lg-0 bg-dark text-light border border-black p-2 rounded-circle d-none d-lg-block">ShopFree</h4>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row align-items-center">
                        <li className="nav-item position-relative me-3">
                            <Link className="nav-link active py-2" aria-current="page" to="/cart">
                                <i className="fa-solid fa-cart-shopping fs-4"></i>
                            </Link>
                        </li>
                        {isLoggedIn ? (
                            <li className="nav-item">
                                <button onClick={handleLogout} className="nav-link active py-2 px-4 btn btn-dark rounded-4">
                                    Log Out
                                </button>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link active py-2 px-4 btn btn-dark rounded-4" aria-current="page" to="/">Log In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active py-2 px-3 btn btn-dark rounded-4 ms-2" aria-current="page" to="/Reg">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
