import axios from "axios";
import {useParams} from "react-router-dom";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_API_URL;


export const getMovieList = async () => {
    const movie = await axios.get(
        `${baseUrl}/movie/popular?&page=1&api_key=${apiKey}`
        )
        return movie.data.results; 

    // try {
    //     const response = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    //     console.log({ movieList: response.data }); // Cetak data response
    //     return response.data; // Kembalikan data jika diperlukan
    //   } catch (error) {
    //     console.error('Error fetching movie list:', error.message);
    //     throw error; // Lempar error untuk penanganan lebih lanjut
    //   }
};

export const getMovieDetail = async (id) => {
    const movie = await axios.get(
        `${baseUrl}/movie/${id}?&page=1&api_key=${apiKey}`
        )
        return movie.data;
        // console.log({movie: movie});

};

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`);
    return search.data
}