import Image from "next/image";
import Carousel from "./carousel";

const images = [
    {
        'url': 'happy.png'
    }, {
        'url': 'happy2.png'
    },
    {
        'url': 'happy3.png'
    },

]

export default function Homepage() {
    return (
        <>
            <section className="p-4 flex justify-evenly">
                <div className="flex gap-4 flex-col rounded p-2 items-center">
                    <div className="flex gap-2 shadow-[0px_0px_3px_0px_grey] rounded p-2">
                        <Image className="rounded" src='/nature1.png' alt="natureimg" height={0} width={250} />
                        <Image className="rounded" src='/nature3.png' alt="natureimg" height={0} width={250} />

                    </div>
                    <div className="flex gap-2 shadow-[0px_0px_3px_0px_grey] rounded p-2">
                        <Image className="rounded" src='/nature4.png' alt="natureimg" height={0} width={250} />
                        <Image className="rounded" src='/nature2.png' alt="natureimg" height={0} width={250} />

                    </div>
                </div>
                <div className="w-[40%] flex flex-col gap-4">
                    <h1 className="text-[28px] uppercase font-bold">
                    Create Lasting Memories, All in One Secure Space.
                    </h1>
                    <p>Effortlessly store, relive, and share your life's most cherished moments with ease.</p>
                    <div><button className="px-4 py-2 bg-sky-600 text-white rounded">START STORING</button></div>
                    <Carousel images={images}/>
                </div>
            </section>
        </>
    )
}
