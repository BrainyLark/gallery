import Lottie from "lottie-react";
import colors from './svgs/colors.json';

const Home = () => {
    return (

        <div className="md:flex md:flex-row flex flex-col min-h-screen items-center bg-gradient-to-b from-slate-300">
            <div className="flex-1 z-10 md:text-right text-center translate-x-0 md:translate-x-[100px] md:order-1 order-2">

                <div className="z-10">
                    <h1 className="mb-8 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-blue-500 font-extrabold drop-shadow-xl lg:text-6xl md:text-4xl text-3xl">
                    "Агуу урлаг бүтээлчийн дотор ертөнцийн гадагш илэрхийлэл."
                    </h1>
                    <h1 className="mb-8 text-xl text-slate-700 font-extrabold drop-shadow-xl">Edward Hopper (1882 - 1967)</h1>
                    <p className="mb-10 font-light text-sm text-gray-600 w-[100%]">
                    "Уран зураачдын таталт бүр нь утга агуулах бүтээлүүд дан ганц юмс үзэгдэл бус, харин оюун бодол, цаг хугацаа, орон зайн хязгаараас халин урсах сүнслэг байдал буюу дурсамжийн цоморлог зэрэг хүний сэтгэлийг хөглөж оюуныг ундаална. Хүний сэтгэлийн гүн хавцлаас булгилан гарах мэдрэмжийг дамжуулах нь уран зохиолын үгийн сан үл хязгаарлагдах зах хязгааргүй өнгөний хослол юм."
                    </p>
                    <div className="space-x-4">
                        <button className="text-white bg-violet-600 p-4 rounded-3xl hover:bg-transparent hover:text-violet-800 transition-colors drop-shadow-xl duration-500" type="button">
                            <span className="font-extrabold">БҮТЭЭЛ ҮЗЭХ</span>
                        </button>
                        <button className="text-white bg-pink-500 p-4 rounded-3xl drop-shadow-xl hover:bg-transparent hover:text-pink-500 transition-colors duration-500" type="button">
                    <span className="font-extrabold">ЗАХИАЛАХ</span>
                </button>
                    </div>
                </div>

            </div>
            <div className="flex-1 translate-x-0 md:translate-x-[-100px] md:order-2 order-1">
                <Lottie 
                    animationData={colors}
                    className="w-[100%]"
                    loop={true}
                />
            </div>
        </div>
    );
};

export default Home;