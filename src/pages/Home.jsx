import image from '../assets/images/img.png';
import { getMovieList, searchMovie } from '../API/api';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {createSlug, Limit} from '../components/slug';
// import {Limit} from '../components/limitText';

export default function home(){

    const imgUrl = import.meta.env.VITE_API_IMGURL;
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
   
    // menampilkan data api
    useEffect(() => {
        getMovieList().then((result) => {
            setPopularMovies(result)
        })
    }, []);

    // search movie
    const search = async (q) => {
        if(q.length > 3){
            const query = await searchMovie(q)
           setPopularMovies(query.results)
        } else {
            const movieData = await getMovieList();
            setPopularMovies(movieData); 
        }
    }


   function PopularMovieList() {
        return popularMovies.map((movie, i) => {
            return(
                <div className="col-6 col-sm-6 col-md-4 col-lg-3" key={movie.id}>
                    <Link to={`/movie/${createSlug(movie.title)}`}>
                        <div className="movie-card d-flex flex-column mb-3 shadow">
                            <h1 className="movie-title">{Limit(movie.title, 23)}</h1>
                            <div className="movie-img"><img src={`${imgUrl}${movie.poster_path}`} alt="poster" /></div>
                            <div className="movie-date mt-auto">{movie.release_date}</div>
                            <div className="movie-rating"><i className="bi bi-star-fill me-1"></i>{movie.vote_average}</div>
                        </div>
                    </Link>
                </div>
            )
        })
   }

    return(
        <div className="landing-page-movie">
            <div className="row text-center justify-content-center">
                <h1 className="mb-3 head-title">MovieMania</h1>
                <input type="text" className="form-control w-50" onChange={({target}) => search(target.value)} placeholder="Cari movie..." />
            </div>

            <div className="row movie-wrap">
                <PopularMovieList />
            </div>
        </div>
    );
};