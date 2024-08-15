import { Link } from "react-router-dom";

function Card({ title, img, categ, prices, url, isFavorite, onFavoriteToggle, showHeartIcon = true }) {
    return (
        <div className="card position-relative shadow-lg " style={{ height: '470px', width: '100%' }}>
            <div className="card-body  text-center position-relative">
                {/* Conditionally render the heart icon */}
                {showHeartIcon && (
                    <button
                        onClick={onFavoriteToggle}
                        className="position-absolute"
                        style={{
                            top: '-3px',
                            right: '1px',
                            border: 'none',
                            background: 'transparent',
                            cursor: 'pointer',
                            fontSize: '24px',
                        }}
                    >
                        {isFavorite ? <h2>❤️</h2> : <h2>💔</h2>}
                    </button>
                )}

                {/* Product Image */}
                <img src={img} className="card-img-top" width={200} height={170} alt={title} />

                {/* Product Details */}
                <h5 className="card-title fs-4 py-2">{title}</h5>
                <p className="card-text fw-bold">{categ}</p>
                <p className="card-text fw-bold">{prices}</p>

                {/* Buttons */}
                <div className="position-absolute col-sm-12" style={{ bottom: '20px' }}>
                    {url && (
                        <Link className="btn btn-dark my-2 mx-2" to={url}>View Details</Link>
                    )}
                    <button className="btn btn-info my-2">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;

