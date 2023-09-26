import Image from "next/image";
import Carousel from "./carousel";

const images = [
    {
        'url': 'nature4.png'
    }, {
        'url': 'nature2.png'
    },
    {
        'url': 'nature3.png'
    },
    {
        'url': 'nature1.png'
    }
]

export default function Homepage() {
    return (
        <>
            <section className="p-4 flex">
                <div className="flex gap-4 flex-col w-full rounded p-2 items-center">
                    <div className="flex gap-2 shadow-[0px_0px_3px_0px_grey] rounded p-2">
                        <Image className="rounded" src='/nature1.png' alt="natureimg" height={0} width={250} />
                        <Image className="rounded" src='/nature3.png' alt="natureimg" height={0} width={250} />

                    </div>
                    <div className="flex gap-2 shadow-[0px_0px_3px_0px_grey] rounded p-2">
                        <Image className="rounded" src='/nature4.png' alt="natureimg" height={0} width={250} />
                        <Image className="rounded" src='/nature2.png' alt="natureimg" height={0} width={250} />

                    </div>
                </div>
                <div className="w-full">
                    <Carousel images={images} />
                </div>
            </section>
        </>
    )
}
