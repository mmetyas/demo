import { useEffect, useState } from "react";
import axios from 'axios';
import Card from '../Components/Card';
import Title from "../Components/Title";
import Filter from '../Components/Filter';
import Search from '../Components/Search';
import { Link } from "react-router-dom";
import { addToFavorites } from "../redux/actions/FavouriteAction";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/actions/FavouriteAction";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';


// import { useCart } from '../Context/CartContext';

function Products() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(4);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                setProducts(res.data);
                setFilteredProducts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (selectedCategory ? product.category === selectedCategory : true)
        );
        setFilteredProducts(filtered);
    }, [searchTerm, selectedCategory, products]);

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const isFavorite = (productId) => favorites.some((favpro) => favpro.id === productId);

    const handleFavoriteToggle = (product) => {
        if (isFavorite(product.id)) {
            dispatch(removeFromFavorites(product.id));
        } else {
            dispatch(addToFavorites(product));
        }
    };


    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);

        // If the selected language is Arabic, set the direction to RTL
        if (lng === 'ar') {
            document.body.dir = 'rtl';
        } else {
            document.body.dir = 'ltr';
        }
    }
    return (
        <div className="container my-5" style={{backgroundImage : `url(/WhatsApp\ Image\ 2024-08-12\ at\ 6.30.00\ PM\ \(1\).jpeg)`}}>
            <div>
            <div>
                <button onClick={() => changeLanguage('en')} className="bg-danger mx-2">EN</button>
                {/* <button onClick={() => changeLanguage('fr')} className="bg-primary mx-2">FR</button> */}
                <button onClick={() => changeLanguage('ar')} className="bg-success mx-2">AR</button>
            </div>

            </div>
            <Title
                title={t("Shopping Website")}
                paragrapgh={t("Inspirational designs, illustrations, and graphic elements from the world's best designers.")}
            />
            <div className="mb-4">
                <Search onSearch={setSearchTerm} />
                <Filter onFilter={setSelectedCategory} />
            </div>
            <div className="row d-flex">

                {currentProducts.map(product => (
                    <div key={product.id} className="col-lg-3 my-2 d-flex justify-content-center">
                        <Card
                            title={product.title}
                              img={product.image}
                            categ={product.category}
                            prices={`$${product.price}`}
                            url={`/user/${product.id}`}
                            isFavorite={isFavorite(product.id)}
                            onFavoriteToggle={() => handleFavoriteToggle(product)}
                            showHeartIcon={true}  // Show the heart icon
                        />
                    </div>
                ))}
            </div>

            <nav className="d-flex justify-content-center my-3">
                <ul className="pagination">
                    {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, index) => (
                        <li key={index + 1} className="page-item">
                            <button onClick={() => paginate(index + 1)} className="page-link bg-dark text-light">
                                {index + 1}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Products;

