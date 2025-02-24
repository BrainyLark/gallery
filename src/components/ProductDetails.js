import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RingLoader } from "react-spinners";

const ProductDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const handleArtistClick = (artistId) => {
      navigate(`/artist/${artistId}`);
    }

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
      const fetchProduct = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:8000/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching artist:', error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
      };
      fetchProduct();
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
        <div className="container mx-auto">
            <div className="grid grid-cols-5">
                <div className="md:col-span-3 md:col-start-2 col-span-5 col-start-1 md:px-0 px-5">
                    <div className="flex flex-col space-y-4 my-32 text-left">
                        <h1 className="font-thin text-5xl">{ product.title }</h1>
                        <div className="flex flex-row gap-2">
                            <img src={product.artist.profile} alt="Profile" className="w-10 h-10" />
                            <div className="flex flex-col">
                                <p className="text-sm font-light">Уран бүтээлч | Зураач | <i className="bi bi-image"></i></p>
                                <p className="text-base font-light text-black hover:cursor-pointer" onClick={() => handleArtistClick(product.artist.id)}><i className="bi bi-at"></i>{product.artist.name}</p>
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
                                className="w-full mx-auto h-auto shadow-lg"
								alt={product.title}
                            />
                        </div>
                        <div className="border border-red-700 rounded-xl p-3">
                            <h1 className="text-lg font-medium text-red-700">Худалдан авах</h1>
                            <p className="text-sm font-extralight text-red-700 text-justify">Та энэ уран зургийг худалдаж авахыг хүсвэл 8550-0442 дугаар руу холбогдох эсвэл info@luminaire.art руу и-мейл явуулаарай. Хэрвээ та энэ уран зургийг сонирхож байвал манай урлан дээр өөрийн биеэр ирж үзээд шийдвэрээ гаргаж болно. Манай хаяг: Чингэлтэй дүүрэг, 4-р хороо, Чингисийн Музейн баруун талд 9-р байр, 4-р орц, 28 тоот</p>
                        </div>
                        <div className="border border-black rounded-xl p-3">
                            <h1 className="text-lg font-medium">Уран бүтээлийн дэлгэрэнгүй</h1>
                            <p className="text-sm font-extralight text-justify">{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;