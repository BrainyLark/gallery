import Products from "../Products";
import { useEffect } from "react";
const Artworks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="flex flex-col gap-2">
            <div className="my-32">
                <h1 className="font-thin text-5xl">Уран бүтээлүүд</h1>
                <Products />
            </div>
        </div>
    );
};

export default Artworks;