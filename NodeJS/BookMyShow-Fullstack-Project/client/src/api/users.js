import { axiosInstance } from "./index";

// Register a new user
export const RegisterUser = async(value) => {
    try {
        const response = await axiosInstance.post("api/users/register", value);
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

// Login a user
export const LoginUser = async(value) => {
    try {
        const response = await axiosInstance.post("api/users/login", value);
        return response.data;
    } catch(err) {
        console.log(err);
    }
}

// get current user
export const GetCurrentUser = async () => {
    try {
        const response = await axiosInstance.get("api/users/current");
        return response.data;
    } catch(err) {
        console.log(err);
    }
}