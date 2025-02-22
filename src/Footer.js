import React from "react";
import logo from "./svgs/logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="bg-slate-900 text-white p-24">
            <div className="flex flex-col md:grid md:grid-cols-4 gap-8">
                <div className="md:col-span-2 flex flex-col gap-4 text-xs">
                    <div className="mx-auto">
                        <img src={logo} alt="" className="w-56 h-24" />
                    </div>

                    <div>
                        <p>Чингэлтэй дүүрэг, 4-р хороо, Чингисийн Музейн</p>
                        <p>баруун талд 9-р байр, 4-р орц, 28 тоот</p>
                    </div>

                    <div>
                        <p>Утас: 89141700, 85500442</p>
                        <p>И-Мэйл: info@artstore.mn</p>
                    </div>

                    <div>
                        <p>&copy; 2025. Art Store Atelier Studio</p>
                    </div>
                </div>

                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-xs text-left">
                        <h3 className="font-semibold mb-4">Категори</h3>
                        <ul>
                            <li className="mb-2"><Link to="/products">Байгаль /Nature/</Link></li>
                            <li className="mb-2"><Link to="/products">Хийсвэр /Abstract/</Link></li>
                            <li className="mb-2"><Link to="/products">Хөрөг /Portrait/</Link></li>
                            <li className="mb-2"><Link to="/products">Сүсэг бишрэл /Religious/</Link></li>
                            <li className="mb-2"><Link to="/products">Хэвлэл /Printing/</Link></li>
                            <li className="mb-2"><Link to="/products">Фото /Photography/</Link></li>
                        </ul>
                    </div>
                    <div className="text-xs text-left">
                        <h3 className="font-semibold mb-4">Үйл ажиллагаа</h3>
                        <ul>
                            <li className="mb-2"><Link to="/about">Бид хэн бэ?</Link></li>
                            <li className="mb-2"><Link to="/terms">Үйлчилгээний нөхцөл</Link></li>
                            <li className="mb-2"><Link to="/atelier">Уран зургийн сургалт</Link></li>
                            <li className="mb-2"><Link to="/contact">Бидэнтэй холбоо барих</Link></li>
                            <li className="mb-2"><Link to="/privacy">Нууцлалын бодлого</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
    }
export default Footer;