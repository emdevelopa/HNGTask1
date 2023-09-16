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
  const [movieDetailsCrew, setMovieDetailsCrew] = useState([])
  const [movieDetailsDirectors, setMovieDetailsDirectors] = useState([])
  const [stars, setStars] = useState([])
  const [mostWatch,setMostWatch] = useState({})

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
  
  }

  useEffect(() => {
    // Fetch movie details when getMovieid changes
    setGetMovieid(parseInt(getParameterByName("id")));
  }, []); // Include getMovieid in the dependency array

  useEffect(() => {
    if (!isNaN(getMovieid)) {
      fetchMovieDetails(getMovieid);
      fetchMovieDetailsForcrew(getMovieid)
    }
    fetchForMost()
  }, [getMovieid]); // Fetch data when getMovieid changes

  const fetchForMost = () => {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
    fetch(apiUrl).then((response) => {
      if (!response.ok) {
        throw new Error("Network Response was not ok");
      }
      return response.json()
    }).then((data) => {
    
      if (Array.isArray(data.results)) {
        const mostWatch = data.results.slice(0,3)
        
        setMostWatch(mostWatch)
        
      } else {
        console.log("movieDetails is not an array or is empty");
      }
    }).catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      // setLoading(false); // Set loading to false on error
    });
  }

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
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        setLoading(false); // Set loading to false on error
      });
  };

  const fetchMovieDetailsForcrew = (movieId) => {
    const intMovieId = parseInt(movieId);
    const apiUrl = `https://api.themoviedb.org/3/movie/${intMovieId}/credits?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Update the movieDetails state with the fetched data

        const crewdata = data.crew;
        const cast = data.cast;
        const starringActors = cast.filter(actor => actor.order <= 5);

        const writers = crewdata.filter(member => member.job === 'Writer' || member.job === 'Screenplay' || member.known_for_department === 'Writing');
        const directors = crewdata.filter(member => member.job === 'Director');

        setStars(starringActors)
        setMovieDetailsDirectors(directors)
        setMovieDetailsCrew(writers);
        // setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        // setLoading(false); // Set loading to false on error
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
    return <div className="flex justify-center items-center min-h-screen">
    <div className="loader ease-linear rounded-full border-8 border-t-8 border-[#BE123C] h-24 w-24"></div>
  </div>
  
  }

  function redirectTo(url) {
    window.location.href = url;
  }

  const writersNamesToPass = movieDetailsCrew.map(item => item.name)
  const concatenatedNames = writersNamesToPass.join(', ')

  const directorNamesToPass = movieDetailsDirectors.map(item => item.name)
  const directorConcatenatedNames = directorNamesToPass.join(', ')

  const starsNamesToPass = stars.map(item => item.name)
  const starsConcatenatedNames = starsNamesToPass.join(', ')


  if (movieDetails?.title && getMovieid) {
    if (!isNaN(getMovieid && results === `http://localhost:3000/more_details#title=${movieDetails?.title}#id=${getMovieid}`)) {
      // Render movie details once data is loaded and getMovieid is a valid number
      return (
        <>
          <Interface title={movieDetails?.title} link={results} id={getMovieid} backdrop_path={movieDetails?.backdrop_path} poster_path={movieDetails?.poster_path} year={movieDetails?.release_date.substring(0, 4)} overview={movieDetails?.overview} runtime={movieDetails?.runtime} vote_average={movieDetails?.vote_average} genres={movieDetails?.genres?.map(genre => (
            <p key={genre.id} className="border border-[#F8E7EB] rounded-2xl px-3 py-0.5">
              {genre.name}
            </p>
          ))} writer={concatenatedNames} director={directorConcatenatedNames} stars={starsConcatenatedNames} mostWatch={mostWatch}/>
        </>
      )
    }
  }
}
