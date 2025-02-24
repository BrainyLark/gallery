import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { RingLoader } from "react-spinners";

const Products = () => {

    const navigate = useNavigate();
    const handleClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {

        const fetchProducts = async (pageNumber) => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:8000/products?page=${pageNumber}`);
                setProducts(response.data.results);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts(currentPage);
    }, [currentPage]);

    /* const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };*/

    if (loading) {
        return (
        <div className="flex min-h-screen">
            <RingLoader
                color="#000000"
                size={150}
                className="m-auto"
            />
        </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen px-32">
                <div className="m-auto text-center font-normal text-base text-red-600">
                    Уучлаарай, техникийн алдаа гарлаа: {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleClick(product.id)}
                        className="bg-white shadow-2xl overflow-hidden relative group hover:cursor-pointer">
                        
                        <div className="relative">
                            <img 
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover" />

                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-right">
                                <h3 className="text-xl font-light text-white">
                                    {product.title}
                                </h3>
                                <p className="text-white text-xs">{Number(product.price).toLocaleString("mn-MN", {style:"currency", currency:"MNT"})}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Products;