import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { RingLoader } from "react-spinners";

const Artists = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const handleClick = (artistId) => {
        navigate(`/artist/${artistId}`);
    };

    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchArtists = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:8000/artists");
            setArtists(response.data.results);
        } catch (error) {
            console.error('Error fetching artists:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArtists();
    }, []);

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
        <div className="container mx-auto px-4 py-32">
            <h1 className="font-thin text-3xl mb-6">Уран бүтээлчид</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {artists.map((artist) => (
                    <div
                        key={artist.id}
                        onClick={() => handleClick(artist.id)}
                        className="bg-white shadow-2xl overflow-hidden relative group hover:cursor-pointer"
                    >

                        <div className="relative">

                            <img 
                                src={artist.profile}
                                alt={artist.name}
                                className="w-full h-64 object-cover" />

                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-right">
                                <h3 className="text-xl font-light text-white">
                                    {artist.name}
                                </h3>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Artists;