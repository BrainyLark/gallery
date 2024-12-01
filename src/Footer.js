import React from "react";
import logo from './svgs/logo_black.png';
import qpay from './images/qpay.png';
import spay from './images/socialpay.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Footer = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full py-24 bg-gradient-to-t from-slate-400 to-transparent text-black font-thin text-xs">
            <div className="flex-1 flex flex-col text-left">
            </div>
            <div className="flex-1 flex flex-col text-left space-y-5 mx-auto">
                <img src={logo} alt="Artisan Black Logo" width="250px" />
                <p><i className="bi bi-envelope-at"></i> &nbsp;&nbsp; info@artisan.mn</p>
                <p><i className="bi bi-telephone"></i> &nbsp;&nbsp; (+976) 8550-0442, 8914-1700</p>
                <p><i className="bi bi-pin-angle"></i> &nbsp;&nbsp; 84-3-22, 25-р хороо, БЗД, Улаанбаатар хот</p>
                <p>&copy; &nbsp;&nbsp; 2024 Artisan Studio Mongolia</p>
            </div>
            <div className="flex-1 flex flex-col text-left space-y-5 mx-auto">
                <a href="/"><i className="bi bi-info-circle"></i> &nbsp;&nbsp; Бидний тухай</a>
                <a href="/"><i className="bi bi-marker-tip"></i> &nbsp;&nbsp; Үйлчилгээний нөхцөл</a>
                <a href="/"><i className="bi bi-cash-coin"></i> &nbsp;&nbsp; Худалдан авалтын тухай</a>
                <a href="/"><i className="bi bi-palette"></i> &nbsp;&nbsp; Захиалгаар зуруулах тухай</a>
                <a href="/"><i className="bi bi-easel"></i> &nbsp;&nbsp; Сургалтын үйл ажиллагаа</a>
                <a href="/"><i className="bi bi-bicycle"></i> &nbsp;&nbsp; Хүргэлтийн систем</a>
                <a href="/"><i className="bi bi-lock"></i> &nbsp;&nbsp; Мэдээлэл хадгалалт & нууцлал</a>
                <a href="/"><i className="bi bi-journal-richtext"></i> &nbsp;&nbsp; Каталог</a>
            </div>
            <div className="flex-1 flex flex-col text-left space-y-5 mx-auto">
                <a href="/"><i className="bi bi-backspace-reverse"></i> &nbsp;&nbsp; Захиалга цуцлах тухай</a>
                <a href="/"><i className="bi bi-people"></i> &nbsp;&nbsp; Бидэнтэй нэгдэх</a>
                <div className="flex flex-row items-left text-4xl space-x-6">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-tiktok"></i>
                </div>
                <img src={qpay} alt="QPay Logo" width="100px" />
                <img src={spay} alt="SocialPay Logo" width="150px" />
            </div>
            <div className="flex-1 flex flex-col text-left">
            </div>
        </div>
    );
}

export default Footer;