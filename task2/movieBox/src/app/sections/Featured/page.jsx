"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa";

export default function Featured() {
    const [movies, setMovies] = useState([]);
    const apiKey = '2d02ad9838a96f971164752877c1f7ec';

    useEffect(() => {
        const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Update the state with the fetched data
                setMovies(data.results);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, [apiKey]);
    return (
        <>
            <section className="p-20 max-md-[650px]:p-5">
                <div className="flex justify-between">
                    <h1 className="font-bold text-[36px] max-md-[400px]:text-[26px]">Featured Movie</h1>
                    <div className="flex text-[#BE123C] items-center gap-x-4"><p>See more </p> <FaChevronRight /></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <div className="flex flex-col gap-2">
                                <div className='bg-red-600 h-[25em] p-6 flex justify-between bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.poster_path})` }}>
                                    <p className='bg-[#f3f4f680] rounded-[2em] w-[50%] h-[2em] flex justify-center items-center px-2'>Movie</p>
                                    <div className='bg-[#f3f4f680] rounded-[50%] h-[2em] w-[2em] flex justify-center'>
                                        <Image src="Heart.svg" alt="searchIcon" height={0} width={20} style={{ width: "20px", height: "auto" }} />
                                    </div>
                                </div>
                                <p>{movie.release_date}</p>
                                <h2 className='font-bold text-[24px]'>{movie.title}</h2>
                                <div className="flex gap-8 justify-between">
                                    <div className="flex gap-2 items-center">
                                        <Image src="IMBD.svg" alt="imdb" width={40} height={40} style={{ width: "auto", height: "auto" }} />
                                        <p>86.0 / 100</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <Image src="tomato.svg" alt="tomato" width={20} height={50} style={{ width: "auto", height: "auto" }} />
                                        <p>97%</p>
                                    </div>
                                </div>
                                <p className='font-bold'>Action, Adventure, Horror</p>
                            </div>
                        </div>
                    ))}
                </div>



            </section>
        </>
    )
}