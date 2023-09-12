"use client"
import Image from "next/image";
import { useState, React, useEffect } from "react";
import { FaTimes } from 'react-icons/fa';
import Navbar from "./navbar";

export default function Header() {

  const [movieData, setMovieData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const apiKey = '2d02ad9838a96f971164752877c1f7ec';
  const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

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
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % movieData.length);
  };

  useEffect(() => {
    // Auto-slide every 3 seconds
    const interval = setInterval(nextSlide, 8000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, [currentSlide, movieData,nextSlide]);

  return (
    <div>
      {movieData.length > 0 ? (
        movieData.map((movie, movieIndex) => (
          <main
            key={movieIndex}
            className={`bg-[#000000d1] text-white h-[90vh] bg-cover bg-center ${movieIndex === currentSlide ? '' : 'hidden'
              }`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            }}
          >
            <div className="relative bg-white">
              <div className="relative">
                {/* <img src="blue.jpg" className="absolute w-full" /> */}
                <div className="bg-black opacity-80 h-[90vh] flex items-center justify-end absolute w-full">

                </div>
                <div className="flex absolute w-full justify-end items-center h-[90vh] px-8 max-md-[650px]:justify-center max-md-[650px]:items-end">
                  <ul className="max-md-[650px]:flex max-md-[650px]:justify-between max-md-[650px]:mb-8 max-md-[650px]:w-[50%]">
                    {movieData.map((_, index) => (  
                      <li
                        key={index}
                        className={`text-white text-[24px] ${index === currentSlide ? 'font-bold text-[26px]' : 'opacity-70'
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
                      <Image src="IMBD.svg" alt="imdb" width={40} height={40}/>
                      <p>86.0 / 100</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image src="tomato.svg" alt="tomato" width={20} height={50}/>
                      <p>97%</p>
                    </div>

                  </div>
                  <h1 className="md-[650px]:w-[60%] font-semibold max-md-[650px]:text-[12px]">{movie.overview}</h1>
                </div>
              </div>
            </div>
          
          </main>
          
        ))
      ) : (
        <div className="text-[#BE123C]">
          Failed to fetch movies. Please try refreshing the page.
        </div>
      )}
    </div>
  );
}
