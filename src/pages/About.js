import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-5">
                <div className="col-span-5 col-start-1 px-5 md:col-span-3 md:col-start-2 md:px-0">
                    <div className="flex flex-col space-y-4 my-32 text-justify">
                        <h1 className="font-thin text-5xl">Бидний тухай</h1>
                        <h1 className="font-light text-2xl">Эрхэм зорилго</h1>
                        <p className="font-light text-base">Бидний эрхэм зорилго бол урлагийн бүтээлийг илүү олон хүнд хүргэх, залуу уран бүтээлчдийг дэмжих, хүмүүст тэдний хүсэл, сонирхлыг илэрхийлэх орчин бүрдүүлэхэд туслах явдал юм. Хэрэглэгчид манай вэбсайтаар дамжуулан олон төрлийн чанартай уран зургаас сонгон авч, өөрсдийн хүссэн шинж чанарт нийцүүлэн зураг захиалах боломжтой.</p>

                        <h1 className="font-light text-2xl">Яагаад биднийг сонгох вэ?</h1>
                        <ol>
                            <li><p className="font-light text-base"><span className="font-semibold">Уран бүтээлийн хүрээ:</span> Манай вэбсайт дээр таны төсөөлөлд нийцэх олон янзын уран бүтээлчдийн шинэлэг, өвөрмөц уран зураг, бүтээлүүдийг харж болно.</p></li>
                            <li><p className="font-light text-base"><span className="font-semibold">Хамтын ажиллагаа:</span> Бид бүтээлч хүмүүсийг урлагийн зах зээлийн өргөн хүрээнд танилцуулахыг зорино. Үүнтэй холбоотойгоор бид урлаг сонирхогчид, худалдан авагчидтай байнгын харилцаатай багаа бүрдүүлж байна.</p></li>
                            <li><p className="font-light text-base"><span className="font-semibold">Захиалгат бүтээл:</span> Та өөрийн онцгой хүсэл, мөрөөдлийг зургаар илэрхийлэхийг хүсч байвал манай чадварлаг зураачдад хандаж, тусгай захиалга өгч болно.</p></li>
                        </ol>

                        <h1 className="font-light text-2xl">Манай баг</h1>
                        <p className="font-light text-base">Манай багийн бүрэлдэхүүнд шинэлэг санаатай, сэтгэл татам уран бүтээл хийх хүсэлтэй залуу уран бүтээлчид багтдаг. Тэдний бүтээлүүд нь өөр хоорондоо ялгаатай стиль, сэдэл, мэдрэмжийг агуулсан тул ямар ч хэрэглэгч өөрт тохирсон, өөрийг нь илэрхийлэх уран бүтээлийг олох боломжтой.</p>

                        <h1 className="font-light text-2xl">Хамгийн сайн туршлага</h1>
                        <p className="font-light text-base">Бид хэрэглэгчдэдээ хамгийн сайн хэрэглэгчийн туршлагыг бий болгоход анхаардаг. Манай вэбсайтаар дамжуулан та бүтээлээ амархан захиалж, түргэн шуурхай хүргэх үйлчилгээг авах боломжтой.</p>

                        <h1 className="font-light text-2xl">Дэмжлэг</h1>
                        <p className="font-light text-base">Манай вэбсайт та бүхэнд үргэлж нээлттэй бөгөөд уран зургийг сонирхон үзэх, худалдан авах хүсэлтэй хүмүүст чөлөөтэй хүрж үйлчилнэ. Мөн өөрийн бүтээлээ худалдахыг хүссэн уран бүтээлчдэд манай хаалга үргэлж нээлттэй байх болно.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;