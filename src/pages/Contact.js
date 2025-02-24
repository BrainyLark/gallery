import { useEffect } from "react";
const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto min-h-screen">
            <div className="grid grid-cols-5">
                <div className="col-span-5 col-start-1 px-5 md:col-span-3 md:col-start-2 md:px-0">
                    <div className="flex flex-col space-y-6 my-32 text-justify">
                        <h1 className="font-thin text-5xl">Бидэнтэй холбогдох</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2673.726385412524!2d106.91166977572426!3d47.92233146101506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smn!4v1740419749441!5m2!1sen!2smn" className="w-full h-80" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className="text-base font-light">
                            <p>Хаяг: Чингэлтэй дүүрэг, 4-р хороо, Чингисийн Музейн баруун талд 9-р байр</p>
                            <p>Утас: (+976) 8550-0442, 8914-1700</p>
                            <p>Мэйл хаяг: info@urlan.co</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;