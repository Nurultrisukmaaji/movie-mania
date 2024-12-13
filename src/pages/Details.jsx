import { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getMovieList, getMovieDetail, searchMovie} from '../API/api';
import {createSlug} from '../components/slug';

export default function details(){

    const {name} = useParams(); // Ambil slug dari URL
    const [movie, setMovie] = useState(null); // State untuk detail film
    const [loading, setLoading] = useState(true); // State untuk loading

    useEffect (() => {
        const fetchMovieDetail = async () => {
        setLoading(true);
            try {
                // Ambil semua film dari daftar populer
                const movies = await getMovieList();

                //   cari film berdasarkan slug
                const matchedMovie = movies.find((movie) => createSlug(movie.title) === name);

                if (matchedMovie) {
                  // Jika ditemukan, ambil detail berdasarkan ID
                    const movieDetail = await getMovieDetail(matchedMovie.id);
                    setMovie(movieDetail);
                } else {
                    // Jika tidak ditemukan, coba cari menggunakan API pencarian
                    const searchResults = await searchMovie(name.replace(/-/g, ' '));


                    if (searchResults.results && searchResults.results.length > 0) {
                        // Ambil film pertama dari hasil pencarian
                        const movieDetails = await getMovieDetail(searchResults.results[0].id);
                        setMovie(movieDetails);
                    } else {
                        throw new Error('Movie not found');
                    }
                }
            } catch (error) {
              console.error('Failed to fetch movie details:', error);
              setMovie(null);
            } finally {
                setLoading(false); // Set loading ke false setelah selesai
              }
          };
      
          fetchMovieDetail();
    }, [name]);

    if (loading) return <p>Loading...</p>;
    if (!movie) return <p>Movie not found bro...</p>;

    return(
        <div className="details-movie">
            <h1 className="title">{movie.title}</h1>
            <p className="date">{movie.release_date}</p>
            <div className='image-detail-movie'></div>
        </div>
    )
}