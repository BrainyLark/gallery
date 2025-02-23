import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const ArtistDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [artist, setArtist] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();

    const fetchArtist = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8000/artists/${id}`);
            setArtist(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching artist:', error);
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArtist();
    }, [id]);

    return (
        <div className="container mx-auto py-32 px-4">
            {artist && (
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
                    <p className="text-base font-light leading-relaxed">
                        {artist.description}
                    </p>
                    
                    {/* Contact & Social Links */}
                    <div className="pt-4 border-t border-gray-200">
                        <h2 className="text-xl font-light mb-4">Холбоо барих</h2>
                        <div className="space-y-2">
                        <p className="flex font-thin items-center gap-2">
                            <span className="text-gray-600">📧</span>
                            {artist.contact}
                        </p>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            )
            }
        </div>
    );
}

export default ArtistDetails;