import { useEffect } from "react";

const Atelier = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex bg-transparent min-h-screen items-center">
            <h1 className="text-5xl font-extralight font-serif mx-auto">This is apprenticeship, please welcome!</h1>
        </div>
    );
}

export default Atelier;