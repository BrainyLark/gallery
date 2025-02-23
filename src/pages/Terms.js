import { useEffect } from "react";
const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-5">
                <div className="col-span-5 col-start-1 px-5 md:col-span-3 md:col-start-2 md:px-0">
                    <div className="flex flex-col space-y-4 my-32 text-justify">
                        <h1 className="font-thin text-5xl">Үйлчилгээний нөхцөл</h1>
                        <h1 className="font-light text-2xl">I. Ерөнхий зүйл</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Энэхүү үйлчилгээний нөхцөл нь манай онлайн платформоор дамжуулан худалдан авалт хийх болон үйлчилгээ авах бүх хэрэглэгчдэд хамаарна.</p></li>
                            <li><p className="font-light text-base">2. Платформыг ашиглаж эхэлснээр та энэхүү нөхцөлийг хүлээн зөвшөөрсөнд тооцогдоно.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">II. Бэлэн худалдаалж буй уран зургаас худалдан авалт хийх</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Өөрийн сонирхсон зургаа худалдан авагч биеэр студиэс ирж үзэж авах боломжтой.</p></li>
                            <li><p className="font-light text-base">2. Онлайнаар худалдан авалт хийхдээ тухайн зургийн хэмжээ, материал, уран бүтээлч гэх мэт мэдээлэлтэй сайн танилцахыг анхаарах.</p></li>
                            <li><p className="font-light text-base">3. Захиалгаа заавал манай 85500447 утсаар холбогдон өгөх ба худалдан авч буй уран зургийн төлбөр бүрэн төлөгдсөн үед хүргэлт 1-2 өдрийн дотор хийгдэнэ.</p></li>
                            <li><p className="font-light text-base">4. Хөдөө орон нутагруу шуудангаар өгч явуулж болно.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">III. Уран зураг захиалан зуруулах</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Уран зураг захиалан зуруулахдаа өөрийн сонирхож байгаа уран зургийн арга барил, урсгал чиглэл нь тохирсон манай студитэй хамтарч ажилдаг зураачтай оператроор дамжуулан холбогдох.</p></li>
                            <li><p className="font-light text-base">2. Тухайн уран зургийн хэмжээ, төрөл, арга ажилагаа, техникээс хамааран үнэ нь харилцан адилгүй тул зураачтай тохиролцон нийт үнийн дүнгийн 50%-аас доошгүй урьдчилагаа төлөх.</p></li>
                            <li><p className="font-light text-base">3. Зураач уран зургийг 7-10 хоногт зурж гүйцэтгэх ба зарим тохиолдолд тухайн уран зурагнаас хамааран арай удаан хугацаа шаардагдах магадлалтай.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">IV. Төлбөр тооцоо</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Бүх төрлийн төлбөр тооцоо үндэсний мөнгөн тэмдэгт төгрөгөөр хийгдэнэ.</p></li>
                            <li><p className="font-light text-base">2. Төлбөрийг дараах хэлбэрээр хийж болно:</p>
                                <ul>
                                    <li className="font-light text-base">- Банкны шилжүүлэг</li>
                                    <li className="font-light text-base">- Бэлэн мөнгөөр төлөх</li>
                                    <li className="font-light text-base">- Картаар төлөх (Visa, Mastercard)</li>
                                </ul>
                            </li>
                        </ol>

                        <h1 className="font-light text-2xl">V. Хүргэлтийн үйлчилгээ</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Улаанбаатар хот доторх хүргэлт үнэ төлбөргүй.</p></li>
                            <li><p className="font-light text-base">2. Орон нутгийн хүргэлтийн төлбөр тухайн газар болон бүтээлийн жингээс хамаарна.</p></li>
                            <li><p className="font-light text-base">3. Хүргэлтийн явцад гарсан аливаа эвдрэл гэмтлийг бид хариуцна.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">VI. Буцаалт ба солилт</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Худалдан авсан бүтээлийг дараах тохиолдолд буцаан авна:</p>
                                <ul>
                                    <li><p className="font-light text-base">- Хүргэлтийн явцад гэмтсэн</p></li>
                                    <li><p className="font-light text-base">- Захиалгын бүтээл захиалагчийн шаардлагад нийцээгүй</p></li>
                                </ul>
                            </li>
                            <li><p className="font-light text-base">Буцаалт хийх хугацаа худалдан авснаас хойш 3 хоног.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">VII. Оюуны өмчийн эрх</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Манай платформд байршуулсан бүх бүтээл зохиогчийн эрхээр хамгаалагдсан.</p></li>
                            <li><p className="font-light text-base">2. Захиалгаар хийгдсэн бүтээлийн эрх захиалагчид шилжинэ.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">VIII. Маргаан шийдвэрлэх</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Талууд үүссэн маргааныг харилцан зөвшилцөх замаар шийдвэрлэнэ.</p></li>
                            <li><p className="font-light text-base">2. Шаардлагатай тохиолдолд Монгол Улсын хууль тогтоомжийн дагуу шийдвэрлэнэ.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">Бусад</h1>
                        <ol>
                            <li><p className="font-light text-base">1. Энэхүү үйлчилгээний нөхцөлд өөрчлөлт оруулах эрхийг эзэмшигч өөртөө хадгална.</p></li>
                            <li><p className="font-light text-base">2. Өөрчлөлт орсон тохиолдолд хэрэглэгчдэд мэдэгдэнэ.</p></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Terms;