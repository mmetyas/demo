import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavorites } from '../redux/actions/FavouriteAction';
import Card from '../Components/Card';

function FavoritesPag() {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);

    const handleRemoveFromFavorites = (productId) => {
        dispatch(removeFromFavorites(productId));
    };

    return (
        <div className="container my-5 py-5">
            {favorites.length === 0 ? (
                <h1 className="text-center">Your favorites are empty</h1>
            ) : (
                <div className="container">
                    <div className="row">
                        {favorites.map((product) => (
                            <div key={product.id} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                                <Card
                                    key={product.id}
                                    title={product.title}
                                    img={product.image}
                                    categ={product.category}
                                    prices={`$${product.price}`}
                                    url={`/user/${product.id}`}
                                    showHeartIcon={false}  // Hide the heart icon
                                />
                                <div className="d-flex justify-content-center">
                                    <button
                                        className="btn my-4 btn-outline-danger"
                                        onClick={() => handleRemoveFromFavorites(product.id)}
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Remove from Favorites
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FavoritesPag;



