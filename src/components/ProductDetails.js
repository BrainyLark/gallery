import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const ProductDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const location = useLocation();
    const { product } = location.state || {};

    if (!product) {
        return <div>Product not found or no product data passed.</div>;
    }

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-5">
                <div className="md:col-span-3 md:col-start-2 col-span-5 col-start-1 md:px-0 px-5">
                    <div className="flex flex-col space-y-4 my-32 text-left">
                        <h1 className="font-thin text-5xl">{ product.title }</h1>
                        <div className="flex flex-row gap-2">
                            <img src={product.artist.profile} alt="Profile" className="w-10 h-10" />
                            <div className="flex flex-col">
                                <p className="text-xs font-bold">Уран бүтээлчийн нэр</p>
                                <p className="text-base font-light">{product.artist.name}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <p className="text-white bg-rose-700 text-sm font-medium rounded-lg p-1">{product.category}</p>
                            <p className="text-white bg-blue-700 text-sm font-medium rounded-lg p-1">{product.technique}</p>
                            <p className="text-lg font-light">Үнэ: {Number(product.price).toLocaleString("mn-MN", {style:"currency", currency:"MNT"})}</p>
                            <p className="text-lg font-light">Хэмжээ: {product.width} &#215; {product.height}</p>
                        </div>
                        <div className="w-full">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="lg:w-3/5 w-full mx-auto h-auto shadow-lg"
                            />
                        </div>
                        <div className="border border-red-700 rounded-xl p-3">
                            <h1 className="text-lg font-medium text-red-700">Худалдан авах</h1>
                            <p className="text-sm font-extralight text-red-700 text-justify">Та энэ уран зургийг худалдаж авахыг хүсвэл 8550-0442 дугаар руу холбогдох эсвэл info@luminaire.art руу и-мейл явуулаарай. Хэрвээ та энэ уран зургийг сонирхож байвал манай урлан дээр өөрийн биеэр ирж үзээд шийдвэрээ гаргаж болно. Манай хаяг: Чингэлтэй дүүрэг, 4-р хороо, Чингисийн Музейн баруун талд 9-р байр, 4-р орц, 28 тоот</p>
                        </div>
                        <div className="border border-black rounded-xl p-3">
                            <h1 className="text-lg font-medium">Уран бүтээлийн дэлгэрэнгүй</h1>
                            <p className="text-lg font-extralight text-justify">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;