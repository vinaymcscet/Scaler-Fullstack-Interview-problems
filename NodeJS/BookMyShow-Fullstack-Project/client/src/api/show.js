import { axiosInstance } from "./index";

export const addShow = async(payload) => {
    try {
        const response = await axiosInstance.post("/api/shows/addShow", payload);
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const updateShow = async(payload) => {
    try {
        const response = await axiosInstance.patch("/api/shows/updateShow", payload);
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const deleteShow = async(payload) => {
    try {
        const response = await axiosInstance.delete(`/api/shows/deleteShow/${payload.showId}`);
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const getShowsByTheatre = async(payload) => {
    try {
        const response = await axiosInstance.post("/api/shows/getAllShowsByTheatre", payload);
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const getAllTheatersByMovie = async(payload) => {
    try {
        const response = await axiosInstance.post("/api/shows/getAllTheatersByMovie", payload);
        return response.data;
    } catch(err) {
        return err.message;
    }
}

export const getShowById = async(payload) => {
    try {
        const response = await axiosInstance.post("/api/shows/getShowById", payload);
        return response.data;
    } catch(err) {
        return err.message;
    }
}