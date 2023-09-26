import Image from "next/image"
import { useState } from "react"

export default function Carousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {

        setCurrentSlide((prevSlide) => {
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        })
    }
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => {
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        })
    }
    return (
        <>
            <main className="bg-red-900 h-[30em] w-full overflow-hidden">
                <div className="flex gap-4 transition-transform duration-500 ease-in-out" style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}>
                    {images.map((image, index) => (
                        <div key={index} className="bg-blue-400 p-4 w-full flex flex-shrink-0 items-center" style={{ flexBasis: "100%" }}>
                            <Image src={'/' + image.url} alt={'slider' + index} width={500} height={200} />
                        </div>
                    ))}

                </div>
                <button onClick={nextSlide}>Next</button>
                <button onClick={prevSlide}>prev</button>
            </main>
        </>
    )
}