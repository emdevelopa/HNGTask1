"use client";
import React, { useState, useEffect } from "react";
import Interface from "./interface";


export default function MoreDetails() {
  const [getMovieid, setGetMovieid] = useState(() => {
    // Initialize getMovieid with a valid integer or handle the default case
    const initialId = getParameterByName("id");
    return isNaN(initialId) ? null : parseInt(initialId);
  });
  const [movieDetails, setMovieDetails] = useState({});
  const [loading, setLoading] = useState(true); // Added loading state
  const apiKey = '2d02ad9838a96f971164752877c1f7ec';


  function getParameterByName(name) {
    if (typeof window !== 'undefined') {
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)");
      var results = regex.exec(window.location.href);
      if (!results || !results[2]) return null;
      return decodeURIComponent(results[2].replace(/\+/g, " "));
    } else {

      return null;
    }
  }

  if (typeof window !== 'undefined') {
    var results = window.location.href;
    console.log(results);
  }

  useEffect(() => {
    // Fetch movie details when getMovieid changes
    setGetMovieid(parseInt(getParameterByName("id")));
  }, []); // Include getMovieid in the dependency array

  useEffect(() => {
    if (!isNaN(getMovieid)) {
      fetchMovieDetails(getMovieid);
    }
  }, [getMovieid]); // Fetch data when getMovieid changes

  const fetchMovieDetails = (movieId) => {
    const intMovieId = parseInt(movieId);
    const apiUrl = `https://api.themoviedb.org/3/movie/${intMovieId}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the movieDetails state with the fetched data
        setMovieDetails(data);
        console.log(data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false); // Set loading to false on error
      });
  };
  setTimeout(() => {
    setLoading(false)
  }, 3000);
  if (results === "http://localhost:3000/more_details") {
    // console.log("redirecting");
    redirectTo('/');
  }
  if (loading) {
    // Render a loading state while fetching data
    return <div>Loading...</div>;
  }

  function redirectTo(url) {
    window.location.href = url;
  }


  if (movieDetails?.title && getMovieid) {
    if (!isNaN(getMovieid && results === `http://localhost:3000/more_details#title=${movieDetails?.title}#id=${getMovieid}`)) {
      // Render movie details once data is loaded and getMovieid is a valid number
      return (
        <>
          <Interface title={movieDetails?.title} link={results} id={getMovieid} backdrop_path={movieDetails?.backdrop_path} poster_path={movieDetails?.poster_path} year={movieDetails?.release_date.substring(0, 4)} overview={movieDetails?.overview} runtime={movieDetails?.runtime} genres={movieDetails?.genres?.map(genre => (
            <p key={genre.id} className="border border-[#F8E7EB] rounded-2xl px-3 py-0.5">
              {genre.name}
            </p>
          ))} />
        </>
      )
    }
  }
}
