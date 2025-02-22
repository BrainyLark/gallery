import React from "react";
import logo from "./svgs/logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return(
        <footer className="bg-slate-900 text-white p-24">
            <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2 flex flex-col gap-4 text-xs">
                    <div className="mx-auto">
                        <img src={logo} alt="" className="w-56 h-24" />
                    </div>

                    <div>
                        <p>Чингэлтэй дүүрэг, 6-р хороо, Чингисийн Музейн</p>
                        <p>баруун талд Наран Пойнт 3 давхар 28 тоот</p>
                    </div>

                    <div>
                        <p>Утас 89141700, 80054770</p>
                        <p>И-Мэйл info@lumineira.art</p>
                    </div>

                    <div>
                        <p>&copy; 2025. Luminaire Atelier Studio</p>
                    </div>
                </div>

                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-xs text-left">
                        <h3 className="font-semibold mb-4">Категори</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Байгаль /Nature/</a></li>
                            <li className="mb-2"><a href="#">Хийсвэр /Abstract/</a></li>
                            <li className="mb-2"><a href="#">Хөрөг /Portrait/</a></li>
                            <li className="mb-2"><a href="#">Сүсэг бишрэл /Religious/</a></li>
                            <li className="mb-2"><a href="#">Хэвлэл /Printing/</a></li>
                            <li className="mb-2"><a href="#">Фото /Photography/</a></li>
                        </ul>
                    </div>
                    <div className="text-xs text-left">
                        <h3 className="font-semibold mb-4">Үйл ажиллагаа</h3>
                        <ul>
                            <li className="mb-2"><a href="#">Бид хэн бэ?</a></li>
                            <li className="mb-2"><a href="#">Үйлчилгээний нөхцөл</a></li>
                            <li className="mb-2"><a href="#">Уран зургийн сургалт</a></li>
                            <li className="mb-2"><a href="#">Бидэнтэй холбоо барих</a></li>
                            <li className="mb-2"><a href="#">Нууцлалын бодлого</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
    }
export default Footer;