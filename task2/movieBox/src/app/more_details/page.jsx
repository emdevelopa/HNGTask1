

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
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&#]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(window.location.href);
    if (!results || !results[2]) return null;
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  // ...

  useEffect(() => {
    // Fetch movie details when getMovieid changes
    setGetMovieid(parseInt(getParameterByName("id")))
    if (!isNaN(getMovieid)) {
      fetchMovieDetails(getMovieid);
    }
  },[]); // Include getMovieid in the dependency array

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
        setLoading(!loading); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false); // Set loading to false on error
      });
  };
  
  // if (window.location.href === "http://localhost:3000/more_details") {
  // return <p className="text-red-500">unable to fetch</p>
  // }

  if (window.location.href === "https://jovial-souffle-9501e4.netlify.app/more_details") {
    return <p>unable to fetch</p>
    }

  if (loading) {
    // Render a loading state while fetching data
    return <div>Loading...{  console.log(window.location.href)}</div>
  }


  if (!isNaN(getMovieid)) {
    // Render movie details once data is loaded and getMovieid is a valid number
    return (
      <>
        <h1>{movieDetails?.adult.toString()}</h1>
        <h1>good: {typeof getMovieid}</h1>
        <Interface adult={movieDetails?.adult.toString()} title={movieDetails?.title}/>
      </>
    );
  } else {
    // Handle the case where getMovieid is not a valid number
    return <div>Invalid movie ID</div>;
  }
}
