import React from "react";
import { artworks } from "./data/ArtworkData";
import mainImg from './images/main.png';

const Products = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {artworks.map((artwork) => (
                    <div
                        key={artwork.id} 
                        className="bg-white shadow-2xl overflow-hidden relative group hover:cursor-pointer">
                        
                        <div className="relative">
                            <img 
                                src={mainImg}
                                alt={artwork.title}
                                className="w-full h-64 object-cover" />

                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-200"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent text-right">
                                <h3 className="text-xl font-light text-white">
                                    {artwork.title}
                                </h3>
                                <p className="text-white text-xs">₮{artwork.price.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Products;