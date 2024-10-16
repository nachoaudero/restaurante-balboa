export const Card = ({ product }) => {
    return (
        <div className="col-sm-6 col-md-4 col-xl-3 p-3">
            <div className="bg-second-1 card border-0">
                <img src={product.image_url} alt={product.name} className="card-img-top" />
                <div className="card-body">
                    <h3 className="card-tittle cl-white mb-0">{product.name}</h3>
                    <p className="card-text cl-white fw-light mb-2">{product.description}<br /><span className="fw-bolder fs-4">${product.sale_price}</span></p>
                    <button className="btn btn-hover bg-grey cl-black">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};