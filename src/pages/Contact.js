import { useEffect } from "react";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (<div className="flex bg-transparent min-h-screen items-center">
        <h1 className="text-5xl font-extralight font-serif mx-auto">This is our Contact details.</h1>
    </div>);
}

export default Contact;