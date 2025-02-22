import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import { artworks } from "./data/ArtworkData";

import mainImg from './images/main.png';
import axios from "axios";

const Products = () => {

    const navigate = useNavigate();
    const handleClick = (product) => {
        navigate(`/product/${product.id}`, { "state": { "product": product } });
    };

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchProducts = async (pageNumber) => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8000/products?page=${pageNumber}`);
            setProducts(response.data.results);
            setTotalPages(Math.ceil(response.data.count / 8));
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => handleClick(product)}
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
                                <p className="text-white text-xs">₮{product.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Products;