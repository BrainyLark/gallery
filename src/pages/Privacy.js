import { useEffect } from "react";

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (<div className="container mx-auto">
        <div className="grid grid-cols-5">
            <div className="col-span-5 col-start-1 px-5 md:col-span-3 md:col-start-2 md:px-0">
                <div className="flex flex-col space-y-4 my-32 text-justify">
                    <h1 className="font-thin text-5xl">Нууцлалын бодлого</h1>

                    <p className="font-light text-base">Манай вэбсайт таны хувийн мэдээллийг хамгаалах, хадгалахыг эрхэм зорилгоо болгож ажиллаж байна. Та манай сайтаар дамжуулан уран бүтээл худалдан авах эсвэл бидэнд хандсан ямар нэгэн мэдээлэл өгөхөд бид таны мэдээллийг нарийн нууцлан хадгалах болно.</p>

                    <h1 className="font-light text-2xl">Мэдээлэл цуглуулах ба ашиглах</h1>  
                    <p className="font-light text-base">Бид таныг бүртгүүлэх, худалдан авалт хийх, захиалга өгөх үед болон бусад харилцааны үеэр таны нэр, хаяг, имэйл хаяг, утасны дугаар гэх мэт хувийн мэдээллийг цуглуулдаг. Энэ мэдээлэл нь зөвхөн танд илүү сайн үйлчилгээ үзүүлэх, захиалгыг баталгаажуулах, хүргэх зорилгоор ашиглагдана.</p>

                    <h1 className="font-light text-2xl">Гуравдагч этгээдэд мэдээлэл түгээхгүй байх</h1>
                    <p className="font-light text-base">Бид таны хувийн мэдээллийг ямар ч гуравдагч этгээдэд дамжуулахгүй, худалдахгүй, түрээслэхгүй болно. Мөн аливаа бизнесийн болон сурталчилгааны зорилгоор таны мэдээллийг гуравдагч талтай хуваалцахгүй гэдгийг амлаж байна.</p>

                    <h1 className="font-light text-2xl">Аюулгүй байдал</h1>
                    <p className="font-light text-base">Таны хувийн мэдээллийг хамгаалахын тулд бид өндөр зэрэглэлийн аюулгүй байдлын арга хэмжээнүүдийг хэрэгжүүлдэг. Ингэснээр таны өгөгдлийг хортой халдлагаас хамгаалах болно.</p>

                    <h1 className="font-light text-2xl">Күүки ба хяналт</h1>
                    <p className="font-light text-base">Манай вэбсайт таны туршлагыг сайжруулахын тулд күүки ашиглаж болно. Та хөтөчийн тохиргоогоор күүкиг хянах эсвэл идэвхгүй болгож болно. Гэсэн хэдий ч, хэрэв та күүкиг идэвхгүй болговол манай зарим үйлчилгээний хэсэгүүд алдагдаж магадгүй.</p>

                    <h1 className="font-light text-2xl">Өөрчлөлт</h1>
                    <p className="font-light text-base">Бид Нууцлалын бодлогод хамаарах талаар үе үе өөрчлөлт хийх эрхтэй бөгөөд тэдгээрийг манай вэбсайтад нийтлэх болно. Шинэчлэгдсэн хувилбар нь вэбсайтад нийтлэгдсэн өдрөөс хүчин төгөлдөр мөрдөгдөх болно.</p>
                </div>
            </div>
        </div>
    </div>    
    );
}

export default Privacy;