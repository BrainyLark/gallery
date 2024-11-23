import React from "react";
import { artworks } from "./data/ArtworkData";

const Products = () => {

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {artworks.map((artwork) => (
                    <div
                        key={artwork.id} 
                        className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <img 
                            src={artwork.imageUrl} 
                            alt={artwork.title}
                            className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {artwork.title}
                            </h3>
                            <p className="text-green-600 font-bold mb-2">
                                ${artwork.price.toLocaleString()}
                            </p>
                            <div className="mb-2">
                            {artwork.materials.map((material, index) => (
                                <span key={index} className="text-sm text-gray-600">
                                    {material}{index < artwork.materials.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                            </div>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                                {artwork.category}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}

export default Products;