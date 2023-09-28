"use client"
import Image from "next/image";
import { useState, React, useEffect, useCallback } from "react";

export default function Header() {

  const [movieData, setMovieData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const apiKey = '2d02ad9838a96f971164752877c1f7ec';
  const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
  console.log('hello');

  useEffect(() => {
    // Fetch trending movies from TMDB API using environment variable
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setMovieData(data.results.slice(0, 5)); // Only take the first 5 movies
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };
    

    fetchTrendingMovies();
  }, [apiUrl]);

  // Function to advance to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % movieData.length);
  }, [movieData]);

  useEffect(() => {
    // Auto-slide every 3 seconds
    const interval = setInterval(nextSlide, 8000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentSlide, movieData, nextSlide]);

  return (
    <div>
      {movieData.length > 0 ? (
        movieData.map((movie, movieIndex) => (
          <main
            key={movieIndex}
            className={`bg-[#000000d1] text-white h-[100vh] bg-cover bg-center ${movieIndex === currentSlide ? '' : 'hidden'
              }`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            }}
          >
            <div className="relative bg-white">
              <div className="relative">
                <div className="bg-black opacity-80 h-[100vh] flex items-center justify-end absolute w-full">

                </div>
                <div className="flex absolute w-full justify-end items-center h-[90vh] px-8 max-md-[650px]:justify-center max-md-[650px]:items-end">
                  <ul className="max-md-[650px]:flex max-md-[650px]:justify-between max-md-[650px]:mb-2 max-md-[650px]:w-[50%]">
                    {movieData.map((_, index) => (
                      <li
                        key={index}
                        className={`text-white text-[18px] flex justify-end ${index === currentSlide ? 'font-bold text-[26px]' : 'opacity-10'
                          }`}
                      >
                        {index === currentSlide ? `-${index + 1}` : index + 1}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="max-md-[650px]:px-4 md-[650px]:px-16 absolute w-full h-[90vh] flex">
                <div className=" min-w-1/2 flex flex-col justify-center gap-6">
                  <h1 className="text-[48px] font-bold max-md-[650px]:text-[38px]">{movie.title}</h1>
                  <div className="flex gap-8">
                    <div className="flex gap-2 items-center">
                      <Image src="IMBD.svg" alt="imdb" width={40} height={40} style={{ width: "auto", height: "auto" }} />
                      <p>86.0 / 100</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image src="tomato.svg" alt="tomato" width={20} height={50} style={{ width: "auto", height: "auto" }} />
                      <p>{Math.floor(movie.vote_average * 10)}%</p>
                    </div>

                  </div>
                  <h1 className="md-[650px]:w-[60%] font-semibold max-md-[650px]:text-[12px]">{movie.overview}</h1>
                  <div>
                    <div className="flex px-[6px] w-[20%] rounded items-center py-[5px] max-md-[650px]:w-[60%] text-[20px] font-bold gap-x-2 bg-[#BE123C]"> <div><Image src="Play.svg" alt="play" width={60} height={80} style={{ width: "3em", height: "auto" }} /></div> Watch Trailer</div>
                  </div>
                </div>
              </div>
            </div>

          </main>

        ))
      ) : (
        <div className="flex items-center justify-center  h-screen">
        <div className="text-[#BE123C] text-4xl font-bold">
          <svg
            className="animate-spin h-10 w-10 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.86 3.184 8.009l2.472-2.718zm11.62-8.01l2.472 2.718C22.865 17.86 24 15.042 24 12h-4a7.962 7.962 0 01-2.184 5.291z"
            ></path>
          </svg>
        </div>
      </div>
      
      
      )}
    </div>
  );
}
