import Image from "next/image";
import { useState, useEffect } from "react";

export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add auto-slide functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000); // Change the interval duration (in milliseconds) as needed

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <main className=" w-[18em] overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-shrink-0 items-center h-[12em] rounded"
              style={{ flexBasis: "100%",background:`url(${image.url})`,backgroundRepeat:'no-repeat', backgroundSize:'contain',backgroundSize:'18em 12em'}}
            >
              {/* <Image
                src={"/" + image.url}
                alt={"slider" + index}
                width={500}
                height={200}
              /> */}
            </div>
          ))}
        </div>
        
      </main>
      {/* <button onClick={nextSlide}>Next</button>
        <button onClick={prevSlide}>Prev</button> */}
    </>
  );
}
