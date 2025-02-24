import { useEffect } from "react";
import atelierA from "../images/atelier01.jpg";
import atelierB from "../images/atelier02.jpg";
const Atelier = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-5">
                <div className="col-span-5 col-start-1 px-5 md:col-span-3 md:col-start-2 md:px-0">
                    <div className="flex flex-col space-y-6 my-32 text-justify">
                        <h1 className="font-thin text-5xl">Уран зургийн сургалт</h1>

                        <p className="font-thin text-sm">
                            Бид бүх төрлийн насныханд зориулсан уран зургийн олон төрлийн техникийн хүрээнд сургалтын үйл ажиллагаа явуулдаг. Та манай 8550-0447 дугаараар холбогдож дэлгэрэнгүй мэдээлэл авааарай. Одоогоор тодорхой уран зургийн сургалтын мэдээлэл болон хуваарь тодорхой тавигдаагүй байна.
                        </p>
                        <img src={atelierA} alt="Uran zurgiin surgalt" className="w-full h-auto shadow-lg" />

                        <img src={atelierB} alt="Uran zurgiin surgalt" className="w-full h-auto shadow-lg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atelier;