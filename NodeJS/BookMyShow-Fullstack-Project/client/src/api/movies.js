import { axiosInstance } from './index';

// get all movie
export const getAllMovies = async() => {
    try {
        const response = await axiosInstance.get("api/movies/get-all-movies");
        return response.data;
    } catch(err) {
        console.error(err);
    }
}

// Add movie
export const addMovie = async(values) => {
    try {
        const response = await axiosInstance.post("api/movies/add-movie", values);
        return response.data;
    } catch(err) {
        console.error(err);
    }
}

// update movie
export const updateMovie = async(payload) => {
    try {
        const response = await axiosInstance.put("api/movies/update-movie", payload);
        return response.data;
    } catch(err) {
        console.error(err);
    }
}

// delete movie
export const deleteMovie = async(payload) => {
    try {
        const response = await axiosInstance.put("api/movies/delete-movie", payload);
        return response.data;
    } catch(err) {
        console.error(err);
    }
}