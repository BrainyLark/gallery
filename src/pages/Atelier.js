import { useEffect } from "react";

const Atelier = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-5">
                <div className="col-span-5 col-start-1 px-5 md:col-span-3 md:col-start-2 md:px-0">
                    <div className="flex flex-col space-y-4 my-32 text-justify">
                        <h1 className="font-thin text-5xl">Уран зургийн сургалт</h1>
                        <p className="font-light text-base">Одоогоор тодорхой мэдээлэл хараахан байхгүй байна.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Atelier;