import './ProductCard.css';





function ProductCard(values){
    return(
        <div>
            <div className="card">
                <img src={values.item.image} alt="..." />
                <hr />
                <div className="card-body">
                    <h5 className="card-title">{values.item.name}</h5>
                    <p>&#8377;{values.item.price}</p>
                    <p className="card-text">{values.item.detail}</p>
                    <a href="#" className="btn btn-primary">Add To Cart</a>
                </div>
            </div>
        </div>
    )

}

export default ProductCard;