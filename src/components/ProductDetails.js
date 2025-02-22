import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
    const location = useLocation();
    const { product } = location.state || {};
    const { id } = useParams();

    if (!product) {
        return <div>Product not found or no product data passed.</div>;
    }

    return (
        <div className="flex flex-col bg-transparent min-h-screen items-center">
            <h1 className="text-5xl font-extralight font-serif mx-auto">Product Detail: { id }</h1>
            <p>{product.title}</p>
            <p>{product.description}</p>
            <img src={product.image} />
            <p>{product.width}</p>
            <p>{product.height}</p>
            <p>{product.technique}</p>
        </div>
    );
}

export default ProductDetails;