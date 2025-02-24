import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const ArtistDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const [artist, setArtist] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchArtist = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`http://localhost:8000/artists/${id}`);
                setArtist(response.data);
            } catch (error) {
                console.error('Error fetching artist:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArtist();
    }, [id]);

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
        <div className="container mx-auto py-32 px-4">
            {
                artist && (
                <>
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
                        {/* Profile Image */}
                        <div className="w-64 md:w-1/3">
                            <img 
                            src={artist.profile} 
                            alt={artist.name} 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>

                        {/* Artist Info */}
                        <div className="md:w-2/3 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-light">{artist.name}</h1>
                            <div className="space-y-4">
                                <p className="text-sm text-justify font-light leading-relaxed">
                                    {artist.description}
                                </p>
                                
                                {/* Contact & Social Links */}
                                <div className="pt-4 border-t border-gray-200">
                                    <p className="flex text-sm font-thin items-center gap-2">
                                        <i className="bi bi-telephone"></i>
                                        {artist.contact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {artist.products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
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
                </>)
            }
        </div>
    );
}

export default ArtistDetails;