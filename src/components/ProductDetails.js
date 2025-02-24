import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { RingLoader } from "react-spinners";

const ImageMagnifier = ({ src, width, height, magnifierHeight = 250, magnifierWidth = 250, zoomLevel = 2.5 }) => {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
  
    return (
      <div
        style={{
          position: "relative",
          height: height,
          width: width
        }}
      >
        <img
          src={src}
          style={{ height: height, width: width }}
          onMouseEnter={(e) => {
            // Update image size and turn on magnifier
            const elem = e.currentTarget;
            const { width, height } = elem.getBoundingClientRect();
            setSize([width, height]);
            setShowMagnifier(true);
          }}
          onMouseMove={(e) => {
            // Update cursor position
            const elem = e.currentTarget;
            const { top, left } = elem.getBoundingClientRect();
  
            // Calculate cursor position on the image
            const x = e.pageX - left - window.pageXOffset;
            const y = e.pageY - top - window.pageYOffset;
            setXY([x, y]);
          }}
          onMouseLeave={() => {
            // Turn off magnifier
            setShowMagnifier(false);
          }}
          alt={'img'}
          className="cursor-none mx-auto"
        />
  
        {showMagnifier && (
          <div
            style={{
              position: "absolute",
              // prevent magnifier blocks the mousemove event of img
              pointerEvents: "none",
              // set size of magnifier
              height: `${magnifierHeight}px`,
              width: `${magnifierWidth}px`,
              // move element center to cursor
              top: `${y - magnifierHeight / 2}px`,
              left: `${x - magnifierWidth / 2}px`,
              opacity: "1", // reduce opacity so you can verify position
              border: "1px solid lightgray",
              backgroundColor: "white",
              backgroundImage: `url('${src}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
              backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
              backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
              borderRadius: "0%",
            }}
          ></div>
        )}
      </div>
    );
  };
  

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
                                <p className="text-base font-normal text-black hover:cursor-pointer" onClick={() => handleArtistClick(product.artist.id)}><i className="bi bi-hand-index"></i>&nbsp;{product.artist.name}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center">
                            <p className="text-white bg-rose-700 text-sm font-medium rounded-lg p-1">{product.category}</p>
                            <p className="text-white bg-blue-700 text-sm font-medium rounded-lg p-1">{product.technique}</p>
                            <p className="text-lg font-light">Үнэ: {Number(product.price).toLocaleString("mn-MN", {style:"currency", currency:"MNT"})}</p>
                            <p className="text-lg font-light">Хэмжээ: {product.width} &#215; {product.height}</p>
                        </div>
                        <div className="w-full">
                            <ImageMagnifier
                                src={product.image} 
                                className="lg:w-3/5 w-full mx-auto h-auto shadow-lg"
                                magnifierHeight={120}
                                magnifierWidth={120}
                                zoomLevel={2.5}
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